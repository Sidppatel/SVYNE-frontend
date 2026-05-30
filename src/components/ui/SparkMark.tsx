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
        {/* Input Lines */}
        <path
          d="M40 70 L95 110"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M40 120 L95 120"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M40 170 L95 130"
          stroke="var(--color-sienna)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Input Nodes */}
        <circle cx="40" cy="70" r="8" fill="var(--color-sienna)" />
        <circle cx="40" cy="120" r="8" fill="var(--color-sienna)" />
        <circle cx="40" cy="170" r="8" fill="var(--color-sienna)" />

        {/* System Hub */}
        <circle
          cx="120"
          cy="120"
          r="24"
          fill="var(--color-bg)"
          stroke="var(--color-ink)"
          strokeWidth="10"
        />

        {/* Inner System Core */}
        <circle cx="120" cy="120" r="8" fill="var(--color-ink)" />

        {/* Output Line */}
        <path
          d="M144 120 L195 120"
          stroke="var(--color-growth)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Output Node */}
        <circle cx="200" cy="120" r="10" fill="var(--color-growth)" />
      </svg>
    </div>
  )
}

