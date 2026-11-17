import { color } from 'framer-motion'
import { Icon } from 'lucide-react'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPhp, FaWordpress, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMysql, SiSupabase, SiNextdotjs, SiLaravel } from 'react-icons/si'

export const skills = [
  { name: 'HTML', Icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS',Icon: FaCss3Alt, color: '#2965f1' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', Icon: FaReact, color: '#61dafb' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'PHP', Icon: FaPhp, color: '#777bb4' },
  { name: 'MySQL', Icon: SiMysql, color: '#00758f' },
  { name: 'Git', Icon: FaGitAlt, color: '#f05032' },
  { name: 'WorPress', Icon: FaWordpress, color: '#2d57a5' },
  { name: 'GitHub', Icon: FaGithub, color: '#181717'},
  { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E'},
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000'},
  { name: 'Laravel', Icon: SiLaravel, color:'#F05340'},
] 

export const experience = [
  { role: 'Frontend Web Developer', place: 'Squarebraket, Thrissur', time: '2026 – 3 months',
    text: 'Building responsive, production web interfaces.' },
  { role: 'Full Stack Developer Course', place: 'Avodha', time: '2024 – 2025',
    text: 'HTML, CSS, JavaScript, PHP, MySQL, real project builds.' },
  { role: 'SOC Analyst (CSA) Certification', place: 'EC-Council', time: '2024 – 2025',
    text: 'SIEM, threat detection and security monitoring basics.' },
]

export const projects = [
  { title: 'BikeLeague', desc: 'Motorcycle and scooter review and information website.', tags: ['HTML', 'CSS', 'JS','Wordpress','Elementor'], cat: 'Intern Projects', img: '/bikeleague.png', link: 'https://www.bikeleague.in/yamaha-motorcycles-in-india/' },
  { title: 'NowGo', desc: 'Where People can find hiden traveling spot in Kerala ,(Localy running , currently Working).', tags: ['HTML','CSS','JS','PHP', 'MySQL'], cat: 'Web Apps', img: '/nowgo.png', link: '#' },
  { title: 'Welvetskie', desc: 'Travel and migration agency website.(internship Project)', tags: ['Wordpress', 'Elementor'], cat: 'Intern Projects', img: '/welvetskie.png', link: 'https://welvetskie.com/' },
  { title: 'Portfolio', desc: 'This site: React, Tailwind and 3D with Three.js.', tags: ['HTML','CSS','React', 'Three.js'], cat: 'Personal', img: '/portfolio.png', link: 'https://jidhin-mztj5vnsn-jidhin.vercel.app/' },
]


export const certificates = [
  { title: 'Certified SOC Analyst (CSA)', issuer: 'EC-Council', year: '2025', img: '/eccouncil.png',logo:''},
  { title: 'PHP Full Stack Developer Certification', issuer: 'Avodha', year: '2025-2026', img: '/fullstack.jpeg',},
  { title: 'Claude Code in Action', issuer: 'Anthropic', year: '2024', img: '/anthropic.jpg',},
  { title: 'Internship Experiance Certification', issuer: 'Squarebraket Innovation ', year: '2026-3 Month', img: '/internship.png',},
  { title: 'NSDC Skill India Certification', issuer: 'Ministry of Skill Development and Entrepreneurship (MSDE), Government of India', year: '2026', img:'',},
  { title: 'Redteam CICSA Certification', issuer: 'RedTeam Hacker Accademy', year: '2024-2025', img:'', },
]


export const LINKS = {
  github: 'https://github.com/jidhin-p',
  linkedin: 'https://www.linkedin.com/in/jidhin-p/',
  Instagram: 'https://www.instagram.com/_jidhin_._/',
  email: 'jidhinj61@gmail.com',
  resume: '/Jidhin_p.pdf',
}

// About-ile 3aamathe stat (Projects/Certifications auto aanu)
export const EXPERIENCE_STAT = { value: '3+', label: 'Months Experience' }