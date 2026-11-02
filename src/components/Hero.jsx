import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Mail, ArrowRight } from 'lucide-react'
import useMediaQuery from '../useMediaQuery'

const Lanyard = lazy(() => import('./Lanyard'))

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const desktop = useMediaQuery('(min-width: 768px)')
  const [go, setGo] = useState(false)
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    let started = false
    const start = () => { if (!started) { started = true; setGo(true) } }
    document.fonts?.ready.then(start)
    const t = setTimeout(start, 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!go) return
    const t = setTimeout(() => setShow3D(true), 1600)
    return () => clearTimeout(t)
  }, [go])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-soft text-fg">
      <div className="relative z-0 h-[440px] md:absolute md:inset-0 md:h-auto">
        {show3D && (
          <motion.div className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={null}>
              <Lanyard
                frontImage="/card-front.png"
                backImage="/card-back.png"
                cardColor="#ffffff"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={desktop ? 0.6 : 0.62}
                anchor={desktop ? 'right' : 'center'}
                strapLength={0.5}
                strapColor="#2eaadf"
                strapWidth={0.65}
                metal="silver"
                gravity={1}
                damping={0.5}
                elasticity={0.5}
                breeze={0}
                interactive
                intro
              />
            </Suspense>
          </motion.div>
        )}
        {show3D && (
          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-fg/40 md:bottom-8 md:left-[73%]">
            {desktop ? 'Developer' : 'Developer'}
          </p>
        )}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-6 pb-12 pt-4 md:pointer-events-none md:min-h-screen md:grid-cols-2 md:gap-10 md:pt-24">
        <motion.div variants={container} initial="hidden" animate={go ? 'show' : 'hidden'}>
          <motion.p variants={item} className="label mb-5 will-change-[transform,opacity]">Fullstack Developer</motion.p>
          <motion.h1 variants={item} className="text-4xl font-bold leading-[1.1] tracking-tight will-change-[transform,opacity] sm:text-5xl lg:text-6xl">
            Turning Ideas<br />into Interactive<br />
            <span className="grad">Experiences.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-sm leading-relaxed text-fg/70 will-change-[transform,opacity]">
            As a fullstack developer focused on building modern, responsive and user-friendly web experiences.
          </motion.p>
          <motion.div variants={item} className="pointer-events-auto mt-8 flex w-fit flex-wrap gap-3 will-change-[transform,opacity]">
            <a href="#projects"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold text-on-accent transition hover:opacity-90">
              View My Projects <ArrowRight size={14} />
            </a>
            <a href="#contact"
              className="rounded-full border border-fg/25 px-6 py-3 text-xs font-semibold transition hover:bg-fg/5">
              Contact Me
            </a>
          </motion.div>
          <motion.div variants={item} className="pointer-events-auto mt-8 flex w-fit gap-5 text-lg will-change-[transform,opacity] md:mt-10">
            <a href="https://github.com/" aria-label="GitHub" className="text-fg/60 transition hover:text-accent"><FaGithub /></a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="text-fg/60 transition hover:text-accent"><FaLinkedinIn /></a>
            <a href="https://x.com/" aria-label="X" className="text-fg/60 transition hover:text-accent"><FaXTwitter /></a>
            <a href="mailto:jidhinj61@gmail.com" aria-label="Email" className="text-fg/60 transition hover:text-accent"><Mail size={18} /></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}