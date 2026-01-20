import React from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface ProblemSolutionProps {
  onOpenBooking: () => void
}

const ProblemSolution = ({ onOpenBooking }: ProblemSolutionProps) => {
  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" style={{ color: '#FBBF24' }} />
                <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#FBBF24' }}>
                  Das Problem
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Event-Stress?<br />Nicht mit uns!
              </h2>
              <p className="text-lg text-gray-300/90 leading-relaxed">
                Die Planung einer Feier kann überwältigend sein: Läuft die Technik reibungslos?
                Wird die Stimmung gut? Kümmert sich jemand um den Ablauf?
              </p>
            </div>

            <div
              className="h-px w-24"
              style={{ background: 'linear-gradient(to right, transparent, rgba(0, 217, 255, 0.5), transparent)' }}
            />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" style={{ color: '#00D9FF' }} />
                <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#00D9FF' }}>
                  Die Lösung
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ihr Rundum-Sorglos-Paket
              </h3>
              <p className="text-lg text-gray-300/90 leading-relaxed">
                DJ GERY WHITE liefert <strong className="text-white">professionelle Musik</strong>,
                <strong className="text-white"> zuverlässige Technik</strong> und
                <strong className="text-white"> perfekte Organisation</strong> –
                inklusive optionaler Fotobox mit rotem Teppich. Alles aus einer Hand.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="group relative overflow-hidden px-10 py-4 transition-all duration-500"
              style={{
                backgroundImage: 'linear-gradient(to right, #00D9FF, #0EA5E9)',
                boxShadow: '0 0 0 rgba(0, 217, 255, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 217, 255, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-black font-bold text-base tracking-wide uppercase">
                Jetzt anfragen
              </span>
            </button>
          </div>

          <div className="relative">
            <div className="md:aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="space-y-3 sm:space-y-4 md:space-y-6 w-full">
                  {[
                    { icon: '🎵', text: 'Perfekte Musikauswahl' },
                    { icon: '🎤', text: 'Professionelle Moderation' },
                    { icon: '💡', text: 'Lichttechnik & Atmosphäre' },
                    { icon: '⚡', text: 'Zuverlässige Technik' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
                      <span className="text-sm sm:text-base md:text-lg text-white font-medium">{item.text}</span>
                    </div>
                  ))}
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

export default ProblemSolution
