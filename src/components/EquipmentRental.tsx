import React, { useState } from 'react'
import { Music, Lightbulb, Speaker, X, Check } from 'lucide-react'

interface EquipmentRentalProps {
  onOpenBooking: () => void
}

interface EquipmentItem {
  icon: React.ElementType
  name: string
  description: string
  priceFrom: string
  features: string[]
}

const EquipmentRental = ({ onOpenBooking }: EquipmentRentalProps) => {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null)

  const equipment: EquipmentItem[] = [
    {
      icon: Speaker,
      name: 'PA-Anlage & Sound',
      description: 'Professionelle Beschallungsanlagen für Events jeder Größe',
      priceFrom: 'ab 150€',
      features: [
        'Hochwertige PA-Systeme',
        'Verschiedene Leistungsklassen',
        'Für 50-500+ Personen',
        'Inklusive Verkabelung',
        'Setup & Einweisung'
      ]
    },
    {
      icon: Lightbulb,
      name: 'Lichttechnik',
      description: 'Stimmungsvolle Beleuchtung für die perfekte Atmosphäre',
      priceFrom: 'ab 100€',
      features: [
        'LED-Scheinwerfer & Moving Heads',
        'Lichtstrahler & Spots',
        'DMX-Steuerung',
        'Farbwechsel & Effekte',
        'Professionelle Verkabelung'
      ]
    },
    {
      icon: Music,
      name: 'DJ-Equipment',
      description: 'Professionelle DJ-Technik für Ihre Veranstaltung',
      priceFrom: 'ab 200€',
      features: [
        'DJ-Pult & Controller',
        'Pioneer CDJ-Setup',
        'Mischpult',
        'Monitoring-Boxen',
        'Laptop & Software'
      ]
    }
  ]

  return (
    <section id="verleih" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
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
              Technik-Verleih
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professionelle Eventtechnik<br />zum Mieten
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Modernste PA-Anlagen, Lichttechnik und Equipment für Ihre perfekte Veranstaltung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedEquipment(item)}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-orange-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.1)'
                  }}
                >
                  <item.icon className="w-8 h-8" style={{ color: '#FF6C01' }} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-300/80 leading-relaxed">{item.description}</p>
                  <div className="pt-2">
                    <span className="text-xl font-bold" style={{ color: '#FF6C01' }}>
                      {item.priceFrom}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-sm font-semibold" style={{ color: '#FF6C01' }}>
                    Details ansehen →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-950/20 to-slate-900/20 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Individuelle Pakete & Beratung
            </h3>
            <p className="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
              Wir stellen mit Ihnen ein maßgeschneidertes Equipment-Paket zusammen. Mit Aufbau, technischer Betreuung und komplettem Service.
            </p>
            <div className="pt-4">
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
                  Anfrage stellen
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedEquipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-lg p-8">
            <button
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 flex-shrink-0"
                  style={{
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.1)'
                  }}
                >
                  <selectedEquipment.icon className="w-8 h-8" style={{ color: '#FF6C01' }} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedEquipment.name}</h3>
                  <p className="text-gray-300/80">{selectedEquipment.description}</p>
                  <div className="mt-3">
                    <span className="text-2xl font-bold" style={{ color: '#FF6C01' }}>
                      {selectedEquipment.priceFrom}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h4 className="text-xl font-bold text-white mb-3">Leistungen:</h4>
                {selectedEquipment.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(255, 108, 1, 0.2)' }}
                    >
                      <Check className="w-3 h-3" style={{ color: '#FF6C01' }} />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)'
                  }}
                >
                  <span className="text-black">Jetzt anfragen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EquipmentRental
