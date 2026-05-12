import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Italian({ children, className = '' }: Props) {
  return <span className={`italian ${className}`.trim()}>{children}</span>
}
