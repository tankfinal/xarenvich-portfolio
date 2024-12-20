import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
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
        <div className="relative z-0 bg-primary-light dark:bg-primary-dark min-h-screen">
          <ParticlesBackground />
          <Navbar />
          <div className="relative">
            <section className="relative w-full h-screen mx-auto">
              <div className="absolute inset-0">
                <ComputersCanvas />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="relative z-10 bg-primary-light/70 dark:bg-primary-dark/70 backdrop-blur-sm rounded-lg p-8">
                  <h1 className="text-gray-900 dark:text-white font-black text-7xl mb-4">
                    {t('hero.greeting')} <span className="text-accent-light dark:text-accent-dark">{t('hero.name')}</span>
                  </h1>
                  <p className="text-secondary-light dark:text-secondary-dark text-xl mt-2 max-w-3xl">
                    {t('hero.description')}
                  </p>
                  <div className="mt-8 space-x-4">
                    <a 
                      href="mailto:aaa2003.loveyou@gmail.com" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-light dark:bg-accent-dark hover:opacity-90 transition-opacity"
                    >
                      {t('contact.email')}
                    </a>
                    <span className="text-secondary-light dark:text-secondary-dark">|</span>
                    <span className="text-secondary-light dark:text-secondary-dark">{t('contact.phone')}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
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
