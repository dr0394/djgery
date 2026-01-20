import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import LanguageSwitcher from './LanguageSwitcher'

interface NavigationProps {
  onOpenBooking: () => void
  onOpenAbout: () => void
}

const Navigation = ({ onOpenBooking, onOpenAbout }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/NO3LvhY.png"
              alt="DJ Gery White Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollTo('leistungen')} className="text-gray-800 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo('events')} className="text-gray-800 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {t.nav.events}
            </button>
            <button onClick={() => scrollTo('sound')} className="text-gray-800 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {t.nav.sound}
            </button>
            <button onClick={() => scrollTo('galerie')} className="text-gray-800 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollTo('kontakt')} className="text-gray-800 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {t.nav.contact}
            </button>

            <LanguageSwitcher />

            <button
              onClick={onOpenBooking}
              className="group relative overflow-hidden px-6 py-2.5 ml-4 transition-all duration-300 rounded"
              style={{
                backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                boxShadow: '0 0 0 rgba(255, 108, 1, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 108, 1, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 108, 1, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-black font-bold text-sm tracking-wider uppercase">
                {t.hero.cta}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollTo('leistungen')} className="block w-full text-left text-gray-800 hover:text-orange-500 transition-colors py-2 text-sm uppercase tracking-wider font-medium">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo('events')} className="block w-full text-left text-gray-800 hover:text-orange-500 transition-colors py-2 text-sm uppercase tracking-wider font-medium">
              {t.nav.events}
            </button>
            <button onClick={() => scrollTo('sound')} className="block w-full text-left text-gray-800 hover:text-orange-500 transition-colors py-2 text-sm uppercase tracking-wider font-medium">
              {t.nav.sound}
            </button>
            <button onClick={() => scrollTo('galerie')} className="block w-full text-left text-gray-800 hover:text-orange-500 transition-colors py-2 text-sm uppercase tracking-wider font-medium">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollTo('kontakt')} className="block w-full text-left text-gray-800 hover:text-orange-500 transition-colors py-2 text-sm uppercase tracking-wider font-medium">
              {t.nav.contact}
            </button>

            <div className="py-2">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => {
                onOpenBooking()
                setIsOpen(false)
              }}
              className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded text-sm tracking-wider uppercase"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
