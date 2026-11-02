import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep pb-8 pt-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold">Jidhin<span className="text-[#a3b565]">.</span></h3>
          <p className="mt-2 text-xs text-white/70">Building better web experiences,<br />one project at a time.</p>
          <div className="mt-5 flex gap-4"><FaGithub /><FaLinkedinIn /><FaXTwitter /><Mail size={16} /></div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-xs text-white/70">
            {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-white">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold">Contact</h4>
          <ul className="space-y-3 text-xs text-white/70">
            <li className="flex items-center gap-3"><Mail size={14} /> you@example.com</li>
            <li className="flex items-center gap-3"><Phone size={14} /> +91 00000 00000</li>
            <li className="flex items-center gap-3"><MapPin size={14} /> Kerala, India</li>
          </ul>
        </div>
        <p className="font-hand text-3xl leading-8 text-white/80 md:text-right">Thanks for<br />visiting!</p>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-6 pt-6 text-[11px] text-white/60 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Jidhin. All rights reserved.</span>
        {/* <span className="flex items-center gap-1">Made with <Heart size={12} className="fill-[#a3b565] text-[#a3b565]" /> in Kerala</span> */}
      </div>
    </footer>
  )
}