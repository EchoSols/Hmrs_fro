import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import GlobalBackground from '@/components/GlobalBackground'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <GlobalBackground />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-red-900/20 text-red-400">
            <AlertTriangle className="w-12 h-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-white">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto text-gray-300">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 bg-blue-600 text-white hover:bg-blue-700"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="p-6 rounded-xl border bg-gray-800/80 backdrop-blur-sm border-gray-700/50">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 mr-2 text-gray-400" />
            <h3 className="text-lg font-medium text-white">
              Can't find what you're looking for?
            </h3>
          </div>
          <p className="text-base mb-4 text-gray-300">
            Try searching for it or check out our main sections:
          </p>
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/admin"
              className="p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
            >
              Admin Portal
            </Link>
            <Link
              to="/employee"
              className="p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
            >
              Employee Portal
            </Link>
            <Link
              to="/hr"
              className="p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
            >
              HR Portal
            </Link>
            <Link
              to="/manager"
              className="p-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
            >
              Manager Portal
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Need help? Contact our support team at{' '}
            <a 
              href="mailto:echhosolutions@yahoo.com"
              className="underline hover:no-underline transition-all duration-300 text-blue-400 hover:text-blue-300"
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
