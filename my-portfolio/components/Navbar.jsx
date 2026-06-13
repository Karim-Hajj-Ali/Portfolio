import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ active = '/' }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex flex-wrap justify-between items-center gap-x-6 gap-y-2 px-5 sm:px-10 py-3.5 sm:py-4 border-b border-white/[0.06] bg-[#080c09]/60 backdrop-blur-md">
      <Link
        href="/"
        className="font-display font-bold text-white text-base sm:text-lg tracking-tight group"
      >
        Karim<span className="text-emerald-400 group-hover:text-emerald-300 transition-colors"> Hajj Ali</span>
      </Link>

      <ul className="flex items-center gap-1 sm:gap-1.5 list-none">
        {links.map(({ href, label }) => {
          const isActive = active === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={
                  'relative rounded-full px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs uppercase tracking-wider transition-colors ' +
                  (isActive
                    ? 'text-emerald-300 bg-emerald-400/10'
                    : 'text-white/55 hover:text-white')
                }
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
