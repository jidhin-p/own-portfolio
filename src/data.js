import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPhp, FaWordpress } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMysql } from 'react-icons/si'

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
  { title: '7digitstore', desc: 'Gadget e-commerce store with product listing and cart.', tags: ['PHP', 'MySQL'], cat: 'Web Apps', img: '/projects/7digit.png', link: '#' },
  { title: 'BikeLeague', desc: 'Motorcycle and scooter review and information website.', tags: ['HTML', 'CSS', 'JS','Wordpress','Elementor'], cat: 'Web Apps', img: '/projects/bikeleague.png', link: '#' },
  { title: 'NowGo', desc: 'Where People can fin Hiden Traveling Spot in Kerala ,(currently Working).', tags: ['PHP', 'MySQL'], cat: 'Web Apps', img: '/projects/global.png', link: '#' },
  { title: 'RouteX', desc: 'Travel and migration agency website.(internship Project)', tags: ['Bootstrap', 'JS'], cat: 'UI/UX', img: '/projects/routex.png', link: '#' },
  { title: 'Portfolio', desc: 'This site: React, Tailwind and 3D with Three.js.', tags: ['React', 'Three.js'], cat: 'Personal', img: '/projects/portfolio.png', link: '#' },
]