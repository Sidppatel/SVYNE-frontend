import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { Metadata } from '@/components/layout/Metadata'
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
      <Metadata description="Operational systems for service businesses. SVYNE replaces spreadsheets, phone calls, and disconnected tools with workflow-fit operating systems." />
      
      {/* ==========================================================================
         1. Hero Section
         ========================================================================== */}
      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('home.hero.eyebrow')}</Eyebrow>
              <div className="hero-promise fade-up d1">
                We don't sell software. We build operational systems.
              </div>
              <h1 className="h-display">
                <span className="fade-up d1">{t('home.hero.title')}</span>
                <span className="fade-up d2">{t('home.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('home.hero.deck')}
              </p>
              <div className="hero-location-text fade-up d3">
                Serving Saraland, Chickasaw, and Mobile County · Local support · No call centers
              </div>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D />
            </div>

            <div className="hero-ctas-wrap fade-up d4">
              <div className="hero-ctas">
                <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                  {t('home.hero.cta.book')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(ROUTES.describe)}>
                  {t('home.hero.cta.how')}
                </Button>
              </div>
              <p className="hero-cta-subtext">
                No commitment. We'll map your current workflow and show you exactly where time and money are leaking.
              </p>
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
              SVYNE builds scalable systems that deliver tangible improvements to your operational efficiency and visibility.
            </p>
          </div>

          <div className="kpi-grid">
            <article className="kpi-card">
              <div className="kpi-metric">
                -<KpiCounter target={90} />%
              </div>
              <div className="kpi-label">Scheduling Conflicts</div>
              <p className="kpi-desc">Reduction in dispatch overlaps and double-bookings.</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={100} />%
              </div>
              <div className="kpi-label">Data Ownership</div>
              <p className="kpi-desc">You retain full control and history of your customer profiles.</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={5} />h
              </div>
              <div className="kpi-label">Saved Weekly</div>
              <p className="kpi-desc">Admin hours saved per employee on manual data entry.</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                <KpiCounter target={40} />%
              </div>
              <div className="kpi-label">Faster Invoicing</div>
              <p className="kpi-desc">Reduction in time from job completion to payment collection.</p>
            </article>

            <article className="kpi-card">
              <div className="kpi-metric">
                $<KpiCounter target={0} />
              </div>
              <div className="kpi-label">Upfront Setup</div>
              <p className="kpi-desc">For event venues utilizing the transaction-based pricing model.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5.5 Data Ownership Covenant
         ========================================================================== */}
      <section className="section section-cream data-ownership-section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Covenant · Data Guarantee</Eyebrow>
              <Accent>your data forever</Accent>
            </div>
            <h2>
              The Data Ownership <em>Covenant.</em>
            </h2>
            <p className="deck">
              Unlike generic platforms that hold your business history hostage or market to your clients, we pledge absolute data independence.
            </p>
          </div>

          <div className="services-strip">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3 className="pillar-h-sm">100% Ownership</h3>
              <p>You retain full and exclusive ownership of all customer profiles, purchase history, and operational records. We never share or sell your data.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3 className="pillar-h-sm">Complete Export</h3>
              <p>If you choose to leave, we provide a complete SQL/JSON database export and a migration map to transition to industry-standard tools.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3 className="pillar-h-sm">No Lock-in</h3>
              <p>While our core engine code remains ours, your entire operational history is yours forever, with zero proprietary format constraints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5.6 Target Verticals (Who We Help)
         ========================================================================== */}
      <section className="section target-verticals-section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>ICP · Target Verticals</Eyebrow>
              <Accent>Who we build for</Accent>
            </div>
            <h2>
              Systems configured for <em>your industry.</em>
            </h2>
            <p className="deck">
              We build operational structures around specific trade and business workflows in Mobile County.
            </p>
          </div>

          <div className="services-strip">
            <div className="pillar">
              <div className="pillar-num">i.</div>
              <h3 className="pillar-h-sm">Event Venues</h3>
              <p>Direct website ticketing embeds, visual seating chart drag-and-drop designers, QR scanning check-in portals, and 100% direct customer lists.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">ii.</div>
              <h3 className="pillar-h-sm">Auto Shops</h3>
              <p>Customer vehicle history tracking, appointment calendar grids, automated SMS status alerts, parts tracking, and invoice follow-ups.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">iii.</div>
              <h3 className="pillar-h-sm">Trade Contractors</h3>
              <p>Mobile field technician work orders, custom visual Kanban dispatch boards, estimates approval routing, and onsite text-to-pay invoicing.</p>
            </div>
          </div>
        </div>
      </section>

      <SuccessSection />
      <FinalCta />
    </>
  )
}
