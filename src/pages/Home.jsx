import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}

export default Home
