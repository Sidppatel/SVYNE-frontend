type Props = {
  size?: number
}

export function SparkMark({ size }: Props) {
  const style = typeof size === 'number' ? { height: size } : undefined
  return (
    <div className="spark-mark-wrap" style={style}>
      <svg
        className="spark-mark"
        viewBox="2 57 213 126"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="branch-fade-sienna" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M 10 60 Q 40 45 96 104"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 14 85 Q 50 92 96 110"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 24 98 Q 50 85 96 116"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 28 125 Q 60 135 96 124"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 12 150 Q 50 140 96 130"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 16 180 Q 45 190 96 136"
          className="spark-line-input-branch-base"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 32 68 Q 65 72 96 112"
          className="spark-line-input-base"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 56 110 Q 78 105 96 120"
          className="spark-line-input-base"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 36 168 Q 60 160 96 128"
          className="spark-line-input-base"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 10 60 Q 40 45 96 104"
          className="spark-line-input-flow flow-branch-1a"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 14 85 Q 50 92 96 110"
          className="spark-line-input-flow flow-branch-1b"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 24 98 Q 50 85 96 116"
          className="spark-line-input-flow flow-branch-2a"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 28 125 Q 60 135 96 124"
          className="spark-line-input-flow flow-branch-2b"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 12 150 Q 50 140 96 130"
          className="spark-line-input-flow flow-branch-3a"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 16 180 Q 45 190 96 136"
          className="spark-line-input-flow flow-branch-3b"
          stroke="url(#branch-fade-sienna)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M 32 68 Q 65 72 96 112"
          className="spark-line-input-flow flow-line-1"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="12 12"
        />
        <path
          d="M 56 110 Q 78 105 96 120"
          className="spark-line-input-flow flow-line-2"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <path
          d="M 36 168 Q 60 160 96 128"
          className="spark-line-input-flow flow-line-3"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="10 14"
        />
        <circle cx="32" cy="68" r="6" className="spark-node-input" fill="var(--color-accent)" />
        <circle cx="56" cy="110" r="11" className="spark-node-input" fill="var(--color-accent)" />
        <circle cx="36" cy="168" r="8" className="spark-node-input" fill="var(--color-accent)" />
        <g className="spark-hub-gear">
          <circle cx="120" cy="120" r="18" fill="none" stroke="var(--color-ink)" strokeWidth="8" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(45 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(90 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(135 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(180 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(225 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(270 120 120)" />
          <rect x="116" y="94" width="8" height="14" rx="2" fill="var(--color-ink)" transform="rotate(315 120 120)" />
        </g>

        <circle cx="120" cy="120" r="8" className="spark-hub-inner" fill="var(--color-accent)" />
        <path
          d="M144 120 L195 120"
          className="spark-line-output-base"
          stroke="var(--color-growth)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M144 120 L195 120"
          className="spark-line-output-flow"
          stroke="var(--color-growth)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <circle cx="200" cy="120" r="10" className="spark-node-output" fill="var(--color-growth)" />
      </svg>
    </div>
  )
}


