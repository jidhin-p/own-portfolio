import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-bg/95 text-fg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#home" className="text-xl font-bold tracking-tight">Jidhin<span className="text-accent">.</span></a>

        <ul className="hidden gap-8 text-xs md:flex">
          {links.map(l => {
            const id = l.toLowerCase()
            return (
              <li key={l}>
                <a href={`#${id}`}
                  className={`transition ${active === id ? 'text-fg' : 'text-fg/50 hover:text-fg'}`}>
                  {l}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-label="Toggle theme" className="rounded-full p-2 hover:bg-fg/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="rounded-full p-2 hover:bg-fg/10 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-fg/10 px-6 md:hidden">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-fg/80">{l}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-accent" />
    </header>
  )
}