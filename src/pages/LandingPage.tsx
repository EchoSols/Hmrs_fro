import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/contexts/ThemeContext'
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Zap,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Globe,
  Sun,
  Moon
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Modern Header Component
const ModernHeader = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-lg flex items-center justify-center mr-2 sm:mr-2.5">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-black rounded-sm"></div>
            </div>
            <span className="text-base sm:text-lg font-light text-white tracking-wide">HR Pro</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-xs font-medium tracking-wide">
              {t('landing.features')}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-xs font-medium tracking-wide">
              {t('landing.pricing')}
            </a>
            <a href="#reviews" className="text-gray-300 hover:text-white transition-colors text-xs font-medium tracking-wide">
              {t('landing.reviews')}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-xs font-medium tracking-wide">
              {t('landing.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1 sm:p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {theme === 'dark' ? <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            </button>

            {/* Language Switcher */}
            <div className="relative hidden sm:block">
              <button className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>EN</span>
              </button>
            </div>

            {/* Sign In */}
            <a
              href="/login"
              className="text-gray-300 hover:text-white transition-colors font-medium text-xs tracking-wide hidden sm:block"
            >
              {t('landing.signIn')}
            </a>

            {/* Get Started */}
            <a
              href="/login"
              className="bg-white text-black hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium text-xs transition-all duration-300"
            >
              {t('landing.getStarted')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

// Modern Hero Section
const ModernHeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center w-full max-w-6xl">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-center xl:text-left order-2 xl:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light text-white leading-tight tracking-wide">
              {t('landing.heroTitle')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              {t('landing.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start">
              <a
                href="/login"
                className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center group"
              >
                {t('landing.startFreeTrial')}
                <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border border-white text-white hover:bg-white hover:text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center group">
                <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-2 group-hover:scale-110 transition-transform" />
                {t('landing.watchDemo')}
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative flex justify-center xl:justify-end order-1 xl:order-2">
            <div className="bg-black border border-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 w-full max-w-xs sm:max-w-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium text-white">HR Dashboard</h3>
                <div className="flex space-x-1 sm:space-x-1.5">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gray-900 border border-gray-800 p-2 sm:p-3 rounded-lg">
                  <div className="text-lg sm:text-xl font-light text-white">1,234</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Employees</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-2 sm:p-3 rounded-lg">
                  <div className="text-lg sm:text-xl font-light text-white">85%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Performance</span>
                  <span className="text-xs font-medium text-white">92%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Modern Features Section
const ModernFeaturesSection = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Users,
      title: t('landing.feature1.title'),
      description: t('landing.feature1.description'),
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: t('landing.feature2.title'),
      description: t('landing.feature2.description'),
      color: 'green'
    },
    {
      icon: Shield,
      title: t('landing.feature3.title'),
      description: t('landing.feature3.description'),
      color: 'purple'
    },
    {
      icon: Clock,
      title: t('landing.feature4.title'),
      description: t('landing.feature4.description'),
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: t('landing.feature5.title'),
      description: t('landing.feature5.description'),
      color: 'red'
    },
    {
      icon: Zap,
      title: t('landing.feature6.title'),
      description: t('landing.feature6.description'),
      color: 'yellow'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
      yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('landing.featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('landing.featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", getColorClasses(feature.color))}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Modern Testimonials Section
const ModernTestimonialsSection = () => {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      content: t('landing.testimonial1.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "InnovateLab",
      content: t('landing.testimonial2.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      content: t('landing.testimonial3.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('landing.testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('landing.testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Access Section
const DemoAccessSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
            Try HR Pro Today
          </h2>
          <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven HR management. Access our demo with different user roles to see how HR Pro transforms your workplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Administrator</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Full system control, employee management, and comprehensive analytics.
            </p>
            <a
              href="/admin"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access Admin Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Employee Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Employee</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Self-service portal, time tracking, leave management, and personal dashboard.
            </p>
            <a
              href="/employee"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access Employee Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* HR Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">HR Manager</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Recruitment, performance management, compliance, and workforce analytics.
            </p>
            <a
              href="/hr"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access HR Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Manager Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Manager</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Team management, performance reviews, project tracking, and resource allocation.
            </p>
            <a
              href="/manager"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access Manager Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trainer Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Trainer</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Course management, learning paths, assessments, and training analytics.
            </p>
            <a
              href="/trainer"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access Trainer Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Auditor Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Auditor</h3>
            <p className="text-gray-400 mb-4 text-xs leading-relaxed">
              Compliance monitoring, audit trails, risk assessment, and regulatory reporting.
            </p>
            <a
              href="/auditor"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 group-hover:scale-105"
            >
              Access Auditor Demo
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Modern CTA Section
const ModernCTASection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
          {t('landing.ctaTitle')}
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          {t('landing.ctaSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/login"
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-base transition-all duration-300 flex items-center justify-center group"
          >
            {t('landing.startFreeTrial')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium text-base transition-all duration-300"
          >
            {t('landing.contactUs')}
          </a>
        </div>
      </div>
    </section>
  )
}

// Modern Footer
const ModernFooter = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-light tracking-wide">HR Pro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              {t('landing.footerDescription')}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wide">{t('landing.footerProduct')}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">{t('landing.features')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('landing.pricing')}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t('landing.reviews')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wide">{t('landing.footerCompany')}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">{t('landing.about')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('landing.contact')}</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">{t('landing.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 HR Pro. {t('landing.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <ModernHeader />
      <main className="w-full">
        <ModernHeroSection />
        <ModernFeaturesSection />
        <ModernTestimonialsSection />
        <DemoAccessSection />
        <ModernCTASection />
      </main>
      <ModernFooter />
    </div>
  )
}

export default LandingPage
