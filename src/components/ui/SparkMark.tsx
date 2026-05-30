type Props = {
  size?: number
}

export function SparkMark({ size }: Props) {
  const style = typeof size === 'number' ? { height: size } : undefined
  return (
    <div className="spark-mark-wrap" style={style}>
      <svg
        className="spark-mark"
        viewBox="27 57 188 126"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        {/* Input Lines (Static Base Conduit) */}
        <path
          d="M40 70 L95 110"
          className="spark-line-input-base"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M40 120 L95 120"
          className="spark-line-input-base"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M40 170 L95 130"
          className="spark-line-input-base"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Input Lines (Animated Flow Overlay) */}
        <path
          d="M40 70 L95 110"
          className="spark-line-input-flow"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="12 12"
        />
        <path
          d="M40 120 L95 120"
          className="spark-line-input-flow"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="12 12"
        />
        <path
          d="M40 170 L95 130"
          className="spark-line-input-flow"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="12 12"
        />

        {/* Input Nodes */}
        <circle cx="40" cy="70" r="8" className="spark-node-input" fill="var(--color-sienna)" />
        <circle cx="40" cy="120" r="8" className="spark-node-input" fill="var(--color-sienna)" />
        <circle cx="40" cy="170" r="8" className="spark-node-input" fill="var(--color-sienna)" />

        {/* System Hub */}
        <circle
          cx="120"
          cy="120"
          r="24"
          className="spark-hub-outer"
          fill="var(--color-bg)"
          stroke="var(--color-ink)"
          strokeWidth="10"
        />

        {/* Inner System Core */}
        <circle cx="120" cy="120" r="8" className="spark-hub-inner" fill="var(--color-ink)" />

        {/* Output Line (Static Base Conduit) */}
        <path
          d="M144 120 L195 120"
          className="spark-line-output-base"
          stroke="var(--color-growth)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Output Line (Animated Flow Overlay) */}
        <path
          d="M144 120 L195 120"
          className="spark-line-output-flow"
          stroke="var(--color-growth)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />

        {/* Output Node */}
        <circle cx="200" cy="120" r="10" className="spark-node-output" fill="var(--color-growth)" />
      </svg>
    </div>
  )
}


