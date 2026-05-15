import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/routes'

export function FinalCta() {
  const navigate = useNavigate()
  return (
    <section className="section section-cta-final">
      <div className="cta-grid" />
      <div className="doc">
        <div className="cta-content fade-up">
          <h2 className="h-display">Everything online. <em>One source.</em></h2>
          <p className="deck">Tell Svono what you're trying to build. I reply within one business day.</p>
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
    </section>
  )
}
