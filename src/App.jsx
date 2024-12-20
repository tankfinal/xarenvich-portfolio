import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import './i18n'

function App() {
  const { t } = useTranslation()

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="relative z-0 bg-primary-light dark:bg-primary-dark min-h-screen">
          <Navbar />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <section className="relative w-full h-screen mx-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <h1 className="text-gray-900 dark:text-white font-black text-7xl">
                  {t('hero.greeting')} <span className="text-accent-light dark:text-accent-dark">{t('hero.name')}</span>
                </h1>
                <p className="text-secondary-light dark:text-secondary-dark text-[17px] mt-2 max-w-3xl">
                  {t('hero.description')}
                </p>
                <div className="mt-4 space-x-4">
                  <a href="mailto:aaa2003.loveyou@gmail.com" className="text-accent-light dark:text-accent-dark">
                    {t('contact.email')}
                  </a>
                  <span className="text-secondary-light dark:text-secondary-dark">|</span>
                  <span className="text-secondary-light dark:text-secondary-dark">{t('contact.phone')}</span>
                </div>
              </div>
            </section>
          </div>
          <Experience />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
