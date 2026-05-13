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
    <section className="section-dark">
      <div className="cta-band">
        <div className="cta-band-inner">
          <h2 className="fade-up">{title}</h2>
          <p className="deck fade-up d1">{deck}</p>
          <div className="cta-band-ctas fade-up d2">
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
