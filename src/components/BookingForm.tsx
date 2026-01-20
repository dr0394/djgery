import React, { useState } from 'react'
import { X, ArrowLeft, ArrowRight, MessageCircle, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  eventLocation: string
  guests: string
  services: string[]
  budget: string
  message: string
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    guests: '',
    services: [],
    budget: '',
    message: ''
  })

  const totalSteps = 3

  if (!isOpen) return null

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const generateWhatsAppMessage = () => {
    let message = `Hallo DJ Gery White,\n\n`
    message += `ich möchte gerne Ihre Leistungen für meine Veranstaltung anfragen:\n\n`
    message += `🎉 *Veranstaltungsdetails:*\n`
    message += `Anlass: ${formData.eventType}\n`
    message += `Datum: ${formData.eventDate}\n`
    message += `Ort: ${formData.eventLocation}\n`
    message += `Gästeanzahl: ${formData.guests}\n\n`
    message += `🎵 *Gewünschte Leistungen:*\n`
    message += `${formData.services.join(', ')}\n`
    if (formData.budget) {
      message += `\n💰 *Budget:* ${formData.budget}\n`
    }
    if (formData.message) {
      message += `\n📝 *Zusätzliche Informationen:*\n${formData.message}\n`
    }
    message += `\n👤 *Kontaktdaten:*\n`
    message += `Name: ${formData.name}\n`
    message += `Telefon: ${formData.phone}\n`
    message += `E-Mail: ${formData.email}\n\n`
    message += `Ich freue mich auf Ihre Rückmeldung!\n\nViele Grüße,\n${formData.name}`

    return encodeURIComponent(message)
  }

  const generateEmailBody = () => {
    let body = `Hallo DJ Gery White,\n\n`
    body += `ich möchte gerne Ihre Leistungen für meine Veranstaltung anfragen:\n\n`
    body += `VERANSTALTUNGSDETAILS:\n`
    body += `Anlass: ${formData.eventType}\n`
    body += `Datum: ${formData.eventDate}\n`
    body += `Ort: ${formData.eventLocation}\n`
    body += `Gästeanzahl: ${formData.guests}\n\n`
    body += `GEWÜNSCHTE LEISTUNGEN:\n`
    body += `${formData.services.join(', ')}\n`
    if (formData.budget) {
      body += `\nBUDGET: ${formData.budget}\n`
    }
    if (formData.message) {
      body += `\nZUSÄTZLICHE INFORMATIONEN:\n${formData.message}\n`
    }
    body += `\nKONTAKTDATEN:\n`
    body += `Name: ${formData.name}\n`
    body += `Telefon: ${formData.phone}\n`
    body += `E-Mail: ${formData.email}\n\n`
    body += `Ich freue mich auf Ihre Rückmeldung!\n\nViele Grüße,\n${formData.name}`

    return encodeURIComponent(body)
  }

  const handleWhatsAppSubmit = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/491602763524?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
    resetAndClose()
  }

  const handleEmailSubmit = () => {
    const emailBody = generateEmailBody()
    const mailtoUrl = `mailto:booking@djgerywhite.com?subject=Anfrage für ${formData.eventType} am ${formData.eventDate}&body=${emailBody}`
    window.location.href = mailtoUrl
    resetAndClose()
  }

  const resetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        eventLocation: '',
        guests: '',
        services: [],
        budget: '',
        message: ''
      })
    }, 300)
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.eventType && formData.eventDate && formData.eventLocation && formData.guests
      case 2:
        return formData.services.length > 0
      case 3:
        return formData.name && formData.phone && formData.email
      default:
        return false
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">Event Anfrage</h2>
            <p className="text-gray-400 text-sm">Schritt {step} von {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-white mb-2">Ihre Veranstaltung</h3>
                <p className="text-gray-400">Erzählen Sie uns von Ihrem Event</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">
                  Welcher Anlass? <span style={{ color: '#FF6C01' }}>*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'Hochzeit', emoji: '💍', color: '#FF2E97' },
                    { value: 'Geburtstag', emoji: '🎂', color: '#FF6B35' },
                    { value: 'Firmenevent', emoji: '💼', color: '#FF6C01' },
                    { value: 'Vereinsfest', emoji: '🎪', color: '#FFD700' },
                    { value: 'Abschlussball', emoji: '🎓', color: '#9D4EDD' },
                    { value: 'Sonstiges', emoji: '🎉', color: '#06D6A0' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateFormData('eventType', option.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        formData.eventType === option.value
                          ? 'border-white bg-white/10 scale-105'
                          : 'border-white/20 bg-black/30 hover:border-white/40'
                      }`}
                      style={{
                        borderColor: formData.eventType === option.value ? option.color : undefined
                      }}
                    >
                      <div className="text-3xl mb-2">{option.emoji}</div>
                      <div className="text-sm font-bold text-white">{option.value}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    📅 Wann findet es statt? <span style={{ color: '#FF6C01' }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => updateFormData('eventDate', e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    👥 Wie viele Gäste? <span style={{ color: '#FF6C01' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.guests}
                    onChange={(e) => updateFormData('guests', e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                    placeholder={t.booking.guestCountPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  📍 Wo findet es statt? <span style={{ color: '#FF6C01' }}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.eventLocation}
                  onChange={(e) => updateFormData('eventLocation', e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                  placeholder={t.booking.locationPlaceholder}
                />
              </div>

            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-3xl font-bold text-white mb-2">Ihre Wünsche</h3>
                <p className="text-gray-400">Was darf es sein?</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">
                  Gewünschte Leistungen <span style={{ color: '#FF6C01' }}>*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'DJ Service', emoji: '🎧', color: '#FF6C01' },
                    { value: 'Eventtechnik & PA-Verleih', emoji: '🔊', color: '#FF6B35' },
                    { value: 'Fotografie & Videografie', emoji: '📸', color: '#FF2E97' },
                    { value: 'Moderation', emoji: '🎤', color: '#FFD700' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        formData.services.includes(option.value)
                          ? 'bg-white/10 scale-[1.02]'
                          : 'bg-black/30 hover:bg-white/5'
                      }`}
                      style={{
                        borderColor: formData.services.includes(option.value) ? option.color : 'rgba(255,255,255,0.2)'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(option.value)}
                        onChange={() => toggleService(option.value)}
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500 rounded"
                      />
                      <span className="ml-3 text-2xl">{option.emoji}</span>
                      <span className="ml-3 text-white font-bold flex-1">{option.value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  💰 Budget (optional)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm transition-all"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Bis 500€">Bis 500€</option>
                  <option value="500€ - 1000€">500€ - 1000€</option>
                  <option value="1000€ - 2000€">1000€ - 2000€</option>
                  <option value="Über 2000€">Über 2000€</option>
                  <option value="Verhandelbar">Verhandelbar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  💬 Ihre Nachricht (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                  placeholder={t.booking.specialRequestsPlaceholder}
                  maxLength={500}
                />
                <p className="text-sm text-gray-400 mt-2">
                  {500 - formData.message.length} Zeichen übrig
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-3xl font-bold text-white mb-2">Fast geschafft!</h3>
                <p className="text-gray-400">Wie können wir Sie erreichen?</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Ihr Name <span style={{ color: '#FF6C01' }}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                  placeholder={t.booking.namePlaceholder}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Telefonnummer <span style={{ color: '#FF6C01' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                    placeholder={t.booking.phonePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    E-Mail <span style={{ color: '#FF6C01' }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border-2 border-white/20 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 backdrop-blur-sm placeholder-gray-400 transition-all"
                    placeholder={t.booking.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-2 border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Ihre Anfrage im Überblick
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Anlass:</span>
                    <span className="text-white font-bold">{formData.eventType}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Datum:</span>
                    <span className="text-white font-bold">{formData.eventDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Ort:</span>
                    <span className="text-white font-bold">{formData.eventLocation}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Gäste:</span>
                    <span className="text-white font-bold">{formData.guests}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-400 block mb-2">Leistungen:</span>
                    <div className="flex flex-wrap gap-2">
                      {formData.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-bold">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  {formData.budget && (
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-400">Budget:</span>
                      <span className="text-white font-bold">{formData.budget}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-6">
          {step < totalSteps ? (
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück
              </button>

              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 text-black font-bold bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Weiter
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-green-600 to-green-500 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Per WhatsApp senden
                </button>
                <button
                  onClick={handleEmailSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all font-bold"
                >
                  <Mail className="w-5 h-5" />
                  Per E-Mail senden
                </button>
              </div>
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                className="w-full flex items-center justify-center gap-2 px-6 py-2 text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingForm
