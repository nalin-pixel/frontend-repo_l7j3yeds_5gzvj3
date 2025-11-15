import React, { useState } from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  accent: '#FF5252',
  highlight: '#FFFDE7',
  text: '#455A64',
}

const steps = [
  {
    title: 'URBANROOF Step 1: Booking & Scope',
    desc: 'Share your property details and choose your inspection type. We confirm schedule and scope with transparent pricing.',
    timeline: 'URBANROOF: 10-15 minutes',
  },
  {
    title: 'URBANROOF Step 2: On-site Inspection',
    desc: 'Certified expert examines 100+ checkpoints across structural, electrical, plumbing, and moisture diagnostics.',
    timeline: 'URBANROOF: 3-4 hours',
  },
  {
    title: 'URBANROOF Step 3: Digital Report',
    desc: 'Receive a detailed digital report with photos, severity levels, and prioritized recommendations.',
    timeline: 'URBANROOF: 24 hours',
  },
  {
    title: 'URBANROOF Step 4: Repair & Support',
    desc: 'Get waterproofing and repair solutions with warranty. Enjoy lifetime support for follow-ups.',
    timeline: 'URBANROOF: Ongoing',
  },
]

function Step({ index, step, expanded, onToggle }) {
  return (
    <div className="relative p-6 rounded-xl border bg-white" style={{ borderColor: colors.primary }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary, color: colors.secondary }}>{index + 1}</div>
        <div className="flex-1">
          <h3 className="text-lg font-extrabold mb-1" style={{ color: colors.secondary }}>{step.title}</h3>
          <p className="text-sm" style={{ color: colors.text }}>{step.desc}</p>
          <p className="mt-2 text-xs font-semibold" style={{ color: colors.accent }}>{step.timeline}</p>
          <button onClick={onToggle} className="mt-3 text-sm font-semibold underline" style={{ color: colors.secondary }}>
            {expanded ? 'Hide details' : 'Learn more about ' + step.title.split(':')[0]}
          </button>
          {expanded && (
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: colors.highlight }}>
              <p className="text-sm" style={{ color: colors.text }}>
                Visual methodology diagrams and checklists illustrate how URBANROOF executes this step, including tools used and standards followed.
              </p>
            </div>
          )}
        </div>
      </div>
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 right-[-28px]" aria-hidden>
          <div className="w-7 h-7 rotate-45" style={{ borderRight: `3px solid ${colors.secondary}`, borderTop: `3px solid ${colors.secondary}` }} />
        </div>
      )}
    </div>
  )
}

export default function Process() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="py-12" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>How URBANROOF Inspection Process Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <Step key={i} index={i} step={s} expanded={openIndex===i} onToggle={() => setOpenIndex(openIndex===i?null:i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
