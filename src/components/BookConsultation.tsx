import React, { useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import OfficeButlerForm from './OfficeButlerForm'
import { useLanguage } from '../contexts/LanguageContext'

const BookConsultation = () => {
  const { t } = useLanguage()
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [consultationType, setConsultationType] = useState<'phone' | 'showroom' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const consultationTypeText = consultationType === 'phone' ? 'Telefonberatung' : 'Beratung im Showroom'
    const emailBody = `
Neue Beratungsanfrage - ${consultationTypeText}

Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Event-Typ: ${formData.eventType}
Event-Datum: ${formData.eventDate}
Anzahl Gäste: ${formData.guestCount}

Nachricht:
${formData.message}
    `.trim()
    const mailtoLink = `mailto:robert.d.mielke@gmx.de?subject=Beratungsanfrage - ${consultationTypeText}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white mb-2 font-light tracking-wide">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
            placeholder={t.booking.consultation.yourName}
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-light tracking-wide">E-Mail *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
            placeholder={t.booking.emailPlaceholder}
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-light tracking-wide">Telefon *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
            placeholder={t.booking.phonePlaceholder}
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-light tracking-wide">Event-Typ *</label>
          <select
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
          >
            <option value="">Bitte wählen</option>
            <option value="Festival">Festival</option>
            <option value="Firmenevent">Firmenevent</option>
            <option value="Geburtstag">Geburtstag</option>
            <option value="Heiratsantrag">Heiratsantrag</option>
            <option value="Hochzeit">Hochzeit</option>
            <option value="Karneval">Karneval</option>
            <option value="Silvester">Silvester</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div>
          <label className="block text-white mb-2 font-light tracking-wide">Gewünschtes Event-Datum</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-light tracking-wide">Anzahl Gäste</label>
          <input
            type="text"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white focus:border-brand-magenta focus:outline-none transition-colors backdrop-blur-sm"
            placeholder={t.booking.consultation.guestCountPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className="block text-white mb-2 font-light tracking-wide">Ihre Nachricht</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white focus:border-amber-500 focus:outline-none transition-colors resize-none backdrop-blur-sm"
          placeholder={t.booking.consultation.messagePlaceholder}
        />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={() => setConsultationType(null)}
          className="px-14 py-6 border border-white/40 text-white backdrop-blur-sm transition-all duration-500 hover:border-white/80 hover:bg-white/5 font-semibold text-lg tracking-wider uppercase"
        >
          Zurück
        </button>
        <button
          type="submit"
          className="group relative overflow-hidden bg-gradient-to-br from-brand-magenta via-brand-pink to-brand-magenta px-14 py-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(199,36,177,0.4)] font-semibold text-lg tracking-wider uppercase"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative text-white">Beratung anfragen</span>
        </button>
      </div>
    </form>
  )

  return (
    <section id="beratung" className="py-32">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block border-t border-b border-brand-fire-orange/30 py-3 px-12 mb-8">
            <p className="text-white text-sm uppercase tracking-[0.3em] font-light">
              Kostenlose Erstberatung
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            <span className="font-bold bg-gradient-to-r from-brand-fire-red via-brand-fire-orange to-brand-fire-gold bg-clip-text text-transparent">Beratungstermin</span> buchen
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-brand-fire-orange/40 to-transparent"></div>
        </div>

        {!consultationType ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <a
              href="tel:+497854980204"
              className="border border-white/10 p-12 hover:border-brand-fire-orange/50 transition-all duration-500 bg-black/20 cursor-pointer group block backdrop-blur-sm"
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-fire-red via-brand-fire-orange to-brand-fire-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-extralight text-white text-center tracking-wide">
                  Telefonberatung
                </h3>
                <p className="text-gray-400 text-center font-light">
                  Lassen Sie sich telefonisch von unseren Show-Experten beraten
                </p>
                <p className="text-transparent bg-gradient-to-r from-brand-fire-red via-brand-fire-orange to-brand-fire-gold bg-clip-text text-xl font-bold">
                  +49 7854 980204
                </p>
              </div>
            </a>

            <div
              onClick={() => setShowBookingForm(true)}
              className="border border-white/10 p-12 hover:border-brand-fire-orange/50 transition-all duration-500 bg-black/20 cursor-pointer group backdrop-blur-sm"
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-fire-red via-brand-fire-orange to-brand-fire-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-extralight text-white text-center tracking-wide">
                  Show anfragen
                </h3>
                <p className="text-gray-400 text-center font-light">
                  Füllen Sie unser Formular aus und erhalten Sie ein individuelles Angebot
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12">
            {renderForm()}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg font-light">
            Unsere Show-Experten freuen sich auf Ihr Event
          </p>
        </div>
      </div>

      <OfficeButlerForm
        isOpen={showBookingForm}
        onClose={() => setShowBookingForm(false)}
      />
    </section>
  )
}

export default BookConsultation
