import React from 'react'

type Props = {
  count?: number
  color?: string
}

export const LivingCircles = ({ count = 8, color = 'var(--color-gold)' }: Props) => {
  return (
    <div className="living-circles-container">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="living-circle"
          style={{
            width: `${(i + 1) * (100 / count)}%`,
            height: `${(i + 1) * (100 / count)}%`,
            animationDelay: `${i * 110}ms`,
            borderColor: color
          }}
        />
      ))}
    </div>
  )
}
