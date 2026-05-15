import { LivingCircles } from './LivingCircles'

type Props = {
  grad: [string, string]
  title: string
  year: string
  idx: string | number
}

export function WorkTileSvg({ grad, title, year, idx }: Props) {
  const words = title.split(' ')
  const first = words[0]
  const rest = words.slice(1).join(' ') || ' '
  
  return (
    <div 
      className="work-tile-media"
      style={{ 
        background: `linear-gradient(135deg, #F0F0F0 0%, #E8E8E8 40%, #D8D8D8 100%)`,
        overflow: 'hidden'
      } as React.CSSProperties}
    >
      {/* Precision Dot Grid Overlay */}
      <div className="work-tile-grid" style={{ opacity: 0.2 }} />
      <div className="work-tile-overlay" style={{ background: `linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.05) 100%)` }} />
      <svg
        className="work-img-svg"
        viewBox="0 0 600 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Massive Phantom Project ID */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-display)"
          fontSize="120"
          fontWeight="900"
          fill="var(--color-ink)"
          opacity="0.05"
          className="phantom-index"
        >
          {title.toLowerCase()}
        </text>

        {/* Dynamic Geometric Shard */}
        <path
          d="M 450 0 L 600 0 L 600 320 L 520 320 Z"
          fill={grad[0]}
          opacity="0.12"
          className="accent-shard"
        />

        {/* Precision Typography */}
        <text
          x="50%"
          y="135"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="52"
          fontWeight="300"
          fill="var(--color-ink)"
          letterSpacing="-0.03em"
        >
          {first.toUpperCase()}
        </text>
        <text
          x="50%"
          y="185"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="46"
          fontWeight="300"
          fill="var(--color-accent)"
          letterSpacing="-0.01em"
        >
          {rest.toUpperCase()}
        </text>
        
        {/* Technical Metadata */}
        <text
          x="50%"
          y="235"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-sepia)"
          opacity="0.8"
          letterSpacing="0.3em"
        >
          {year.toUpperCase()}
        </text>
      </svg>
      <LivingCircles count={10} color={grad[0]} />
    </div>
  )
}
