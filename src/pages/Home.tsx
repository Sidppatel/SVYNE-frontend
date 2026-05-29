import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { SEO } from '@/components/layout/SEO'
import { ROUTES } from '@/routes'
import { SuccessSection } from '@/components/layout/SuccessSection'
import { FinalCta } from '@/components/layout/FinalCta'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { AlertTriangle, Mail, Layers, Database } from 'lucide-react'

// Intersection observer animated counter
function KpiCounter({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLSpanElement>(null)
  const hasRunRef = useRef(false)

  useEffect(() => {
    let observer: IntersectionObserver
    const end = target
    
    const animate = () => {
      const startTime = performance.now()
      
      const update = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out quadratic
        const easeProgress = progress * (2 - progress)
        setCount(Math.floor(easeProgress * end))
        
        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }
      requestAnimationFrame(update)
    }

    if (containerRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasRunRef.current) {
          hasRunRef.current = true
          animate()
          observer.disconnect()
        }
      }, { threshold: 0.1 })
      observer.observe(containerRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [target, duration])

  return <span ref={containerRef}>{count}</span>
}

export function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <SEO description="Operational systems for service businesses. SVYNE replaces spreadsheets, phone calls, and disconnected tools with workflow-fit operating systems." />
      
      {/* ==========================================================================
         1. Hero Section
         ========================================================================== */}
      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('home.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('home.hero.title')}</span>
                <span className="fade-up d2">{t('home.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('home.hero.deck')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('home.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => {
                const element = document.getElementById('problem-section')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}>
                {t('home.hero.cta.how')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ==========================================================================
         2. Problem Section (Operational Chaos)
         ========================================================================== */}
      <section id="problem-section" className="section section-cream problem-section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.problem.eyebrow')}</Eyebrow>
              <Accent>{t('home.problem.accent')}</Accent>
            </div>
            <h2>
              {t('home.problem.title')}<em>{t('home.problem.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('home.problem.deck')}
            </p>
          </div>

          <div className="chaos-grid">
            <article className="chaos-card">
              <div className="chaos-card-meta">01 · Workflows</div>
              <h3 className="chaos-card-title">{t('home.chaos.workflows')}</h3>
              <p className="chaos-card-desc">
                {t('home.chaos.workflowsDesc')}
              </p>
              <div className="chaos-card-icon" aria-hidden="true">
                <AlertTriangle size={24} />
              </div>
            </article>

            <article className="chaos-card">
              <div className="chaos-card-meta">02 · Communication</div>
              <h3 className="chaos-card-title">{t('home.chaos.comm')}</h3>
              <p className="chaos-card-desc">
                {t('home.chaos.commDesc')}
              </p>
              <div className="chaos-card-icon" aria-hidden="true">
                <Mail size={24} />
              </div>
            </article>

            <article className="chaos-card">
              <div className="chaos-card-meta">03 · Systems</div>
              <h3 className="chaos-card-title">{t('home.chaos.systems')}</h3>
              <p className="chaos-card-desc">
                {t('home.chaos.systemsDesc')}
              </p>
              <div className="chaos-card-icon" aria-hidden="true">
                <Layers size={24} />
              </div>
            </article>

            <article className="chaos-card">
              <div className="chaos-card-meta">04 · Pipelines</div>
              <h3 className="chaos-card-title">{t('home.chaos.ops')}</h3>
              <p className="chaos-card-desc">
                {t('home.chaos.opsDesc')}
              </p>
              <div className="chaos-card-icon" aria-hidden="true">
                <Database size={24} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. Why Existing Software Fails (Comparison)
         ========================================================================== */}
      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.trap.eyebrow')}</Eyebrow>
              <Accent>{t('home.trap.accent')}</Accent>
            </div>
            <h2>
              {t('home.trap.title')}<em>{t('home.trap.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('home.trap.deck')}
            </p>
          </div>

          <div className="compare-panel">
            <div className="compare-column">
              <div className="compare-column-title">
                <span className="bullet-chaos" aria-hidden="true" /> {t('home.compare.saas')}
              </div>
              <div className="compare-card compare-card-chaos">
                <div className="compare-item-list">
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.one')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.saas1.title')}</h4>
                      <p>{t('home.compare.saas1.desc')}</p>
                    </div>
                  </div>
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.two')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.saas2.title')}</h4>
                      <p>{t('home.compare.saas2.desc')}</p>
                    </div>
                  </div>
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.three')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.saas3.title')}</h4>
                      <p>{t('home.compare.saas3.desc')}</p>
                    </div>
                  </div>
                </div>
                <div className="dashboard-sim">
                  <div className="dash-row">
                    <div className="dash-block" style={{ width: '40%' }} />
                    <div className="dash-block" style={{ width: '20%' }} />
                  </div>
                  <div className="dash-row">
                    <div className="dash-block" style={{ width: '60%' }} />
                    <div className="dash-block dash-block-pulse" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="compare-column">
              <div className="compare-column-title">
                <span className="bullet-svyne" aria-hidden="true" /> {t('home.compare.svyne')}
              </div>
              <div className="compare-card compare-card-svyne">
                <div className="compare-item-list">
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.one')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.svyne1.title')}</h4>
                      <p>{t('home.compare.svyne1.desc')}</p>
                    </div>
                  </div>
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.two')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.svyne2.title')}</h4>
                      <p>{t('home.compare.svyne2.desc')}</p>
                    </div>
                  </div>
                  <div className="compare-item">
                    <span className="compare-item-num">{t('home.compare.roman.three')}</span>
                    <div className="compare-item-content">
                      <h4>{t('home.compare.svyne3.title')}</h4>
                      <p>{t('home.compare.svyne3.desc')}</p>
                    </div>
                  </div>
                </div>
                <div className="dashboard-sim">
                  <div className="dash-row">
                    <div className="dash-block" style={{ width: '30%', backgroundColor: 'var(--color-growth)' }} />
                    <div className="dash-block" style={{ width: '50%', backgroundColor: 'var(--color-accent)' }} />
                  </div>
                  <div className="dash-row">
                    <div className="dash-block" style={{ width: '80%', backgroundColor: 'var(--color-gold)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. The SVYNE Approach (Timeline Workflow)
         ========================================================================== */}
      <section className="section section-parchment-deep approach-section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.approach.eyebrow')}</Eyebrow>
              <Accent>{t('home.approach.accent')}</Accent>
            </div>
            <h2>
              {t('home.approach.title')}<em>{t('home.approach.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('home.approach.deck')}
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line" />
            
            <div className="timeline-step">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{t('home.approach.phase1.meta')}</span>
                  <span className="step-accent">{t('home.approach.phase1.accent')}</span>
                </div>
                <h3 className="timeline-title">{t('home.approach.phase1.title')}</h3>
                <p className="timeline-desc">
                  {t('home.approach.phase1.desc')}
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{t('home.approach.phase2.meta')}</span>
                  <span className="step-accent">{t('home.approach.phase2.accent')}</span>
                </div>
                <h3 className="timeline-title">{t('home.approach.phase2.title')}</h3>
                <p className="timeline-desc">
                  {t('home.approach.phase2.desc')}
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{t('home.approach.phase3.meta')}</span>
                  <span className="step-accent">{t('home.approach.phase3.accent')}</span>
                </div>
                <h3 className="timeline-title">{t('home.approach.phase3.title')}</h3>
                <p className="timeline-desc">
                  {t('home.approach.phase3.desc')}
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{t('home.approach.phase4.meta')}</span>
                  <span className="step-accent">{t('home.approach.phase4.accent')}</span>
                </div>
                <h3 className="timeline-title">{t('home.approach.phase4.title')}</h3>
                <p className="timeline-desc">
                  {t('home.approach.phase4.desc')}
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-node" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{t('home.approach.phase5.meta')}</span>
                  <span className="step-accent">{t('home.approach.phase5.accent')}</span>
                </div>
                <h3 className="timeline-title">{t('home.approach.phase5.title')}</h3>
                <p className="timeline-desc">
                  {t('home.approach.phase5.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. Success Outcomes
         ========================================================================== */}
      <section className="section kpi-section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.outcomes.eyebrow')}</Eyebrow>
              <Accent>{t('home.outcomes.accent')}</Accent>
            </div>
            <h2>
              {t('home.outcomes.title')}<em>{t('home.outcomes.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('home.outcomes.deck')}
            </p>
          </div>

          <div className="kpi-grid">
            <article className="kpi-card">
              <div className="kpi-metric">
                -<KpiCounter target={40} />%
              </div>
              <div className="kpi-label">{t('home.outcomes.kpi1.label')}</div>
              <p className="kpi-desc">{t('home.outcomes.kpi1.desc')}</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={90} />%
              </div>
              <div className="kpi-label">{t('home.outcomes.kpi2.label')}</div>
              <p className="kpi-desc">{t('home.outcomes.kpi2.desc')}</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={100} />%
              </div>
              <div className="kpi-label">{t('home.outcomes.kpi3.label')}</div>
              <p className="kpi-desc">{t('home.outcomes.kpi3.desc')}</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={15} />h
              </div>
              <div className="kpi-label">{t('home.outcomes.kpi4.label')}</div>
              <p className="kpi-desc">{t('home.outcomes.kpi4.desc')}</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={10} />x
              </div>
              <div className="kpi-label">{t('home.outcomes.kpi5.label')}</div>
              <p className="kpi-desc">{t('home.outcomes.kpi5.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <SuccessSection />
      <FinalCta />
    </>
  )
}
