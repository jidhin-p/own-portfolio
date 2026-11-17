import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { skills, experience, LINKS } from '../data'
import Reveal from './Reveal'

// dark glass-il kaanaan: valare dark icon colours (GitHub, Next.js) light aakkunnu
const fixColor = c => {
  const h = (c || '#ffffff').replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70 ? '#f4f4f4' : c
}

function SkillTile({ s }) {
  const { name, Icon, color } = s
  return (
    <div className="glass w-28 shrink-0 rounded-2xl p-3 text-center sm:w-36 sm:p-4">
      <Icon size={28} color={fixColor(color)} className="mx-auto" />
      <p className="mt-2 text-[11px] font-medium sm:text-xs">{name}</p>
    </div>
  )
}

// dir: 'left' (valath -> idath) allenkil 'right' (idath -> valath)
function SkillRow({ items, dir, seconds }) {
  const reps = Math.max(1, Math.ceil(16 / items.length))
  const list = Array.from({ length: reps }, () => items).flat()
  return (
    <div className="marquee-wrap fade-x overflow-hidden">
      <div
        className={`${dir === 'left' ? 'marquee-left' : 'marquee-right'} flex w-max`}
        style={{ animationDuration: `${list.length * seconds}s` }}
      >
        {[0, 1].map(k => (
          <div key={k} className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
            {list.map((s, i) => <SkillTile key={i} s={s} />)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2)
  const row1 = skills.slice(0, half)
  const row2 = skills.slice(half)

  return (
    <section id="skills" className="theme-dark relative overflow-hidden py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* TECHNOLOGIES */}
        <Reveal>
          <p className="eyebrow mb-6">My Skills</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I <span className="grad">Work With</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/60 sm:text-base">
            A blend of modern tools and frameworks to build scalable and beautiful applications.
          </p>
        </Reveal>

        {/* SKILLS CAROUSEL: randu rows, randu dishayil */}
        <div aria-hidden="true" className="relative left-1/2 mt-10 w-screen -translate-x-1/2 space-y-3 sm:space-y-4">
          <SkillRow items={row1} dir="left" seconds={3} />
          <SkillRow items={row2} dir="right" seconds={3.4} />
        </div>
        <ul className="sr-only">
          {skills.map(s => <li key={s.name}>{s.name}</li>)}
        </ul>

        {/* JOURNEY */}
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow mb-6">My Journey</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Experience &amp; <span className="grad">Education</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg/60 sm:text-base">
              A continuous journey of learning, building and growing as a developer.
            </p>
            <a href={LINKS.resume} download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
               Resume <ArrowRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative">
              {experience.map((e, i) => {
                const Icon = /course|certif|graduat|educat|degree/i.test(e.role) ? GraduationCap : Briefcase
                return (
                  <li key={e.role} className="relative flex gap-5 pb-9 last:pb-0">
                    {i < experience.length - 1 && (
                      <span className="absolute left-5 top-10 bottom-0 w-px -translate-x-1/2 bg-white/15" />
                    )}
                    <span className="glass relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full">
                      <Icon size={16} />
                    </span>
                    <div>
                      <span className="glass inline-block rounded-full px-3 py-0.5 text-xs font-medium">{e.time}</span>
                      <h4 className="mt-2 text-lg font-semibold">{e.role}</h4>
                      <p className="text-sm text-fg/60">{e.place}</p>
                      <p className="mt-1.5 max-w-md text-sm text-fg/60">{e.text}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}