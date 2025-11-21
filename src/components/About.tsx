import { useApp } from '../contexts/AppContext'

const About = () => {
  const { theme, t, language } = useApp()

  return (
    <section id="about" className={`section-padding transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-white via-primary-50/50 to-primary-100/30'
    }`}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/AM Bild 2.jpg"
                alt={t('about.title')}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('about.title')} <span className="text-primary-600">{t('about.titleHighlight1')}</span> {language === 'en' ? 'and' : 'und'} <span className="text-primary-600">{t('about.titleHighlight2')}</span>
            </h2>
            <p className={`text-xl mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('about.subtitle')}
            </p>
            <p className={`mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('about.text1')}
            </p>
            <p className={`mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('about.text2')}
            </p>
            <div className={`p-6 rounded-lg border-l-4 border-primary-600 shadow-md ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <p className={`italic ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{t('about.quote')}"
              </p>
              <p className="text-primary-600 font-semibold mt-4">
                {t('about.quoteAuthor')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
