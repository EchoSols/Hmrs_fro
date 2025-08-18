import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  CheckSquare, 
  Zap, 
  Home, 
  MessageSquare, 
  Users, 
  Calendar,
  ChevronDown,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface NavigationItem {
  name: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string | number
  children?: { name: string; href: string }[]
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const navigation: NavigationItem[] = [
    {
      name: 'My Tasks',
      href: '/tasks',
      icon: CheckSquare,
      badge: 4
    },
    {
      name: 'Activities',
      href: '/activities',
      icon: Zap,
      badge: 14
    },
    {
      name: 'Overview',
      href: '/overview',
      icon: Home
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      badge: 4
    },
    {
      name: 'Team Members',
      href: '/team-members',
      icon: Users
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: Calendar
    }
  ]

  const recentProjects = [
    { name: 'Inside App Design', color: 'bg-orange-500' },
    { name: 'Salesattics CRM Design', color: 'bg-blue-500' },
    { name: 'Internal Projects', color: 'bg-purple-500' }
  ]

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    )
  }

  const isActive = (href: string) => location.pathname === href

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">dash</h1>
              <div className="flex items-center text-xs text-gray-400">
                <span>Product Co.</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Menu
            </h3>
            <div className="space-y-1">
              {navigation.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                        isActive(item.href)
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      )}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )
                }

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={cn(
                        "w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                        expandedMenus.includes(item.name)
                          ? "bg-gray-800 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      )}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="flex-1 text-left">{item.name}</span>
                      {item.badge && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          expandedMenus.includes(item.name) && "rotate-180"
                        )} 
                      />
                    </button>
                    {expandedMenus.includes(item.name) && item.children && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors duration-200",
                              isActive(child.href)
                                ? "bg-blue-600 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Recent Project
            </h3>
            <div className="space-y-2">
              {recentProjects.map((project) => (
                <div
                  key={project.name}
                  className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <div className={cn("w-2 h-2 rounded-full mr-3", project.color)}></div>
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
