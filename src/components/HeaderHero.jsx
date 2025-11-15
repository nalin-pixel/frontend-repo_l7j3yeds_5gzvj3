import React from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  accent: '#FF5252',
  bg: '#FAFAFA',
  highlight: '#FFFDE7',
  text: '#455A64',
  cta: '#7C4DFF',
}

export default function HeaderHero() {
  return (
    <header className="w-full" style={{ backgroundColor: colors.bg, color: colors.text }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-xl" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
            UR
          </div>
          <div className="text-sm">
            <p className="font-bold" style={{ color: colors.secondary }}>URBANROOF</p>
            <p className="opacity-80">Home Inspection & Waterproofing Expert</p>
          </div>
        </div>
        <a href="#services" className="hidden sm:inline-block px-4 py-2 rounded font-semibold" style={{ backgroundColor: colors.cta, color: 'white' }}>Explore URBANROOF Services</a>
      </div>

      <section className="relative overflow-hidden" style={{ minHeight: '30vh' }}>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(250,250,250,0.7), rgba(250,250,250,0.9))' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: colors.secondary }}>URBANROOF: Complete Home Inspection Solutions</h1>
            <p className="text-base sm:text-lg font-medium mb-6" style={{ color: colors.primary }}>Understand Your Home Better with URBANROOF</p>
            <a href="#services" className="inline-block px-5 py-3 rounded-lg font-semibold shadow" style={{ backgroundColor: colors.cta, color: 'white' }}>Explore URBANROOF Services</a>
          </div>
          <div className="flex-1 hidden sm:block" />
        </div>
      </section>
    </header>
  )
}
