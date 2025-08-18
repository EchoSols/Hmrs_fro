import React from 'react'

interface SkeletonProps {
  className?: string
  count?: number
}

// Basic skeleton element
export const Skeleton: React.FC<SkeletonProps> = ({ className = '', count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-200 rounded ${className}`}
          aria-label="Loading content"
        />
      ))}
    </>
  )
}

// Card skeleton
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
    <div className="animate-pulse space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="flex space-x-2">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      </div>
    </div>
  </div>
)

// Table skeleton
export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <div className="animate-pulse">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex space-x-4">
          {Array.from({ length: columns }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded w-20"></div>
          ))}
        </div>
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4 border-b border-gray-100">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 bg-gray-200 rounded w-24"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Dashboard stats skeleton
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    ))}
  </div>
)

// Chart skeleton
export const ChartSkeleton: React.FC<{ height?: string; className?: string }> = ({ height = 'h-64', className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${height} ${className}`}>
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-200 rounded w-32"></div>
      <div className="flex items-end justify-between h-48 space-x-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-t flex-1"
            style={{ height: `${Math.random() * 60 + 20}%` }}
          ></div>
        ))}
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="h-3 bg-gray-200 rounded w-8"></div>
        ))}
      </div>
    </div>
  </div>
)

// Form skeleton
export const FormSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="animate-pulse space-y-6">
      <div className="h-6 bg-gray-200 rounded w-32"></div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <div className="h-10 bg-gray-200 rounded w-24"></div>
        <div className="h-10 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  </div>
)

// Navigation skeleton
export const NavigationSkeleton: React.FC = () => (
  <div className="bg-white border-b border-gray-200">
    <div className="animate-pulse px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
)

// Sidebar skeleton
export const SidebarSkeleton: React.FC = () => (
  <div className="bg-white border-r border-gray-200 w-64 h-screen">
    <div className="animate-pulse p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded w-24"></div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3 py-2">
            <div className="w-5 h-5 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Page skeleton
export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <NavigationSkeleton />
    <div className="flex">
      <SidebarSkeleton />
      <div className="flex-1 p-6 space-y-6">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <StatsSkeleton />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartSkeleton />
          <CardSkeleton />
        </div>
        <TableSkeleton />
      </div>
    </div>
  </div>
)

// App loading skeleton
export const AppLoadingSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center space-y-6">
      <div className="animate-pulse">
        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
      </div>
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
)

export default Skeleton
