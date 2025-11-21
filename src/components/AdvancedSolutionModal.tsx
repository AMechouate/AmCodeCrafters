import { useEffect } from 'react'
import { useApp } from '../contexts/AppContext'

interface AdvancedSolutionModalProps {
  isOpen: boolean
  onClose: () => void
  solution: {
    icon: string
    title: string
    description: string
    image: string
    features: string[]
    details?: string
  } | null
}

const AdvancedSolutionModal = ({ isOpen, onClose, solution }: AdvancedSolutionModalProps) => {
  const { theme, t } = useApp()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !solution) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div
        className={`relative w-auto max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full transition-colors ${
            theme === 'dark'
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } shadow-lg`}
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Grid Layout: Image and Content Side by Side */}
        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Image Section - Takes 40% on desktop */}
          <div className="relative lg:w-2/5 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 min-h-[40vh] lg:min-h-0">
            <div className="relative inline-block p-4">
              <img
                src={solution.image}
                alt={solution.title}
                className="max-w-full max-h-[35vh] lg:max-h-[80vh] w-auto h-auto object-contain"
                style={{ 
                  display: 'block',
                }}
              />
              <div className="absolute top-6 right-6 z-10 text-4xl md:text-5xl">
                {solution.icon}
              </div>
            </div>
          </div>

          {/* Content Section - Takes 60% on desktop, scrollable */}
          <div className="lg:w-3/5 flex flex-col overflow-y-auto max-h-[90vh]">
            <div className="p-4 md:p-6 flex-1">
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {solution.title}
              </h2>
              
              <p className={`text-base md:text-lg leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {solution.description}
              </p>

              {/* Additional Details */}
              {solution.details && (
                <div className={`p-4 rounded-lg border-l-4 border-primary-600 mb-4 ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-primary-50/50'
                }`}>
                  <p className={`text-sm md:text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {solution.details}
                  </p>
                </div>
              )}

              {/* Features List */}
              <div className={`p-4 rounded-lg border-l-4 border-primary-600 mb-4 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-primary-50/50'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('advancedSolutions.features') || 'Features'}
                </h3>
                <ul className={`space-y-2 text-sm md:text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="btn-primary text-center text-sm md:text-base px-4 py-2"
                >
                  {t('contact.title') || 'Kontakt aufnehmen'}
                </a>
                <button
                  onClick={onClose}
                  className={`btn-secondary text-sm md:text-base px-4 py-2 ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : ''
                  }`}
                >
                  {t('contact.form.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSolutionModal

