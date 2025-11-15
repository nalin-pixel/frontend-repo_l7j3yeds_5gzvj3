import React from 'react'

const colors = {
  primary: '#FDD835',
  secondary: '#00838F',
  text: '#455A64',
}

export default function TrustBar() {
  const items = [
    { icon: '✓', label: 'URBANROOF Certified' },
    { icon: '⭐', label: 'URBANROOF 4.8 Rating' },
    { icon: '🛡️', label: 'URBANROOF 10-Year Warranty' },
    { icon: '💯', label: 'URBANROOF Guaranteed' },
  ]

  return (
    <div className="w-full" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'white', color: colors.secondary }}>UR</div>
          <span className="font-semibold">URBANROOF</span>
        </div>
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm font-semibold" style={{ color: colors.secondary }}>
            <span>{it.icon}</span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
