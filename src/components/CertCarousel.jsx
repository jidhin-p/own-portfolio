import { ArrowRight, Award, CalendarDays } from 'lucide-react'
import { certificates, LINKS } from '../data'
import Reveal from './Reveal'

const list = Array.from({ length: Math.max(1, Math.ceil(12 / certificates.length)) }, () => certificates).flat()

function Card({ c }) {
  return (
    <div className="glass flex w-48 shrink-0 select-none flex-col overflow-hidden rounded-2xl sm:w-60">
      {/* CERTIFICATE IMAGE */}
      <div className="aspect-[4/3] overflow-hidden bg-white/[0.04]">
        {c.img ? (
          <img src={c.img} alt={`${c.title} certificate`} draggable={false}
            className="h-full w-full object-contain p-1.5" />
        ) : (
          <div className="grid h-full place-items-center">
            <Award size={34} className="text-fg/40" />
          </div>
        )}
      </div>

      {/* DETAILS */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
            {c.logo ? (
              <img src={c.logo} alt="" className="h-full w-full object-contain p-1" />
            ) : (
              <span className="text-base font-bold text-black">{(c.issuer || c.title || '?')[0]}</span>
            )}
          </div>
          <h3 className="line-clamp-2 text-xs font-semibold leading-snug sm:text-sm">{c.title}</h3>
        </div>
        <p className="mt-2.5 line-clamp-2 text-[11px] text-fg/60 sm:text-xs">{c.issuer}</p>
        {c.year && (
          <p className="mt-auto flex items-center gap-1.5 pt-2.5 text-[11px] text-fg/60 sm:text-xs">
            <CalendarDays size={13} /> {c.year}
          </p>
        )}
      </div>
    </div>
  )
}

function Track() {
  return (
    <div className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
      {list.map((c, i) => <Card key={i} c={c} />)}
    </div>
  )
}

export default function CertCarousel() {
  return (
    <section id="certifications" className="theme-dark relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal className="mb-10">
          <p className="eyebrow mb-6">Certifications</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Professional<br /><span className="grad">Certifications.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/60 sm:text-base">
            Continuous learning to stay ahead in technology and keep growing as a developer.
          </p>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:opacity-90">
            View All Certifications <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>

      <ul className="sr-only">
        {certificates.map(c => <li key={c.title}>{c.title}, {c.issuer}</li>)}
      </ul>

      <div aria-hidden="true" className="marquee-wrap fade-x overflow-hidden">
        <div className="marquee-right flex w-max" style={{ animationDuration: `${list.length * 5}s` }}>
          <Track />
          <Track />
        </div>
      </div>
    </section>
  )
}