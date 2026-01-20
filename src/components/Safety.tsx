import React from 'react'
import { Shield, AlertTriangle, CheckCircle, Flame } from 'lucide-react'

const Safety = () => {
  const safetyTips = [
    {
      title: 'Professionelle Ausrüstung',
      description: 'Wir verwenden ausschließlich geprüfte und zugelassene Feuershow-Requisiten. Alle Materialien erfüllen höchste Sicherheitsstandards.',
      icon: CheckCircle
    },
    {
      title: 'Umfassende Absicherung',
      description: 'Unsere Shows sind vollständig versichert. Sie erhalten alle notwendigen Versicherungsnachweise für Ihre Veranstaltung.',
      icon: Shield
    },
    {
      title: 'Standortanalyse',
      description: 'Vor jeder Show führen wir eine detaillierte Analyse der Location durch. Wir prüfen Platzbedarf, Sicherheitsabstände und Notfallzugänge.',
      icon: AlertTriangle
    },
    {
      title: 'Geschultes Team',
      description: 'Unsere Künstler sind professionell ausgebildet und haben jahrelange Erfahrung. Jede Show wird mit eingewiesenem Sicherheitshelfer durchgeführt.',
      icon: CheckCircle
    },
    {
      title: 'Wettercheck',
      description: 'Bei extremen Wetterbedingungen passen wir die Show an oder bieten LED-Shows als sichere Alternative an.',
      icon: Flame
    },
    {
      title: 'Notfallvorbereitung',
      description: 'Bei jeder Show sind Feuerlöscher und Löschdecken vor Ort. Unser Team ist in Erste Hilfe geschult und auf alle Eventualitäten vorbereitet.',
      icon: AlertTriangle
    }
  ]

  return (
    <section id="sicherheit" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-0">
              Sicherheit geht<br />vor
            </h2>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ihre Sicherheit und die Ihrer Gäste hat für uns oberste Priorität.
              Erfahren Sie, wie wir höchste Sicherheitsstandards bei jeder unserer
              Feuer- und LED-Shows gewährleisten.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyTips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-lg p-6 hover:border-brand-fire-orange/50 transition-all backdrop-blur-sm"
              >
                <Icon className="w-10 h-10 mb-4 text-brand-fire-orange" />
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-brand-fire-orange/10 border border-brand-fire-orange/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-brand-fire-orange" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Geprüfte Professionalität
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Als professionelle Feuerkünstler verfügen wir über alle erforderlichen Genehmigungen
              und Qualifikationen. Unsere Shows entsprechen höchsten Sicherheitsstandards.
            </p>
            <p className="text-white font-semibold">
              Phönix Girlz – Spektakuläre Shows mit maximaler Sicherheit
              für Sie und Ihre Gäste!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Haben Sie Fragen zu unseren Sicherheitsstandards?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('kontakt')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-brand-fire-orange hover:text-brand-fire-gold font-semibold text-lg underline transition-colors"
          >
            Kontaktieren Sie uns
          </button>
        </div>
      </div>
    </section>
  )
}

export default Safety
