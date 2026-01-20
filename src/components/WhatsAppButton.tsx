import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '491602763524'
  const message = encodeURIComponent('Hallo DJ Gery White! Ich interessiere mich für Ihre DJ- und Veranstaltungsleistungen.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp Kontakt"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
        <div className="relative bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-sm">
        Schreib uns auf WhatsApp
      </div>
    </a>
  )
}

export default WhatsAppButton
