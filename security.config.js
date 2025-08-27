// Security Configuration for HRMS Frontend
// This file contains security policies and configurations

const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:"],
    'connect-src': ["'self'", "https:"],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': true
  },

  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false
  },

  // Security headers
  securityHeaders: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  },

  // Input validation rules
  inputValidation: {
    maxLength: {
      username: 50,
      email: 254,
      password: 128,
      firstName: 50,
      lastName: 50,
      description: 1000
    },
    allowedCharacters: {
      username: /^[a-zA-Z0-9_-]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+]?[1-9][\d]{0,15}$/
    }
  },

  // Password requirements
  passwordPolicy: {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
    maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
  },

  // Session security
  session: {
    maxAge: 30 * 60 * 1000, // 30 minutes
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  },

  // API security
  api: {
    maxRequestSize: '10mb',
    allowedOrigins: ['https://yourdomain.com'],
    corsOptions: {
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
  },

  // File upload security
  fileUpload: {
    allowedTypes: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
    maxSize: 10 * 1024 * 1024, // 10MB
    scanForMalware: true
  },

  // Audit logging
  audit: {
    enabled: true,
    logLevel: 'info',
    events: ['login', 'logout', 'data_access', 'data_modification', 'admin_actions']
  }
};

export default securityConfig;
