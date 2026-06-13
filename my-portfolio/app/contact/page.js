import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, ArrowIcon } from '@/components/Icons'

const contacts = [
  {
    label: 'Email',
    value: 'hajjalikarim1@gmail.com',
    href: 'mailto:hajjalikarim1@gmail.com',
    Icon: MailIcon,
  },
  {
    label: 'Phone',
    value: '+961 81 386 034',
    href: 'tel:+96181386034',
    Icon: PhoneIcon,
  },
  {
    label: 'LinkedIn',
    value: 'in/karim-hajj-ali',
    href: 'https://www.linkedin.com/in/karim-hajj-ali-70858624a',
    Icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'Karim-Hajj-Ali',
    href: 'https://github.com/Karim-Hajj-Ali',
    Icon: GithubIcon,
  },
]

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/contact" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6 pt-32 pb-16">
        <SectionHeader eyebrow="Get In Touch" title="Contact" />

        <p className="fade-up text-center text-white/55 font-light mt-6 max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
          Have an opportunity, idea, or just want to say hi? My inbox is always open.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
          {contacts.map(({ label, value, href, Icon }, i) => {
            const external = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="card fade-up group flex items-center gap-4 p-4 sm:p-5"
                style={{ animationDelay: `${0.25 + i * 0.06}s` }}
              >
                <span className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 transition-colors group-hover:bg-emerald-400/20">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-white/45">{label}</span>
                  <span className="block text-sm font-medium text-white/90 truncate">{value}</span>
                </span>
                <ArrowIcon className="w-4 h-4 ml-auto text-white/25 transition-all group-hover:text-emerald-300 group-hover:translate-x-0.5" />
              </a>
            )
          })}
        </div>
      </div>

      <Footer />
    </main>
  )
}
