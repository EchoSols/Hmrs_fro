import React from 'react'
import { useLoading } from '@/contexts/LoadingContext'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface LoadingOverlayProps {
  lightModeOnly?: boolean
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ lightModeOnly = false }) => {
  const { isLoading, loadingMessage } = useLoading()
  const { theme } = useTheme()

  if (!isLoading) return null

  // Force light mode for dashboard pages, use theme for landing page
  const effectiveTheme = lightModeOnly ? 'light' : theme

  return (
    <div className={cn(
      "fixed inset-0 z-50 backdrop-blur-md",
      effectiveTheme === 'dark' 
        ? "bg-gray-950/95" 
        : "bg-white/95"
    )}>
      {/* Global Background - Same as Landing Page */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className={cn(
          "absolute inset-0",
          effectiveTheme === 'dark' 
            ? "bg-gradient-to-b from-gray-900 via-black to-gray-950" 
            : "bg-gradient-to-b from-gray-50 via-white to-gray-100"
        )}></div>
        
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
          <div className={cn(
            "absolute top-1/4 left-1/4 w-72 h-72 border transform rotate-45 animate-rotate-slow animate-float",
            effectiveTheme === 'dark' ? "border-gray-700" : "border-gray-300"
          )} style={{ animationDuration: '30s', animationDelay: '0s', opacity: 0.05 }}></div>
          <div className={cn(
            "absolute bottom-1/3 right-1/3 w-96 h-96 border transform -rotate-45 animate-rotate-slow animate-float-delayed",
            effectiveTheme === 'dark' ? "border-gray-800" : "border-gray-400"
          )} style={{ animationDuration: '35s', animationDelay: '10s', opacity: 0.04 }}></div>

          {/* Medium-sized, moderately moving triangles */}
          <div className={cn(
            "absolute top-1/2 left-1/3 w-64 h-64 transform rotate-12 animate-float",
            effectiveTheme === 'dark' ? "bg-gray-700/5" : "bg-gray-300/5"
          )} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '20s', animationDelay: '3s', opacity: 0.06 }}></div>
          <div className={cn(
            "absolute bottom-1/4 right-1/4 w-72 h-72 transform -rotate-24 animate-float-delayed",
            effectiveTheme === 'dark' ? "bg-gray-800/5" : "bg-gray-400/5"
          )} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '22s', animationDelay: '7s', opacity: 0.05 }}></div>

          {/* Small, faster-moving hexagons */}
          <div className={cn(
            "absolute top-1/5 right-1/5 w-48 h-48 transform rotate-30 animate-float",
            effectiveTheme === 'dark' ? "bg-gray-600/5" : "bg-gray-500/5"
          )} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '15s', animationDelay: '5s', opacity: 0.07 }}></div>
          <div className={cn(
            "absolute bottom-1/5 left-1/5 w-40 h-40 transform -rotate-60 animate-float-delayed",
            effectiveTheme === 'dark' ? "bg-gray-500/5" : "bg-gray-600/5"
          )} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '17s', animationDelay: '8s', opacity: 0.06 }}></div>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full animate-pulse-fade",
                effectiveTheme === 'dark' ? "bg-gray-400" : "bg-gray-600"
              )}
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
        <div className={cn(
          "absolute inset-0",
          effectiveTheme === 'dark' 
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.02),transparent_70%)]" 
            : "bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.01),transparent_70%)]"
        )}></div>

        {/* Additional animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sparkling elements */}
          <div className={cn(
            "absolute top-1/4 left-1/4 w-1 h-1 rounded-full opacity-40 animate-sparkle",
            effectiveTheme === 'dark' ? "bg-gray-400" : "bg-gray-600"
          )}></div>
          <div className={cn(
            "absolute bottom-1/3 right-1/3 w-0.5 h-0.5 rounded-full opacity-30 animate-sparkle",
            effectiveTheme === 'dark' ? "bg-gray-500" : "bg-gray-700"
          )} style={{animationDelay: '1s'}}></div>
          <div className={cn(
            "absolute top-2/3 left-2/3 w-1.5 h-1.5 rounded-full opacity-25 animate-sparkle",
            effectiveTheme === 'dark' ? "bg-gray-600" : "bg-gray-800"
          )} style={{animationDelay: '2s'}}></div>
          
          {/* Wave-like elements */}
          <div className={cn(
            "absolute top-1/3 right-1/4 w-8 h-8 opacity-10 animate-wave",
            effectiveTheme === 'dark' ? "bg-gray-500" : "bg-gray-700"
          )}></div>
          <div className={cn(
            "absolute bottom-1/4 left-1/3 w-6 h-6 opacity-8 animate-wave",
            effectiveTheme === 'dark' ? "bg-gray-600" : "bg-gray-800"
          )} style={{animationDelay: '3s'}}></div>
          
          {/* Slide-in elements */}
          <div className={cn(
            "absolute top-1/5 right-1/5 w-4 h-4 opacity-20 animate-slide-in",
            effectiveTheme === 'dark' ? "bg-gray-400" : "bg-gray-600"
          )}></div>
          <div className={cn(
            "absolute bottom-1/5 left-1/5 w-3 h-3 opacity-15 animate-slide-in",
            effectiveTheme === 'dark' ? "bg-gray-500" : "bg-gray-700"
          )} style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8">
          {/* Logo Animation */}
          <div className="relative">
            <div className={cn(
              "w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-2xl",
              effectiveTheme === 'dark' 
                ? "bg-gradient-to-br from-gray-800 to-black border border-gray-700" 
                : "bg-gradient-to-br from-white to-gray-100 border border-gray-200"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center",
                effectiveTheme === 'dark' ? "bg-white" : "bg-black"
              )}>
                <div className={cn(
                  "w-6 h-6 rounded-sm",
                  effectiveTheme === 'dark' ? "bg-black" : "bg-white"
                )}></div>
              </div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <div className={cn(
                "absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full",
                effectiveTheme === 'dark' ? "bg-blue-400" : "bg-blue-600"
              )}></div>
              <div className={cn(
                "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full",
                effectiveTheme === 'dark' ? "bg-green-400" : "bg-green-600"
              )}></div>
              <div className={cn(
                "absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full",
                effectiveTheme === 'dark' ? "bg-purple-400" : "bg-purple-600"
              )}></div>
              <div className={cn(
                "absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full",
                effectiveTheme === 'dark' ? "bg-orange-400" : "bg-orange-600"
              )}></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className={cn(
              "text-2xl font-light tracking-wide",
              effectiveTheme === 'dark' ? "text-white" : "text-black"
            )}>
              HR Pro
            </h2>
            <p className={cn(
              "text-lg font-medium",
              effectiveTheme === 'dark' ? "text-gray-300" : "text-gray-600"
            )}>
              {loadingMessage}
            </p>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-64 mx-auto">
            <div className={cn(
              "w-full h-1 rounded-full overflow-hidden",
              effectiveTheme === 'dark' ? "bg-gray-800" : "bg-gray-200"
            )}>
              <div className={cn(
                "h-full rounded-full animate-progress",
                effectiveTheme === 'dark' 
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              )}></div>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-3 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-3 h-3 rounded-full animate-bounce",
                  effectiveTheme === 'dark' ? "bg-gray-400" : "bg-gray-600"
                )}
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>

          {/* Geometric Loading Spinner */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
              <div className={cn(
                "absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full",
                effectiveTheme === 'dark' ? "bg-blue-400" : "bg-blue-600"
              )}></div>
              <div className={cn(
                "absolute top-1/4 right-1/4 w-3 h-3 rounded-full",
                effectiveTheme === 'dark' ? "bg-green-400" : "bg-green-600"
              )}></div>
              <div className={cn(
                "absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full",
                effectiveTheme === 'dark' ? "bg-purple-400" : "bg-purple-600"
              )}></div>
              <div className={cn(
                "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full",
                effectiveTheme === 'dark' ? "bg-orange-400" : "bg-orange-600"
              )}></div>
              <div className={cn(
                "absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full",
                effectiveTheme === 'dark' ? "bg-pink-400" : "bg-pink-600"
              )}></div>
              <div className={cn(
                "absolute top-1/4 left-1/4 w-3 h-3 rounded-full",
                effectiveTheme === 'dark' ? "bg-indigo-400" : "bg-indigo-600"
              )}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay
