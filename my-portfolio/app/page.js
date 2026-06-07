import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Background />
      <Navbar active="/" />
      <Hero />
    </main>
  )
}
