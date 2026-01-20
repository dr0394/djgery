import React from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'

const Catalog = () => {
  const handleArticleComparisonOpen = () => {
    window.open('/artikelvergleich_2025_1.pdf', '_blank')
  }

  return (
    <section id="katalog" className="py-32">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-brand-magenta/30 py-3 px-12 mb-8">
            <p className="text-white text-sm uppercase tracking-[0.3em] font-light">
              Unser Sortiment
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Pyro-Katalog
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-light mb-4">
            Entdecken Sie unsere umfangreiche Auswahl an hochwertigen Feuerwerkskörpern.
            Von klassischen Raketen bis zu spektakulären Verbundfeuerwerken – alle Artikel sind CE- und BAM-geprüft.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-light">
            Wir führen ausschließlich geprüfte Markenware von renommierten Herstellern wie Weco, Comet, Lesli und Nico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 border border-white/10 backdrop-blur-sm p-12 md:p-16 text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-8 text-brand-magenta" />
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
              Vollständiger Katalog
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Laden Sie unseren aktuellen Silvester-Katalog herunter und entdecken Sie
              unser komplettes Sortiment mit detaillierten Produktinformationen, technischen Daten und Preisen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="bg-gradient-to-r from-brand-magenta/50 to-brand-pink/50 text-white/70 px-10 py-5 font-bold text-lg transition-all inline-flex items-center justify-center space-x-3 cursor-not-allowed"
              >
                <span>Online Vorbestellen bald verfügbar</span>
              </button>

              <button
                onClick={handleArticleComparisonOpen}
                className="border border-brand-magenta/60 text-white px-10 py-5 font-semibold text-lg hover:border-brand-magenta hover:bg-brand-magenta/10 transition-all inline-flex items-center justify-center space-x-3 group"
              >
                <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Artikelvergleich 2025 (PDF)</span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('kontakt')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-white/20 text-white px-10 py-5 font-semibold text-lg hover:border-brand-magenta hover:bg-brand-magenta/10 transition-all inline-flex items-center justify-center space-x-3"
              >
                <span>Persönliche Beratung</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 font-light text-sm">
            Alle Preise verstehen sich zzgl. MwSt. • Irrtümer und Änderungen vorbehalten
          </p>
        </div>
      </div>
    </section>
  )
}

export default Catalog
