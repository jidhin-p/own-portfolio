import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { projects, LINKS } from '../data'
import Reveal from './Reveal'

const tabs = ['All', 'Web Apps', 'Intern Projects', 'Personal']

export default function Projects() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? projects : projects.filter(p => p.cat === tab)

  return (
    <section id="projects" className="theme-dark relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-6">My Projects</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Some Things<br /><span className="grad">I’ve Built.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/60 sm:text-base">
            A collection of my recent projects that showcase my skills and ideas.
          </p>

          <div className="mt-8 flex max-w-full gap-2 overflow-x-auto pb-1 text-xs">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`relative whitespace-nowrap rounded-full border px-5 py-2 transition-colors ${tab === t ? 'border-transparent' : 'border-white/15 hover:border-white/40'}`}>
                {tab === t && (
                  <motion.span layoutId="tab-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-accent" />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${tab === t ? 'font-semibold text-on-accent' : 'text-fg/70'}`}>{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {list.map(p => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
              className="glass group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-white/30">
              <div className="relative h-24 overflow-hidden bg-soft sm:h-32">
                <img src={p.img} alt={`${p.title} project screenshot`} loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="glass glass-blur absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full">
                  <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-2.5 sm:p-4">
                <h3 className="text-[13px] font-semibold sm:text-base">{p.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-fg/60 sm:mt-2 sm:line-clamp-3 sm:text-sm sm:leading-relaxed">{p.desc}</p>
                <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t, i) => (
                      <span key={t}
                        className={`rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-fg/80 sm:text-xs ${i > 2 ? 'hidden sm:inline-block' : ''}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/25 transition group-hover:bg-accent group-hover:text-on-accent">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a href={LINKS.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition hover:bg-white/10">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}