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
    <nav className="fixed top-0 left-0 right-0 z-20 flex flex-wrap justify-between items-center gap-x-6 gap-y-2 px-5 sm:px-12 py-4 sm:py-5 bg-[#0d1510]/40 backdrop-blur-sm">
      <Link href="/" className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
        Karim Hajj Ali
      </Link>
      <ul className="flex gap-3 sm:gap-8 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                active === href
                  ? 'text-xs uppercase tracking-widest text-white border-b border-white pb-0.5'
                  : 'text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors'
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
