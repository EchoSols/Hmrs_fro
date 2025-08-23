import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/contexts/ThemeContext'
import { Link, useLocation } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertTriangle, Users, UserCheck, Shield, Settings, BookOpen, BarChart3, Mail, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  const portalLinks = [
    { path: '/admin', name: 'Admin Portal', icon: Shield, description: 'System administration and management' },
    { path: '/employee', name: 'Employee Portal', icon: Users, description: 'Employee self-service portal' },
    { path: '/hr', name: 'HR Portal', icon: UserCheck, description: 'Human resources management' },
    { path: '/manager', name: 'Manager Portal', icon: BarChart3, description: 'Team and project management' },
    { path: '/trainer', name: 'Trainer Portal', icon: BookOpen, description: 'Training and development' },
    { path: '/auditor', name: 'Auditor Portal', icon: Settings, description: 'Compliance and auditing' }
  ]

  const quickActions = [
    { path: '/dashboard', name: 'Dashboard', icon: BarChart3 },
    { path: '/login', name: 'Login', icon: UserCheck },
    { path: '/', name: 'Home', icon: Home },
    { path: '/help', name: 'Help Center', icon: HelpCircle }
  ]

  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center px-4 py-8",
      theme === 'dark' ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    )}>
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Icon with Animation */}
        <div className="mb-8 animate-bounce">
          <div className={cn(
            "w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 shadow-2xl",
            theme === 'dark' 
              ? 'bg-gradient-to-br from-red-900/30 to-red-800/20 text-red-400 border border-red-800/50' 
              : 'bg-gradient-to-br from-red-100 to-red-200 text-red-600 border border-red-300'
          )}>
            <AlertTriangle className="w-16 h-16" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className={cn(
            "text-9xl md:text-[12rem] font-black mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent",
            theme === 'dark' ? 'drop-shadow-2xl' : ''
          )}>
            404
          </h1>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6",
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          )}>
            Oops! Page Not Found
          </h2>
          <p className={cn(
            "text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            The page <span className="font-mono bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">{location.pathname}</span> doesn't exist or has been moved.
          </p>
          <p className={cn(
            "text-lg mb-8 max-w-xl mx-auto",
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          )}>
            Don't worry! We've got plenty of other great pages for you to explore.
          </p>
        </div>

        {/* Search Bar */}
        <div className={cn(
          "max-w-md mx-auto mb-12",
          theme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
        )}>
          <div className="relative">
            <Search className={cn(
              "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            )} />
            <input
              type="text"
              placeholder="Search for pages, features, or help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                theme === 'dark' 
                  ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700' 
                  : 'bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300'
              )}
            />
          </div>
        </div>

        {/* Portal Navigation */}
        <div className="mb-12">
          <h3 className={cn(
            "text-2xl font-bold mb-6",
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          )}>
            Quick Access to Portals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portalLinks.map((portal) => {
              const IconComponent = portal.icon
              return (
                <Link
                  key={portal.path}
                  to={portal.path}
                  className={cn(
                    "group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl",
                    theme === 'dark' 
                      ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500 hover:bg-gray-800/50' 
                      : 'bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  )}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                      theme === 'dark' 
                        ? 'bg-blue-900/30 text-blue-400 group-hover:bg-blue-800/50' 
                        : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                    )}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className={cn(
                    "text-lg font-semibold mb-2",
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  )}>
                    {portal.name}
                  </h4>
                  <p className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {portal.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className={cn(
            "text-xl font-semibold mb-4",
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          )}>
            Quick Actions
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {quickActions.map((action) => {
              const IconComponent = action.icon
              return (
                <Link
                  key={action.path}
                  to={action.path}
                  className={cn(
                    "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105",
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
                  )}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {action.name}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg",
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            )}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 border-2 shadow-lg",
              theme === 'dark'
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800'
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Help Section */}
        <div className={cn(
          "p-8 rounded-2xl border-2 max-w-2xl mx-auto",
          theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
        )}>
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className={cn(
              "w-8 h-8 mr-3",
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            )} />
            <h3 className={cn(
              "text-2xl font-bold",
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            )}>
              Need Help?
            </h3>
          </div>
          <p className={cn(
            "text-lg mb-6",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Can't find what you're looking for? Our support team is here to help!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <a 
              href="mailto:echhosolutions@yahoo.com"
              className={cn(
                "p-4 rounded-lg text-center transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
              )}
            >
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <span className="font-medium">Email Support</span>
            </a>
            <Link
              to="/help"
              className={cn(
                "p-4 rounded-lg text-center transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
              )}
            >
              <HelpCircle className="w-6 h-6 mx-auto mb-2" />
              <span className="font-medium">Help Center</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className={cn(
          "mt-12 pt-8 border-t",
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        )}>
          <p className={cn(
            "text-sm",
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          )}>
            © 2024 Echo Solutions. All rights reserved. | 
            <a 
              href="mailto:echhosolutions@yahoo.com"
              className={cn(
                "ml-1 underline hover:no-underline transition-all duration-300",
                theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              )}
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
