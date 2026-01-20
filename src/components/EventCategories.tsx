import React, { useState } from 'react'
import { Music, Users, Disc, PartyPopper, CalendarDays, Sparkles } from 'lucide-react'
import EventPackageModal from './EventPackageModal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const EventCategories = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    {
      icon: Music,
      title: t.events.clubs.title,
      description: t.events.clubs.description,
      emoji: '🎧',
      packages: [
        {
          name: 'Club Night',
          price: 'auf Anfrage',
          features: [
            '2-4 Stunden Live Set',
            'House & Tech-House',
            'Eigenes Equipment',
            'Professionelle Performance',
            'Crowd Engagement'
          ],
          popular: true
        }
      ]
    },
    {
      icon: Disc,
      title: t.events.festivals.title,
      description: t.events.festivals.description,
      emoji: '🎪',
      packages: [
        {
          name: 'Festival Set',
          price: 'auf Anfrage',
          features: [
            '1-3 Stunden Performance',
            'Maßgeschneidertes Set',
            'Festival-Experience',
            'High-Energy Performance',
            'Internationale Bühnen'
          ],
          popular: true
        }
      ]
    },
    {
      icon: Users,
      title: t.events.private.title,
      description: t.events.private.description,
      emoji: '💎',
      packages: [
        {
          name: 'Private Party',
          price: 'auf Anfrage',
          features: [
            'Individuelle Set-Länge',
            'Personalisierte Musikauswahl',
            'Professionelle Ausrüstung',
            'Flexible Planung',
            'Premium Service'
          ],
          popular: true
        }
      ]
    },
    {
      icon: PartyPopper,
      title: t.events.corporate.title,
      description: t.events.corporate.description,
      emoji: '🎉',
      packages: [
        {
          name: 'Corporate Booking',
          price: 'auf Anfrage',
          features: [
            'Business-gerechte Sets',
            'Professionelle Präsentation',
            'Flexibles Timing',
            'Hochwertige Technik',
            'Verlässliche Durchführung'
          ]
        }
      ]
    },
    {
      icon: CalendarDays,
      title: t.events.radio.title,
      description: t.events.radio.description,
      emoji: '📻',
      packages: [
        {
          name: 'Radio Show',
          price: 'auf Anfrage',
          features: [
            '1-2 Stunden Mix',
            'Exklusive Tracks',
            'Live oder Pre-recorded',
            'Professionelle Qualität',
            'Streaming-ready'
          ]
        }
      ]
    },
    {
      icon: Sparkles,
      title: t.events.special.title,
      description: t.events.special.description,
      emoji: '✨',
      packages: [
        {
          name: 'Special Booking',
          price: 'auf Anfrage',
          features: [
            'Unique Locations',
            'Sunset Sessions',
            'Ibiza-Style Sets',
            'Atmosphärische Musik',
            'Unvergessliche Momente'
          ]
        }
      ]
    }
  ]

  return (
    <section id="events" className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-24">
          <div className="inline-block">
            <span
              className="text-base uppercase tracking-[0.3em] font-bold px-8 py-3 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.events.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6 leading-tight">
            {t.events.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            {t.events.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(category.title)}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 rounded-2xl p-10 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl"
              style={{
                borderColor: 'rgba(255, 108, 1, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.6)'
                e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(255, 108, 1, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{
                      borderColor: 'rgba(255, 108, 1, 0.5)',
                      backgroundColor: 'rgba(255, 108, 1, 0.15)'
                    }}
                  >
                    <category.icon className="w-8 h-8" style={{ color: '#FF6C01' }} />
                  </div>
                  <span className="text-5xl">{category.emoji}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300/90 leading-relaxed text-lg">{category.description}</p>
                </div>

                <div className="pt-3">
                  <span className="text-base font-bold group-hover:translate-x-2 inline-block transition-transform duration-300" style={{ color: '#FF6C01' }}>
                    {t.events.cta} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventPackageModal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        eventType={selectedEvent || ''}
        packages={categories.find(c => c.title === selectedEvent)?.packages || []}
      />
    </section>
  )
}

export default EventCategories
