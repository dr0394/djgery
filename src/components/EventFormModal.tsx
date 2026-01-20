import React, { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'

interface EventFormModalProps {
  isOpen: boolean
  onClose: () => void
  eventType: string
}

interface FormData {
  [key: string]: string
}

const EventFormModal: React.FC<EventFormModalProps> = ({ isOpen, onClose, eventType }) => {
  const [formData, setFormData] = useState<FormData>({})

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const eventQuestions: { [key: string]: Array<{ label: string; name: string; type: string; required: boolean; options?: string[] }> } = {
    'Allgemeine Anfrage': [
      { label: 'Ihr Name', name: 'name', type: 'text', required: true },
      { label: 'E-Mail', name: 'email', type: 'email', required: true },
      { label: 'Telefon', name: 'phone', type: 'tel', required: false },
      { label: 'Art der Show', name: 'showType', type: 'select', required: true, options: ['Feuershow', 'LED-Show', 'Kombishow', 'Weiß noch nicht', 'Sonstiges'] },
      { label: 'Datum (falls bereits bekannt)', name: 'date', type: 'date', required: false },
      { label: 'Veranstaltungsort / Adresse', name: 'location', type: 'text', required: false },
      { label: 'Anzahl erwarteter Gäste', name: 'guests', type: 'number', required: false },
      { label: 'Ihre Nachricht', name: 'message', type: 'textarea', required: true }
    ],
    Festival: [
      { label: 'Name des Festivals', name: 'festivalName', type: 'text', required: true },
      { label: 'Datum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit', name: 'time', type: 'time', required: true },
      { label: 'Anzahl erwarteter Gäste', name: 'guests', type: 'number', required: true },
      { label: 'Veranstaltungsort / Adresse', name: 'location', type: 'text', required: true },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget (ca.)', name: 'budget', type: 'text', required: false },
      { label: 'Besondere Wünsche', name: 'specialWishes', type: 'textarea', required: false }
    ],
    Firmenevent: [
      { label: 'Firmenname', name: 'companyName', type: 'text', required: true },
      { label: 'Art des Events', name: 'eventType', type: 'select', required: true, options: ['Jubiläum', 'Produktpräsentation', 'Betriebsfeier', 'Kundenevent', 'Sonstiges'] },
      { label: 'Datum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit', name: 'time', type: 'time', required: true },
      { label: 'Anzahl Gäste', name: 'guests', type: 'number', required: true },
      { label: 'Veranstaltungsort / Adresse', name: 'location', type: 'text', required: true },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget', name: 'budget', type: 'text', required: false },
      { label: 'Firmenfarben (falls gewünscht)', name: 'companyColors', type: 'text', required: false },
      { label: 'Besondere Wünsche', name: 'specialWishes', type: 'textarea', required: false }
    ],
    Geburtstag: [
      { label: 'Name des Geburtstagskindes', name: 'name', type: 'text', required: true },
      { label: 'Welcher Geburtstag wird gefeiert?', name: 'age', type: 'text', required: true },
      { label: 'Datum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit', name: 'time', type: 'time', required: true },
      { label: 'Anzahl Gäste', name: 'guests', type: 'number', required: true },
      { label: 'Veranstaltungsort / Adresse', name: 'location', type: 'text', required: true },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget (ca.)', name: 'budget', type: 'text', required: false },
      { label: 'Besondere Wünsche', name: 'specialWishes', type: 'textarea', required: false }
    ],
    Heiratsantrag: [
      { label: 'Ihr Name', name: 'yourName', type: 'text', required: true },
      { label: 'Datum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit', name: 'time', type: 'time', required: true },
      { label: 'Gewünschter Ort', name: 'location', type: 'text', required: true },
      { label: 'Welche Atmosphäre wünschen Sie?', name: 'atmosphere', type: 'select', required: true, options: ['Romantisch & Intim', 'Spektakulär & Groß', 'Überraschend', 'Klassisch Elegant'] },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget (ca.)', name: 'budget', type: 'text', required: false },
      { label: 'Bevorzugte Farben', name: 'colors', type: 'text', required: false },
      { label: 'Besondere Wünsche / Überraschungsideen', name: 'specialWishes', type: 'textarea', required: false }
    ],
    Hochzeit: [
      { label: 'Namen des Brautpaares', name: 'coupleNames', type: 'text', required: true },
      { label: 'Hochzeitsdatum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit des Feuerwerks', name: 'time', type: 'time', required: true },
      { label: 'Anzahl Gäste', name: 'guests', type: 'number', required: true },
      { label: 'Hochzeitslocation / Adresse', name: 'location', type: 'text', required: true },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget', name: 'budget', type: 'text', required: false },
      { label: 'Hochzeitsfarben', name: 'weddingColors', type: 'text', required: false },
      { label: 'Motto der Hochzeit (falls vorhanden)', name: 'theme', type: 'text', required: false },
      { label: 'Besondere Wünsche', name: 'specialWishes', type: 'textarea', required: false }
    ],
    Karneval: [
      { label: 'Name der Veranstaltung', name: 'eventName', type: 'text', required: true },
      { label: 'Datum', name: 'date', type: 'date', required: true },
      { label: 'Uhrzeit', name: 'time', type: 'time', required: true },
      { label: 'Anzahl erwarteter Gäste', name: 'guests', type: 'number', required: true },
      { label: 'Veranstaltungsort / Adresse', name: 'location', type: 'text', required: true },
      { label: 'Art des Karnevalsevents', name: 'carnivalType', type: 'select', required: true, options: ['Straßenkarneval', 'Umzug', 'Fasnachtsfeuer', 'Saalveranstaltung', 'Sonstiges'] },
      { label: 'Dauer des Feuerwerks (in Minuten)', name: 'duration', type: 'number', required: true },
      { label: 'Budget (ca.)', name: 'budget', type: 'text', required: false },
      { label: 'Besondere Wünsche', name: 'specialWishes', type: 'textarea', required: false }
    ]
  }

  const questions = eventQuestions[eventType] || []

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const generateEmailBody = () => {
    let body = `Anfrage für Feuerwerk - ${eventType}\n\n`

    questions.forEach(question => {
      const value = formData[question.name] || 'Nicht angegeben'
      body += `${question.label}: ${value}\n`
    })

    body += '\n\nMit freundlichen Grüßen'

    return encodeURIComponent(body)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = generateEmailBody()
    const subject = encodeURIComponent(`Feuerwerk-Anfrage: ${eventType}`)
    const mailtoLink = `mailto:robert.d.mielke@gmx.de?subject=${subject}&body=${emailBody}`

    window.location.href = mailtoLink

    setTimeout(() => {
      onClose()
      setFormData({})
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl shadow-brand-magenta/20">
        <div className="sticky top-0 bg-gradient-to-r from-brand-magenta to-brand-pink p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {eventType} - Anfrage
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-white font-medium">
                  {question.label}
                  {question.required && <span className="text-brand-magenta ml-1">*</span>}
                </label>

                {question.type === 'textarea' ? (
                  <textarea
                    name={question.name}
                    value={formData[question.name] || ''}
                    onChange={(e) => handleInputChange(question.name, e.target.value)}
                    required={question.required}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors"
                    placeholder={`Ihre ${question.label}...`}
                  />
                ) : question.type === 'select' ? (
                  <select
                    name={question.name}
                    value={formData[question.name] || ''}
                    onChange={(e) => handleInputChange(question.name, e.target.value)}
                    required={question.required}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors"
                  >
                    <option value="" className="bg-gray-900">Bitte wählen...</option>
                    {question.options?.map((option, idx) => (
                      <option key={idx} value={option} className="bg-gray-900">
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={question.type}
                    name={question.name}
                    value={formData[question.name] || ''}
                    onChange={(e) => handleInputChange(question.name, e.target.value)}
                    required={question.required}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors"
                    placeholder={`Ihre ${question.label}...`}
                  />
                )}
              </div>
            ))}

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <span className="text-brand-magenta font-semibold">Hinweis:</span> Nach dem Absenden öffnet sich Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht. Sie können diese vor dem Versand noch anpassen.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-magenta to-brand-pink hover:shadow-lg hover:shadow-brand-magenta/50 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Anfrage absenden
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventFormModal
