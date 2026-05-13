type Props = {
  size?: number
  color?: string
  stroke?: number
}

export function SparkMark({ size = 26, color = 'var(--color-sienna)', stroke = 7 }: Props) {
  return (
    <svg
      className="spark-mark"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M 32 38 L 50 18 L 68 38"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 16 50 Q 30 42 50 50 Q 70 58 84 50"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M 32 62 L 50 82 L 68 62"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
