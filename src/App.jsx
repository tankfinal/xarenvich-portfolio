import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <section className="relative w-full h-screen mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
              <h1 className="text-white font-black text-7xl">
                Hi, I'm <span className="text-[#915eff]">Your Name</span>
              </h1>
              <p className="text-secondary text-[17px] mt-2 max-w-3xl">
                I'm a software developer with a passion for building digital experiences.
                I specialize in web development and creating user-friendly applications.
              </p>
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
