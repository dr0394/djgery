import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const images = [
    {
      url: 'https://i.imgur.com/URrZ07w.png',
      title: 'Event Impression',
      category: 'Event'
    }
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="galerie" className="relative py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-24">
          <div className="inline-block">
            <span
              className="text-base uppercase tracking-[0.3em] font-bold px-8 py-3 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.gallery.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.gallery.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border-2 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
              style={{ borderColor: 'rgba(255, 108, 1, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.6)'
                e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(255, 108, 1, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 108, 1, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span
                  className="inline-block px-5 py-2 text-sm font-bold rounded-full border mb-4"
                  style={{
                    borderColor: 'rgba(255, 108, 1, 0.6)',
                    color: '#FF6C01',
                    backgroundColor: 'rgba(255, 108, 1, 0.2)'
                  }}
                >
                  {image.category}
                </span>
                <h3 className="text-3xl font-bold text-white">{image.title}</h3>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 100px rgba(255, 108, 1, 0.2)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-7xl max-h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {images[selectedImage].title}
            </h3>
            <span
              className="inline-block px-4 py-1 text-sm font-semibold rounded-full border"
              style={{
                borderColor: 'rgba(255, 108, 1, 0.5)',
                color: '#FF6C01',
                backgroundColor: 'rgba(255, 108, 1, 0.15)'
              }}
            >
              {images[selectedImage].category}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
