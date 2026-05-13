import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Accent({ children, className = '' }: Props) {
  return <span className={`accent ${className}`.trim()}>{children}</span>
}
