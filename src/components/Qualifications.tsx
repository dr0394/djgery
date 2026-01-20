import React from 'react'
import { Award, Shield, Truck, FileCheck, Warehouse, CheckCircle, Sparkles } from 'lucide-react'

const Qualifications = () => {
  const qualifications = [
    {
      icon: Award,
      title: 'Großfeuerwerke',
      description: 'Zulassung zum Abbrennen von Großfeuerwerken'
    },
    {
      icon: Shield,
      title: 'Staatlich Geprüft',
      description: 'Pyrotechniker für Theater und Bühne'
    },
    {
      icon: Truck,
      title: 'ADR-Bescheinigung',
      description: 'Beförderung gefährlicher Güter Klasse 1 mit eigenem ADR-Fahrzeug'
    },
    {
      icon: FileCheck,
      title: 'Erlaubnisschein § 7',
      description: 'Offizieller Erlaubnisschein nach §7'
    },
    {
      icon: Warehouse,
      title: 'Sicherheitslager',
      description: 'Eigenes Sicherheitslager für optimale Lagerung'
    },
    {
      icon: CheckCircle,
      title: '25 Jahre Erfahrung',
      description: 'Seit 2000 Ihr Partner für professionelle Pyrotechnik'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="flex items-start space-x-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-0">
                Unsere<br />Qualifikationen
              </h2>
            </div>
            <div className="relative hidden md:block">
              <Sparkles
                className="w-24 h-24 text-brand-magenta"
                style={{
                  transform: 'rotate(180deg)'
                }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-brand-magenta to-transparent"
                   style={{ filter: 'blur(2px)' }}>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sicherheit und Professionalität stehen bei uns an erster Stelle.
              Unsere Zertifizierungen und langjährige Erfahrung garantieren höchste Qualität
              bei jedem Feuerwerk. Vertrauen Sie auf geprüfte Experten mit allen notwendigen
              Genehmigungen und modernster Ausrüstung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon
            return (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-brand-magenta/50 transition-all group"
              >
                <Icon className="w-12 h-12 mb-4 text-brand-magenta" />
                <h3 className="text-xl font-bold text-brand-magenta mb-2">
                  {qual.title}
                </h3>
                <p className="text-gray-300">{qual.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-magenta/10 to-brand-pink/10 border border-brand-magenta/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Zufriedene Kunden, die wiederholt buchen
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Unsere langjährige Erfahrung und die hohe Qualität unserer Leistungen haben uns
            zu einem verlässlichen Partner für unvergessliche Veranstaltungen gemacht.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
