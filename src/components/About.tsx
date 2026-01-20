import React from 'react'
import { Sparkles, Award, Users, Flame } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  return (
    <section id="ueber-uns" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-fire-orange/5 to-black" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block border-t border-b border-brand-fire-orange/30 py-3 px-12 mb-8">
            <p className="text-white text-sm uppercase tracking-[0.3em] font-light">
              Unser Team
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Die Künstler hinter 
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Feuerkünstlerin Melli und technischer Partner Robert 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-fire-red/20 to-brand-fire-orange/20 border border-brand-fire-orange/30 flex items-center justify-center">
                <Flame className="w-6 h-6 text-brand-fire-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Faszination & Emotion</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Wir entführen die Zuschauer mit fesselnden Fächertänzen, akrobatischen Feuerelementen
                  und farbenfrohen LED-Effekten in eine andere Welt. Jede Show ist ein poetisches Erlebnis,
                  das verzaubert und begeistert.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-fire-red/20 to-brand-fire-orange/20 border border-brand-fire-orange/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-brand-fire-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Individualität</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Jede Show wird individuell an Ihren Anlass, Musikgeschmack, Corporate-Design
                  oder thematische Wünsche angepasst. Wir integrieren auf Wunsch spezielle Musikwünsche
                  und erstellen individuelle LED-Grafiken mit Ihrem Logo oder Schriftzug.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-fire-red/20 to-brand-fire-orange/20 border border-brand-fire-orange/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-fire-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Professionalität & Sicherheit</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Mit professioneller Technik, jahrelanger Erfahrung und höchsten Sicherheitsstandards
                  sorgen wir für einen reibungslosen Ablauf. Unsere Shows werden fast immer mit
                  eingewiesenem Helfer durchgeführt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-fire-red/20 to-brand-fire-orange/20 border border-brand-fire-orange/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-fire-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Umweltfreundliche Alternativen</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Unsere LED-Shows sind eine moderne, flexible und umweltfreundliche Alternative
                  zur Feuershow. Programmierbare LED-Tools ermöglichen Indoor- und Outdoor-Auftritte
                  mit individuellen Grafiken, Bildern und Schriftzügen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-brand-fire-orange/30">
              <img
                src="https://i.imgur.com/ZnhtY1B.jpeg"
                alt={t.about.team.melli}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Melli</h3>
              <p className="text-brand-fire-orange font-semibold">Feuerkünstlerin</p>
              <p className="text-gray-300 text-sm mt-2">Poetische Performances, die verzaubern</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-brand-fire-orange/30">
              <img
                src="hhttps://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t.about.team.robert}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Robert </h3>
              <p className="text-brand-fire-orange font-semibold">Technischer Partner</p>
              <p className="text-gray-300 text-sm mt-2">Perfekte Technik für unvergessliche Shows</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-fire-red/10 to-brand-fire-orange/10 border border-brand-fire-orange/20 backdrop-blur-sm p-12 md:p-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 italic">
            "Eine Feuer- oder LED-Show ist mehr als Kunst –
            es ist Emotion, Poesie und Handwerk in perfekter Harmonie."
          </blockquote>
          <p className="text-brand-fire-orange font-semibold text-lg">
            Melli & Robert – Phönix Girlz
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
