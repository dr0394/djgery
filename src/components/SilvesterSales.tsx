import React from 'react'
import { ShoppingBag, MapPin, Clock, Shield, Phone, AlertCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const SilvesterSales = () => {
  const { t } = useLanguage()
  return (
    <section id="silvester" className="py-32">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block border-t border-b border-brand-magenta/30 py-3 px-12 mb-8">
            <p className="text-white text-sm uppercase tracking-[0.3em] font-light">
              Verkaufsstand
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Premium Silvester-Feuerwerk
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Hochwertige, CE- und BAM-geprüfte Feuerwerksartikel für einen sicheren und
            spektakulären Jahreswechsel. Besuchen Sie unseren Verkaufsstand und lassen Sie
            sich von unseren Experten beraten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="bg-black/20 border border-white/10 p-8 transition-all hover:border-brand-magenta/50 backdrop-blur-sm">
              <MapPin className="w-10 h-10 mb-4 text-brand-magenta" />
              <h3 className="text-2xl font-bold text-white mb-4">Unser Verkaufsstand</h3>
              <div className="space-y-3 text-gray-400">
                <p className="text-lg font-semibold text-brand-magenta">
                  Römerstraße 84, 77694 Kehl-Goldscheuer
                </p>
                <div className="pt-4 border-t border-white/10">
                  <Clock className="w-6 h-6 inline mr-2 text-brand-magenta" />
                  <span className="text-white font-semibold">Öffnungszeiten:</span>
                </div>
                <ul className="space-y-2 ml-8 font-light">
                  <li>29. Dezember: 08:00 - 20:00 Uhr</li>
                  <li>30. Dezember: 08:00 - 20:00 Uhr</li>
                  <li>31. Dezember: 08:00 - 17:00 Uhr</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/20 border border-white/10 p-6 transition-all hover:border-brand-magenta/50 backdrop-blur-sm">
              <Shield className="w-8 h-8 mb-3 text-brand-magenta" />
              <h4 className="text-xl font-bold text-white mb-3">Qualität & Sicherheit</h4>
              <p className="text-gray-400 font-light">
                Nur geprüfte Markenware mit CE- und BAM-Zertifizierung.
                Keine gefährlichen Billigimporte – für Ihre Sicherheit!
              </p>
            </div>

            <div className="bg-black/20 border border-white/10 p-6 transition-all hover:border-brand-magenta/50 backdrop-blur-sm">
              <Phone className="w-8 h-8 mb-3 text-brand-magenta" />
              <h4 className="text-xl font-bold text-white mb-3">Beratung & Vorbestellung</h4>
              <p className="text-gray-400 mb-3 font-light">
                Lassen Sie sich von unseren Experten beraten und reservieren Sie Ihre Wunschartikel vorab.
              </p>
              <a href="tel:+4978549802 04" className="text-brand-magenta hover:text-brand-pink font-semibold transition-colors">
                +49 7854 980204
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.3!2d7.8!3d48.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM0JzEzLjIiTiA3wrA0OCcwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={t.silvester.title}
              />
            </div>

            <div className="bg-red-950/30 border border-red-900/50 p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-red-500" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Wichtige Sicherheitshinweise</h4>
                  <ul className="space-y-2 text-gray-400 text-sm font-light">
                    <li>• Nur CE- und BAM-geprüfte Feuerwerkskörper verwenden</li>
                    <li>• Bedienungsanleitung aufmerksam lesen</li>
                    <li>• Kein Alkohol beim Abbrennen</li>
                    <li>• Raketen nur in festen Flaschen oder Holzkisten</li>
                    <li>• Versagte Feuerwerkskörper nicht erneut anzünden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById('kontakt')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-brand-magenta to-brand-pink text-white px-10 py-5 font-bold text-lg hover:from-brand-pink hover:to-brand-magenta transition-all inline-flex items-center space-x-3 group"
          >
            <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Jetzt beraten lassen & vorbestellen</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SilvesterSales
