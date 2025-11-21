import { useApp } from '../contexts/AppContext'

const Hero = () => {
  const { theme, t } = useApp()

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-primary-50 via-primary-100/30 to-white'
    }`}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('hero.title').split(' ').map((word, i, arr) => 
                word.toLowerCase() === 'not' ? (
                  <span key={i} className="text-primary-600 italic"> {word} </span>
                ) : (
                  <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
                )
              )}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#expertise" className="btn-primary">
                {t('hero.cta1')}
              </a>
              <a href="#contact" className="btn-secondary">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <img
                src="/AM_Bilder_13-removebg.png"
                alt="AM Code Crafters"
                className="w-full h-auto object-contain max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
