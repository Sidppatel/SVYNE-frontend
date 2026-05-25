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
      <SEO title="Outcomes" description="Operational systems and business outcomes delivered by SVYNE." />
      <section className="hero work-hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 03 · Outcomes ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Manual work<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">made visible<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              A focused set of operational systems. Each case should answer one question: what became faster, clearer, or easier to scale?
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
              <em>Your operation here.</em>
            </div>
            <p className="placeholder-note">One operational system slot remains this quarter.</p>
            <Button variant="primary" withArrow to={ROUTES.contact}>
              Book a system audit
            </Button>
          </div>
        </div>
      </div>

      <CtaBand
        title={
          <>
            Want your workflow <em>mapped next?</em>
          </>
        }
        deck="Start with the places work gets lost, delayed, duplicated, or hidden."
      />
    </>
  )
}
