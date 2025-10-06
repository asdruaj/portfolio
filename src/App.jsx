import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl '>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
