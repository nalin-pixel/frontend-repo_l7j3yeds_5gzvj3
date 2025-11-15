import React from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  accent: '#FF5252',
  highlight: '#FFFDE7',
  text: '#455A64',
  cta: '#7C4DFF',
}

function ServiceCard({ variant = 'resident' }) {
  const isBuyer = variant === 'buyer'
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: colors.primary, backgroundColor: 'white' }}>
      <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: isBuyer ? colors.accent : colors.secondary, color: 'white' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary, color: colors.secondary }}>UR</div>
          <h3 className="text-xl font-extrabold">{isBuyer ? 'URBANROOF Home Inspection for Home Buyers' : 'URBANROOF Home Inspection for Residents'}</h3>
        </div>
      </div>
      <div className="border-l-4" style={{ borderColor: colors.primary }} />

      <div className="p-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>What's Included in URBANROOF Inspection?</h4>
          <ul className="space-y-2 text-sm" style={{ color: colors.text }}>
            {[
              'URBANROOF Mechanical systems check',
              'URBANROOF Plumbing inspection',
              'URBANROOF Electrical check',
              'URBANROOF Thermal imaging',
              'URBANROOF Digital report',
              'URBANROOF Lifetime support',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-green-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>Why You Need URBANROOF Inspection?</h4>
          <ul className="space-y-2 text-sm" style={{ color: colors.text }}>
            <li>Identify hidden issues early and reduce repair costs</li>
            <li>Clear, certified reporting helps with negotiations</li>
            <li>Backed by URBANROOF 10-year waterproofing expertise</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3" style={{ color: colors.secondary }}>URBANROOF Inspection Cost?</h4>
          <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.highlight, borderColor: colors.primary }}>
            <p className="text-sm" style={{ color: colors.text }}>Starting at</p>
            <p className="text-3xl font-extrabold" style={{ color: colors.secondary }}>₹2,999</p>
            <p className="text-xs opacity-70">Includes digital URBANROOF report</p>
          </div>
          <a href="#contact" className="mt-4 inline-block w-full text-center px-4 py-3 rounded-lg font-semibold shadow" style={{ backgroundColor: colors.cta, color: 'white' }}>
            {isBuyer ? 'Get URBANROOF Pre-Purchase Inspection' : 'Book URBANROOF Inspection'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>URBANROOF Service Options</h2>
        <div className="space-y-8">
          <ServiceCard variant="resident" />
          <ServiceCard variant="buyer" />
        </div>
      </div>
    </section>
  )
}
