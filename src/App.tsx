import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import CookieConsent from './components/CookieConsent'
import CookieSettingsButton from './components/CookieSettingsButton'
import OfficeButlerForm from './components/OfficeButlerForm'
import WhatsAppButton from './components/WhatsAppButton'
import AboutModal from './components/AboutModal'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  const [showCookieSettings, setShowCookieSettings] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showAboutModal, setShowAboutModal] = useState(false)

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen relative bg-black">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://i.imgur.com/BRpZmrd.jpeg')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
        </div>

        <div className="relative z-10">
          <Navigation
            onOpenBooking={() => setShowBookingForm(true)}
            onOpenAbout={() => setShowAboutModal(true)}
          />
          <Routes>
            <Route path="/" element={<Home onOpenBooking={() => setShowBookingForm(true)} onOpenAbout={() => setShowAboutModal(true)} />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          <Footer />
        </div>

        <OfficeButlerForm
          isOpen={showBookingForm}
          onClose={() => setShowBookingForm(false)}
        />
        <AboutModal
          isOpen={showAboutModal}
          onClose={() => setShowAboutModal(false)}
        />
        <CookieConsent
          isOpen={showCookieSettings}
          onClose={() => setShowCookieSettings(false)}
        />
        <CookieSettingsButton onClick={() => setShowCookieSettings(true)} />
        <WhatsAppButton />
      </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
