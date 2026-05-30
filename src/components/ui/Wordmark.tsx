import { useTranslation } from 'react-i18next'

type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  const { t } = useTranslation()
  const isPreview = import.meta.env.VITE_IS_PREVIEW !== 'false' // defaults to true for local dev, false only when explicitly 'false' on main

  return (
    <span className="brand-wordmark-container">
      svyne<em className={`brand-period${swayOnMount ? ' sway' : ''}`}>.</em>
      {isPreview && <span className="preview-badge">{t('brand.preview')}</span>}
    </span>
  )
}
