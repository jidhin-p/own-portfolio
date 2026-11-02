import { MapPin, GraduationCap, BookOpen, Download } from 'lucide-react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-surface py-20 text-fg md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <p className="label mb-4">About Me</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">A bit about me</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-fg/70">
            Hey,i'm Jidhin, I'm a <b>developer</b> who enjoys turning ideas into real, useful digital experiences.

I love exploring new <b>technologies</b>, solving problems, and building <b>websites</b> that look good and work smoothly. For me, development is not just about writing code — it's about learning, experimenting, and finding better ways to build things.

I'm always curious about what's next and excited to keep growing with every project I create.
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-fg/70">
            I work with HTML, CSS, JavaScript, React and PHP. I'm always curious, keep learning, and love exploring new technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 text-xs">
            <div className="flex items-center gap-3"><MapPin size={18} className="text-accent" /> Kerala, India</div>
            <div className="flex items-center gap-3"><GraduationCap size={22} className="text-accent" />
              <span>B.A. History<br /><span className="text-fg/50">Calicut University</span></span></div>
            <div className="flex items-center gap-3"><BookOpen size={22} className="text-accent" />
              <span>Reading<br /><span className="text-fg/50">My Hobby</span></span></div>
          </div>

          <a href="/Jidhin_CV.pdf" download
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold text-on-accent transition hover:opacity-90">
            <Download size={14} /> Download CV
          </a>
        </Reveal>

        <Reveal delay={0.2} className="relative mb-10 md:mb-0">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl bg-accent/10" />
          <div className="relative rotate-3 overflow-hidden rounded-3xl shadow-xl transition duration-500 hover:rotate-0">
            <img src="/coding.png" alt="Jidhin hiking" className="h-[340px] w-full object-cover grayscale md:h-[460px]" />
          </div>
          <p className="absolute -bottom-10 right-4 -rotate-6 font-hand text-2xl leading-6 text-fg/60">Better<br />Days<br />Ahead</p>
        </Reveal>
      </div>
    </section>
  )
}