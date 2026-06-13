import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

const compactGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C / C++', 'Java', 'SQL'],
  },
  {
    title: 'AI / ML',
    items: [
      'scikit-learn',
      'CatBoost',
      'LLM fine-tuning (LoRA)',
      'RAG',
      'Qdrant',
      'MLflow',
      'Data preprocessing',
      'Model evaluation',
    ],
  },
  {
    title: 'Tools',
    items: ['GitHub', 'Docker', 'Flask', 'APIs'],
  },
  {
    title: 'Spoken Languages',
    items: ['English (Proficient)', 'French (Intermediate)', 'Arabic (Native)'],
  },
]

const coursework = [
  'Design & Analysis of Algorithms',
  'Data Structures & Algorithms',
  'Introduction to Machine Learning',
  'AI in Industry',
  'Database Systems',
  'Cryptography & Network Security',
  'Linear Algebra',
  'Discrete Structures',
]

function Tag({ children }) {
  return (
    <span className="text-[13px] sm:text-sm font-light text-white/70 border border-white/15 rounded-full px-2.5 sm:px-3 py-1">
      {children}
    </span>
  )
}

function Card({ title, children }) {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <h3 className="font-display font-semibold text-white/90 text-base sm:text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

export default function Skills() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/skills" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 text-center">
          What I Work With
        </p>
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-3 text-center">
          Skills
        </h2>
        <div className="w-10 h-px bg-white/30 mb-10 sm:mb-12 mx-auto" />

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 auto-rows-fr">
          {compactGroups.map(({ title, items }) => (
            <Card key={title} title={title}>
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Card title="Coursework">
            {coursework.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Card>
        </div>
      </div>
    </main>
  )
}
