import React from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const packages = [
    {
      name: 'Geburtstag Klein',
      description: 'Perfekt für kleinere Geburtstagsfeiern',
      features: [
        '5 Stunden Musik',
        'Bis zu 30 Gäste',
        'PA-Lautsprecher',
        'Basis-Lichttechnik',
        'Professioneller Aufbau',
        'Wireless-Mikrofon'
      ],
      popular: false
    },
    {
      name: 'Hochzeit Standard Plus',
      description: 'Ideal für mittelgroße Hochzeiten',
      features: [
        '8 Stunden Musik',
        'Bis zu 80 Gäste',
        '2 PA-Lautsprecher',
        '4 Bodenstrahler',
        '2 LED-Effekte',
        'Professionelle Lichttechnik',
        'Aufbau & Abbau inklusive',
        'Anfahrt bis 30 km inklusive'
      ],
      popular: true
    },
    {
      name: 'Hochzeit Deluxe XXL',
      description: 'Das Beste für große Hochzeiten',
      features: [
        '12 Stunden Musik',
        'Bis zu 150 Gäste',
        'Premium Voice-Acoustic PA',
        'Doppel-Subwoofer',
        '4 Lichteffekte',
        '10 Bodenstrahler',
        'DJ-Stand mit Traverse',
        'Screen & Hazer inklusive'
      ],
      popular: false
    }
  ]

  const addons = [
    {
      name: 'Verlängerungsstunde',
      description: '€90 pro zusätzliche Stunde – mehr Zeit für die Party'
    },
    {
      name: 'Kaltfunkenmaschine',
      description: 'Spektakuläre Funkeneffekte für Indoor-Events'
    },
    {
      name: 'XXL LOVE LED-Buchstaben',
      description: 'Beleuchtete Statement-Buchstaben für Hochzeiten & Geburtstage'
    },
    {
      name: 'Extra Subwoofer',
      description: 'Zusätzlicher Bass für noch kraftvolleren Sound'
    }
  ]

  return (
    <section id="preise" className="py-32">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              Preise & Pakete
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-4 leading-tight">
            Unsere Pakete
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            Paketpreise auf Anfrage, da jede Feier anders ist. Preise abhängig von Gästezahl,
            Spielzeit, Technik und Entfernung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border rounded-lg p-10 transition-all group ${
                pkg.popular
                  ? 'border-orange-500/50 scale-105'
                  : 'border-white/10 hover:border-orange-500/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full" style={{ background: 'linear-gradient(to right, #FF6C01, #FF8C3A)' }}>
                  Beliebtestes Paket
                </div>
              )}

              <div className="text-center mb-8 pb-8 border-b border-white/10">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{pkg.name}</h3>
                <p className="text-gray-400 text-sm font-light">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FF6C01' }} />
                    <span className="text-gray-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('kontakt')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`w-full py-4 font-semibold transition-all flex items-center justify-center space-x-2 rounded-lg ${
                  pkg.popular
                    ? 'text-black hover:opacity-90'
                    : 'border text-white hover:bg-white/5'
                }`}
                style={pkg.popular ? {
                  background: 'linear-gradient(to right, #FF6C01, #FF8C3A)'
                } : {
                  borderColor: 'rgba(255, 108, 1, 0.3)'
                }}
              >
                <span>Jetzt anfragen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Zusätzliche Optionen
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-orange-500/30 transition-all group"
              >
                <h4 className="text-xl font-bold text-white mb-3">{addon.name}</h4>
                <p className="text-gray-300/90">{addon.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-gray-300/90 text-lg">
              Jedes Event ist einzigartig – kontaktieren Sie uns für ein individuelles,
              maßgeschneidertes Angebot passend zu Ihrem Budget und Ihren Wünschen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
