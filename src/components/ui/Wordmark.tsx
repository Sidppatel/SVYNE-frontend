type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  return (
    <span className="brand-wordmark-container">
      svyne<em className={`brand-period${swayOnMount ? ' sway' : ''}`}>.</em>
      <span className="preview-badge">preview</span>
    </span>
  )
}
