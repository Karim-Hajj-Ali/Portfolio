import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

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
    <span className="text-[13px] sm:text-sm font-light text-white/75 border border-white/12 rounded-full px-2.5 sm:px-3 py-1 transition-colors hover:border-emerald-400/40 hover:text-emerald-200">
      {children}
    </span>
  )
}

function Card({ title, children, delay = 0 }) {
  return (
    <div className="card fade-up h-full p-5 sm:p-6" style={{ animationDelay: `${delay}s` }}>
      <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-4 flex items-center gap-2">
        <span className="h-3.5 w-1 rounded-full bg-emerald-400" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

export default function Skills() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/skills" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-32 pb-16">
        <SectionHeader eyebrow="What I Work With" title="Skills" />

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 auto-rows-fr mt-12">
          {compactGroups.map(({ title, items }, i) => (
            <Card key={title} title={title} delay={0.15 + i * 0.07}>
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </Card>
          ))}
        </div>

        <div className="mt-4 sm:mt-5">
          <Card title="Coursework" delay={0.45}>
            {coursework.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
