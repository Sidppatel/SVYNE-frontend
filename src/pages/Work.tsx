import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import { CASE_STUDIES, WORK_FILTERS } from '@/content/work'
import { ROUTES } from '@/routes'

export function Work() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>('All')
  const filtered =
    filter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter(c => c.tag.includes(filter))

  return (
    <>
      <SEO title="The Work" description="Explore the portfolio of web platforms, marketing sites, and custom dashboards." />
      <section className="hero work-hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 03 · The work ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">What grew<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">from vision<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              A small set, growing slowly. <strong>Real systems</strong> beat placeholders. Each one has roots, structure, and room to expand.
            </p>
          </div>
        </div>
      </section>

      <div className="doc work-listing">
        <div className="work-filter-row">
          <Eyebrow className="work-filter-label">Filter ·</Eyebrow>
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
            <div className="work-outcome">NEXT · IN PROGRESS</div>
            <div className="work-title">
              <em>Your project here.</em>
            </div>
            <p className="placeholder-note">One slot remains this quarter.</p>
            <Button variant="primary" withArrow to={ROUTES.contact}>
              Start a project
            </Button>
          </div>
        </div>
      </div>

      <CtaBand
        title={
          <>
            Want to be <em>the next one?</em>
          </>
        }
        deck="A 30-minute call to start. Written proposal in 48 hours."
      />
    </>
  )
}
