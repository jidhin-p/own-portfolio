const words = [
  'Coding',
  'Debuging',
  'Solving',
]

const list = Array.from({ length: Math.max(1, Math.ceil(12 / words.length)) }, () => words).flat()

function Track() {
  return (
    <ul className="flex shrink-0 items-center">
      {list.map((w, i) => (
        <li key={i} className="flex items-center whitespace-nowrap text-sm font-medium tracking-tight md:text-base">
          <span className="px-4 md:px-6">{w}</span>
          <span className="h-1 w-1 rounded-full bg-white" />
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <section aria-hidden="true" className="border-b border-white/10 bg-black py-3 text-white md:py-3">
      <div className="marquee-wrap fade-x overflow-hidden">
        <div className="marquee-left flex w-max" style={{ animationDuration: `${list.length * 3}s` }}>
          <Track />
          <Track />
        </div>
      </div>
    </section>
  )
}