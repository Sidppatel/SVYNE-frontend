import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { HOME_TESTIMONIAL } from '@/content/home'
import { ROUTES } from '@/routes'

export function SuccessCta() {
  const navigate = useNavigate()
  const { quote, highlight, attr, role } = HOME_TESTIMONIAL
  const [before, after] = quote.split(highlight)

  return (
    <section className="section section-success-integrated">
      <div className="cta-grid" style={{ opacity: 0.1 }} />
      <div className="doc">
        
        <div className="section-header fade-up">
          <div className="label-row">
            <Eyebrow>Result · proof of impact</Eyebrow>
            <Accent>proven success</Accent>
          </div>
          <h2>
            Proof of <em>impact.</em>
          </h2>
        </div>

        
        <div className="integrated-testimonial fade-up d1">
          <p className="testimonial-quote">
            {before}
            <em className="kinetic-fill">{highlight}</em>
            {after}
          </p>
          <div className="testimonial-attr">
            <span className="testimonial-attr-name">{attr}</span>
            <span className="testimonial-attr-role">{role}</span>
          </div>
        </div>

        
        <div className="integrated-cta fade-up d2">
          <div className="cta-content">
            <h3 className="h-display">Your workflow. <em>Built to scale.</em></h3>
            <p className="deck">Tell SVYNE where operations slow down. I reply within one business day.</p>
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
