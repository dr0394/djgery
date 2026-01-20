import React from 'react'
import { Music4, Mic, HeadphonesIcon, ListMusic } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const DJDetails = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="sound" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
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
              {t.sound.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.sound.title}
          </h2>
          <div className="max-w-4xl mx-auto border-2 p-6 rounded-lg" style={{ borderColor: '#FF0000' }}>
            <p className="text-xl md:text-2xl font-bold leading-relaxed" style={{ color: '#FF0000' }}>
              {t.sound.subtitle}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t.sound.genresTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {t.sound.genres.map((genre, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <Music4 className="w-5 h-5 flex-shrink-0" style={{ color: '#FF6C01' }} />
                  <span className="text-sm text-white font-medium">{genre}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <ListMusic className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{t.sound.dynamicSets.title}</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    {t.sound.dynamicSets.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <Mic className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{t.sound.producer.title}</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    {t.sound.producer.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <HeadphonesIcon className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{t.sound.experience.title}</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    {t.sound.experience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-950/20 to-slate-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t.sound.journeyTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              {[t.sound.buildUp, t.sound.peakTime, t.sound.journey].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div
                    className="text-5xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #00D9FF, #0EA5E9)' }}
                  >
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-gray-300/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DJDetails
