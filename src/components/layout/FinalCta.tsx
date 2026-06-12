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
            <h2 className="h-display">Get Your Free 15-Minute <em>Operational Flow Audit.</em></h2>
            <p className="deck">I'll map your current workflow, highlight the bottlenecks in red, and show you exactly where time and money are leaking. No commitment. No sales pitch.</p>
          </div>
          <div className="cta-action-block">
            <div className="cta-rule" />
            <div className="cta-band-ctas">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Book Your Free Audit Now
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                See pricing
              </Button>
            </div>
            <p className="cta-local-info">
              Based in Saraland, AL. Serving Mobile County. Call/Text Siddh directly: <strong>(251) 228-2342</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
