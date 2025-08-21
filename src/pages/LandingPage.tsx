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
  Moon,
  ChevronDown,
  Check,
  Brain
} from 'lucide-react'
import { cn } from '@/lib/utils'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

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
            <div className="hidden sm:block">
              <LanguageSwitcher className="text-gray-300 hover:text-white" />
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
    <section className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center w-full max-w-6xl">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-center xl:text-left order-2 xl:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-white leading-tight tracking-wide">
              {t('landing.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              {t('landing.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start">
              <a
                href="/login"
                className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center group hover:scale-105"
              >
                {t('landing.startFreeTrial')}
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center group hover:scale-105"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t('landing.watchDemo')}
              </a>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative flex justify-center xl:justify-end order-1 xl:order-2">
            <div className="bg-black border border-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 w-full max-w-xs sm:max-w-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-medium text-white">HR Dashboard</h3>
                <div className="flex space-x-1 sm:space-x-1.5">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gray-900 border border-gray-800 p-2 sm:p-3 rounded-lg">
                  <div className="text-xl sm:text-2xl font-light text-white">1,234</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Employees</div>
                </div>
                <div className="bg-gray-900 border border-gray-800 p-2 sm:p-3 rounded-lg">
                  <div className="text-xl sm:text-2xl font-light text-white">85%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Performance</span>
                  <span className="text-sm font-medium text-white">92%</span>
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
      blue: 'bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('landing.featuresTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
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

// Pricing Section
const PricingSection = () => {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="bg-black py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            {t('landing.pricingTitle')}
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {t('landing.pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Basic Plan */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                {t('landing.basicPlan.name')}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {t('landing.basicPlan.description')}
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-light text-white">${t('landing.basicPlan.price')}</span>
                <span className="text-sm text-gray-400 ml-2">{t('landing.perMonth')}</span>
              </div>
              <a
                href="/login"
                className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center group"
              >
                {t('landing.startFreeTrial')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <ul className="space-y-3">
              {(t('landing.basicPlan.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-gray-900 border-2 border-white rounded-2xl p-6 sm:p-8 relative hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-medium">
                {t('landing.mostPopular')}
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                {t('landing.professionalPlan.name')}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {t('landing.professionalPlan.description')}
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-light text-white">${t('landing.professionalPlan.price')}</span>
                <span className="text-sm text-gray-400 ml-2">{t('landing.perMonth')}</span>
              </div>
              <a
                href="/login"
                className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center group"
              >
                {t('landing.startFreeTrial')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <ul className="space-y-3">
              {(t('landing.professionalPlan.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                {t('landing.enterprisePlan.name')}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {t('landing.enterprisePlan.description')}
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-light text-white">${t('landing.enterprisePlan.price')}</span>
                <span className="text-sm text-gray-400 ml-2">{t('landing.perMonth')}</span>
              </div>
              <a
                href="/login"
                className="w-full border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center group"
              >
                {t('landing.contactSales')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <ul className="space-y-3">
              {(t('landing.enterprisePlan.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            {t('landing.whyChooseUs')}
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {t('landing.whyChooseSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* AI-Powered Automation */}
          <div className="bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">
              {t('landing.reason1.title')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('landing.reason1.description')}
            </p>
          </div>

          {/* Enterprise Security */}
          <div className="bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">
              {t('landing.reason2.title')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('landing.reason2.description')}
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">
              {t('landing.reason3.title')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('landing.reason3.description')}
            </p>
          </div>

          {/* Easy Integration */}
          <div className="bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">
              {t('landing.reason4.title')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('landing.reason4.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Demo Access Section
const DemoAccessSection = () => {
  const { t } = useTranslation()

  return (
    <section id="demo" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
            {t('landing.tryHRProTitle')}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('landing.tryHRProSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.administrator.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.administrator.description')}
            </p>
            <a
              href="/admin"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.administrator.button')}
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Employee Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.employee.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.employee.description')}
            </p>
            <a
              href="/employee"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.employee.button')}
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* HR Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.hrManager.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.hrManager.description')}
            </p>
            <a
              href="/hr"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.hrManager.button')}
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Manager Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.manager.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.manager.description')}
            </p>
            <a
              href="/manager"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.manager.button')}
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trainer Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.trainer.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.trainer.description')}
            </p>
            <a
              href="/trainer"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.trainer.button')}
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Auditor Demo */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">{t('landing.roleCards.auditor.title')}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              {t('landing.roleCards.auditor.description')}
            </p>
            <a
              href="/auditor"
              className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-100 px-3 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-105"
            >
              {t('landing.roleCards.auditor.button')}
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
    <section className="py-20 bg-black">
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

// Contact Section
const ContactSection = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
    plan: 'basic'
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', company: '', message: '', plan: 'basic' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="bg-black py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your HR operations? Contact us today for a personalized demo and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-medium text-white mb-6">Send us a message</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-2">
                  Interested Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                >
                  <option value="basic">Basic Plan</option>
                  <option value="professional">Professional Plan</option>
                  <option value="enterprise">Enterprise Plan</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your HR needs and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Email</p>
                    <p className="text-base text-gray-400">echhosolutions@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Phone</p>
                    <p className="text-base text-gray-400">+250 793373953</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Address</p>
                    <p className="text-base text-gray-400">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-6">Support</h3>
              <p className="text-sm text-gray-400 mb-4">
                Need immediate assistance? Our support team is available 24/7 for enterprise customers.
              </p>
              <a
                href="mailto:support@hrpro.com"
                className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with Support
              </a>
            </div>
          </div>
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
    <div className="min-h-screen w-full bg-black scroll-smooth">
      <ModernHeader />
      <main className="w-full">
        <ModernHeroSection />
        <ModernFeaturesSection />
        <WhyChooseUsSection />
        <PricingSection />
        <ModernTestimonialsSection />
        <DemoAccessSection />
        <ContactSection />
        <ModernCTASection />
      </main>
      <ModernFooter />
    </div>
  )
}

export default LandingPage
