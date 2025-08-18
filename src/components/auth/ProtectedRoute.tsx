import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useLoadingState } from '@/hooks/useLoadingState'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'employee' | 'manager' | 'hr' | 'auditor' | 'trainer'
  fallbackPath?: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole,
  fallbackPath = '/login'
}) => {
  const location = useLocation()
  const { isLoading } = useLoadingState({ delay: 0 })

  // Simulate authentication check
  // In a real app, this would check localStorage, cookies, or context
  const isAuthenticated = () => {
    // For demo purposes, we'll allow access to all routes
    // In production, this would check actual authentication state
    return true
  }

  const getUserRole = () => {
    // Simulate getting user role from context or localStorage
    // In production, this would come from your auth context
    const path = location.pathname
    if (path.startsWith('/admin')) return 'admin'
    if (path.startsWith('/employee')) return 'employee'
    if (path.startsWith('/manager')) return 'manager'
    if (path.startsWith('/hr')) return 'hr'
    if (path.startsWith('/auditor')) return 'auditor'
    if (path.startsWith('/trainer')) return 'trainer'
    return 'employee' // default role
  }

  const hasRequiredRole = () => {
    if (!requiredRole) return true
    const userRole = getUserRole()
    return userRole === requiredRole
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Verifying access...</p>
        </div>
      </div>
    )
  }

  // Check authentication
  if (!isAuthenticated()) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />
  }

  // Check role-based access
  if (!hasRequiredRole()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
