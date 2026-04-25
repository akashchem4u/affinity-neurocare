import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import PatientResources from './components/PatientResources'
import CryptoWallet from './components/CryptoWallet'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScheduleModal from './components/ScheduleModal'

export default function App() {
  const [scheduleOpen, setScheduleOpen] = useState(false)

  return (
    <>
      <Navbar onSchedule={() => setScheduleOpen(true)} />
      <main>
        <Hero onSchedule={() => setScheduleOpen(true)} />
        <Services onSchedule={() => setScheduleOpen(true)} />
        <About />
        <Testimonials />
        <PatientResources onSchedule={() => setScheduleOpen(true)} />
        <CryptoWallet />
        <Contact />
      </main>
      <Footer onSchedule={() => setScheduleOpen(true)} />
      {scheduleOpen && <ScheduleModal onClose={() => setScheduleOpen(false)} />}
    </>
  )
}
