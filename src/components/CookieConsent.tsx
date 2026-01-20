import React, { useState, useEffect } from 'react'
import { Cookie, X, Check } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentProps {
  isOpen?: boolean
  onClose?: () => void
}

const CookieConsent: React.FC<CookieConsentProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen)
    }
  }, [isOpen])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    savePreferences(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    savePreferences(onlyNecessary)
  }

  const saveSelected = () => {
    savePreferences(preferences)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-start p-4 pointer-events-none">
      <div className="w-full max-w-md pointer-events-auto">
        <div className="bg-black/95 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Cookie className="w-6 h-6" style={{ color: '#00D9FF' }} />
                <h2 className="text-lg font-bold text-white">Cookies</h2>
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Wir verwenden Cookies für die bestmögliche Nutzung unserer Website.
            </p>

            {!showDetails ? (
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={acceptAll}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all rounded"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={rejectAll}
                  className="w-full border border-white/40 text-white px-4 py-3 font-semibold hover:bg-white/10 transition-all rounded"
                >
                  Alle ablehnen
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full border text-white px-4 py-3 font-semibold hover:bg-white/5 transition-all rounded"
                  style={{ borderColor: 'rgba(0, 217, 255, 0.6)' }}
                >
                  Einstellungen
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-white font-semibold">Notwendige Cookies</h3>
                        <span className="text-xs text-gray-400 bg-white/10 px-2 py-1">Erforderlich</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-brand-magenta rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">Funktionale Cookies</h3>
                      <p className="text-gray-400 text-sm">
                        Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.functional ? 'bg-brand-magenta justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">Analyse Cookies</h3>
                      <p className="text-gray-400 text-sm">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.analytics ? 'bg-brand-magenta justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">Marketing Cookies</h3>
                      <p className="text-gray-400 text-sm">
                        Diese Cookies werden verwendet, um Werbung zu personalisieren und deren Effektivität zu messen.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.marketing ? 'bg-brand-magenta justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 border border-white/20 text-white px-6 py-4 font-semibold hover:bg-white/5 transition-all"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={saveSelected}
                    className="flex-1 bg-gradient-to-r from-brand-magenta to-brand-pink text-white px-6 py-4 font-semibold hover:from-brand-pink hover:to-brand-magenta transition-all"
                  >
                    Auswahl speichern
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <a
                href="/datenschutz"
                className="text-sm text-gray-400 hover:text-brand-magenta transition-colors"
              >
                Weitere Informationen in unserer Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
