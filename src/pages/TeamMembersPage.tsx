import React, { useState } from 'react'
import { Search, Plus, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface TeamMember {
  id: string
  name: string
  username: string
  email: string
  status: 'active' | 'offline'
  teams: string[]
  avatar: string
}

const TeamMembersPage: React.FC = () => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Smith',
      username: '@j.smith',
      email: 'johnsmith@dashco.com',
      status: 'active',
      teams: ['Design', 'Production'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      username: '@s.johnson',
      email: 'sarahjohnson@dashco.com',
      status: 'active',
      teams: ['Development'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Michael Brown',
      username: '@m.brown',
      email: 'michaelbrown@dashco.com',
      status: 'active',
      teams: ['Marketing'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '4',
      name: 'Emily Davis',
      username: '@e.davis',
      email: 'emilydavis@dashco.com',
      status: 'active',
      teams: ['Design'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '5',
      name: 'David Wilson',
      username: '@d.wilson',
      email: 'davidwilson@dashco.com',
      status: 'active',
      teams: ['Development', 'Management'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '6',
      name: 'Aditi Sharma',
      username: '@a.sharma',
      email: 'aditisharma@dashco.com',
      status: 'offline',
      teams: ['Marketing'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '7',
      name: 'Ahmed Medi',
      username: '@a.medi',
      email: 'ahmedmedi@dashco.com',
      status: 'active',
      teams: ['Development'],
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face'
    }
  ]

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.teams.some(team => team.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleSelectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([])
    } else {
      setSelectedMembers(filteredMembers.map(member => member.id))
    }
  }

  const handleSelectMember = (memberId: string) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    )
  }

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-500' : 'bg-gray-500'
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / {t('teamMembers.title')}
      </div>

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('teamMembers.title')}</h1>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-400" />
          <input
            type="text"
            placeholder={t('teamMembers.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Add Team Member Button */}
        <Button icon={<Plus className="w-4 h-4" />}>
          {t('teamMembers.addTeamMember')}
        </Button>
      </div>

             {/* Table */}
       <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
                         <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedMembers.length === filteredMembers.length && filteredMembers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-800"
                  />
                </th>
                                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   {t('teamMembers.name')}
                 </th>
                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   <div className="flex items-center">
                     {t('teamMembers.status')}
                     <ChevronDown className="w-4 h-4 ml-1" />
                   </div>
                 </th>
                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   {t('teamMembers.emailAddress')}
                 </th>
                 <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   {t('teamMembers.teams')}
                 </th>
              </tr>
            </thead>
                         <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
               {filteredMembers.map((member) => (
                 <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => handleSelectMember(member.id)}
                      className="rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3"
                        src={member.avatar}
                        alt={member.name}
                      />
                      <div>
                                                 <div className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</div>
                         <div className="text-sm text-gray-500 dark:text-gray-400">{member.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                                         <span className={cn(
                       "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                       member.status === 'active' 
                         ? "bg-green-100 dark:bg-gray-700 text-green-800 dark:text-white" 
                         : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                     )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", getStatusColor(member.status))}></span>
                      {member.status}
                    </span>
                  </td>
                                     <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                     {member.email}
                   </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {member.teams.map((team) => (
                                                 <span
                           key={team}
                           className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300"
                         >
                          {team}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeamMembersPage
