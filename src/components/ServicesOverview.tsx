import React from 'react'
import { Music, Settings, Camera } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const ServicesOverview = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: Music,
      title: t.services.djService.title,
      description: t.services.djService.description,
      features: t.services.djService.features,
      color: '#FF6C01',
      colorRgb: '255, 108, 1'
    },
    {
      icon: Settings,
      title: t.services.equipment.title,
      description: t.services.equipment.description,
      features: t.services.equipment.features,
      color: '#FF6B35',
      colorRgb: '255, 107, 53'
    },
    {
      icon: Camera,
      title: t.services.photography.title,
      description: t.services.photography.description,
      features: t.services.photography.features,
      color: '#FF2E97',
      colorRgb: '255, 46, 151'
    }
  ]

  return (
    <section id="leistungen" className="relative py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-24">
          <div className="inline-block">
            <span
              className="text-base uppercase tracking-[0.3em] font-bold px-8 py-3 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.services.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
            {t.services.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 rounded-2xl p-10 transition-all duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl"
              style={{
                borderColor: `rgba(${service.colorRgb}, 0.3)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${service.colorRgb}, 0.6)`
                e.currentTarget.style.boxShadow = `0 20px 60px -15px rgba(${service.colorRgb}, 0.3)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${service.colorRgb}, 0.3)`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom right, rgba(${service.colorRgb}, 0.12), transparent)`
                }}
              />

              <div className="relative space-y-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{
                    borderColor: `rgba(${service.colorRgb}, 0.5)`,
                    backgroundColor: `rgba(${service.colorRgb}, 0.2)`
                  }}
                >
                  <service.icon className="w-10 h-10" style={{ color: service.color }} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300/90 leading-relaxed text-lg">{service.description}</p>
                </div>

                <div
                  className="h-px"
                  style={{ background: `linear-gradient(to right, rgba(${service.colorRgb}, 0.5), transparent)` }}
                />

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-base text-gray-300/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
