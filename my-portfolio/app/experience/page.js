import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const experiences = [
  {
    role: 'Full Stack Engineer',
    type: 'Internship',
    company: 'ITP Media Group',
    location: 'Lebanon',
    period: 'Jun 2026 - Aug 2026',
    current: true,
    letterUrl: '',
    stack: ['Full-Stack', 'AI', 'Automation', 'Real-time Analytics'],
    points: [
      'Building an AI-powered command center that monitors the company\'s content production pipeline and detects stalls and bottlenecks in real time.',
      'Developing full-stack features across the frontend and backend to surface pipeline health and automatically flag delayed or blocked stages.',
      'Turning operational data into actionable insights that help teams keep projects moving and ship faster.',
    ],
  },
]

export default function Experience() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/experience" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 pt-32 pb-16">
        <SectionHeader eyebrow="Where I've Worked" title="Experience" />

        <div className="relative mt-12">
          {/* timeline rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/50 via-white/10 to-transparent" />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div
                key={exp.company + exp.role}
                className="fade-up relative pl-8 sm:pl-10"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                {/* node */}
                <span className="absolute left-0 top-2 grid place-items-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />
                  {exp.current && (
                    <span className="pulse-dot absolute h-3.5 w-3.5 rounded-full bg-emerald-400" />
                  )}
                </span>

                <div className="card p-5 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display font-semibold text-white text-lg sm:text-xl">
                      {exp.role}
                      <span className="text-white/40 font-normal"> · {exp.type}</span>
                    </h3>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-300/70 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 mt-1">
                    <p className="text-sm font-medium text-white/80">
                      {exp.company}
                      <span className="text-white/40 font-light"> · {exp.location}</span>
                    </p>

                    {exp.letterUrl ? (
                      <a
                        href={exp.letterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-emerald-200/90 bg-emerald-400/[0.07] border border-emerald-400/20 hover:bg-emerald-400/[0.14] hover:border-emerald-400/35 transition-colors rounded-full px-3 py-1"
                      >
                        Employer Letter
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/30 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1 cursor-not-allowed"
                        title="Coming soon"
                      >
                        Employer Letter
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 my-4">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] sm:text-xs font-medium text-emerald-200/80 bg-emerald-400/[0.07] border border-emerald-400/15 rounded-full px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm font-light text-white/65 leading-relaxed">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
