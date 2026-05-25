import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '@/routes'
import { Button } from '@/components/ui/Button'

type Props = {
  title: ReactNode
  deck?: string
}

export function CtaBand({ title, deck }: Props) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const finalDeck = deck || t('ctaBand.deck')

  return (
    <section className="section section-cta-band">
      <div className="cta-grid" />
      <div className="doc">
        <div className="cta-flow fade-up">
          <div className="cta-kicker">{t('ctaBand.kicker')}</div>
          <div className="cta-copy">
            <h2 className="h-display fade-up d1">{title}</h2>
            <p className="deck fade-up d2">{finalDeck}</p>
          </div>
          <div className="cta-action-block fade-up d3">
            <div className="cta-rule" />
            <div className="cta-band-ctas">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('ctaBand.btn.audit')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                {t('ctaBand.btn.pricing')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
