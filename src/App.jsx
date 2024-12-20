import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import ComputersCanvas from './components/ComputersCanvas'
import './i18n'
import './App.css'

function App() {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-primary-light dark:bg-primary-dark relative">
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent-light dark:bg-accent-dark origin-left z-50"
            style={{ scaleX }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-accent-light/5 to-transparent dark:from-accent-dark/5 pointer-events-none" />
          
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="glass-effect rounded-lg p-8 border border-white/10 dark:border-black/10 shadow-lg backdrop-blur-sm bg-white/30 dark:bg-black/30">
                  <div className="space-y-6">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-accent-light dark:text-accent-dark text-xl font-medium"
                    >
                      {t('hero.greeting')}
                    </motion.p>
                    <motion.h1 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/70 font-black text-6xl md:text-7xl tracking-tight"
                    >
                      {t('hero.name')}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-secondary-light dark:text-secondary-dark text-xl max-w-xl leading-relaxed"
                    >
                      {t('hero.description')}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Experience />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Contact />
            </motion.div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
