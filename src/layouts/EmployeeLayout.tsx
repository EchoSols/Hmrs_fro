import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeSidebar from '@/components/employee/EmployeeSidebar'
import EmployeeHeader from '@/components/employee/EmployeeHeader'
import ChatAssistant from '@/components/ui/ChatAssistant'
import { useTheme } from '@/contexts/ThemeContext'

const EmployeeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('light')
  }, [setTheme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 w-full overflow-x-hidden">
      {/* Sidebar */}
      <EmployeeSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <EmployeeHeader onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-950 min-h-screen overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      {/* AI Chat Assistant */}
      <ChatAssistant />
    </div>
  )
}

export default EmployeeLayout
