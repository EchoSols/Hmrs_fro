import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { logSecurityEvent, checkRateLimit, generateCSRFToken } from '../../lib/security';

interface SecurityContextType {
  isSecure: boolean;
  securityLevel: 'low' | 'medium' | 'high';
  checkSecurity: () => boolean;
  logSecurityViolation: (event: string, details: any) => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

interface SecurityProviderProps {
  children: ReactNode;
  securityLevel?: 'low' | 'medium' | 'high';
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ 
  children, 
  securityLevel = 'high' 
}) => {
  const [isSecure, setIsSecure] = React.useState(true);

  // Initialize security features
  useEffect(() => {
    initializeSecurity();
  }, []);

  const initializeSecurity = () => {
    try {
      // Generate CSRF token on app initialization
      const csrfToken = generateCSRFToken();
      
      // Check if running in secure context (HTTPS)
      const isSecureContext = window.isSecureContext;
      
      // Check for security headers
      const hasSecurityHeaders = checkSecurityHeaders();
      
      // Log security initialization
      logSecurityEvent('security_initialized', {
        securityLevel,
        isSecureContext,
        hasSecurityHeaders,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });

      setIsSecure(isSecureContext && hasSecurityHeaders);
      
      // Set up security monitoring
      setupSecurityMonitoring();
      
    } catch (error) {
      console.error('Security initialization failed:', error);
      setIsSecure(false);
      logSecurityEvent('security_init_failed', { error: error.message });
    }
  };

  const checkSecurityHeaders = (): boolean => {
    // In a real application, you would check actual response headers
    // For now, we'll simulate this check
    return true;
  };

  const setupSecurityMonitoring = () => {
    // Monitor for potential security issues
    if (typeof window !== 'undefined') {
      // Monitor for XSS attempts
      const originalEval = window.eval;
      window.eval = function(code: string) {
        logSecurityEvent('eval_attempt_blocked', { code });
        throw new Error('eval() is disabled for security reasons');
      };

      // Monitor for innerHTML usage
      const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (originalInnerHTML) {
        Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function(value: string) {
            // Log innerHTML usage for monitoring
            logSecurityEvent('innerHTML_usage', { 
              element: this.tagName, 
              value: value.substring(0, 100) 
            });
            originalInnerHTML.set?.call(this, value);
          },
          get: originalInnerHTML.get
        });
      }

      // Monitor for script injection attempts
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.tagName === 'SCRIPT') {
                  logSecurityEvent('script_injection_attempt', {
                    src: element.getAttribute('src'),
                    content: element.textContent?.substring(0, 100)
                  });
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  };

  const checkSecurity = (): boolean => {
    // Perform security checks
    const checks = [
      window.isSecureContext,
      checkRateLimit('security_check', 10, 60000), // 10 checks per minute
      isSecure
    ];
    
    const allChecksPass = checks.every(check => check === true);
    
    if (!allChecksPass) {
      logSecurityEvent('security_check_failed', { checks });
    }
    
    return allChecksPass;
  };

  const logSecurityViolation = (event: string, details: any) => {
    logSecurityEvent(event, {
      ...details,
      securityLevel,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  };

  // Security warning for non-HTTPS connections
  useEffect(() => {
    if (!window.isSecureContext && window.location.protocol !== 'https:') {
      console.warn('⚠️ Security Warning: Application is running over HTTP. HTTPS is required for production use.');
      logSecurityEvent('non_https_warning', {
        protocol: window.location.protocol,
        host: window.location.host
      });
    }
  }, []);

  const contextValue: SecurityContextType = {
    isSecure,
    securityLevel,
    checkSecurity,
    logSecurityViolation
  };

  return (
    <SecurityContext.Provider value={contextValue}>
      {children}
      {!isSecure && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-2 text-center text-sm z-50">
          ⚠️ Security Warning: Application security features are not fully enabled
        </div>
      )}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export default SecurityProvider;
