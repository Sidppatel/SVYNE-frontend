import { useTranslation } from 'react-i18next'

type Props = {
  swayOnMount?: boolean
}

export function Wordmark({ swayOnMount = false }: Props) {
  const { t } = useTranslation()
  const isPreview = import.meta.env.VITE_IS_PREVIEW !== 'false' 

  return (
    <span className="brand-wordmark-container">
      svyne<span className={`brand-period${swayOnMount ? ' sway' : ''}`}>.</span>
      {isPreview && <span className="preview-badge">{t('brand.preview')}</span>}
    </span>
  )
}
