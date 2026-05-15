type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  return (
    <span>
      svyne<em className={`brand-period${swayOnMount ? ' sway' : ''}`}>.</em>
    </span>
  )
}
