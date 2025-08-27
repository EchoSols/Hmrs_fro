import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/ui/Header'

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 w-full overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="p-6 bg-gray-50 dark:bg-gray-950 min-h-screen overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
