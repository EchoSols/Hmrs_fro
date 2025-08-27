import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AuditorSidebar from '@/components/auditor/AuditorSidebar'
import AuditorHeader from '@/components/auditor/AuditorHeader'
import { useTheme } from '@/contexts/ThemeContext'

const AuditorLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [setTheme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 w-full overflow-x-hidden">
      {/* Sidebar */}
      <AuditorSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <AuditorHeader onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-950 min-h-screen overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AuditorLayout
