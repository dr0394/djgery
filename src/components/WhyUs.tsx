import React from 'react'
import { Award, Heart, Shield, Clock, Users, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const WhyUs = () => {
  const { t } = useLanguage()

  const icons = [Award, Shield, Clock, Users, Heart, Sparkles]
  const reasons = t.whyUs.reasons.map((reason, index) => ({
    icon: icons[index],
    ...reason
  }))

  return (
    <section id="vorteile" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.whyUs.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
            {t.whyUs.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.1)'
                  }}
                >
                  <reason.icon className="w-7 h-7" style={{ color: '#FF6C01' }} />
                </div>

                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-gray-300/80 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
