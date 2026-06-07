import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Karim Hajj Ali - Portfolio',
  description: 'CS & Engineering Student at AUB - Deep Learning, ML, Gen AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${dmSans.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
