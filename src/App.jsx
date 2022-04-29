import { useState } from 'react'
import { About, Contact, Hero, Navbar, Services, Testimonials } from './components'
import './App.css'

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
