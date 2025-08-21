import React from 'react'
import { useLoading } from '@/contexts/LoadingContext'
import { AppLoadingSkeleton } from './LoadingSkeleton'

const LoadingOverlay: React.FC = () => {
  const { isLoading, loadingMessage } = useLoading()

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
          <div className="text-gray-600 font-medium">{loadingMessage}</div>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay
