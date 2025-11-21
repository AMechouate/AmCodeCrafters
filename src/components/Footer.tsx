import { useApp } from '../contexts/AppContext'

const Footer = () => {
  const { theme, t } = useApp()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 to-black'
        : 'bg-gradient-to-b from-primary-900 to-primary-800'
    } text-gray-300`}>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/Logo_1-removebg.png"
                alt="AM Code Crafters Logo"
                className="h-20 w-auto object-contain"
              />
              <span className="text-2xl md:text-3xl font-bold text-white">
                AM Code Crafters
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-primary-400 transition-colors">
                  {t('nav.expertise')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-default">
                  {t('services.service1.title')}
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-default">
                  {t('services.service2.title')}
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-default">
                  {t('services.service3.title')}
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-default">
                  {t('services.service4.title')}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@amcodecrafters.de" className="hover:text-primary-400 transition-colors">
                  info@amcodecrafters.de
                </a>
              </li>
              <li>
                <a href="tel:+491234567890" className="hover:text-primary-400 transition-colors">
                  +49 (0) 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${
          theme === 'dark' ? 'border-gray-800' : 'border-primary-700/50'
        }`}>
          <p className="text-sm">
            © {currentYear} <span className="text-white font-semibold">AM Code Crafters</span>. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-primary-400 transition-colors">
              {t('footer.imprint')}
            </a>
            <a href="#" className="text-sm hover:text-primary-400 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm hover:text-primary-400 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
