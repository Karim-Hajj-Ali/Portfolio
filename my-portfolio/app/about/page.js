import Link from 'next/link'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/about" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4">About Me</p>

        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-8">
          Who I am
        </h2>

        <div className="w-10 h-px bg-white/30 mb-8" />

        <p className="max-w-xl text-base font-light text-white/65 leading-relaxed">
          I am a <strong className="text-white/90 font-medium">22-year-old</strong> Computer Science
          and Engineering student at the{' '}
          <strong className="text-white/90 font-medium">American University of Beirut</strong>.
          I am deeply interested in{' '}
          <strong className="text-white/90 font-medium">AI in industry</strong> - how machine learning
          and intelligent systems are shaping the real world. I love working on projects that challenge
          me and push my skills further.
          Outside of tech, I stay active through{' '}
          <strong className="text-white/90 font-medium">football, working out, swimming, cycling</strong>,
          and hunting. Sport and discipline are a big part of who I am - on and off the screen.
        </p>

        <Link
          href="/"
          className="mt-10 text-sm font-medium px-6 py-2.5 rounded bg-transparent text-white/80 border border-white/30 hover:border-white/75 hover:text-white transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
