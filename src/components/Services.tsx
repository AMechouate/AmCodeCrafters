import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import ServiceModal from './ServiceModal'

const Services = () => {
  const { theme, t } = useApp()
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      number: '1',
      titleKey: 'services.service1.title',
      descriptionKey: 'services.service1.description',
      icon: '💼',
      image: '/AM Bild 3.jpg',
    },
    {
      number: '2',
      titleKey: 'services.service2.title',
      descriptionKey: 'services.service2.description',
      icon: '📊',
      image: '/AM Bild 4.jpg',
    },
    {
      number: '3',
      titleKey: 'services.service3.title',
      descriptionKey: 'services.service3.description',
      icon: '💻',
      image: '/AM Bild 9.jpg',
    },
    {
      number: '4',
      titleKey: 'services.service4.title',
      descriptionKey: 'services.service4.description',
      icon: '🔧',
      image: '/AM Bild 1.jpg',
    },
    {
      number: '5',
      titleKey: 'services.service5.title',
      descriptionKey: 'services.service5.description',
      icon: '🚀',
      image: '/AM Bild 7.jpg',
    },
    {
      number: '6',
      titleKey: 'services.service6.title',
      descriptionKey: 'services.service6.description',
      icon: '🛠️',
      image: '/AM Bild 8.jpg',
    },
  ]

  return (
    <section id="expertise" className={`section-padding transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-800 to-gray-900'
        : 'bg-gradient-to-b from-primary-50/30 to-white'
    }`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('services.title')} <span className="text-primary-700">{t('services.titleHighlight')}</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedService(index)
                setIsModalOpen(true)
              }}
              className={`group rounded-xl border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-primary-500'
                  : 'bg-white border-primary-100 hover:border-primary-400'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl font-bold text-white drop-shadow-lg">
                    {service.number}
                  </span>
                </div>
                <div className={`absolute top-4 right-4 text-3xl rounded-full p-2 ${
                  theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
                }`}>
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary-700 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t(service.titleKey)}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedService(null)
        }}
        service={selectedService !== null ? services[selectedService] : null}
      />
    </section>
  )
}

export default Services
