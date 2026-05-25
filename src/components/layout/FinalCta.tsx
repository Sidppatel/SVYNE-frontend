import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/routes'

export function FinalCta() {
  const navigate = useNavigate()
  return (
    <section className="section section-cta-final">
      <div className="cta-grid" />
      <div className="doc">
        <div className="cta-flow cta-flow-final fade-up">
          <div className="cta-kicker">Ready to simplify operations</div>
          <div className="cta-copy">
            <h2 className="h-display">Replace the spreadsheet. <em>Keep the workflow.</em></h2>
            <p className="deck">Tell SVYNE where work gets stuck. I reply within one business day.</p>
          </div>
          <div className="cta-action-block">
            <div className="cta-rule" />
            <div className="cta-band-ctas">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Book a system audit
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
