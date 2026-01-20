import React from 'react'
import { X, Check } from 'lucide-react'

interface Package {
  name: string
  price: string
  features: string[]
  popular?: boolean
}

interface EventPackageModalProps {
  isOpen: boolean
  onClose: () => void
  eventType: string
  packages: Package[]
}

const EventPackageModal = ({ isOpen, onClose, eventType, packages }: EventPackageModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-lg">
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{eventType}</h2>
              <p className="text-gray-300/80 mt-2">Wählen Sie das passende Paket für Ihre Veranstaltung</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border rounded-lg p-8 hover:border-orange-500/50 transition-all duration-300 ${
                  pkg.popular ? 'border-orange-500/50 ring-2 ring-orange-500/20' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
                      style={{
                        background: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                        color: '#000'
                      }}
                    >
                      Beliebt
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold" style={{ color: '#FF6C01' }}>
                      {pkg.price}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(255, 108, 1, 0.2)' }}
                        >
                          <Check className="w-3 h-3" style={{ color: '#FF6C01' }} />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <button
                      className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 border-2"
                      style={{
                        borderColor: '#FF6C01',
                        color: '#FF6C01',
                        backgroundColor: 'rgba(255, 108, 1, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF6C01'
                        e.currentTarget.style.color = '#000'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.1)'
                        e.currentTarget.style.color = '#FF6C01'
                      }}
                    >
                      Anfragen
                    </button>
                    <p className="text-xs text-gray-400 text-center">Verlängerung auf Anfrage möglich</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-gray-300 text-center">
              Alle Pakete können individuell angepasst werden. Kontaktieren Sie uns für ein maßgeschneidertes Angebot!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPackageModal
