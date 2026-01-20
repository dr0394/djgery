import React from 'react'
import { X, Music, Award, Globe, Heart, Sparkles, Radio } from 'lucide-react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl shadow-2xl border animate-in zoom-in-95 duration-300"
        style={{
          borderColor: 'rgba(255, 108, 1, 0.2)',
          boxShadow: '0 0 80px rgba(255, 108, 1, 0.15)'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,108,1,0.08)_0%,_transparent_50%)] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
          style={{
            backgroundColor: 'rgba(255, 108, 1, 0.1)',
            border: '1px solid rgba(255, 108, 1, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.2)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: 'linear-gradient(to bottom right, rgba(255, 108, 1, 0.3), rgba(255, 140, 58, 0.2))' }}
                />
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2"
                  style={{ borderColor: 'rgba(255, 108, 1, 0.3)' }}
                >
                  <img
                    src="https://i.imgur.com/Vvzz09k.jpeg"
                    alt="DJ Gery White"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #FF6C01, #FF8C3A)',
                          boxShadow: '0 0 20px rgba(255, 108, 1, 0.5)'
                        }}
                      >
                        <Music className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">DJ Gery White</div>
                        <div className="text-sm" style={{ color: '#FF6C01' }}>International DJ & Producer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Award,
                    value: '15+',
                    label: 'Jahre Erfahrung'
                  },
                  {
                    icon: Sparkles,
                    value: '300+',
                    label: 'Club Shows'
                  },
                  {
                    icon: Globe,
                    value: '20+',
                    label: 'Länder'
                  },
                  {
                    icon: Radio,
                    value: '100%',
                    label: 'House Music'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(255, 108, 1, 0.05)',
                      borderColor: 'rgba(255, 108, 1, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.2)'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity"
                      style={{ background: 'radial-gradient(circle, rgba(255, 108, 1, 0.4), transparent)' }}
                    />
                    <div className="relative flex flex-col items-center text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: 'rgba(255, 108, 1, 0.15)'
                        }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: '#FF6C01' }} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
                  style={{
                    background: 'linear-gradient(to right, rgba(255, 108, 1, 0.1), rgba(255, 140, 58, 0.1))',
                    borderColor: 'rgba(255, 108, 1, 0.3)'
                  }}
                >
                  <Heart className="w-4 h-4" style={{ color: '#FF6C01' }} />
                  <span className="text-sm uppercase tracking-[0.25em] font-bold" style={{ color: '#FF6C01' }}>
                    About DJ Gery White
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  International DJ & Producer<br />
                  <span
                    className="inline-block bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)' }}
                  >
                    Feel the Vibe, Ignite the Dancefloor
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-300/90 leading-relaxed">
                <p className="text-lg">
                  DJ Gery White ist ein internationaler <span className="font-bold text-white">DJ & Produzent</span>, der weltweit Dancefloors zum Beben bringt. Mit über 15 Jahren Erfahrung und mehr als 300 Club Shows hat er sich in der internationalen House-Szene einen Namen gemacht.
                </p>

                <p>
                  Von den legendären <span className="font-bold text-white">Clubs in Ibiza</span> bis zu Underground-Locations in Berlin – DJ Gery White steht für energiegeladene Sets voller <span className="font-bold text-white">House, Tech-House, Afro und Progressive Beats</span>. Seine Musik verbindet treibende Grooves mit melodischen Elementen und sorgt für unvergessliche Nächte.
                </p>

                <p>
                  Mit Shows in über <span className="font-bold text-white">20 Ländern</span> und Auftritten auf internationalen Festivals bringt DJ Gery White die authentische Ibiza-Energie auf jede Bühne. Seine Produktionen und DJ-Sets sind geprägt von pulsierenden Basslines, hypnotischen Melodies und einer unvergleichlichen Dancefloor-Energie.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl p-6 border backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 108, 1, 0.1), rgba(255, 140, 58, 0.05))',
                  borderColor: 'rgba(255, 108, 1, 0.3)'
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, #FF6C01, #FF8C3A)' }} />
                <div className="relative flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 108, 1, 0.2)' }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: '#FF6C01' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">The Journey</p>
                    <p className="text-sm text-gray-300/90 leading-relaxed italic">
                      "From underground clubs to festival main stages - my mission is to create an atmosphere where music becomes an experience. Every set tells a story, every beat connects souls on the dancefloor."
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    'House Music',
                    'Tech-House',
                    'Afro House',
                    'Progressive',
                    'Club Shows',
                    'Festival DJ',
                    'Music Producer',
                    'Ibiza Vibes'
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-xs font-medium border backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(255, 108, 1, 0.05)',
                        borderColor: 'rgba(255, 108, 1, 0.2)',
                        color: '#FF8C3A'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
