import React from 'react'

const colors = {
  secondary: '#00838F',
  text: '#455A64',
  cta: '#7C4DFF',
}

const guides = [
  { title: 'What to Look for in URBANROOF Home Inspection', desc: 'Key areas our experts focus on and how to read results effectively.' },
  { title: 'Common Issues URBANROOF Finds', desc: 'From damp walls to poor drainage—what we uncover most often.' },
  { title: 'How to Prepare for URBANROOF Inspection', desc: 'Simple steps to ensure a smooth inspection day.' },
]

export default function Education() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: colors.secondary }}>Understanding Your Home with URBANROOF</h2>
        <p className="text-sm mb-6" style={{ color: colors.text }}>Short guides to help you make sense of your home inspection.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {guides.map((g, i) => (
            <div key={i} className="p-5 rounded-xl border bg-white" style={{ borderColor: '#FDD835' }}>
              <h3 className="font-bold mb-2" style={{ color: colors.secondary }}>{g.title}</h3>
              <p className="text-sm mb-3" style={{ color: colors.text }}>{g.desc}</p>
              <button className="px-4 py-2 rounded font-semibold text-white" style={{ backgroundColor: colors.cta }}>Download URBANROOF Guide</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
