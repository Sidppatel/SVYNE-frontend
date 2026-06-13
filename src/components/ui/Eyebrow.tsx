import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Eyebrow({ children, className = '' }: Props) {
  let content = children
  if (typeof children === 'string') {
    const trimmed = children.trim()
    if (!trimmed.startsWith('◆') && !trimmed.endsWith('◆')) {
      content = `◆ ${trimmed} ◆`
    }
  }
  return <div className={`eyebrow ${className}`.trim()}>{content}</div>
}
