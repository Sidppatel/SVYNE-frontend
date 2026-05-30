import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { CtaBand } from '@/components/layout/CtaBand'
import { Metadata } from '@/components/layout/Metadata'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { CASE_STUDIES, WORK_FILTERS } from '@/content/work'
import { ROUTES } from '@/routes'

export function Work() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>('All')
  const filtered =
    filter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter(c => c.tag.includes(filter))

  return (
    <>
      <Metadata title="Outcomes" description="Operational systems and business outcomes delivered by SVYNE." />
      
      <section className="hero work-hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('work.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('work.hero.title')}</span>
                <span className="fade-up d2">{t('work.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('work.hero.deck')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="work" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('work.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                {t('work.hero.cta.pricing')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc work-listing">
        <div className="work-filter-row">
          <Eyebrow className="work-filter-label">{t('work.filter.label')}</Eyebrow>
          {WORK_FILTERS.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`field-pill ${filter === f ? 'selected' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filtered.map((cs, i) => (
            <Link
              key={cs.id}
              to={ROUTES.workDetail(cs.id)}
              className="work-tile"
            >
              <div className="work-img">
                <WorkTileSvg grad={cs.grad} title={cs.title} year={cs.year} idx={i} />
              </div>
              <div className="work-info">
                <div className="work-tag">{cs.tag}</div>
                <div className="work-title">
                  {cs.title} - <em>{cs.titleEm}</em>
                </div>
                <div className="work-outcome">{cs.outcome}</div>
                <p className="work-desc">{cs.desc}</p>
              </div>
            </Link>
          ))}
          <div className="work-tile placeholder">
            <div className="work-outcome">{t('work.next.tag')}</div>
            <div className="work-title">
              <em>{t('work.next.titleEm')}</em>
            </div>
            <p className="placeholder-note">{t('work.next.desc')}</p>
            <Button variant="primary" withArrow to={ROUTES.contact}>
              {t('work.next.cta')}
            </Button>
          </div>
        </div>
      </div>

      <CtaBand
        title={
          <>
            {t('work.cta.title')}<em>{t('work.cta.titleEm')}</em>
          </>
        }
        deck={t('work.cta.deck')}
      />
    </>
  )
}
