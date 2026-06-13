import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

const projects = [
  {
    name: 'CedarFix AI',
    period: 'Feb 2026 – May 2026',
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

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 text-center">
          Things I've Built
        </p>
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-3 text-center">
          Projects
        </h2>
        <div className="w-10 h-px bg-white/30 mb-10 sm:mb-12 mx-auto" />

        <div className="grid gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-white/25 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-3">
                <h3 className="font-display font-semibold text-white text-base sm:text-lg">
                  {project.name}
                </h3>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
                  {project.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-light text-white/70 border border-white/15 rounded-full px-2.5 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside space-y-1.5 text-sm font-light text-white/65 leading-relaxed">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
