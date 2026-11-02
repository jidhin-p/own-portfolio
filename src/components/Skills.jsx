import { skills, experience } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-20 text-fg md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="label mb-4">My Skills & Experience</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Skills that build<br /><span className="grad">real things</span></h2>
          <p className="mt-5 max-w-sm text-sm text-fg/70">I work with modern technologies to create fast, responsive and accessible web experiences.</p>

          <h3 className="mb-5 mt-12 font-semibold">Technical Skills</h3>
          <div className="grid max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
            {skills.map(({ name, level, Icon }, i) => (
              <Reveal key={name} delay={i * 0.05} y={16}>
                <div className="rounded-2xl border border-fg/10 bg-surface p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                  <Icon size={32} className="mx-auto text-accent" />
                  <p className="mt-3 text-xs font-semibold">{name}</p>
                  <p className="text-[10px] text-fg/50">{level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl bg-deep p-6 text-white shadow-xl md:p-8">
            <h3 className="mb-8 text-lg font-semibold">Experience</h3>
            <ol className="relative space-y-8 border-l border-white/15 pl-8">
              {experience.map(e => (
                <li key={e.role} className="relative">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-[#a3b565]" />
                  <h4 className="text-sm font-semibold">{e.role}</h4>
                  <p className="text-xs text-white/60">{e.place}</p>
                  <p className="mt-1 text-xs text-white/50">{e.time}</p>
                  <p className="mt-2 text-xs leading-5 text-white/70">{e.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}