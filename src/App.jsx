import { useTranslation } from 'react-i18next'
import { motion, useScroll } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import LanguageSwitch from './components/LanguageSwitch'
import './i18n'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Navbar />
              <LanguageSwitch />
            </div>
          </div>
        </div>
        
        <Hero />
        
        <div className="relative z-10">
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
