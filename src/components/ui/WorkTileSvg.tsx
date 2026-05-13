type Props = {
  grad: [string, string]
  title: string
  year: string
  idx: string | number
}

export function WorkTileSvg({ grad, title, year, idx }: Props) {
  const id = `g${idx}`
  const words = title.split(' ')
  const first = words[0]
  const rest = words.slice(1).join(' ') || ' '
  return (
    <svg
      className="work-img-svg"
      viewBox="0 0 600 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={grad[0]} />
          <stop offset="100%" stopColor={grad[1]} />
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill={`url(#${id})`} />
      <text
        x="50"
        y="130"
        fontFamily="Fraunces, serif"
        fontSize="56"
        fontWeight="300"
        fill="var(--color-parchment)"
        letterSpacing="-2"
      >
        {first}
      </text>
      <text
        x="50"
        y="190"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="44"
        fontWeight="300"
        fill="var(--color-gold)"
        letterSpacing="-1"
      >
        {rest}
      </text>
      <text
        x="50"
        y="230"
        fontFamily="JetBrains Mono, monospace"
        fontSize="11"
        fill="var(--color-parchment)"
        opacity="0.7"
        letterSpacing="3"
      >
        {year.toUpperCase()}
      </text>
      <g stroke="var(--color-gold)" strokeWidth="1" opacity="0.35" fill="none">
        <circle cx="490" cy="160" r="84" />
        <circle cx="490" cy="160" r="52" />
        <circle cx="490" cy="160" r="24" />
      </g>
    </svg>
  )
}
