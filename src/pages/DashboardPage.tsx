import React from 'react'
import { useTranslation } from 'react-i18next'
import { 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Calendar,
  Activity,
  BarChart3,
  PieChart
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: React.ReactNode
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <p className={cn(
          "text-sm mt-2 flex items-center",
          changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        )}>
          <TrendingUp className={cn(
            "w-4 h-4 mr-1",
            changeType === 'negative' && "rotate-180"
          )} />
          {change}
        </p>
      </div>
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        {icon}
      </div>
    </div>
  </div>
)

const DashboardPage: React.FC = () => {
  const { t } = useTranslation()

  const stats = [
    {
      title: t('dashboard.totalEmployees'),
      value: '1,234',
      change: '+12%',
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: t('dashboard.activeProjects'),
      value: '45',
      change: '+8%',
      changeType: 'positive' as const,
      icon: <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
    },
    {
      title: t('dashboard.pendingTasks'),
      value: '89',
      change: '-5%',
      changeType: 'negative' as const,
      icon: <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
    },
    {
      title: t('dashboard.completedTasks'),
      value: '234',
      change: '+15%',
      changeType: 'positive' as const,
      icon: <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    }
  ]

  const recentActivities = [
    {
      id: 1,
      user: 'John Smith',
      action: 'completed task',
      target: 'Project Alpha',
      time: '2 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      action: 'added comment to',
      target: 'Task #1234',
      time: '5 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 3,
      user: 'Michael Brown',
      action: 'started working on',
      target: 'Project Beta',
      time: '10 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'updated profile',
      target: '',
      time: '15 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / {t('navigation.dashboard')}
      </div>

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('navigation.dashboard')}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{t('dashboard.subtitle')}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1 */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Overview</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">This Month</span>
              <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Last Month</span>
            </div>
          </div>
          <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Chart placeholder</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('dashboard.recentActivity')}</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              {t('dashboard.viewAll')}
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <img
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{activity.user}</span>
                    {' '}{activity.action}
                    {activity.target && (
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {' '}{activity.target}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('dashboard.quickActions')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Add Employee</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <Calendar className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Schedule Meeting</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">View Reports</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <PieChart className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-2" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
