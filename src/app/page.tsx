// src/app/page.tsx
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Appointment from '@/components/Appointment'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  )
}