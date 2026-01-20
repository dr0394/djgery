import React from 'react'

const Partners = () => {
  const partners = [
    {
      name: 'PM International AG',
      category: 'Corporate'
    },
    {
      name: 'Etol GmbH & Co KG',
      category: 'Corporate'
    },
    {
      name: 'Bau 72 GmbH',
      category: 'Corporate'
    },
    {
      name: 'Junker Maschinenfabrik',
      category: 'Corporate'
    },
    {
      name: 'Maier + Kaufmann GmbH',
      category: 'Retail'
    },
    {
      name: 'Nissan UCI Mountain Bike WC',
      category: 'Sports'
    },
    {
      name: 'Calwer Klostersommer 2014',
      category: 'Cultural'
    },
    {
      name: 'Kärcher World Meeting',
      category: 'Corporate'
    },
    {
      name: 'Volksbank Betriebsfeier',
      category: 'Financial'
    },
    {
      name: 'Pandora Schmuck',
      category: 'Retail'
    },
    {
      name: 'Hotel Ritter',
      category: 'Hospitality'
    },
    {
      name: 'Gestüt Kaiserhof',
      category: 'Events'
    },
    {
      name: 'Goldene Künstler Gala',
      category: 'Cultural'
    },
    {
      name: 'Hotel Silberkönig',
      category: 'Hospitality'
    },
    {
      name: 'Baden-Badener WG',
      category: 'Corporate'
    },
    {
      name: 'Fishermans / Lichtenau',
      category: 'Hospitality'
    },
    {
      name: 'Hotel Rebstock / Durbach',
      category: 'Hospitality'
    },
    {
      name: 'Markgraf von Baden',
      category: 'Cultural'
    },
    {
      name: 'Parkhotel Adler',
      category: 'Hospitality'
    },
    {
      name: '725 Jahre Kittersburg',
      category: 'Cultural'
    }
  ]

  return (
    <section id="partner" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Partner & Referenzen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vertrauen Sie auf unsere Erfahrung. Seit über 20 Jahren begeistern wir nationale und
            internationale Kunden mit spektakulären Feuerwerk-Shows.
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <div className="flex space-x-8 animate-scroll">
            <div className="flex space-x-8 min-w-max">
              {partners.map((partner, index) => (
                <div
                  key={`original-${index}`}
                  className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 min-w-[200px] h-[140px]"
                >
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm mb-1">{partner.name}</p>
                    <p className="text-gray-400 text-xs">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-8 min-w-max" aria-hidden="true">
              {partners.map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 min-w-[200px] h-[140px]"
                >
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm mb-1">{partner.name}</p>
                    <p className="text-gray-400 text-xs">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <img
              src="/bildschirmfoto_2025-12-10_um_07.19.16.png"
              alt="Partner Logos Seite 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <img
              src="https://i.imgur.com/r4TfUxI.png"
              alt="Partner Logos Seite 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Von Hochzeiten über Firmenevents bis hin zu großen Festivals - wir setzen Ihre Visionen in
            atemberaubende Feuerwerk-Shows um.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-brand-magenta to-brand-pink px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-brand-magenta/50 transition-all duration-300"
          >
            Jetzt Anfragen
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners
