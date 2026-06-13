import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const projects = [
  {
    name: 'CedarFix AI',
    period: 'Feb 2026 – May 2026',
    blurb: 'Multilingual AI platform for civic infrastructure complaints.',
    stack: ['Python', 'Qwen2.5', 'LoRA', 'RAG', 'Qdrant', 'GCP'],
    points: [
      'Built a multilingual AI platform that classifies Lebanese infrastructure complaints and routes them to the correct government entity (Arabic, English, French, Arabizi).',
      'Gathered and curated a multilingual fine-tuning dataset covering electricity, water, roads, telecom, and waste complaints.',
      'Fine-tuned Qwen2.5-3B-Instruct with LoRA for structured JSON extraction, driving classification, routing, and moderation.',
      'Integrated RAG routing (Qdrant), CLIP image understanding, HDBSCAN clustering, and MLflow/Prometheus/Grafana on GCP/GKE.',
    ],
  },
  {
    name: 'Ou3a-Joura! - Pothole Detection',
    period: 'Oct 2025 – Dec 2025',
    blurb: 'ML system that detects road potholes from phone sensors.',
    stack: ['Python', 'Java', 'ML', 'Android Sensors'],
    points: [
      'ML-based system to detect road potholes from smartphone sensor data.',
      'Processed accelerometer and gyroscope time-series data from Android devices.',
      'Trained and evaluated models to classify pothole vs non-pothole events.',
    ],
  },
  {
    name: 'xv6 Operating System Extensions',
    period: 'Jul 2025 – Aug 2025',
    blurb: 'Custom kernel system calls and a login mechanism.',
    stack: ['C', 'xv6', 'QEMU'],
    points: [
      'Implemented custom xv6 system calls and user-level programs interacting with kernel data structures.',
      'Extended the xv6 boot process with a login mechanism using console I/O and file descriptors.',
      'Developed and integrated Unix-like user utilities into the xv6 userland build system.',
    ],
  },
  {
    name: 'Bankruptcy Risk Prediction',
    period: 'Sep 2025',
    blurb: 'Year-ahead corporate bankruptcy prediction model.',
    stack: ['Python', 'CatBoost', 'Docker'],
    points: [
      'ML system to predict next-year corporate bankruptcy from financial data.',
      'Engineered time-aware labels to prevent data leakage in year-ahead prediction.',
      'Trained an imbalance-aware CatBoost model with validation-based threshold optimization.',
    ],
  },
  {
    name: 'Smart Hotel Reservation System',
    period: 'Sep 2025 – Dec 2025',
    blurb: 'Normalized relational database for a multi-branch hotel.',
    stack: ['PostgreSQL', 'SQL / PLpgSQL'],
    points: [
      'Designed a relational database covering reservations, payments, services, staff, events, and multi-branch operations.',
      'Built an ERD mapped to a normalized schema with M:N, weak entities, specialization, and unary supervision.',
      'Implemented constraints, indexes, views, stored procedures, and triggers to enforce business rules.',
    ],
  },
]

export default function Projects() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/projects" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-32 pb-16">
        <SectionHeader eyebrow="Things I've Built" title="Projects" />

        <div className="grid gap-4 sm:gap-5 mt-12">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="card fade-up p-5 sm:p-7"
              style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="hidden sm:flex shrink-0 mt-0.5 font-display font-bold text-2xl text-white/15 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display font-semibold text-white text-lg sm:text-xl">
                      {project.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-300/60 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm text-white/50 font-light">{project.blurb}</p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] sm:text-xs font-medium text-emerald-200/80 bg-emerald-400/[0.07] border border-emerald-400/15 rounded-full px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm font-light text-white/65 leading-relaxed">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
