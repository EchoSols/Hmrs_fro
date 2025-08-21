import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center px-4",
      theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
    )}>
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className={cn(
            "w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6",
            theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
          )}>
            <AlertTriangle className="w-12 h-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className={cn(
            "text-8xl md:text-9xl font-bold mb-4",
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          )}>
            404
          </h1>
          <h2 className={cn(
            "text-3xl md:text-4xl font-semibold mb-4",
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          )}>
            Page Not Found
          </h2>
          <p className={cn(
            "text-lg md:text-xl mb-8 max-w-md mx-auto",
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}>
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105",
              theme === 'dark' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            )}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={cn(
              "inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 border-2",
              theme === 'dark'
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
            )}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className={cn(
          "p-6 rounded-xl border",
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        )}>
          <div className="flex items-center justify-center mb-4">
            <Search className={cn(
              "w-6 h-6 mr-2",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            )} />
            <h3 className={cn(
              "text-lg font-medium",
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            )}>
              Can't find what you're looking for?
            </h3>
          </div>
          <p className={cn(
            "text-base mb-4",
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}>
            Try searching for it or check out our main sections:
          </p>
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/admin"
              className={cn(
                "p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              )}
            >
              Admin Portal
            </Link>
            <Link
              to="/employee"
              className={cn(
                "p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              )}
            >
              Employee Portal
            </Link>
            <Link
              to="/hr"
              className={cn(
                "p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              )}
            >
              HR Portal
            </Link>
            <Link
              to="/manager"
              className={cn(
                "p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              )}
            >
              Manager Portal
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
            Need help? Contact our support team at{' '}
            <a 
              href="mailto:echhosolutions@yahoo.com"
              className={cn(
                "underline hover:no-underline transition-all duration-300",
                theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              )}
            >
              echhosolutions@yahoo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
