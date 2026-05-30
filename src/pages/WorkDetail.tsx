import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Accent } from '@/components/ui/Accent'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { Metadata } from '@/components/layout/Metadata'
import { CASE_STUDIES } from '@/content/work'
import { ROUTES } from '@/routes'

export function WorkDetail() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const cs = CASE_STUDIES.find(c => c.id === slug)

  if (!cs) return <Navigate to={ROUTES.work} replace />

  return (
    <div className="doc casestudy">
      <Metadata title={cs.title} description={cs.outcome} />
      <button className="cs-back" onClick={() => navigate(ROUTES.work)}>
        ← {t('workDetail.back')}
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
          <h5>{t('workDetail.sidebar.project')}</h5>
          <dl>
            <dt>{t('workDetail.sidebar.sector')}</dt>
            <dd>{cs.sector}</dd>
            <dt>{t('workDetail.sidebar.year')}</dt>
            <dd>{cs.year}</dd>
            <dt>{t('workDetail.sidebar.timeline')}</dt>
            <dd>
              <em>{cs.timeline}</em>
            </dd>
            <dt>{t('workDetail.sidebar.tier')}</dt>
            <dd>{cs.tier}</dd>
            <dt>{t('workDetail.sidebar.stack')}</dt>
            <dd className="mono">{cs.stack}</dd>
          </dl>
          <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
            {t('workDetail.sidebar.cta')}
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
