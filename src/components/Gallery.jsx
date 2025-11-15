import React, { useState } from 'react'

const colors = {
  secondary: '#00838F',
  text: '#455A64',
}

const tabs = [
  'URBANROOF Inspection Findings',
  'URBANROOF Waterproofing Results',
  'URBANROOF Repairs & Solutions',
]

const images = new Array(8).fill(0).map((_, i) => ({
  src: `https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=800&auto=format&fit=crop&ixid=${i}`,
  caption: {
    issue: 'URBANROOF found seepage near balcony door',
    solution: 'URBANROOF applied membrane waterproofing + sealant',
    result: 'No leakage even after heavy rains',
    location: 'Bengaluru · Waterproofing',
  }
}))

export default function Gallery() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: colors.secondary }}>URBANROOF Project Results</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className={`px-4 py-2 rounded-full text-sm font-semibold ${active===i? 'bg-teal-600 text-white':'bg-gray-100 text-gray-700'}`}>{t}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <figure key={idx} className="rounded-lg overflow-hidden border bg-white">
              <img src={img.src} alt="URBANROOF project" className="w-full h-40 object-cover" />
              <figcaption className="p-3 text-xs text-gray-700 space-y-1">
                <p><span className="font-semibold">Issue:</span> {img.caption.issue}</p>
                <p><span className="font-semibold">Solution:</span> {img.caption.solution}</p>
                <p><span className="font-semibold">Result:</span> {img.caption.result}</p>
                <p className="opacity-70">{img.caption.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
