import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/routes'
import { Button } from '@/components/ui/Button'
import { LivingCircles } from '@/components/ui/LivingCircles'

type Props = {
  title: ReactNode
  deck?: string
}

export function CtaBand({ title, deck = 'One source for everything. I reply within one business day.' }: Props) {
  const navigate = useNavigate()
  return (
    <section className="section-cta-band">
      <div className="cta-grid" />
      <div className="cta-connector left" />
      <div className="cta-connector right" />
      
      <div className="cta-band">
        <div className="cta-card fade-up">
          <div className="cta-band-inner">
            <h2 className="fade-up d1">{title}</h2>
            <p className="deck fade-up d2">{deck}</p>
            <div className="cta-band-ctas fade-up d3">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Start a project
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                See pricing
              </Button>
            </div>
          </div>
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' }}>
            <LivingCircles count={6} color="var(--color-accent)" />
          </div>
        </div>
      </div>
    </section>
  )
}
