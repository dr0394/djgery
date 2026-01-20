import React from 'react'
import { Cookie } from 'lucide-react'

interface CookieSettingsButtonProps {
  onClick: () => void
}

const CookieSettingsButton: React.FC<CookieSettingsButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-brand-magenta to-brand-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Cookie-Einstellungen öffnen"
    >
      <Cookie className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </button>
  )
}

export default CookieSettingsButton
