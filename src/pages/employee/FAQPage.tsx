import React, { useState } from 'react'
import { Search, ChevronDown, ChevronUp, FileText, Calendar, DollarSign, Clock, Users, Shield, BookOpen, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
  tags: string[]
  helpful: number
  notHelpful: number
}

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const categories = [
    { id: 'all', name: 'All Categories', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'leave', name: 'Leave & Time Off', icon: <Calendar className="w-5 h-5" /> },
    { id: 'payroll', name: 'Payroll & Benefits', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'attendance', name: 'Time & Attendance', icon: <Clock className="w-5 h-5" /> },
    { id: 'policies', name: 'Company Policies', icon: <FileText className="w-5 h-5" /> },
    { id: 'training', name: 'Training & Development', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'hr', name: 'HR Services', icon: <Users className="w-5 h-5" /> },
    { id: 'security', name: 'Security & Privacy', icon: <Shield className="w-5 h-5" /> }
  ]

  const faqData: FAQItem[] = [
    {
      id: '1',
      category: 'leave',
      question: 'How do I request time off?',
      answer: 'To request time off, go to Leave Management > Request Leave in your employee portal. Fill out the form with your start date, end date, leave type, and reason. Your manager will be notified automatically for approval. You can track the status of your request in the Leave History section.',
      tags: ['time off', 'vacation', 'request'],
      helpful: 45,
      notHelpful: 2
    },
    {
      id: '2',
      category: 'leave',
      question: 'How many vacation days do I have?',
      answer: 'You can view your leave balance in the Leave Management > Leave Balance section. This shows your available vacation days, sick days, and other leave types. Your balance is updated in real-time as you use leave or as new leave is accrued.',
      tags: ['vacation', 'balance', 'sick days'],
      helpful: 38,
      notHelpful: 1
    },
    {
      id: '3',
      category: 'payroll',
      question: 'When will I receive my paycheck?',
      answer: 'Paychecks are processed every other Friday and deposited to your account by the following Monday. You can view your pay schedule and download pay stubs in the Payroll section. Direct deposit information can be updated in your profile settings.',
      tags: ['paycheck', 'payroll', 'direct deposit'],
      helpful: 52,
      notHelpful: 0
    },
    {
      id: '4',
      category: 'payroll',
      question: 'How do I update my direct deposit information?',
      answer: 'To update your direct deposit information, go to Settings > Payroll Information. You can add or modify your bank account details. Changes take effect for the next pay period. You can also contact HR for assistance.',
      tags: ['direct deposit', 'bank account', 'payroll'],
      helpful: 29,
      notHelpful: 3
    },
    {
      id: '5',
      category: 'attendance',
      question: 'How do I clock in and out?',
      answer: 'You can clock in/out using the Time Tracking feature in your dashboard. Click the "Clock In" or "Clock Out" button, or use the mobile app. Your location will be verified for accuracy. If you forget to clock out, you can submit a time correction request.',
      tags: ['clock in', 'clock out', 'time tracking'],
      helpful: 67,
      notHelpful: 1
    },
    {
      id: '6',
      category: 'attendance',
      question: 'What if I forget to clock out?',
      answer: 'If you forget to clock out, you can submit a time correction request in the Time Tracking section. Select the date and time you actually left, provide a reason, and submit for manager approval. This should be done within 48 hours.',
      tags: ['time correction', 'forgot to clock out'],
      helpful: 41,
      notHelpful: 2
    },
    {
      id: '7',
      category: 'policies',
      question: 'Where can I find company policies?',
      answer: 'All company policies are available in the Documents section under "Company Policies". This includes the Employee Handbook, Code of Conduct, and other important documents. Policies are searchable and regularly updated.',
      tags: ['policies', 'handbook', 'documents'],
      helpful: 34,
      notHelpful: 1
    },
    {
      id: '8',
      category: 'policies',
      question: 'What is the dress code?',
      answer: 'Our dress code is business casual Monday through Thursday, and casual Friday. Please refer to the Employee Handbook for detailed guidelines on appropriate attire. Special events may have different dress code requirements.',
      tags: ['dress code', 'attire', 'business casual'],
      helpful: 28,
      notHelpful: 4
    },
    {
      id: '9',
      category: 'training',
      question: 'How do I access training courses?',
      answer: 'Training courses are available in the Learning & Development section. You can browse available courses, enroll in programs, and track your progress. Some courses are mandatory and will be assigned to you automatically.',
      tags: ['training', 'courses', 'learning'],
      helpful: 31,
      notHelpful: 2
    },
    {
      id: '10',
      category: 'training',
      question: 'Can I request specific training?',
      answer: 'Yes, you can request specific training through the Learning & Development section. Submit a training request with details about the course or skill you want to develop. Your manager will review and approve based on business needs.',
      tags: ['training request', 'skill development'],
      helpful: 23,
      notHelpful: 1
    },
    {
      id: '11',
      category: 'hr',
      question: 'How do I update my personal information?',
      answer: 'You can update your personal information in Settings > Profile. This includes contact details, emergency contacts, and other personal information. Some changes may require HR approval and will be reviewed within 24 hours.',
      tags: ['personal information', 'profile', 'contact details'],
      helpful: 39,
      notHelpful: 1
    },
    {
      id: '12',
      category: 'hr',
      question: 'How do I report a workplace issue?',
      answer: 'To report a workplace issue, you can contact HR directly through the Messages section or use the anonymous reporting feature in the HR Services section. All reports are taken seriously and handled confidentially.',
      tags: ['workplace issue', 'reporting', 'hr contact'],
      helpful: 19,
      notHelpful: 0
    },
    {
      id: '13',
      category: 'security',
      question: 'How do I reset my password?',
      answer: 'To reset your password, click the "Forgot Password" link on the login page. You will receive an email with a reset link. If you have trouble, contact IT support through the Help Desk section.',
      tags: ['password', 'reset', 'login'],
      helpful: 56,
      notHelpful: 2
    },
    {
      id: '14',
      category: 'security',
      question: 'Is my personal data secure?',
      answer: 'Yes, we take data security seriously. All personal information is encrypted and stored securely. We comply with data protection regulations and have strict access controls. You can review our privacy policy in the Documents section.',
      tags: ['security', 'privacy', 'data protection'],
      helpful: 42,
      notHelpful: 1
    }
  ]

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const handleFeedback = (id: string, type: 'helpful' | 'notHelpful') => {
    // In a real app, this would send feedback to the backend
    console.log(`Feedback for FAQ ${id}: ${type}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-blue-100">Find answers to common questions about HR policies, procedures, and services.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.slice(1).map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          filteredFAQs.map(faq => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      {categories.find(cat => cat.id === faq.category)?.icon}
                      {categories.find(cat => cat.id === faq.category)?.name}
                    </span>
                    <span>{faq.helpful} found helpful</span>
                  </div>
                </div>
                {expandedItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedItems.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 mb-4 leading-relaxed">{faq.answer}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {faq.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Feedback */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">Was this helpful?</span>
                      <button
                        onClick={() => handleFeedback(faq.id, 'helpful')}
                        className="flex items-center gap-1 text-green-600 hover:text-green-700"
                      >
                        <span>👍</span>
                        Yes ({faq.helpful})
                      </button>
                      <button
                        onClick={() => handleFeedback(faq.id, 'notHelpful')}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700"
                      >
                        <span>👎</span>
                        No ({faq.notHelpful})
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Contact HR */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Still need help?</h3>
        <p className="text-blue-700 mb-4">
          Can't find what you're looking for? Our HR team is here to help.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-blue-800 mb-1">Email Support</h4>
            <p className="text-blue-700">hr@company.com</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-1">Phone Support</h4>
            <p className="text-blue-700">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-1">Office Hours</h4>
            <p className="text-blue-700">Mon-Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
