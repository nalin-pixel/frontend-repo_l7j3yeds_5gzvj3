import React, { useState } from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  text: '#455A64',
}

const categories = [
  { name: 'URBANROOF Mechanical systems', count: 15 },
  { name: 'URBANROOF Plumbing', count: 12 },
  { name: 'URBANROOF Electrical', count: 18 },
  { name: 'URBANROOF Structural', count: 10 },
  { name: 'URBANROOF Other checks', count: 30 },
]

export default function Checklist() {
  const [open, setOpen] = useState(false)
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>URBANROOF's 100+ Point Inspection Checklist</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((c, i) => (
            <div key={i} className="p-4 rounded-lg border flex flex-col items-start gap-2" style={{ borderColor: colors.primary }}>
              <span className="text-2xl">✅</span>
              <p className="font-semibold" style={{ color: colors.secondary }}>{c.name}</p>
              <p className="text-sm" style={{ color: colors.text }}>{c.count} items</p>
            </div>
          ))}
        </div>
        <button onClick={() => setOpen(true)} className="mt-6 px-5 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#7C4DFF' }}>
          Click to see full URBANROOF checklist
        </button>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className="relative bg-white max-w-2xl w-full rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-extrabold mb-2" style={{ color: colors.secondary }}>Full URBANROOF Checklist</h3>
              <p className="text-sm mb-4" style={{ color: colors.text }}>A comprehensive list of checkpoints used during inspection across structures, systems, safety, and moisture diagnostics.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: colors.text }}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <li key={i}>URBANROOF checkpoint item {i + 1}</li>
                ))}
              </ul>
              <button onClick={() => setOpen(false)} className="mt-4 px-4 py-2 rounded font-semibold text-white" style={{ backgroundColor: '#7C4DFF' }}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
