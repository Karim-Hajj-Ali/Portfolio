import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

const projects = [
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
    name: 'Smart Hotel Reservation System',
    period: 'Sep 2025 – Dec 2025',
    stack: ['PostgreSQL', 'SQL / PLpgSQL'],
    points: [
      'Designed a relational database covering reservations, payments, services, staff, events, and multi-branch operations.',
      'Built an ERD mapped to a normalized schema with M:N, weak entities, specialization, and unary supervision.',
      'Implemented constraints, indexes, views, stored procedures, and triggers to enforce business rules.',
    ],
  },
  {
    name: 'AES-128 Encryption Tool',
    period: 'Feb 2025 – Apr 2025',
    stack: ['Python', 'Tkinter', 'SQLite', 'Matplotlib'],
    points: [
      'Implemented AES-128 encryption/decryption with key expansion and full round transformations.',
      'Built a Tkinter GUI with user login and per-user encryption history stored in SQLite.',
      'Added round-by-round view, key expansion viewer, and avalanche-effect plots.',
    ],
  },
]

export default function Projects() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/projects" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 text-center">
          Things I've Built
        </p>
        <h2 className="font-display font-bold text-white text-4xl tracking-tight mb-3 text-center">
          Projects
        </h2>
        <div className="w-10 h-px bg-white/30 mb-12 mx-auto" />

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-display font-semibold text-white text-lg">
                  {project.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-white/40">
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
