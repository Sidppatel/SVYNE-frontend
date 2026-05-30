import { useTranslation } from 'react-i18next'

type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  const { t } = useTranslation()

  return (
    <span className="brand-wordmark-container">
      svyne<em className={`brand-period${swayOnMount ? ' sway' : ''}`}>.</em>
      <span className="preview-badge">{t('brand.preview')}</span>
    </span>
  )
}
