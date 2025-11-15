import React from 'react'

const colors = {
  secondary: '#00838F',
  text: '#455A64',
  cta: '#7C4DFF',
}

const testimonials = [
  { name: 'Amit S.', location: 'Pune', quote: 'URBANROOF report was crystal clear. Helped me negotiate repairs before purchase.', rating: '★★★★★' },
  { name: 'Neha K.', location: 'Bengaluru', quote: 'Found hidden leakage we never noticed. Waterproofing solved it for good.', rating: '★★★★★' },
  { name: 'Rohit M.', location: 'Mumbai', quote: 'Professional, timely, and detailed. Highly recommended for first-time buyers.', rating: '★★★★☆' },
]

export default function TestimonialsCTA() {
  return (
    <section className="py-12" style={{ backgroundColor: '#FFFDE7' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>What URBANROOF Customers Say</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5 rounded-xl border bg-white" style={{ borderColor: '#FDD835' }}>
              <div className="flex items-center gap-2 text-sm mb-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold bg-yellow-300 text-teal-700">UR</div>
                <span className="font-semibold">{t.name} · {t.location}</span>
              </div>
              <p className="text-sm mb-2" style={{ color: colors.text }}>&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs">{t.rating}</p>
            </div>
          ))}
        </div>

        <div id="contact" className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#00838F' }}>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Ready to Understand Your Home Better? Trust URBANROOF</h3>
              <p className="text-white/90 text-sm mb-4">Get URBANROOF Free Inspection Guide + Consultation</p>
            </div>
            <form className="bg-white rounded-xl p-4 grid grid-cols-1 gap-3">
              <input placeholder="Full Name" className="px-3 py-2 rounded border" />
              <input placeholder="Phone" className="px-3 py-2 rounded border" />
              <input placeholder="City" className="px-3 py-2 rounded border" />
              <button type="button" className="px-4 py-2 rounded font-semibold text-white" style={{ backgroundColor: colors.cta }}>Get Guide + Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
