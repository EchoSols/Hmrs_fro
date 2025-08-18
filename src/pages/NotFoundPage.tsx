import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Search, AlertTriangle } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-black rounded-sm"></div>
          </div>
          <span className="text-2xl font-light text-white tracking-wide">HR Pro</span>
        </div>

        {/* 404 Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-red-900/20 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl font-light text-white mb-4 tracking-wide">404</h1>
          <h2 className="text-2xl font-medium text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to managing your HR operations.
          </p>

          {/* Search Suggestion */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300">
                Try checking the URL or use our navigation menu below
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
            >
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
            <Link
              to="/login"
              className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Sign In
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link
              to="/admin"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Administrator Portal
            </Link>
            <Link
              to="/employee"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Employee Portal
            </Link>
            <Link
              to="/hr"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              HR Manager Portal
            </Link>
            <Link
              to="/manager"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Manager Portal
            </Link>
            <Link
              to="/trainer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Trainer Portal
            </Link>
            <Link
              to="/auditor"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg p-3 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Auditor Portal
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 HR Pro. All rights reserved.</p>
          <p className="mt-2">
            Need help? <a href="mailto:support@hrpro.com" className="text-gray-400 hover:text-white transition-colors">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
