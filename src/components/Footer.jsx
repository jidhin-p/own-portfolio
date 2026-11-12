import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { LINKS } from '../data'
import Reveal from './Reveal'

const quick = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]
const tech = ['Buliding responsive website','Custamized Sites','Web Application', 'Portfolio','Wordpress website','Elementor Project ']

function subscribe(e) {
  e.preventDefault()
  const email = new FormData(e.currentTarget).get('email')
  const subject = encodeURIComponent('Stay updated')
  const body = encodeURIComponent(`Please keep me updated on your projects. My email: ${email}`)
  window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`
}

export default function Footer() {
  return (
    <footer id="contact" className="theme-dark relative overflow-hidden">
      {/* CTA */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 md:pt-28">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Get In Touch
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let’s Build<br /><span className="grad">Something Amazing Together.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg/60 sm:text-base">
            Have a project, idea or just want to say hi? I’d love to hear from you.
          </p>
          
        </Reveal>
      </div>

      {/* LINKS */}
      <div className="border-t border-white/10 bg-black/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          <div>
            <h3 className="text-3xl font-bold">Jidhin<span className="text-accent">.</span></h3>
            <p className="text-fg/70">Fullstack Developer</p>
            <p className="mt-3 max-w-xs text-sm text-fg/60">Building modern web experiences with passion and purpose.</p>
            <div className="mt-5 flex gap-3">
              {[
                [FaGithub, LINKS.github, 'GitHub'],
                [FaLinkedinIn, LINKS.linkedin, 'LinkedIn'],
                [FaInstagram, LINKS.Instagram, 'Instagram'],
              ].map(([Icon, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="glass grid h-10 w-10 place-items-center rounded-full transition hover:bg-accent hover:text-on-accent">
                  <Icon size={16} />
                </a>
              ))}
              <a href={`mailto:${LINKS.email}`} aria-label="Email"
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:bg-accent hover:text-on-accent">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-fg/70">
              {quick.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="inline-flex items-center gap-2 transition hover:text-fg">
                    <ArrowRight size={14} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="mb-4 text-lg font-semibold">What i do</h4>
            <ul className="space-y-2.5 text-sm text-fg/70">
              {tech.map(t => (
                <li key={t} className="flex items-center gap-2"><ArrowRight size={14} /> {t}</li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="mb-2 text-lg font-semibold">Stay Updated</h4>
            <p className="mb-4 max-w-xs text-sm text-fg/60">Get the latest updates on my projects and Get in touch.</p>
            <form onSubmit={subscribe} className="glass flex items-center gap-2 rounded-full p-1.5 pl-4">
              <Mail size={16} className="shrink-0 text-fg/60" />
              <input name="email" type="email" required placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-fg/40" />
              <button type="submit" aria-label="Send"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-on-accent transition hover:opacity-90">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-fg/60 sm:px-6 md:flex-row">
            <span>© {new Date().getFullYear()} <b className="text-fg">Jidhin.</b> All rights reserved.</span>
            <span>Code &nbsp;•&nbsp; Create &nbsp;•&nbsp; Inspire</span>
            <span>Developer <span className="text-accent"></span> in Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}