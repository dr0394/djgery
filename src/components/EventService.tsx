import React from 'react'
import { Music2, Radio, Disc3, Headphones } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const EventService = () => {
  const { t } = useLanguage()

  const categoryIcons = [Music2, Disc3, Radio, Headphones]

  return (
    <section id="music" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span
                  className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
                  style={{
                    color: '#FF6C01',
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.05)'
                  }}
                >
                  {t.music.badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t.music.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed">
                {t.music.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {t.music.categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                    style={{
                      borderColor: 'rgba(0, 217, 255, 0.3)',
                      backgroundColor: 'rgba(0, 217, 255, 0.1)'
                    }}
                  >
                    {React.createElement(categoryIcons[index], { className: 'w-6 h-6', style: { color: '#00D9FF' } })}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="cm-widget-soundcloud rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <iframe
                  src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1260797059&show_artwork=true&show_comments=true"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  title="SoundCloud Player"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DJ Gery White Live Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {t.music.liveTitle}
                    </h3>
                    <p className="text-gray-300/90 leading-relaxed">
                      {t.music.liveSubtitle}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {t.music.liveItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#00D9FF' }}
                        />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventService
