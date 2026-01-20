import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ]

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-orange-500 transition-all duration-300">
        <Globe className="w-4 h-4 text-gray-800" />
        <span className="text-gray-800 font-medium uppercase">{language}</span>
      </button>

      <div className="absolute top-full right-0 mt-2 py-2 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[120px] z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'en' | 'es' | 'de')}
            className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 transition-colors ${
              language === lang.code ? 'text-orange-500 bg-orange-50' : 'text-gray-800'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher
