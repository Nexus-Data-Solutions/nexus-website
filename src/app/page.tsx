import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
      <Services />
      <Contact />
    </main>
  )
}