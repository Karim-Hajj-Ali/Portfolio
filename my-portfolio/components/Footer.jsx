import Link from 'next/link'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-display font-semibold text-white/90 tracking-tight">
          Karim Hajj Ali
        </Link>

        <div className="flex items-center gap-4 text-white/55">
          <a
            href="https://github.com/Karim-Hajj-Ali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-emerald-300 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/karim-hajj-ali-70858624a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-emerald-300 transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:hajjalikarim1@gmail.com"
            aria-label="Email"
            className="hover:text-emerald-300 transition-colors"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  )
}
