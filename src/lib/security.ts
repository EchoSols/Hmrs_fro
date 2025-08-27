import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';
import securityConfig from '../../security.config.js';

// Input sanitization and validation utilities
export class SecurityUtils {
  // Sanitize HTML content to prevent XSS attacks
  static sanitizeHtml(html: string): string {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      ALLOWED_ATTR: ['class', 'id'],
      FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button'],
      FORBID_ATTR: ['onclick', 'onload', 'onerror', 'onmouseover', 'onfocus', 'onblur']
    });
  }

  // Sanitize plain text to prevent injection attacks
  static sanitizeText(text: string): string {
    if (typeof text !== 'string') return '';
    
    return text
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  // Validate email format
  static validateEmail(email: string): boolean {
    const emailRegex = securityConfig.inputValidation.allowedCharacters.email;
    return emailRegex.test(email);
  }

  // Validate username format
  static validateUsername(username: string): boolean {
    const usernameRegex = securityConfig.inputValidation.allowedCharacters.username;
    return usernameRegex.test(username) && 
           username.length >= 3 && 
           username.length <= securityConfig.inputValidation.maxLength.username;
  }

  // Validate password strength
  static validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const policy = securityConfig.passwordPolicy;

    if (password.length < policy.minLength) {
      errors.push(`Password must be at least ${policy.minLength} characters long`);
    }

    if (policy.requireUppercase && !/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }

    if (policy.requireLowercase && !/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }

    if (policy.requireNumbers && !/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    if (policy.requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Validate phone number format
  static validatePhone(phone: string): boolean {
    const phoneRegex = securityConfig.inputValidation.allowedCharacters.phone;
    return phoneRegex.test(phone);
  }

  // Validate file upload
  static validateFile(file: File): { isValid: boolean; error?: string } {
    const maxSize = securityConfig.fileUpload.maxSize;
    const allowedTypes = securityConfig.fileUpload.allowedTypes;

    if (file.size > maxSize) {
      return {
        isValid: false,
        error: `File size must be less than ${Math.round(maxSize / (1024 * 1024))}MB`
      };
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      return {
        isValid: false,
        error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`
      };
    }

    return { isValid: true };
  }

  // Generate secure random token
  static generateSecureToken(length: number = 32): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    
    for (let i = 0; i < length; i++) {
      result += chars[randomArray[i] % chars.length];
    }
    
    return result;
  }

  // Hash password (in production, use bcrypt or similar)
  static async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Secure cookie management
  static setSecureCookie(name: string, value: string, options: any = {}): void {
    const secureOptions = {
      secure: true,
      sameSite: 'strict',
      expires: 7, // 7 days
      ...options
    };
    
    Cookies.set(name, value, secureOptions);
  }

  static getSecureCookie(name: string): string | undefined {
    return Cookies.get(name);
  }

  static removeSecureCookie(name: string): void {
    Cookies.remove(name);
  }

  // CSRF token management
  static generateCSRFToken(): string {
    const token = this.generateSecureToken(32);
    this.setSecureCookie('csrf_token', token, { expires: 1 }); // 1 day
    return token;
  }

  static validateCSRFToken(token: string): boolean {
    const storedToken = this.getSecureCookie('csrf_token');
    return storedToken === token;
  }

  // Rate limiting helper
  static checkRateLimit(key: string, limit: number = 100, windowMs: number = 15 * 60 * 1000): boolean {
    const now = Date.now();
    const requests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
    
    // Remove old requests outside the window
    const validRequests = requests.filter((timestamp: number) => now - timestamp < windowMs);
    
    if (validRequests.length >= limit) {
      return false; // Rate limit exceeded
    }
    
    // Add current request
    validRequests.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(validRequests));
    
    return true; // Request allowed
  }

  // Input length validation
  static validateInputLength(input: string, field: keyof typeof securityConfig.inputValidation.maxLength): boolean {
    const maxLength = securityConfig.inputValidation.maxLength[field];
    return input.length <= maxLength;
  }

  // Log security events
  static logSecurityEvent(event: string, details: any = {}): void {
    if (securityConfig.audit.enabled) {
      const logEntry = {
        timestamp: new Date().toISOString(),
        event,
        details,
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      console.log('[SECURITY]', logEntry);
      
      // In production, send to logging service
      // this.sendToLoggingService(logEntry);
    }
  }

  // Prevent common injection attacks
  static preventInjection(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:text\/html/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/expression\s*\(/gi, '');
  }

  // Validate and sanitize URL
  static validateAndSanitizeUrl(url: string): string | null {
    try {
      const urlObj = new URL(url);
      if (urlObj.protocol !== 'https:' && urlObj.protocol !== 'http:') {
        return null;
      }
      return urlObj.toString();
    } catch {
      return null;
    }
  }
}

// Export individual functions for convenience
export const sanitizeHtml = SecurityUtils.sanitizeHtml;
export const sanitizeText = SecurityUtils.sanitizeText;
export const validateEmail = SecurityUtils.validateEmail;
export const validateUsername = SecurityUtils.validateUsername;
export const validatePassword = SecurityUtils.validatePassword;
export const validatePhone = SecurityUtils.validatePhone;
export const validateFile = SecurityUtils.validateFile;
export const generateSecureToken = SecurityUtils.generateSecureToken;
export const hashPassword = SecurityUtils.hashPassword;
export const setSecureCookie = SecurityUtils.setSecureCookie;
export const getSecureCookie = SecurityUtils.getSecureCookie;
export const removeSecureCookie = SecurityUtils.removeSecureCookie;
export const generateCSRFToken = SecurityUtils.generateCSRFToken;
export const validateCSRFToken = SecurityUtils.validateCSRFToken;
export const checkRateLimit = SecurityUtils.checkRateLimit;
export const validateInputLength = SecurityUtils.validateInputLength;
export const logSecurityEvent = SecurityUtils.logSecurityEvent;
export const preventInjection = SecurityUtils.preventInjection;
export const validateAndSanitizeUrl = SecurityUtils.validateAndSanitizeUrl;
