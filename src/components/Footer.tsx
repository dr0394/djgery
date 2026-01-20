import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Music2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="https://i.imgur.com/NO3LvhY.png"
                alt="DJ Gery White Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-lg text-gray-700 mt-4 font-medium">
              International DJ & Producer
            </p>
            <p className="text-base text-gray-600 mt-3">
              Feel the Vibe, Ignite the Dancefloor
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/djgerywhite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-700 hover:text-purple-600" />
              </a>
              <a
                href="#music"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors"
                aria-label="Music"
              >
                <Music2 className="w-6 h-6 text-gray-700 hover:text-orange-600" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 font-bold mb-5">Kontakt</h3>
            <ul className="space-y-3 text-base text-gray-700">
              <li>
                <a href="mailto:booking@djgerywhite.com" className="hover:text-orange-500 transition-colors">
                  booking@djgerywhite.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/djgerywhite" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                  @djgerywhite
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 font-bold mb-5">Services</h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>Club Shows</li>
              <li>Festival Performances</li>
              <li>Private Events</li>
              <li>Corporate Events</li>
              <li>Radio Shows</li>
              <li>Music Production</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 font-bold mb-5">Rechtliches</h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>
                <Link to="/impressum" className="hover:text-orange-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-orange-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="/agb" className="hover:text-orange-500 transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  EU-Streitbeilegung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="text-center text-base text-gray-600">
            <p>&copy; {new Date().getFullYear()} DJ Gery White. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
