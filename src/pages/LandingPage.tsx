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
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">HR Pro</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('landing.features')}
            </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('landing.pricing')}
            </a>
            <a href="#reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('landing.reviews')}
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('landing.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
            </div>

            {/* Sign In */}
            <a
              href="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {t('landing.signIn')}
            </a>

            {/* Get Started */}
            <a
              href="/app"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('landing.heroTitle')}
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 leading-relaxed">
              {t('landing.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/app"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                {t('landing.startFreeTrial')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                {t('landing.watchDemo')}
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HR Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,234</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Employees</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
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

// Modern CTA Section
const ModernCTASection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('landing.ctaTitle')}
        </h2>
        <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
          {t('landing.ctaSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
          >
            {t('landing.startFreeTrial')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">HR Pro</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('landing.footerDescription')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('landing.footerProduct')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">{t('landing.features')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('landing.pricing')}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t('landing.reviews')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('landing.footerCompany')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">{t('landing.about')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('landing.contact')}</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">{t('landing.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HR Pro. {t('landing.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ModernHeader />
      <main>
        <ModernHeroSection />
        <ModernFeaturesSection />
        <ModernTestimonialsSection />
        <ModernCTASection />
      </main>
      <ModernFooter />
    </div>
  )
}

export default LandingPage
