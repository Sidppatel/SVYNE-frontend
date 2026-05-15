import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/routes'
import { Button } from '@/components/ui/Button'

type Props = {
  title: ReactNode
  deck?: string
}

export function CtaBand({ title, deck = 'One source for everything. I reply within one business day.' }: Props) {
  const navigate = useNavigate()
  return (
    <section className="section section-cta-band">
      <div className="cta-grid" />
      <div className="doc">
        <div className="cta-flow fade-up">
          <div className="cta-kicker">Ready to build</div>
          <div className="cta-copy">
            <h2 className="h-display fade-up d1">{title}</h2>
            <p className="deck fade-up d2">{deck}</p>
          </div>
          <div className="cta-action-block fade-up d3">
            <div className="cta-rule" />
            <div className="cta-band-ctas">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Start a project
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
