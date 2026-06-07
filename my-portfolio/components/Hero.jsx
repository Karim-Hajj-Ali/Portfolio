import Image from 'next/image'

export default function Hero() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-center px-6">

      <div className="w-[280px] h-[280px] rounded-full border-2 border-white/70 overflow-hidden mb-6 shadow-[0_0_0_6px_rgba(255,255,255,0.08)]">
        <Image
          src="/karim.jpg"
          alt="Karim Hajj Ali"
          width={280}
          height={280}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-2 text-5xl">
        Hi, I'm Karim Hajj Ali
      </h1>

      <p className="text-xs uppercase tracking-[0.22em] text-white/55 mb-8">
        Computer Science & Engineering Student · AUB
      </p>

      <div className="w-10 h-px bg-white/30 mb-7" />

      <p className="max-w-lg text-base font-light text-white/65 leading-relaxed mb-8">
        Passionate about <strong className="text-white/90 font-medium">deep learning, machine learning</strong>, and <strong className="text-white/90 font-medium">generative AI & LLMs</strong>. Studying Computer Science & Engineering at the <strong className="text-white/90 font-medium">American University of Beirut</strong>, building intelligent systems and turning research ideas into real-world projects.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://github.com/Karim-Hajj-Ali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-2.5 rounded bg-white text-gray-900 hover:bg-gray-100 transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/karim-hajj-ali-70858624a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-2.5 rounded bg-transparent text-white/80 border border-white/30 hover:border-white/75 hover:text-white transition-all"
        >
          LinkedIn
        </a>
        <a
          href="/KarimHajjAli_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-2.5 rounded bg-transparent text-white/80 border border-white/30 hover:border-white/75 hover:text-white transition-all"
        >
          Resume
        </a>
      </div>

    </div>
  )
}
