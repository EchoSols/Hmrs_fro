import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: t('languages.en'), flag: '🇺🇸' },
    { code: 'fr', name: t('languages.fr'), flag: '🇫🇷' },
    { code: 'rw', name: t('languages.rw'), flag: '🇷🇼' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
      >
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="hidden sm:block text-xs">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={cn(
          "w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-2xl z-20">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-2 text-sm text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200",
                    i18n.language === language.code && "bg-white/10 text-white"
                  )}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {i18n.language === language.code && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher
