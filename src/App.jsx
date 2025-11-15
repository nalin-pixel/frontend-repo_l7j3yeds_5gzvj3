import React from 'react'
import HeaderHero from './components/HeaderHero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Process from './components/Process'
import Checklist from './components/Checklist'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Education from './components/Education'
import TestimonialsCTA from './components/TestimonialsCTA'

function App() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#455A64', fontFamily: 'Roboto, Montserrat, Inter, system-ui, sans-serif' }}>
      <HeaderHero />
      <TrustBar />
      <Services />
      <Process />
      <Checklist />
      <Gallery />
      <FAQ />
      <Education />
      <TestimonialsCTA />
      <footer className="text-center py-6 text-sm" style={{ backgroundColor: '#FAFAFA' }}>
        © URBANROOF - Expert Home Inspections Since 2015
      </footer>
    </div>
  )
}

export default App
