import React from 'react'
import { Check } from 'lucide-react'

interface HeroProps {
  onOpenBooking: () => void
  onOpenAbout?: () => void
}

const Hero = ({ onOpenBooking, onOpenAbout }: HeroProps) => {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_100%)] opacity-40" />

      <div className="relative z-20 flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-24">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-block border-t border-b py-3 px-12" style={{ borderColor: '#FF6C0150' }}>
                  <p className="text-sm md:text-base uppercase tracking-[0.3em] font-light" style={{ color: '#FF6C01' }}>
                    International DJ & Producer
                  </p>
                </div>
              </div>

              <div className="relative border-2 inline-block px-8 py-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Feel the Vibes of Ibiza<br />
                  <span style={{ color: '#FF0000' }}>HOUSE MUSIC ON</span>
                </h1>
              </div>

              <div className="relative inline-block mt-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span
                    className="inline-block relative px-8 py-3"
                    style={{
                      color: '#FFFFFF',
                      background: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                      filter: 'drop-shadow(0 0 20px rgba(255, 108, 1, 0.4))'
                    }}
                  >
                    Gery White
                  </span>
                </h2>
              </div>

              <div className="space-y-2 pt-6">
                <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ color: '#FF0000' }}>
                  Gery White - int. DJ & Produzent
                </p>
                <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ color: '#FF0000' }}>
                  Worldwide Shows
                </p>
                <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ color: '#FF0000' }}>
                  EDM Lover
                </p>
              </div>

              <div className="space-y-4 pt-6">
                {[
                  'House | Tech-House | Minimal - House - Balearic House...',
                  'Internationale Shows & Events',
                  'Clubsound & Ibiza-Vibes'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(255, 108, 1, 0.2)' }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#FF6C01' }} />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="group relative overflow-hidden px-10 py-5 transition-all duration-500"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                    boxShadow: '0 0 0 rgba(255, 108, 1, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 108, 1, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 108, 1, 0.4)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-black font-bold text-base tracking-wide uppercase">
                    Jetzt buchen
                  </span>
                </button>
                <button
                  onClick={() => scrollTo('music')}
                  className="group relative overflow-hidden border px-10 py-5 backdrop-blur-sm transition-all duration-500 hover:bg-white/5"
                  style={{ borderColor: 'rgba(255, 108, 1, 0.4)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.8)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.4)'
                  }}
                >
                  <span className="relative text-white font-bold text-base tracking-wide uppercase">
                    Music hören
                  </span>
                </button>
              </div>

            </div>

            <div className="relative lg:block">
              <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                <img
                  src="https://i.imgur.com/Vvzz09k.jpeg"
                  alt="DJ Gery White Performance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xl md:text-2xl font-bold text-white">DJ Gery White</div>
                  <div className="text-sm text-gray-300">International DJ & Producer</div>
                  <button
                    onClick={onOpenAbout}
                    className="mt-4 text-sm font-semibold hover:text-orange-400 transition-colors flex items-center gap-2"
                    style={{ color: '#FF6C01' }}
                  >
                    Mehr erfahren →
                  </button>
                </div>
              </div>
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(255, 108, 1, 0.3), transparent)' }}
              />
            </div>
          </div>

          <div className="pt-12 flex justify-center lg:justify-start">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-lg hover:bg-white/15 transition-all duration-300 inline-flex items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
              </svg>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC04">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold text-lg">5.0</span>
                  <span className="text-gray-300 text-xs">Top bewertet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-black/50 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 'HOUSE', label: 'Tech & Deep' },
              { value: 'IBIZA', label: 'Vibes' },
              { value: 'GLOBAL', label: 'Shows' },
              { value: 'LIVE', label: 'Energy' }
            ].map((stat, index) => (
              <div key={index} className="group text-center space-y-3 cursor-default">
                <div className="relative">
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #FF6C01, #FF8C3A)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(to bottom right, transparent, rgba(255, 108, 1, 0.05), transparent)' }}
                  />
                </div>
                <div
                  className="h-px w-12 mx-auto"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(255, 108, 1, 0.4), transparent)' }}
                />
                <div className="text-xs md:text-sm text-gray-400/80 uppercase tracking-[0.2em] font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
