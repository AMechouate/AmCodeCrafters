import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'de' | 'en'
type Theme = 'light' | 'dark'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  t: (key: string) => string
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Translations
const translations = {
  de: {
    nav: {
      home: 'Home',
      expertise: 'Expertise',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Today not Tomorrow',
      subtitle: 'Von der IT-Beratung angefangen, über die Planung und Implementierung bis hin zum Go-Live – wir begleiten Sie als Trusted Advisor durch Ihre IT-Projekte',
      cta1: 'Unsere Expertise',
      cta2: 'Kontakt aufnehmen',
    },
    services: {
      title: 'Im Rahmen unseres',
      titleHighlight: 'IT-Consultings',
      subtitle: 'kümmern wir uns um die folgenden Bereiche:',
      service1: {
        title: 'IT Consulting',
        description: 'Professionelle und kundenorientierte Beratung für Ihre IT-Projekte. Wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Lösungen, die Ihre Geschäftsziele unterstützen.',
      },
      service2: {
        title: 'Projektmanagement',
        description: 'Von der Planung bis zur erfolgreichen Umsetzung begleiten wir Sie durch alle Projektphasen. Unser erfahrenes Team sorgt für effiziente Abläufe und termingerechte Lieferung.',
      },
      service3: {
        title: 'Software Entwicklung',
        description: 'Maßgeschneiderte Softwarelösungen, die Ihre Prozesse optimieren und Ihr Geschäft voranbringen. Von der Konzeption bis zur Implementierung – wir entwickeln Lösungen, die funktionieren.',
      },
      service4: {
        title: 'IT Solutions',
        description: 'Ganzheitliche IT-Lösungen für Ihr Unternehmen. Wir integrieren moderne Technologien in Ihre bestehende Infrastruktur und schaffen nachhaltige, skalierbare Systeme.',
      },
      service5: {
        title: 'Digitalisierung',
        description: 'Wir bereiten Ihr Unternehmen auf die digitale Zukunft vor. Von der Strategieentwicklung bis zur Implementierung digitaler Prozesse – wir machen Sie fit für morgen.',
      },
      service6: {
        title: 'Support & Wartung',
        description: 'Langfristiger Erfolg durch kontinuierliche Betreuung. Unser Support-Team steht Ihnen zur Seite und gewährleistet die optimale Performance Ihrer IT-Systeme.',
      },
    },
    about: {
      title: 'Ihr Partner für',
      titleHighlight1: 'IT-Consulting',
      titleHighlight2: 'Digitalisierung',
      subtitle: 'Wir bereiten Unternehmen auf die digitale Zukunft vor',
      text1: 'AM Code Crafters ist ein innovatives Tech-Beratungsunternehmen, spezialisiert auf IT-Consulting und IT Solutions. Unsere Mission ist es, Unternehmen als Trusted Advisor durch ihre IT-Projekte zu begleiten – von der ersten Beratung über die Planung und Implementierung bis hin zum erfolgreichen Go-Live.',
      text2: 'Unser Leistungsportfolio orientiert sich an den wesentlichen Schritten, die Unternehmen auf dem Weg zur Digitalisierung gehen müssen. Wir bieten fundierte und kompetente Beratung, professionelle Planung und erfolgreiche Umsetzung Ihrer digitalen Projekte.',
      quote: 'Digitalisierung bedeutet nicht nur, Vorhandenes zu nutzen und es dabei zu belassen. Digitalisierung bedeutet, neue, effiziente Wege zu gehen und dadurch bessere Ergebnisse zu erzielen.',
      quoteAuthor: '– AM Code Crafters',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen',
      heading: 'Wir freuen uns auf Ihre Nachricht',
      text: 'Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Beratungsgespräch vereinbaren? Kontaktieren Sie uns – wir helfen Ihnen gerne weiter.',
      email: 'E-Mail',
      phone: 'Telefon',
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        send: 'Nachricht senden',
        success: 'Vielen Dank für Ihre Nachricht! Wir werden sich bald bei Ihnen melden.',
        close: 'Schließen',
      },
    },
    footer: {
      tagline: 'Ihr Partner für IT-Consulting und IT Solutions. Today not Tomorrow.',
      navigation: 'Navigation',
      services: 'Leistungen',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
    },
    advancedSolutions: {
      title: 'Unsere erweiterten IT-Lösungen',
      subtitle: 'Von Web-Anwendungen bis hin zu komplexen Mobile Apps mit modernsten Technologien',
      cta: 'Lassen Sie uns gemeinsam Ihre individuelle IT-Lösung entwickeln',
      features: 'Features',
      web: {
        title: 'Web-basierte Anwendungen',
        description: 'Wir entwickeln professionelle Web-Anwendungen mit unseren erfahrenen Backend- und Frontend-Teams.',
        details: 'Wir bieten nicht nur Web-basierte Anwendungen an, sondern helfen Ihnen auch dabei, eine strukturierte Strategie und einen detaillierten Plan zu erstellen, wie Sie Ihre IT-Lösung wünschen. Unsere erfahrenen Teams entwickeln moderne, skalierbare Web-Anwendungen mit bewährten Technologien.',
        feature1: 'Erfahrene Backend- und Frontend-Entwicklung',
        feature2: 'Moderne Frameworks und Technologien',
        feature3: 'Skalierbare und performante Lösungen',
      },
      planning: {
        title: 'Strukturierte Planung',
        description: 'Wir helfen Ihnen dabei, eine strukturierte Strategie und einen detaillierten Plan für Ihre IT-Lösung zu erstellen.',
        details: 'Gemeinsam entwickeln wir einen umfassenden Plan für Ihre IT-Lösung – von der ersten Analyse Ihrer Anforderungen bis hin zur detaillierten Roadmap. Wir erstellen eine strukturierte Architekturplanung, die alle Aspekte Ihrer gewünschten IT-Lösung abdeckt.',
        feature1: 'Individuelle Analyse Ihrer Anforderungen',
        feature2: 'Detaillierte Roadmap und Architekturplanung',
        feature3: 'Schrittweise Umsetzung mit klaren Meilensteinen',
      },
      cloud: {
        title: 'Cloud-Plattformen & Architektur',
        description: 'Komplexe Cloud-Architekturen mit API-Endpunkten und Datenbanken für skalierbare Infrastrukturen.',
        details: 'Von Cloud-Plattformen und Architekturen mit komplexen API-Endpunkten und Datenbanken – wir implementieren hochverfügbare, skalierbare Cloud-Infrastrukturen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind. Unsere Lösungen unterstützen verschiedene Cloud-Provider und gewährleisten maximale Flexibilität.',
        feature1: 'Cloud-Platform-Integration (AWS, Azure, GCP)',
        feature2: 'Komplexe API-Endpunkte und Microservices',
        feature3: 'Hochverfügbare Datenbank-Architekturen',
      },
      mobile: {
        title: 'Cross-Platform Mobile Apps',
        description: 'Mobile Apps mit erweiterten Features für iOS, Android und Web mit Offline-Funktionalität und Sicherheit.',
        details: 'Bis hin zu Cross-Platform Mobile Apps, die weitere Features anbieten wie Offline-Funktionalität und Datenbank-Synchronisation mit Smart Authentication. Unsere Apps verfügen über Logs-Generierung, um genau zu wissen, woran es bei Fehlermeldungen liegt, und Token-Generatoren für sichere Datenbankzugriffe. Die Daten können mit Data Encryption in der Datenbank gespeichert werden.',
        feature1: 'Cross-Platform Entwicklung (iOS, Android, Web)',
        feature2: 'Offline-Funktionalität und Datenbank-Synchronisation',
        feature3: 'Smart Authentication für sichere Zugriffe',
        feature4: 'Logs-Generierung für präzise Fehlerdiagnose',
        feature5: 'Token-Generator für sichere Datenbankzugriffe',
        feature6: 'Data Encryption für sichere Datenspeicherung',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      expertise: 'Expertise',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Today not Tomorrow',
      subtitle: 'From IT consulting to planning and implementation through to go-live – we accompany you as a trusted advisor through your IT projects',
      cta1: 'Our Expertise',
      cta2: 'Get in Touch',
    },
    services: {
      title: 'Within the scope of our',
      titleHighlight: 'IT Consulting',
      subtitle: 'we take care of the following areas:',
      service1: {
        title: 'IT Consulting',
        description: 'Professional and customer-oriented consulting for your IT projects. We analyze your requirements and develop tailored solutions that support your business goals.',
      },
      service2: {
        title: 'Project Management',
        description: 'From planning to successful implementation, we accompany you through all project phases. Our experienced team ensures efficient processes and on-time delivery.',
      },
      service3: {
        title: 'Software Development',
        description: 'Custom software solutions that optimize your processes and advance your business. From conception to implementation – we develop solutions that work.',
      },
      service4: {
        title: 'IT Solutions',
        description: 'Comprehensive IT solutions for your company. We integrate modern technologies into your existing infrastructure and create sustainable, scalable systems.',
      },
      service5: {
        title: 'Digitalization',
        description: 'We prepare your company for the digital future. From strategy development to the implementation of digital processes – we make you fit for tomorrow.',
      },
      service6: {
        title: 'Support & Maintenance',
        description: 'Long-term success through continuous support. Our support team is at your side and ensures optimal performance of your IT systems.',
      },
    },
    about: {
      title: 'Your Partner for',
      titleHighlight1: 'IT Consulting',
      titleHighlight2: 'Digitalization',
      subtitle: 'We prepare companies for the digital future',
      text1: 'AM Code Crafters is an innovative tech consulting company specializing in IT consulting and IT solutions. Our mission is to accompany companies as a trusted advisor through their IT projects – from initial consultation through planning and implementation to successful go-live.',
      text2: 'Our service portfolio is aligned with the essential steps companies must take on their path to digitalization. We offer sound and competent consulting, professional planning and successful implementation of your digital projects.',
      quote: 'Digitalization doesn\'t just mean using what exists and leaving it at that. Digitalization means taking new, efficient paths and thereby achieving better results.',
      quoteAuthor: '– AM Code Crafters',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s solve your IT challenges together',
      heading: 'We look forward to your message',
      text: 'Do you have questions about our services or would you like to arrange a non-binding consultation? Contact us – we\'re happy to help.',
      email: 'Email',
      phone: 'Phone',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        send: 'Send Message',
        success: 'Thank you for your message! We will get back to you soon.',
        close: 'Close',
      },
    },
    footer: {
      tagline: 'Your partner for IT consulting and IT solutions. Today not Tomorrow.',
      navigation: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    advancedSolutions: {
      title: 'Our Advanced IT Solutions',
      subtitle: 'From web applications to complex mobile apps with cutting-edge technologies',
      cta: 'Let\'s develop your individual IT solution together',
      features: 'Features',
      web: {
        title: 'Web-Based Applications',
        description: 'We develop professional web applications with our experienced backend and frontend teams.',
        details: 'We not only offer web-based applications, but also help you create a structured strategy and detailed plan for your desired IT solution. Our experienced teams develop modern, scalable web applications using proven technologies.',
        feature1: 'Experienced backend and frontend development',
        feature2: 'Modern frameworks and technologies',
        feature3: 'Scalable and performant solutions',
      },
      planning: {
        title: 'Structured Planning',
        description: 'We help you create a structured strategy and detailed plan for your IT solution.',
        details: 'Together we develop a comprehensive plan for your IT solution – from the initial analysis of your requirements to the detailed roadmap. We create a structured architecture planning that covers all aspects of your desired IT solution.',
        feature1: 'Individual analysis of your requirements',
        feature2: 'Detailed roadmap and architecture planning',
        feature3: 'Step-by-step implementation with clear milestones',
      },
      cloud: {
        title: 'Cloud Platforms & Architecture',
        description: 'Complex cloud architectures with API endpoints and databases for scalable infrastructures.',
        details: 'From cloud platforms and architectures with complex API endpoints and databases – we implement highly available, scalable cloud infrastructures that are perfectly tailored to your needs. Our solutions support various cloud providers and ensure maximum flexibility.',
        feature1: 'Cloud platform integration (AWS, Azure, GCP)',
        feature2: 'Complex API endpoints and microservices',
        feature3: 'Highly available database architectures',
      },
      mobile: {
        title: 'Cross-Platform Mobile Apps',
        description: 'Mobile apps with advanced features for iOS, Android and Web with offline functionality and security.',
        details: 'Up to cross-platform mobile apps that offer additional features such as offline functionality and database synchronization with smart authentication. Our apps have logs generation to know exactly what causes error messages, and token generators for secure database access. Data can be stored in the database with data encryption.',
        feature1: 'Cross-platform development (iOS, Android, Web)',
        feature2: 'Offline functionality and database synchronization',
        feature3: 'Smart authentication for secure access',
        feature4: 'Logs generation for precise error diagnosis',
        feature5: 'Token generator for secure database access',
        feature6: 'Data encryption for secure data storage',
      },
    },
  },
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'de'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    return (saved as Theme) || 'light'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

