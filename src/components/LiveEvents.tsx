import React, { useState } from 'react'
import { Calendar, MapPin, Users, Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LiveEvents = () => {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Vielen Dank für Ihr Interesse! Die Newsletter-Funktion wird in Kürze aktiviert.')
    setEmail('')
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="flex items-start space-x-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-0">
                Erleben Sie<br />uns live
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
            <p className="text-gray-600 text-lg leading-relaxed">
              Besuchen Sie unsere öffentlichen Shows oder treffen Sie uns auf Messen –
              erleben Sie die Faszination unserer Feuerwerke hautnah und lassen Sie sich
              von unserer Kunst begeistern!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-brand-magenta/50 transition-all shadow-sm">
            <Calendar className="w-12 h-12 mb-4 text-brand-magenta" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Öffentliche Shows</h3>
            <p className="text-gray-600 mb-6">
              Erleben Sie unsere spektakulären Feuerwerke bei öffentlichen Veranstaltungen.
              Von Stadtfesten bis zu besonderen Events – lassen Sie sich von unserer Kunst begeistern.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Stadt- und Dorffeste in der Region</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Silvester-Feuerwerke</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Sonderveranstaltungen und Festivals</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-brand-magenta/50 transition-all shadow-sm">
            <Users className="w-12 h-12 mb-4 text-brand-magenta" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Messen & Beratung</h3>
            <p className="text-gray-600 mb-6">
              Besuchen Sie uns auf regionalen Hochzeitsmessen und Event-Veranstaltungen.
              Lassen Sie sich persönlich beraten und entdecken Sie die Möglichkeiten für Ihr Event.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Hochzeitsmessen in Baden-Württemberg</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Event-Messen und Fachveranstaltungen</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-brand-magenta" />
                <span>Persönliche Beratung vor Ort</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-pink/10 rounded-2xl p-8 md:p-12 border border-brand-magenta/20">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-brand-magenta" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Verpassen Sie keine Termine
            </h3>
            <p className="text-gray-700 mb-6">
              Melden Sie sich für unseren Newsletter an und erhalten Sie aktuelle Informationen
              zu kommenden Shows, Messeauftritten und besonderen Angeboten.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.liveEvents.emailPlaceholder}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-magenta"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-magenta to-brand-pink text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-pink hover:to-brand-magenta transition-all whitespace-nowrap"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveEvents
