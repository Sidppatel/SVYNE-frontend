import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Eyebrow({ children, className = '' }: Props) {
  return <div className={`eyebrow ${className}`.trim()}>{children}</div>
}
