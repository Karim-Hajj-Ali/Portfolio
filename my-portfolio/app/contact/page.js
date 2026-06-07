import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

const contacts = [
  { label: 'Email', value: 'hajjalikarim1@gmail.com', href: 'mailto:hajjalikarim1@gmail.com' },
  { label: 'Phone', value: '+961 81 386 034', href: 'tel:+96181386034' },
  {
    label: 'LinkedIn',
    value: 'in/karim-hajj-ali',
    href: 'https://www.linkedin.com/in/karim-hajj-ali-70858624a',
  },
  {
    label: 'GitHub',
    value: 'Karim-Hajj-Ali',
    href: 'https://github.com/Karim-Hajj-Ali',
  },
]

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/contact" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4">Get In Touch</p>

        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-3">
          Contact
        </h2>

        <div className="w-10 h-px bg-white/30 mb-10" />

        <div className="w-full max-w-md space-y-3">
          {contacts.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/30 transition-colors text-left"
            >
              <span className="text-xs uppercase tracking-widest text-white/45">{label}</span>
              <span className="text-sm font-light text-white/85 break-all sm:break-normal">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
