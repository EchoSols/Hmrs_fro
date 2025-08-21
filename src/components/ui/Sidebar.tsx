import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const navigation: NavigationItem[] = [
    {
      name: t('navigation.dashboard'),
      href: '/app',
      icon: Home
    },
    {
      name: t('navigation.teamMembers'),
      href: '/app/team-members',
      icon: Users
    }
  ]

  const recentProjects = [
    { name: t('navigation.insideAppDesign'), color: 'bg-orange-500' },
    { name: t('navigation.salesatticsCrmDesign'), color: 'bg-blue-500' },
    { name: t('navigation.internalProjects'), color: 'bg-purple-500' }
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
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out flex flex-col border-r border-gray-200 dark:border-gray-800",
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">{t('sidebar.brandName')}</h1>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span>{t('sidebar.companyName')}</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {t('navigation.menu')}
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
                           : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
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
                           ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                           : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
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
                                 : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
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
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {t('navigation.recentProjects')}
            </h3>
            <div className="space-y-2">
              {recentProjects.map((project) => (
                                 <div
                   key={project.name}
                   className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
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
