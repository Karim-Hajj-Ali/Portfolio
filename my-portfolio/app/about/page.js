import Link from 'next/link'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { ArrowIcon } from '@/components/Icons'

const facts = [
  { label: 'Age', value: '22' },
  { label: 'University', value: 'AUB' },
  { label: 'Focus', value: 'AI / ML' },
  { label: 'Graduating', value: '2027' },
]

const activities = [
  'IEEE Member',
  'IPark Club',
  '🏆 1st place - IPark competition (7 teams)',
]

export default function About() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/about" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 pt-32 pb-16">
        <SectionHeader eyebrow="About Me" title="Who I am" />

        <div className="fade-up card mt-12 p-6 sm:p-9" style={{ animationDelay: '0.2s' }}>
          <p className="text-base sm:text-lg font-light text-white/70 leading-relaxed">
            I am a <strong className="text-white font-medium">22-year-old</strong> Computer Science and
            Engineering student at the{' '}
            <strong className="text-white font-medium">American University of Beirut</strong>. I am deeply
            interested in <strong className="text-emerald-300 font-medium">AI in industry</strong> - how
            machine learning and intelligent systems are shaping the real world. Lately I've been working
            on <strong className="text-white font-medium">LLM fine-tuning, RAG systems, and multilingual AI</strong>,
            turning research ideas into products that solve real problems.
          </p>
          <p className="mt-5 text-base sm:text-lg font-light text-white/70 leading-relaxed">
            Outside of tech, I stay active through{' '}
            <strong className="text-white font-medium">football, working out, swimming, cycling</strong>, and
            hunting. Sport and discipline are a big part of who I am - on and off the screen.
          </p>
        </div>

        {/* quick facts */}
        <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5" style={{ animationDelay: '0.28s' }}>
          {facts.map(({ label, value }) => (
            <div key={label} className="card p-4 text-center">
              <div className="font-display font-bold text-xl sm:text-2xl text-gradient">{value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">{label}</div>
            </div>
          ))}
        </div>

        {/* activities */}
        <div className="fade-up mt-8" style={{ animationDelay: '0.34s' }}>
          <h3 className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/70 mb-3 text-center">
            Activities
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {activities.map((a) => (
              <span
                key={a}
                className="text-[13px] sm:text-sm font-light text-white/70 border border-white/12 rounded-full px-3.5 py-1.5"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-up flex justify-center mt-12" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-white/[0.04] text-white/80 border border-white/15 hover:border-emerald-400/40 hover:text-white transition-all"
          >
            <ArrowIcon className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
