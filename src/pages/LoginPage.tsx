import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import { useLoadingState } from '@/hooks/useLoadingState'
import GlobalBackground from '@/components/GlobalBackground'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()
  const { isLoading, withLoading } = useLoadingState({ 
    delay: 300, 
    message: 'Signing you in...' 
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    await withLoading(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Basic validation
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all fields')
      }
      
      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      // Simulate successful login
      setSuccess('Login successful! Redirecting...')
      setTimeout(() => {
        navigate('/app') // Redirect to main app dashboard
      }, 1000)
    }).catch((err) => {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.')
    })
  }

  const handleContactAdmin = () => {
    // You can implement this to open email client or contact form
    window.open('mailto:admin@hrpro.com?subject=Login%20Issue%20-%20HR%20Pro', '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <GlobalBackground />
      <div className="max-w-md w-full relative z-10">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-black rounded-sm"></div>
              </div>
              <span className="text-2xl font-light text-white tracking-wide">HR Pro</span>
            </div>
            <h1 className="text-3xl font-light text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your HR Pro account</p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
              <span className="text-red-400 text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 rounded-lg flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-green-400 text-sm">{success}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-white focus:ring-white/20 border-gray-600 rounded bg-gray-800"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-white font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black hover:bg-gray-100 disabled:bg-gray-600 disabled:text-gray-400 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Don't have an account?</span>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <Link
              to="/signup"
              className="text-gray-400 hover:text-white font-medium transition-colors"
            >
              Create an account
            </Link>
          </div>
        </div>

        {/* Contact Admin Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Having trouble signing in?
          </p>
          <button
            onClick={handleContactAdmin}
            className="text-gray-400 hover:text-white font-medium text-sm underline transition-colors"
          >
            Contact Admin
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>© 2024 HR Pro. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
