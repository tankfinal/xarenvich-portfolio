import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ParticlesBackground from './components/ParticlesBackground'
import ComputersCanvas from './components/ComputersCanvas'
import './i18n'

function App() {
  const { t } = useTranslation()

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
          <ParticlesBackground />
          <Navbar />
          
          {/* Hero Section */}
          <section className="relative w-full h-screen">
            <div className="absolute inset-0 z-0">
              <div className="h-full w-1/2 ml-auto">
                <ComputersCanvas />
              </div>
            </div>
            
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-2xl glass-effect rounded-lg p-8">
                <div className="space-y-3">
                  <p className="text-accent-light dark:text-accent-dark text-xl">
                    {t('hero.greeting')}
                  </p>
                  <h1 className="text-gray-900 dark:text-white font-black text-6xl md:text-7xl">
                    {t('hero.name')}
                  </h1>
                  <p className="text-secondary-light dark:text-secondary-dark text-xl max-w-xl pt-4">
                    {t('hero.description')}
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="mailto:aaa2003.loveyou@gmail.com" 
                    className="inline-flex items-center px-6 py-3 rounded-md text-white bg-accent-light dark:bg-accent-dark hover:opacity-90 transition-opacity"
                  >
                    {t('contact.email')}
                  </a>
                  <a 
                    href="tel:+886988227271"
                    className="inline-flex items-center px-6 py-3 rounded-md border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <About />

          {/* Content Sections */}
          <div className="relative z-10">
            <Experience />
            <Skills />
            <Projects />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
