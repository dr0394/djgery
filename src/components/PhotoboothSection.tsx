import React from 'react'
import { Camera, Sparkles, Image, Gift } from 'lucide-react'

interface PhotoboothSectionProps {
  onOpenBooking: () => void
}

const PhotoboothSection = ({ onOpenBooking }: PhotoboothSectionProps) => {
  return (
    <section id="fotospiegel" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
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
              Fotospiegel & Fotobox
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Unvergessliche Momente<br />festhalten
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Premium Fotoerlebnis mit Sofortdruck, Requisiten und rotem Teppich – der Gäste-Magnet auf jeder Veranstaltung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-orange-950/30 to-slate-900">
              <div className="h-full flex flex-col items-center justify-center p-12 space-y-6">
                <div className="text-7xl">📸</div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Roter Teppich<br />& Premium Setup
                  </h3>
                  <p className="text-gray-300/80">
                    Stilvoller Aufbau mit exklusivem Ambiente
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(255, 108, 1, 0.3), transparent)' }}
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            {[
              {
                icon: Camera,
                title: 'Fotospiegel mit Sofortdruck',
                description: 'Moderne Touchscreen-Technologie mit direktem Ausdruck der Fotos – Ihre Gäste haben sofort eine Erinnerung in der Hand'
              },
              {
                icon: Sparkles,
                title: 'Requisiten & Props',
                description: 'Lustige Accessoires, Hüte, Brillen und mehr für kreative und unterhaltsame Fotos'
              },
              {
                icon: Image,
                title: 'Individuelle Gestaltung',
                description: 'Personalisierte Fotorahmen mit Ihrem Event-Logo, Datum oder Motto möglich'
              },
              {
                icon: Gift,
                title: 'Unbegrenzte Nutzung',
                description: 'Ihre Gäste können so oft fotografieren wie sie möchten – der Spaßfaktor ist garantiert'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <item.icon className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-gray-300/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-950/20 to-slate-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Perfekt für Ihre Gäste
            </h3>
            <p className="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
              Der Fotospiegel ist der ideale Eisbrecher und sorgt für Unterhaltung.
              Mit dem roten Teppich wird jedes Foto zu einem VIP-Erlebnis.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="group relative overflow-hidden px-10 py-5 transition-all duration-500"
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
                  Fotospiegel anfragen
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoboothSection
