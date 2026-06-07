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
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-12 py-5">
      <Link href="/" className="font-display font-bold text-white text-lg tracking-tight">
        Karim Hajj Ali
      </Link>
      <ul className="flex gap-8 list-none">
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
