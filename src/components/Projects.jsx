import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'

const tabs = ['All', 'Web Apps', 'UI/UX', 'Personal']

export default function Projects() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? projects : projects.filter(p => p.cat === tab)

  return (
    <section id="projects" className="bg-surface py-20 text-fg md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label mb-4">My Projects</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Some of my<br /><span className="grad">recent work</span></h2>
            <p className="mt-5 max-w-sm text-sm text-fg/70">A few projects I've built. Each one helped me learn something new.</p>
          </div>
          <div className="flex max-w-full overflow-x-auto rounded-full border border-fg/15 p-1 text-xs">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`whitespace-nowrap rounded-full px-5 py-2 transition ${tab === t ? 'bg-accent text-on-accent' : 'text-fg/60 hover:text-fg'}`}>{t}</button>
            ))}
          </div>
        </Reveal>

        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(p => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-fg/10 bg-bg transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
              <div className="h-44 overflow-hidden bg-soft">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-xs text-fg/60">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="rounded-md bg-accent/10 px-3 py-1 text-[10px] font-medium text-accent">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}