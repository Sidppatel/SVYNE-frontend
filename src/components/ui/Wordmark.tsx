type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  return (
    <span>
      svono<em className={`svono-period${swayOnMount ? ' sway' : ''}`}>.</em>
    </span>
  )
}
