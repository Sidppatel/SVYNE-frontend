import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Accent } from '@/components/ui/Accent'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { SEO } from '@/components/layout/SEO'
import { CASE_STUDIES } from '@/content/work'
import { ROUTES } from '@/routes'

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const cs = CASE_STUDIES.find(c => c.id === slug)

  if (!cs) return <Navigate to={ROUTES.work} replace />

  return (
    <div className="doc casestudy">
      <SEO title={cs.title} description={cs.outcome} />
      <button className="cs-back" onClick={() => navigate(ROUTES.work)}>
        ← All work
      </button>
      <div className="cs-meta">
        <Accent>{cs.accent} · {cs.year}</Accent>
      </div>
      <h1 className="cs-title">
        {cs.title} - <em>{cs.titleEm}</em>
      </h1>
      <p className="cs-deck">{cs.outcome}</p>
      <div className="cs-hero-img">
        <WorkTileSvg grad={cs.grad} title={cs.title} year={cs.year} idx={cs.id} />
      </div>
      <div className="cs-details">
        <aside className="cs-sidebar">
          <h5>Project</h5>
          <dl>
            <dt>Sector</dt>
            <dd>{cs.sector}</dd>
            <dt>Year</dt>
            <dd>{cs.year}</dd>
            <dt>Timeline</dt>
            <dd>
              <em>{cs.timeline}</em>
            </dd>
            <dt>Tier</dt>
            <dd>{cs.tier}</dd>
            <dt>Stack</dt>
            <dd className="mono">{cs.stack}</dd>
          </dl>
          <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
            Start something like this
          </Button>
        </aside>
        <div className="cs-body">
          {cs.body.map((b, i) =>
            b.kind === 'h' ? (
              <h4 key={i}>
                <em>{b.text}</em>
              </h4>
            ) : (
              <p key={i}>{b.text}</p>
            )
          )}
        </div>
      </div>
    </div>
  )
}
