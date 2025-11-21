import { useState, useEffect } from 'react'
import { useApp } from './contexts/AppContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import AdvancedSolutions from './components/AdvancedSolutions'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-primary-50/20 to-white'
    }`}>
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Services />
      <AdvancedSolutions />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

