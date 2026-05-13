import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

type BaseProps = {
  variant?: Variant
  withArrow?: boolean
  className?: string
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    to?: never
  }

type LinkProps = BaseProps & {
  to: string
  onClick?: () => void
}

type Props = PropsWithChildren<ButtonProps | LinkProps>

export function Button({
  variant = 'primary',
  withArrow = false,
  children,
  className = '',
  ...rest
}: Props) {
  const commonClasses = `btn btn-${variant} ${className}`.trim()

  if ('to' in rest && rest.to) {
    const { to, onClick, ...linkRest } = rest as LinkProps
    return (
      <Link to={to} className={commonClasses} onClick={onClick} {...linkRest}>
        {children}
        {withArrow && <span className="arr">→</span>}
      </Link>
    )
  }

  const { type = 'button', ...buttonRest } = rest as ButtonProps
  return (
    <button type={type} className={commonClasses} {...buttonRest}>
      {children}
      {withArrow && <span className="arr">→</span>}
    </button>
  )
}
