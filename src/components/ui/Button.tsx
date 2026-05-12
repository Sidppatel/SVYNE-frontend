import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary'

type Props = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    variant?: Variant
    withArrow?: boolean
    className?: string
  }
>

export function Button({
  variant = 'primary',
  withArrow = false,
  children,
  className = '',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
      {withArrow && <span className="arr">→</span>}
    </button>
  )
}
