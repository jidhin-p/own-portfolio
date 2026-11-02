import { MotionConfig } from 'framer-motion'
import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const [dark, toggle] = useTheme()
  return (
    <MotionConfig reducedMotion="user">
      <Navbar dark={dark} toggle={toggle} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </MotionConfig>
  )
}