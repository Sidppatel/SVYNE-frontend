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
  const projectNumber = typeof idx === 'number'
    ? String(idx + 1).padStart(2, '0')
    : '01'
  
  return (
    <div
      className="work-tile-media"
      style={{ '--work-accent': grad[0] } as React.CSSProperties}
    >
      <div className="work-tile-grid" />
      <div className="work-tile-overlay" />
      <div className="work-preview-shell">
        <div className="work-preview-topbar">
          <span />
          <span />
          <span />
          <strong>{year}</strong>
        </div>
        <div className="work-preview-panel">
          <div className="work-preview-meta">
            <span className="live-badge">Case {projectNumber} · LIVE</span>
            <span>Platform</span>
          </div>
          <div className="work-preview-title">
            <strong>{first}</strong>
            <em>{rest}</em>
          </div>
          <div className="work-preview-content">
            <div className="work-preview-lines" aria-hidden="true">
              <span className="line-long" />
              <span className="line-med" />
              <span className="line-short" />
            </div>
            <div className="work-preview-metrics">
              <div className="metric-box">
                <span className="metric-dot" />
                <span className="metric-line" />
              </div>
              <div className="metric-box">
                <span className="metric-dot" />
                <span className="metric-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="work-img-svg"
        viewBox="0 0 600 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <text
          x="78%"
          y="86%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-display)"
          fontSize="132"
          fontWeight="900"
          fill="var(--color-ink)"
          opacity="0.035"
          className="phantom-index"
        >
          {title.toLowerCase()}
        </text>

        <path
          d="M 418 0 L 600 0 L 600 320 L 548 320 Z"
          fill={grad[0]}
          opacity="0.1"
          className="accent-shard"
        />
      </svg>
    </div>
  )
}
