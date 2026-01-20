import React from 'react'
import { Music, Heart, Globe, Award } from 'lucide-react'

const AboutDJWalli = () => {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DJ Gery White"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-2xl md:text-3xl font-bold text-white">DJ Gery White</div>
                <div className="text-lg text-orange-400">International DJ & Producer</div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(255, 108, 1, 0.3), transparent)' }}
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span
                  className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
                  style={{
                    color: '#FF6C01',
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.05)'
                  }}
                >
                  Über Gery White
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                International DJ & Producer<br />mit Leidenschaft für House
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed">
                  Mit einer Leidenschaft für House-Musik und einer internationalen Präsenz bringt <strong className="text-white">DJ Gery White</strong> die Energie von Ibiza direkt auf deine Bühne. Sein Stil kombiniert elegante Grooves mit treibenden Tech-Beats.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Von <strong className="text-white">House und Tech-House</strong> über <strong className="text-white">Deep und Afro Progressive</strong> – DJ Gery White bewegt sich mühelos durch verschiedene Genres und schafft eine einzigartige Atmosphäre, die jede Tanzfläche zum Leben erweckt.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Mit internationaler Erfahrung in Clubs, Festivals und exklusiven Events weltweit versteht DJ Gery White die Kunst, <strong className="text-white">musikalische Momente zu kreieren</strong>, die unvergesslich bleiben. Seine Sets sind geprägt von dynamischen Beats, kraftvollen Drops und einer unverwechselbaren Club-Atmosphäre.
                </p>
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-l-4 p-4 rounded-r" style={{ borderColor: '#FF6C01' }}>
                  <p className="text-base text-gray-300/90 leading-relaxed italic">
                    "Musik fürs Club-Game, Events und internationale Shows – mit der Leidenschaft für Ibiza-Vibes und dynamische Dancefloor-Atmosphäre."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Music,
                  title: 'House',
                  subtitle: 'Tech & Deep Beats'
                },
                {
                  icon: Award,
                  title: 'Producer',
                  subtitle: 'Original Tracks'
                },
                {
                  icon: Globe,
                  title: 'International',
                  subtitle: 'Global Shows'
                },
                {
                  icon: Heart,
                  title: 'Ibiza',
                  subtitle: 'Club Vibes'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(255, 108, 1, 0.15)',
                      borderColor: 'rgba(255, 108, 1, 0.3)'
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: '#FF6C01' }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="cm-widget-soundcloud rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <iframe
                  src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1260797059&show_artwork=true&show_comments=true"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  title="SoundCloud Player"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDJWalli
