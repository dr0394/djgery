import React from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const handleInstagram = () => {
    window.open('https://www.instagram.com/djgerywhite', '_blank')
  }

  return (
    <section id="kontakt" className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <span
              className="text-base uppercase tracking-[0.3em] font-bold px-8 py-3 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.contact.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            {t.contact.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-2 rounded-2xl p-10 hover:scale-105 transition-all duration-500 backdrop-blur-sm text-center hover:shadow-2xl"
            style={{ borderColor: 'rgba(255, 108, 1, 0.3)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.6)'
              e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(255, 108, 1, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.3)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ backgroundColor: 'rgba(255, 108, 1, 0.15)', borderColor: 'rgba(255, 108, 1, 0.5)', borderWidth: '2px' }}>
              <Mail className="w-10 h-10" style={{ color: '#FF6C01' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.contact.email}</h3>
            <a href="mailto:booking@djgerywhite.com" className="text-gray-300 hover:text-orange-400 transition-colors text-lg block break-all">
              booking@djgerywhite.com
            </a>
          </div>

          <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-2 rounded-2xl p-10 hover:scale-105 transition-all duration-500 backdrop-blur-sm text-center hover:shadow-2xl"
            style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.6)'
              e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(147, 51, 234, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ backgroundColor: 'rgba(147, 51, 234, 0.15)', borderColor: 'rgba(147, 51, 234, 0.5)', borderWidth: '2px' }}>
              <MessageCircle className="w-10 h-10" style={{ color: '#9333EA' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.contact.instagram}</h3>
            <button
              onClick={handleInstagram}
              className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
            >
              @djgerywhite
            </button>
          </div>

          <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-2 rounded-2xl p-10 hover:scale-105 transition-all duration-500 backdrop-blur-sm text-center hover:shadow-2xl"
            style={{ borderColor: 'rgba(255, 108, 1, 0.3)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.6)'
              e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(255, 108, 1, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.3)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ backgroundColor: 'rgba(255, 108, 1, 0.15)', borderColor: 'rgba(255, 108, 1, 0.5)', borderWidth: '2px' }}>
              <Phone className="w-10 h-10" style={{ color: '#FF6C01' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.contact.agency}</h3>
            <p className="text-gray-300 text-lg">
              {t.contact.onRequest}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
