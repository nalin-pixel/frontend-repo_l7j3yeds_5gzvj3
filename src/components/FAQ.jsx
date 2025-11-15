import React, { useState } from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  text: '#455A64',
}

const categories = [
  { name: 'About URBANROOF Inspection', items: [
    { q: 'What makes URBANROOF inspection different?', a: 'URBANROOF provides certified, comprehensive 100+ point inspections with moisture diagnostics, thermal imaging, and repair-ready reporting.' },
    { q: "What is URBANROOF's 100+ point checklist?", a: 'A structured set of checkpoints across structural, electrical, plumbing, safety, and waterproofing indicators.' },
    { q: 'Do you provide digital reports?', a: 'Yes, you receive a digital report within 24 hours including photos and recommendations.' },
    { q: 'Is thermal imaging included?', a: 'Yes, URBANROOF uses thermal imaging where applicable to detect hidden moisture and leakage patterns.' },
  ]},
  { name: 'URBANROOF Pricing & Booking', items: [
    { q: 'How much does an inspection cost?', a: 'Residential inspections start at ₹2,999 depending on property size and scope.' },
    { q: 'How do I book?', a: 'Use the contact form below or call our support to schedule your slot.' },
    { q: 'Can I reschedule?', a: 'Yes, simply reach out 24 hours before your appointment.' },
  ]},
  { name: 'URBANROOF Waterproofing', items: [
    { q: 'Do you offer waterproofing solutions?', a: 'Yes, URBANROOF provides end-to-end waterproofing with 10-year warranty on eligible systems.' },
    { q: 'Will you fix issues found?', a: 'We can provide repairs and waterproofing solutions post inspection if you choose to proceed.' },
    { q: 'Is there a warranty?', a: 'Eligible waterproofing systems come with up to 10-year warranty.' },
  ]},
  { name: 'URBANROOF Guarantees & Support', items: [
    { q: "What's URBANROOF's warranty?", a: 'Up to 10 years on selected waterproofing systems. Inspection report quality is backed by our guarantee.' },
    { q: 'Do you offer post-inspection support?', a: 'Yes, lifetime support for clarifications and guidance.' },
  ]},
]

export default function FAQ() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)
  const cat = categories[active]
  return (
    <section className="py-12" style={{ backgroundColor: '#FFFDE7' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>URBANROOF FAQ - Your Questions Answered</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c, i) => (
            <button key={i} onClick={() => {setActive(i); setOpen(null)}} className={`px-4 py-2 rounded-full text-sm font-semibold ${active===i? 'bg-teal-600 text-white':'bg-white text-gray-700 border'}`}>{c.name}</button>
          ))}
        </div>
        <div className="space-y-3">
          {cat.items.map((it, idx) => (
            <div key={idx} className="rounded-lg border bg-white" style={{ borderColor: colors.primary }}>
              <button onClick={() => setOpen(open===idx?null:idx)} className="w-full text-left px-4 py-3 font-semibold flex items-center justify-between">
                <span style={{ color: colors.secondary }}>{it.q}</span>
                <span>{open===idx?'-':'+'}</span>
              </button>
              {open===idx && (
                <div className="px-4 pb-4 text-sm" style={{ color: colors.text }}>
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
