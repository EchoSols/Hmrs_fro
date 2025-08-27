import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { 
  validateEmail, 
  validateUsername, 
  validatePhone, 
  validateInputLength,
  sanitizeText,
  preventInjection,
  logSecurityEvent 
} from '../../lib/security';

interface SecureInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  validationType?: 'email' | 'username' | 'phone' | 'text' | 'password';
  showValidation?: boolean;
  maxLength?: number;
  required?: boolean;
  onValidationChange?: (isValid: boolean, errors: string[]) => void;
  securityLevel?: 'low' | 'medium' | 'high';
}

export const SecureInput = forwardRef<HTMLInputElement, SecureInputProps>(
  ({ 
    label, 
    error, 
    validationType = 'text',
    showValidation = true,
    maxLength,
    required = false,
    onValidationChange,
    securityLevel = 'high',
    className = '',
    onChange,
    onBlur,
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Validation function
    const validateInput = (value: string): { isValid: boolean; errors: string[] } => {
      const errors: string[] = [];
      
      // Required field validation
      if (required && !value.trim()) {
        errors.push('This field is required');
      }
      
      // Length validation
      if (maxLength && value.length > maxLength) {
        errors.push(`Maximum length is ${maxLength} characters`);
      }
      
      // Type-specific validation
      switch (validationType) {
        case 'email':
          if (value && !validateEmail(value)) {
            errors.push('Please enter a valid email address');
          }
          break;
        case 'username':
          if (value && !validateUsername(value)) {
            errors.push('Username must be 3-50 characters and contain only letters, numbers, hyphens, and underscores');
          }
          break;
        case 'phone':
          if (value && !validatePhone(value)) {
            errors.push('Please enter a valid phone number');
          }
          break;
        case 'password':
          if (value && value.length < 8) {
            errors.push('Password must be at least 8 characters long');
          }
          break;
      }
      
      // Security validation for high security level
      if (securityLevel === 'high' && value) {
        // Check for potential injection attempts
        const sanitizedValue = preventInjection(value);
        if (sanitizedValue !== value) {
          errors.push('Input contains potentially unsafe characters');
          logSecurityEvent('injection_attempt_blocked', {
            inputType: validationType,
            originalValue: value.substring(0, 50),
            sanitizedValue: sanitizedValue.substring(0, 50)
          });
        }
      }
      
      return {
        isValid: errors.length === 0,
        errors
      };
    };

    // Handle input change with validation
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      // Sanitize input based on security level
      let sanitizedValue = value;
      if (securityLevel === 'high') {
        sanitizedValue = sanitizeText(value);
      } else if (securityLevel === 'medium') {
        sanitizedValue = preventInjection(value);
      }
      
      // Update input value
      setInputValue(sanitizedValue);
      
      // Validate input
      const validation = validateInput(sanitizedValue);
      setIsValid(validation.isValid);
      setValidationErrors(validation.errors);
      
      // Call parent onChange if provided
      if (onChange) {
        e.target.value = sanitizedValue;
        onChange(e);
      }
      
      // Call validation change callback
      if (onValidationChange) {
        onValidationChange(validation.isValid, validation.errors);
      }
      
      // Log security events for suspicious inputs
      if (validation.isValid === false && securityLevel === 'high') {
        logSecurityEvent('input_validation_failed', {
          inputType: validationType,
          value: value.substring(0, 50),
          errors: validation.errors
        });
      }
    };

    // Handle input blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      
      // Final validation on blur
      const validation = validateInput(inputValue);
      setIsValid(validation.isValid);
      setValidationErrors(validation.errors);
      
      if (onBlur) {
        onBlur(e);
      }
    };

    // Handle input focus
    const handleFocus = () => {
      setIsFocused(true);
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // Get input type based on validation type and password visibility
    const getInputType = () => {
      if (validationType === 'password') {
        return showPassword ? 'text' : 'password';
      }
      return props.type || 'text';
    };

    // Get validation icon
    const getValidationIcon = () => {
      if (!showValidation || !inputValue) return null;
      
      if (isValid) {
        return (
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      }
      
      return (
        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    };

    // Get character count
    const getCharacterCount = () => {
      if (!maxLength) return null;
      
      return (
        <span className={`text-xs ${inputValue.length > maxLength ? 'text-red-500' : 'text-gray-500'}`}>
          {inputValue.length}/{maxLength}
        </span>
      );
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref || inputRef}
            type={getInputType()}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`
              w-full px-3 py-2 border rounded-md shadow-sm
              ${isFocused ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'}
              ${!isValid ? 'border-red-500' : ''}
              ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-colors duration-200
              ${className}
            `}
            maxLength={maxLength}
            required={required}
            {...props}
          />
          
          {/* Validation Icon */}
          {showValidation && getValidationIcon() && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {getValidationIcon()}
            </div>
          )}
          
          {/* Password Toggle */}
          {validationType === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          )}
        </div>
        
        {/* Character Count */}
        {maxLength && (
          <div className="flex justify-end mt-1">
            {getCharacterCount()}
          </div>
        )}
        
        {/* Validation Errors */}
        {showValidation && validationErrors.length > 0 && (
          <div className="mt-2 space-y-1">
            {validationErrors.map((error, index) => (
              <p key={index} className="text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            ))}
          </div>
        )}
        
        {/* Custom Error */}
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {/* Security Level Indicator */}
        {securityLevel === 'high' && (
          <div className="mt-2 flex items-center text-xs text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            High Security: Input validation and sanitization enabled
          </div>
        )}
      </div>
    );
  }
);

SecureInput.displayName = 'SecureInput';

export default SecureInput;
