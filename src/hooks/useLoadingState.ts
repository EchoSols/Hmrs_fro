import { useState, useEffect, useCallback } from 'react'
import { useLoading } from '@/contexts/LoadingContext'

interface UseLoadingStateOptions {
  delay?: number
  message?: string
}

export const useLoadingState = (options: UseLoadingStateOptions = {}) => {
  const { delay = 300, message = 'Loading...' } = options
  const [localLoading, setLocalLoading] = useState(false)
  const { setIsLoading, setLoadingMessage } = useLoading()

  const startLoading = useCallback((customMessage?: string) => {
    setLocalLoading(true)
    setIsLoading(true)
    setLoadingMessage(customMessage || message)
  }, [setIsLoading, setLoadingMessage, message])

  const stopLoading = useCallback(() => {
    setLocalLoading(false)
    setIsLoading(false)
  }, [setIsLoading])

  const withLoading = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    customMessage?: string
  ): Promise<T> => {
    try {
      startLoading(customMessage)
      const result = await asyncFn()
      return result
    } finally {
      // Add a small delay to prevent flickering for fast operations
      setTimeout(stopLoading, delay)
    }
  }, [startLoading, stopLoading, delay])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (localLoading) {
        stopLoading()
      }
    }
  }, [localLoading, stopLoading])

  return {
    isLoading: localLoading,
    startLoading,
    stopLoading,
    withLoading
  }
}
