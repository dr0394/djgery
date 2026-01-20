import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const FAQ = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-0 whitespace-pre-line">
              {t.faq.title}
            </h2>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.faq.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:border-orange-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <HelpCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FF6C01' }} />
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#FF6C01' }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.faq.ctaTitle}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl font-light">
              {t.faq.ctaSubtitle}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-10 py-4 rounded font-bold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
            >
              {t.faq.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
