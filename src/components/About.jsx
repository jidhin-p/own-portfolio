import { Code, Trophy, CalendarDays, ArrowRight } from 'lucide-react'
import { FaReact, FaPhp } from 'react-icons/fa'
import { projects, certificates, EXPERIENCE_STAT } from '../data'
import Reveal from './Reveal'

const stats = [
  { Icon: Code, value: `${projects.length}+`, label: 'Projects' },
  { Icon: Trophy, value: `${certificates.length}+`, label: 'Certifications' },
  { Icon: CalendarDays, value: EXPERIENCE_STAT.value, label: EXPERIENCE_STAT.label },
]

function Tile({ className = '', delay = 0, children }) {
  return (
    <div
      className={`glass glass-blur floaty absolute grid h-14 w-14 place-items-center rounded-2xl sm:h-16 sm:w-16 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="theme-dark relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-6">About Me</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I’m Jidhin <span className="wave"></span>
          </h2>
          <p className="mt-5 max-w-lg text-xl font-medium leading-snug sm:text-2xl">
            I’m a <span className="font-bold text-accent">Fullstack Developer</span>{' '}
            <span className="text-fg/60">who loves turning ideas into powerful web applications.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/60">
            I enjoy learning new technologies, solving problems, and building things that make an impact.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="glass glass-blur rounded-2xl p-3 sm:p-4">
                <Icon size={20} className="text-accent" />
                <p className="mt-2 text-xl font-bold sm:text-2xl">{value}</p>
                <p className="text-[11px] text-fg/60 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>

          <a href="#skills"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
            Know More <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <svg aria-hidden="true" viewBox="0 0 400 520" preserveAspectRatio="none"
            className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]" fill="none">
            <ellipse cx="200" cy="260" rx="215" ry="150" transform="rotate(-28 200 260)" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          </svg>

          <div className="glass relative overflow-hidden rounded-[28px] p-2">
            <img src="/coding.png" alt="Jidhin" loading="lazy"
              className="h-[340px] w-full rounded-[22px] object-cover grayscale sm:h-[440px]" />
          </div>

          <Tile className="-left-4 top-8 sm:-left-8" delay={0}><Code size={26} /></Tile>
          <Tile className="-right-3 top-1/3 sm:-right-8" delay={1.2}><FaReact size={28} className="text-[#61dafb]" /></Tile>
          <Tile className="-right-2 bottom-10 sm:-right-6" delay={2.4}><FaPhp size={30} className="text-[#a5a8d6]" /></Tile>
        </Reveal>
      </div>
    </section>
  )
}