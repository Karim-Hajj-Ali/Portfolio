import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <Background />
      <Navbar active="/" />
      <Hero />
      <Footer />
    </main>
  )
}
