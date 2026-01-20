import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const EventFireworks = () => {
  const events = [
    {
      title: 'Hochzeit',
      image: 'https://i.imgur.com/xTtsrQh.jpeg'
    },
    {
      title: 'Geburtstag',
      image: 'https://i.imgur.com/k2kuF6x.jpeg'
    },
    {
      title: 'Firmenfeier',
      image: 'https://i.imgur.com/s9ArMi3.jpeg'
    },
    {
      title: 'Stadtfest',
      image: 'https://i.imgur.com/wGpFnwN.jpeg'
    },
    {
      title: 'Vereinsfest',
      image: 'https://i.imgur.com/ZnhtY1B.jpeg'
    },
    {
      title: 'Jubiläum',
      image: 'https://i.imgur.com/1aDgqko.jpeg'
    }
  ]

  return (
    <section id="event-feuerwerke" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="flex items-start space-x-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-0">
                Lass Dich<br />verzaubern
              </h2>
            </div>
            <div className="relative hidden md:block">
              <Sparkles
                className="w-24 h-24 text-brand-magenta"
                style={{
                  transform: 'rotate(180deg)'
                }}
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-brand-magenta to-transparent"
                   style={{ filter: 'blur(2px)' }}>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Möchtest Du Deine Feier zu einem echten Highlight werden lassen, dann kannst Du hier bei uns von Phönix Girlz Berlin Deine persönliche Feuer- oder LED-Show buchen. Überrasche Deine Gäste mit einer spektakulären Performance der Extraklasse. Gelegenheiten dafür gibt es genug: Von der Geburtstagsfeier über die Hochzeit bis hin zur Firmenfeier und sogar Stadtfeste können unsere professionellen Feuerkünstler zu einem unvergleichlichen Erlebnis werden lassen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02] h-[400px]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                  <button
                    className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-brand-magenta hover:border-brand-magenta hover:text-white transition-all group-hover:scale-110"
                    onClick={() => {
                      const element = document.getElementById('kontakt')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventFireworks
