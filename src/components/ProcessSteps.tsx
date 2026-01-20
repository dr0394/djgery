import React from 'react'
import { MessageCircle, Calendar, PartyPopper } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface ProcessStepsProps {
  onOpenBooking: () => void
}

const ProcessSteps = ({ onOpenBooking }: ProcessStepsProps) => {
  const { t } = useLanguage()
  const icons = [MessageCircle, Calendar, PartyPopper]

  return (
    <section id="ablauf" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              {t.processSteps.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
            {t.processSteps.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {t.processSteps.steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div
                className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-6">
                  <div
                    className="text-6xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #00D9FF, #0EA5E9)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{
                      borderColor: 'rgba(0, 217, 255, 0.3)',
                      backgroundColor: 'rgba(0, 217, 255, 0.1)'
                    }}
                  >
                    {React.createElement(icons[index], { className: "w-8 h-8", style: { color: '#00D9FF' } })}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-300/80 leading-relaxed">{step.description}</p>
                  </div>

                  <div
                    className="inline-block px-6 py-2 rounded-full border text-sm font-semibold"
                    style={{
                      borderColor: 'rgba(0, 217, 255, 0.3)',
                      color: '#00D9FF'
                    }}
                  >
                    {step.action}
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-6 w-12 h-px"
                  style={{ background: 'linear-gradient(to right, rgba(0, 217, 255, 0.5), rgba(0, 217, 255, 0.1))' }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={onOpenBooking}
            className="group relative overflow-hidden px-12 py-6 transition-all duration-500"
            style={{
              backgroundImage: 'linear-gradient(to right, #00D9FF, #0EA5E9)',
              boxShadow: '0 0 0 rgba(0, 217, 255, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 217, 255, 0.4)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-black font-bold text-lg tracking-wide uppercase">
              {t.processSteps.cta}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
