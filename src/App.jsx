import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CertCarousel from './components/CertCarousel'
import Marquee from './components/Marquee'


export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar/>
      <Hero />
      <Marquee/>
      <About />
      <Skills />
      <Projects />
      <CertCarousel/>
      <Footer />
    </MotionConfig>
  )
}