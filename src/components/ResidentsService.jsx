import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Home, ShieldCheck, Star, Users, Droplets, ThermometerSun, Wrench, Zap, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react'

const colors = {
  primary: '#FFD700', // Yellow
  navy: '#24344D',
  green: '#22C55E', // Tailwind green-500
}

function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md" style={{ backgroundColor: colors.primary }} />
          <span className="font-semibold text-slate-800">URBANROOF</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#about" className="hover:text-slate-900">About</a>
        </nav>
        <a href="#book" className="px-4 py-2 rounded-md text-white font-medium shadow hover:shadow-md transition" style={{ backgroundColor: colors.green }}>Book</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="w-full" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: colors.navy }}>
            Urbanroof Home Health Inspection
          </h1>
          <p className="mt-4 text-lg text-slate-600">Protect Your Family, Eliminate Hidden Problems.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#book" className="px-5 py-3 rounded-md text-white font-semibold shadow-lg hover:translate-y-[-1px] transition" style={{ backgroundColor: colors.green }}>
              Book a Free Home Check
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1604709177225-055f99402b0d?q=80&w=1600&auto=format&fit=crop"
              alt="Happy family at home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-md flex items-center gap-2 shadow">
              <ThermometerSun className="w-4 h-4 text-rose-500"/>
              <span className="text-sm text-slate-700">IR Thermal Scan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <div className="w-full border-y" style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFBEA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600"/> Certified</span>
        <span className="inline-flex items-center gap-2"><Star className="w-4 h-4 text-amber-500"/> 4.8★</span>
        <span className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-sky-600"/> Experts</span>
        <span className="inline-flex items-center gap-2"><Home className="w-4 h-4 text-violet-600"/> 1000+ Families</span>
      </div>
    </div>
  )
}

const FeatureCard = ({ icon: Icon, title, desc, href }) => (
  <div className="rounded-xl p-5 bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF3BF' }}>
        <Icon className="w-6 h-6" style={{ color: colors.navy }} />
      </div>
      <h3 className="font-semibold" style={{ color: colors.navy }}>{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    <a href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: colors.green }}>
      Learn more <ChevronRight className="w-4 h-4" />
    </a>
  </div>
)

function FourAreas() {
  const items = [
    { icon: Droplets, title: 'Dampness & Thermal', desc: 'Detect hidden moisture and heat loss before it harms your family.', href: '#learn-damp' },
    { icon: Wrench, title: 'Plumbing', desc: 'Find leaks, low pressure, and unsafe fittings across bathrooms and kitchen.', href: '#learn-plumb' },
    { icon: ShieldCheck, title: 'Tiles & Seepage', desc: 'Spot hollow tiles, cracks, and seepage sources to prevent mold.', href: '#learn-tiles' },
    { icon: Zap, title: 'Electrical', desc: 'Scan unsafe sockets, earthing, and load issues to reduce fire risk.', href: '#learn-elec' },
  ]
  return (
    <section id="services" className="py-14" style={{ backgroundColor: '#FFFDF0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.navy }}>What We Check For You</h2>
        <p className="mt-2 text-slate-600">Four essential areas, one thorough visit.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: colors.navy }}>Why Urbanroof?</h2>
            <p className="mt-4 text-slate-600">We combine certified inspectors, advanced thermal cameras, and a homeowner-first approach to keep your family safe and your home healthy. Clear reports, immediate fixes, zero upsell pressure.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Certified Inspectors', 'Thermal Imaging', 'Repair Guidance'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500"/> {b}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide text-slate-500">Trusted by</p>
              <div className="mt-2 flex flex-wrap items-center gap-6 opacity-80">
                {['HDFC', 'Tata Housing', 'Godrej', 'Mahindra Lifespaces'].map((c) => (
                  <span key={c} className="text-slate-700 font-semibold">{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <BeforeAfter />
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  const [val, setVal] = useState(60)
  const containerRef = useRef(null)
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-slate-200">
      <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" alt="Before issue" className="absolute inset-0 w-full h-full object-cover"/>
      <img
        src="https://images.unsplash.com/photo-1523419409543-8ea31db6038c?q=80&w=1600&auto=format&fit=crop"
        alt="After fix"
        className="absolute inset-0 h-full object-cover"
        style={{ width: `${val}%`, clipPath: `inset(0 ${100 - val}% 0 0)` }}
      />
      <input
        aria-label="Before after slider"
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
        className="absolute left-0 right-0 bottom-4 mx-auto w-[80%] accent-emerald-500"
      />
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-1" style={{ left: `${val}%`, backgroundColor: colors.primary }} />
      </div>
    </div>
  )
}

function WhatsAppTestimonialCarousel() {
  const slides = [
    { name: 'Anita, Pune', text: 'Team found a hidden bathroom leak with IR camera. Saved us a major repair later!', avatar: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Rahul, Mumbai', text: 'Quick, thorough, and easy to understand report. Highly recommend.', avatar: 'https://i.pravatar.cc/100?img=12' },
    { name: 'Sneha, Bengaluru', text: 'Fixed damp smell in kids’ room. Professional and polite team.', avatar: 'https://i.pravatar.cc/100?img=32' },
  ]
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % slides.length)
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16" style={{ backgroundColor: '#F6FFF8' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold" style={{ color: colors.navy }}>What Families Say</h3>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="p-2 rounded-md border hover:bg-white"><ChevronLeft className="w-5 h-5"/></button>
            <button onClick={next} className="p-2 rounded-md border hover:bg-white"><ChevronRight className="w-5 h-5"/></button>
          </div>
        </div>

        <div className="mt-6 relative">
          {slides.map((s, i) => (
            <div key={i} className={`transition-all duration-500 ${i === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'} absolute inset-0`}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex gap-4 items-start">
                <img src={s.avatar} alt={s.name} className="w-12 h-12 rounded-full"/>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium"><MessageCircle className="w-4 h-4"/> WhatsApp Review</div>
                  <p className="mt-2 text-slate-700">“{s.text}”</p>
                  <p className="mt-2 text-sm text-slate-500">{s.name}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="h-28" />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { q: "What’s included?", a: 'Complete visual inspection of dampness/thermal, plumbing, tiles/seepage, and electrical with report and guidance.' },
    { q: 'How long is the visit?', a: 'Typically 60–120 minutes for a 2–3 BHK depending on findings.' },
    { q: 'Do I need to be present?', a: 'Recommended, but not mandatory. We can brief you on a call and share the digital report.' },
    { q: 'Is it really free?', a: 'Yes, the health check is free. If you request repairs, we share an estimate—no obligation.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center" style={{ color: colors.navy }}>FAQ</h3>
        <div className="mt-6 divide-y border rounded-xl overflow-hidden">
          {items.map((it, i) => (
            <div key={i} className="bg-white">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                <span className="font-medium text-slate-800">{it.q}</span>
                <ChevronRight className={`w-5 h-5 transition ${open === i ? 'rotate-90' : ''}`}/>
              </button>
              <div className={`px-5 pb-4 text-slate-600 transition-all ${open === i ? 'block' : 'hidden'}`}>{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="book" className="py-10" style={{ backgroundColor: colors.navy }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold">Keep Your Home Healthy. Book Free Inspection</h3>
            <p className="text-slate-200 mt-1">Rapid response in your city. No obligation.</p>
          </div>
          <form className="bg-white rounded-xl p-4 grid sm:grid-cols-3 gap-3 shadow">
            <input required placeholder="Name" className="px-3 py-2 rounded-md border focus:outline-none focus:ring w-full"/>
            <input required placeholder="Phone" className="px-3 py-2 rounded-md border focus:outline-none focus:ring w-full"/>
            <input type="date" placeholder="Preferred date" className="px-3 py-2 rounded-md border focus:outline-none focus:ring w-full"/>
            <button className="sm:col-span-3 px-4 py-2 rounded-md text-white font-semibold" style={{ backgroundColor: colors.green }}>Book Free Home Check</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-300">
        <div>
          <div className="w-9 h-9 rounded-md" style={{ backgroundColor: colors.primary }} />
          <p className="mt-3 text-sm">Contact: +91-00000 00000<br/>hello@urbanroof.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Cities</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bengaluru</li>
            <li>Hyderabad</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Awards</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Top Home Services 2023</li>
            <li>Consumer Trust Award</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#book" className="hover:underline">Book</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">© URBANROOF</div>
    </footer>
  )
}

export default function ResidentsService() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <StickyHeader />
      <Hero />
      <TrustBar />
      <FourAreas />
      <WhySection />
      <WhatsAppTestimonialCarousel />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
