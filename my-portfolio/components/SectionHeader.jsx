export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="fade-up inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-emerald-300/70">
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
        {eyebrow}
      </span>
      <h2 className="fade-up text-gradient font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4" style={{ animationDelay: '0.08s' }}>
        {title}
      </h2>
      <div className="fade-up mt-5 h-px w-16 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" style={{ animationDelay: '0.16s' }} />
    </div>
  )
}
