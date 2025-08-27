import React from 'react'

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950"></div>
      
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-gray-700 transform rotate-45 animate-rotate-slow animate-float" style={{ animationDuration: '30s', animationDelay: '0s', opacity: 0.05 }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-gray-800 transform -rotate-45 animate-rotate-slow animate-float-delayed" style={{ animationDuration: '35s', animationDelay: '10s', opacity: 0.04 }}></div>

        {/* Medium-sized, moderately moving triangles */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-700/5 transform rotate-12 animate-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '20s', animationDelay: '3s', opacity: 0.06 }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-800/5 transform -rotate-24 animate-float-delayed" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '22s', animationDelay: '7s', opacity: 0.05 }}></div>

        {/* Small, faster-moving hexagons */}
        <div className="absolute top-1/5 right-1/5 w-48 h-48 bg-gray-600/5 transform rotate-30 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '15s', animationDelay: '5s', opacity: 0.07 }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-40 h-40 bg-gray-500/5 transform -rotate-60 animate-float-delayed" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '17s', animationDelay: '8s', opacity: 0.06 }}></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-400 rounded-full animate-pulse-fade"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.02),transparent_70%)]"></div>

      {/* Additional animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sparkling elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-sparkle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-gray-500 rounded-full opacity-30 animate-sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-25 animate-sparkle" style={{animationDelay: '2s'}}></div>
        
        {/* Wave-like elements */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gray-500 opacity-10 animate-wave"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gray-600 opacity-8 animate-wave" style={{animationDelay: '3s'}}></div>
        
        {/* Slide-in elements */}
        <div className="absolute top-1/5 right-1/5 w-4 h-4 bg-gray-400 opacity-20 animate-slide-in"></div>
        <div className="absolute bottom-1/5 left-1/5 w-3 h-3 bg-gray-500 opacity-15 animate-slide-in" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  )
}

export default GlobalBackground
