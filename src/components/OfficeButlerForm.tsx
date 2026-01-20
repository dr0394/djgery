import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface OfficeButlerFormProps {
  isOpen: boolean
  onClose: () => void
}

const OfficeButlerForm = ({ isOpen, onClose }: OfficeButlerFormProps) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script')
      script.src = 'https://app.kreativ.management:443/ContactForm/GetContactFormWidget'
      script.async = true
      document.body.appendChild(script)

      const style = document.createElement('style')
      style.innerHTML = '#officebutler .hm-contact-form-select{ padding: 0 !important; }'
      document.head.appendChild(style)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors duration-300 hover:rotate-90 transform"
          aria-label="Schließen"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Termin anfragen
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>

          <div
            className="js-hm-form"
            data-theme="default"
            id="officebutler"
            data-form-id="6f31d760-9033-4f37-be5a-5dcce710e686"
          />
        </div>
      </div>
    </div>
  )
}

export default OfficeButlerForm
