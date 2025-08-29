import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  LayoutDashboard,
  BookOpen,
  Users,
  Award,
  BarChart3,
  Calendar,
  Settings,
  LogOut,
  ChevronDown,
  Play,
  CheckSquare,
  FileText,
  Video,
  MessageSquare,
  User,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';


interface TrainerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavChild {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  badge?: string | number | null; // `?` makes this property optional
}

interface NavGroup {
  name: string;
  icon: React.ComponentType<any>;
  children: NavChild[];
}

// Create a discriminated union type
type NavigationItem = NavItem | NavGroup;

// ---
// Sidebar Component
// ---

const TrainerSidebar = ({ isOpen, onClose }: TrainerSidebarProps) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const navigation: NavigationItem[] = [
    {
      name: 'Dashboard',
      href: '/trainer',
      icon: LayoutDashboard,
    },
    {
      name: 'Training Programs',
      icon: BookOpen,
      children: [
        { name: 'All Programs', href: '/trainer/programs' },
        { name: 'Create Program', href: '/trainer/create-program' },
        { name: 'Program Templates', href: '/trainer/templates' },
        { name: 'Archived Programs', href: '/trainer/archived' },
      ],
    },
    {
      name: 'Course Management',
      icon: Video,
      children: [
        { name: 'All Courses', href: '/trainer/courses' },
        { name: 'Create Course', href: '/trainer/create-course' },
        { name: 'Content Library', href: '/trainer/content-library' },
        { name: 'Course Categories', href: '/trainer/categories' },
        { name: 'Learning Paths', href: '/trainer/learning-paths' },
      ],
    },
    {
      name: 'Learner Management',
      icon: Users,
      children: [
        { name: 'All Learners', href: '/trainer/learners' },
        { name: 'Enrollment Management', href: '/trainer/enrollments' },
        { name: 'Learning Groups', href: '/trainer/groups' },
        { name: 'Individual Progress', href: '/trainer/individual-progress' },
        { name: 'Skill Assessments', href: '/trainer/assessments' },
      ],
    },
    {
      name: 'Assessments & Quizzes',
      icon: CheckSquare,
      children: [
        { name: 'Create Assessment', href: '/trainer/create-assessment' },
        { name: 'Question Bank', href: '/trainer/question-bank' },
        { name: 'Quiz Results', href: '/trainer/quiz-results' },
        { name: 'Grading & Feedback', href: '/trainer/grading' },
        { name: 'Certification Tests', href: '/trainer/certification-tests' },
      ],
    },
    {
      name: 'Certifications',
      icon: Award,
      children: [
        { name: 'Certification Programs', href: '/trainer/certifications' },
        { name: 'Issue Certificates', href: '/trainer/issue-certificates' },
        { name: 'Certificate Templates', href: '/trainer/certificate-templates' },
        { name: 'Verification System', href: '/trainer/verification' },
        { name: 'Renewal Management', href: '/trainer/renewals' },
      ],
    },
    {
      name: 'Skill Development',
      icon: TrendingUp,
      children: [
        { name: 'Skill Matrix', href: '/trainer/skill-matrix' },
        { name: 'Competency Framework', href: '/trainer/competency' },
        { name: 'Skill Gap Analysis', href: '/trainer/skill-gaps' },
        { name: 'Career Development', href: '/trainer/career-development' },
        { name: 'Personal Development Plans', href: '/trainer/pdp' },
      ],
    },
    {
      name: 'Schedule & Sessions',
      icon: Calendar,
      children: [
        { name: 'Training Calendar', href: '/trainer/calendar' },
        { name: 'Live Sessions', href: '/trainer/live-sessions' },
        { name: 'Webinar Management', href: '/trainer/webinars' },
        { name: 'Room Booking', href: '/trainer/room-booking' },
        { name: 'Instructor Schedule', href: '/trainer/instructor-schedule' },
      ],
    },
    {
      name: 'Analytics & Reports',
      icon: BarChart3,
      children: [
        { name: 'Training Dashboard', href: '/trainer/analytics' },
        { name: 'Completion Reports', href: '/trainer/completion-reports' },
        { name: 'Effectiveness Analysis', href: '/trainer/effectiveness' },
        { name: 'ROI Analysis', href: '/trainer/roi-analysis' },
        { name: 'Custom Reports', href: '/trainer/custom-reports' },
      ],
    },
    {
      name: 'Resources & Materials',
      icon: FileText,
      children: [
        { name: 'Resource Library', href: '/trainer/resources' },
        { name: 'Upload Materials', href: '/trainer/upload-materials' },
        { name: 'Document Management', href: '/trainer/documents' },
        { name: 'External Resources', href: '/trainer/external-resources' },
      ],
    },
    {
      name: 'AI Training Recommendations',
      icon: Lightbulb,
      children: [
        { name: 'Personalized Recommendations', href: '/trainer/ai-recommendations' },
        { name: 'Learning Analytics', href: '/trainer/learning-analytics' },
        { name: 'Performance Predictions', href: '/trainer/predictions' },
        { name: 'Adaptive Learning', href: '/trainer/adaptive-learning' },
      ],
    },
    {
      name: 'Communication',
      icon: MessageSquare,
      children: [
        { name: 'Announcements', href: '/trainer/announcements' },
        { name: 'Discussion Forums', href: '/trainer/forums' },
        { name: 'Learner Feedback', href: '/trainer/feedback' },
        { name: 'Instructor Messages', href: '/trainer/messages' },
      ],
    },
    {
      name: 'My Profile',
      href: '/trainer/profile',
      icon: User,
    },
    {
      name: 'Settings',
      icon: Settings,
      href: '/trainer/settings',
    },
  ];

  const toggleMenu = (menuName: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuName) ? prev.filter((name) => name !== menuName) : [...prev, menuName]
    );
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-64 transform flex-col bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-600 mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">HR Pro</h1>
              <p className="text-xs text-gray-500">Trainer Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded lg:hidden hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {navigation.map((item) => {
            if ('href' in item) {
              // Single menu item
              const isItemActive = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isItemActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto px-2 py-1 text-xs text-red-800 rounded-full bg-red-100">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            } else {
              // Menu with children
              const isExpanded = expandedMenus.includes(item.name);
              const hasActiveChild = item.children.some((child) => isActive(child.href));

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      hasActiveChild
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon size={20} className="mr-3" />
                      {item.name}
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-1 ml-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                            isActive(child.href)
                              ? 'bg-primary-100 text-primary-700'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center px-3 py-2 text-sm text-gray-700">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 mr-3">
              <span className="text-xs font-medium">TR</span>
            </div>
            <div>
              <p className="font-medium">Training Manager</p>
              <p className="text-xs text-gray-500">trainer@company.com</p>
            </div>
          </div>
          <button className="flex items-center w-full px-3 py-2 mt-3 text-sm text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-100">
            <LogOut size={20} className="mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default TrainerSidebar;