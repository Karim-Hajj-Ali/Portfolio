import Image from 'next/image'
import { GithubIcon, LinkedinIcon, ResumeIcon, ArrowIcon } from '@/components/Icons'

export default function Hero() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">

      {/* availability badge */}
      <span
        className="fade-up inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-emerald-200/90 mb-8"
      >
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Open to internships & research · 2026
      </span>

      {/* avatar */}
      <div className="fade-up relative mb-8" style={{ animationDelay: '0.05s' }}>
        <div className="float-slow relative">
          <div
            className="absolute -inset-3 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.35), transparent 70%)' }}
          />
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full p-[2px] bg-gradient-to-b from-emerald-300/80 via-emerald-400/30 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
              <Image
                src="/karim.jpg"
                alt="Karim Hajj Ali"
                width={280}
                height={280}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <h1
        className="fade-up font-display font-bold tracking-tight leading-[1.05] mb-3 text-4xl sm:text-5xl md:text-6xl"
        style={{ animationDelay: '0.12s' }}
      >
        <span className="text-white/80">Hi, I'm </span>
        <span className="text-gradient">Karim Hajj Ali</span>
      </h1>

      <p
        className="fade-up text-[11px] sm:text-sm uppercase tracking-[0.22em] text-emerald-300/80 mb-8"
        style={{ animationDelay: '0.18s' }}
      >
        Computer Science & Engineering · AUB
      </p>

      <p
        className="fade-up max-w-xl text-base sm:text-lg font-light text-white/65 leading-relaxed mb-10"
        style={{ animationDelay: '0.24s' }}
      >
        Passionate about <strong className="text-white font-medium">deep learning, machine learning</strong>, and{' '}
        <strong className="text-white font-medium">generative AI & LLMs</strong>. I build intelligent
        systems and turn research ideas into real-world products.
      </p>

      <div className="fade-up flex flex-wrap gap-3 justify-center" style={{ animationDelay: '0.3s' }}>
        <a
          href="https://github.com/Karim-Hajj-Ali"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full bg-emerald-400 text-[#06120c] hover:bg-emerald-300 transition-all shadow-[0_8px_30px_-8px_rgba(52,211,153,0.6)]"
        >
          <GithubIcon className="w-4 h-4" />
          GitHub
          <ArrowIcon className="w-4 h-4 -ml-0.5 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/karim-hajj-ali-70858624a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full bg-white/[0.04] text-white/85 border border-white/15 hover:border-emerald-400/40 hover:text-white transition-all"
        >
          <LinkedinIcon className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="/KarimHajjAli_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full bg-white/[0.04] text-white/85 border border-white/15 hover:border-emerald-400/40 hover:text-white transition-all"
        >
          <ResumeIcon className="w-4 h-4" />
          Resume
        </a>
      </div>

      {/* scroll cue */}
      <div className="fade-up absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animationDelay: '0.5s' }}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <svg viewBox="0 0 24 24" className="bob w-4 h-4 text-emerald-300/60" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>

    </div>
  )
}
