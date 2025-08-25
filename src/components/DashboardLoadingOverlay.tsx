import React from 'react'
import { useLoading } from '@/contexts/LoadingContext'
import { cn } from '@/lib/utils'

const DashboardLoadingOverlay: React.FC = () => {
  const { isLoading, loadingMessage } = useLoading()

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/95">
      {/* Global Background - Same as Landing Page but Light Mode Only */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100"></div>
        
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 animate-pulse-fade" style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animationDuration: '10s',
          animationDelay: '0s'
        }}></div>

        {/* Layered Geometric Shapes */}
        <div className="absolute inset-0 opacity-8">
          {/* Large, slow-moving squares */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-gray-300 transform rotate-45 animate-rotate-slow animate-float" style={{ animationDuration: '30s', animationDelay: '0s', opacity: 0.05 }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-gray-400 transform -rotate-45 animate-rotate-slow animate-float-delayed" style={{ animationDuration: '35s', animationDelay: '10s', opacity: 0.04 }}></div>

          {/* Medium-sized, moderately moving triangles */}
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-300/5 transform rotate-12 animate-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '20s', animationDelay: '3s', opacity: 0.06 }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-400/5 transform -rotate-24 animate-float-delayed" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '22s', animationDelay: '7s', opacity: 0.05 }}></div>

          {/* Small, faster-moving hexagons */}
          <div className="absolute top-1/5 right-1/5 w-48 h-48 bg-gray-500/5 transform rotate-30 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '15s', animationDelay: '5s', opacity: 0.07 }}></div>
          <div className="absolute bottom-1/5 left-1/5 w-40 h-40 bg-gray-600/5 transform -rotate-60 animate-float-delayed" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '17s', animationDelay: '8s', opacity: 0.06 }}></div>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-600 rounded-full animate-pulse-fade"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 8 + 5}s`,
                opacity: `${Math.random() * 0.4 + 0.1}`
              }}
            ></div>
          ))}
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.01),transparent_70%)]"></div>

        {/* Additional animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sparkling elements */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-600 rounded-full opacity-40 animate-sparkle"></div>
          <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-gray-700 rounded-full opacity-30 animate-sparkle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-gray-800 rounded-full opacity-25 animate-sparkle" style={{animationDelay: '2s'}}></div>
          
          {/* Wave-like elements */}
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gray-700 opacity-10 animate-wave"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gray-800 opacity-8 animate-wave" style={{animationDelay: '3s'}}></div>
          
          {/* Slide-in elements */}
          <div className="absolute top-1/5 right-1/5 w-4 h-4 bg-gray-600 opacity-20 animate-slide-in"></div>
          <div className="absolute bottom-1/5 left-1/5 w-3 h-3 bg-gray-700 opacity-15 animate-slide-in" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8">
          {/* Logo Animation */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br from-white to-gray-100 border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black">
                <div className="w-6 h-6 rounded-sm bg-white"></div>
              </div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-green-600"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-600"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-orange-600"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-wide text-black">
              HR Pro
            </h2>
            <p className="text-lg font-medium text-gray-600">
              {loadingMessage}
            </p>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="w-full h-1 rounded-full overflow-hidden bg-gray-200">
              <div className="h-full rounded-full animate-progress bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-3 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full animate-bounce bg-gray-600"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>

          {/* Geometric Loading Spinner */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-green-600"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-purple-600"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600"></div>
              <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-pink-600"></div>
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLoadingOverlay
