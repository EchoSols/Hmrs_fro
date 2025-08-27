# HR Pro - Modern HR Management System Frontend

A comprehensive, secure, and modern HR Management System built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-role Dashboard**: Admin, HR, Manager, Employee, Trainer, and Auditor interfaces
- **Comprehensive HR Modules**: Employee management, payroll, performance, training, and more
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion
- **Internationalization**: Support for English, French, and Kinyarwanda
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Real-time Updates**: Live data synchronization and notifications
- **Advanced Security**: XSS protection, CSRF tokens, input validation, and more

## 🛡️ Security Features

### Input Validation & Sanitization
- **XSS Protection**: DOMPurify integration for HTML sanitization
- **Input Validation**: Comprehensive validation for all user inputs
- **File Upload Security**: Type and size validation with malware scanning
- **SQL Injection Prevention**: Parameterized queries and input sanitization

### Authentication & Authorization
- **Secure Password Policy**: 12+ characters with complexity requirements
- **JWT Token Management**: Secure token storage and validation
- **CSRF Protection**: Cross-Site Request Forgery prevention
- **Session Security**: Secure cookie management with httpOnly and sameSite

### Security Headers
- **Content Security Policy (CSP)**: Restricts resource loading
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Additional XSS protection
- **Strict-Transport-Security**: Enforces HTTPS usage

### Rate Limiting & Monitoring
- **API Rate Limiting**: Prevents abuse and DDoS attacks
- **Security Event Logging**: Comprehensive audit trail
- **Real-time Monitoring**: Security event tracking and alerting

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7 with optimized bundling
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: React Context API
- **Routing**: React Router DOM v6
- **Internationalization**: i18next
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest with React Testing Library
- **Security**: DOMPurify, js-cookie, custom security utilities

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd hmrs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking

# Security
npm run security:audit    # Security audit
npm run security:fix      # Fix security issues
npm run security:check    # Full security check

# Testing
npm run test             # Run tests
npm run test:coverage    # Run tests with coverage
```

## 🔐 Security Configuration

### Environment Variables
```bash
# Security
VITE_SECURE_COOKIES=true
VITE_CSRF_PROTECTION=true
VITE_RATE_LIMITING=true
VITE_CONTENT_SECURITY_POLICY=true

# API
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_TIMEOUT=30000

# Authentication
VITE_JWT_SECRET=your-secret-key
VITE_SESSION_TIMEOUT=1800000
```

### Security Headers
The application automatically sets security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test -- --watch
```

### Test Structure
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: Component interaction testing
- **Security Tests**: Security utility validation
- **E2E Tests**: End-to-end user flow testing

## 🚀 Deployment

### Production Build
```bash
# Create optimized production build
npm run build

# The build output will be in the `dist` folder
```

### Security Checklist for Production
- [ ] Enable HTTPS with valid SSL certificates
- [ ] Configure Content Security Policy
- [ ] Set up proper CORS policies
- [ ] Enable rate limiting
- [ ] Configure security headers
- [ ] Set up monitoring and logging
- [ ] Regular security audits
- [ ] Keep dependencies updated

### Deployment Platforms
- **Vercel**: Optimized for React applications
- **Netlify**: Great for static sites
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Docker**: Containerized deployment

## 📚 API Documentation

### Authentication Endpoints
```typescript
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

### Employee Management
```typescript
GET    /api/employees
POST   /api/employees
GET    /api/employees/:id
PUT    /api/employees/:id
DELETE /api/employees/:id
```

### Security Headers in API Calls
All API calls automatically include:
- CSRF token validation
- Rate limiting checks
- Input sanitization
- Secure cookie handling

## 🔍 Monitoring & Logging

### Security Events Logged
- User authentication attempts
- Data access and modifications
- Admin actions and changes
- Security violations
- Rate limit exceeded events

### Log Levels
- **INFO**: Normal operations
- **WARN**: Potential security issues
- **ERROR**: Security violations
- **AUDIT**: Compliance and audit events

## 🤝 Contributing

### Security Guidelines
1. **Never commit sensitive data** (passwords, API keys, etc.)
2. **Validate all user inputs** before processing
3. **Use security utilities** for sanitization and validation
4. **Follow OWASP guidelines** for web application security
5. **Report security issues** immediately to the security team

### Code Standards
- Follow TypeScript strict mode
- Use ESLint rules for code quality
- Write comprehensive tests
- Document security considerations
- Review security implications of changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Security Issues
For security-related issues, please contact:
- **Security Team**: security@yourdomain.com
- **Emergency**: +1-XXX-XXX-XXXX

### General Support
- **Documentation**: [docs.yourdomain.com](https://docs.yourdomain.com)
- **Issues**: [GitHub Issues](https://github.com/your-org/hmrs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/hmrs/discussions)

## 🔄 Updates & Maintenance

### Regular Maintenance Tasks
- **Weekly**: Dependency updates and security patches
- **Monthly**: Security audit and penetration testing
- **Quarterly**: Comprehensive security review
- **Annually**: Full security assessment and compliance review

### Security Updates
- Monitor security advisories for all dependencies
- Apply security patches within 24 hours of release
- Test security updates in staging environment
- Deploy security updates with minimal downtime

---

**⚠️ Security Notice**: This application handles sensitive HR data. Always follow security best practices and never expose production credentials or sensitive information in code or documentation.

