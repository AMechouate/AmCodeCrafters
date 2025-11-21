import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import AdvancedSolutionModal from './AdvancedSolutionModal'

const AdvancedSolutions = () => {
  const { theme, t } = useApp()
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = [
    {
      icon: '🌐',
      title: t('advancedSolutions.web.title'),
      description: t('advancedSolutions.web.description'),
      image: '/AM Bild 10.jpg',
      features: [
        t('advancedSolutions.web.feature1'),
        t('advancedSolutions.web.feature2'),
        t('advancedSolutions.web.feature3'),
      ],
      details: t('advancedSolutions.web.details'),
    },
    {
      icon: '📋',
      title: t('advancedSolutions.planning.title'),
      description: t('advancedSolutions.planning.description'),
      image: '/AM Bild 11.jpg',
      features: [
        t('advancedSolutions.planning.feature1'),
        t('advancedSolutions.planning.feature2'),
        t('advancedSolutions.planning.feature3'),
      ],
      details: t('advancedSolutions.planning.details'),
    },
    {
      icon: '☁️',
      title: t('advancedSolutions.cloud.title'),
      description: t('advancedSolutions.cloud.description'),
      image: '/AM Bild 12.jpg',
      features: [
        t('advancedSolutions.cloud.feature1'),
        t('advancedSolutions.cloud.feature2'),
        t('advancedSolutions.cloud.feature3'),
      ],
      details: t('advancedSolutions.cloud.details'),
    },
    {
      icon: '📱',
      title: t('advancedSolutions.mobile.title'),
      description: t('advancedSolutions.mobile.description'),
      image: '/AM Bild 2.jpg',
      features: [
        t('advancedSolutions.mobile.feature1'),
        t('advancedSolutions.mobile.feature2'),
        t('advancedSolutions.mobile.feature3'),
        t('advancedSolutions.mobile.feature4'),
        t('advancedSolutions.mobile.feature5'),
        t('advancedSolutions.mobile.feature6'),
      ],
      details: t('advancedSolutions.mobile.details'),
    },
  ]

  return (
    <section id="advanced-solutions" className={`section-padding transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 to-gray-800'
        : 'bg-gradient-to-b from-white to-primary-50/30'
    }`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('advancedSolutions.title')}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('advancedSolutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedSolution(index)
                setIsModalOpen(true)
              }}
              className={`rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-primary-500'
                  : 'bg-white border-primary-100 hover:border-primary-400'
              }`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-5xl flex-shrink-0">{solution.icon}</span>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {solution.title}
                  </h3>
                  <p className={`leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {solution.description}
                  </p>
                  <ul className={`space-y-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">✓</span>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('advancedSolutions.cta')}
          </p>
          <a href="#contact" className="btn-primary">
            {t('contact.title')}
          </a>
        </div>

        {/* Advanced Solution Modal */}
        <AdvancedSolutionModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedSolution(null)
          }}
          solution={selectedSolution !== null ? solutions[selectedSolution] : null}
        />
      </div>
    </section>
  )
}

export default AdvancedSolutions

