import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import { SERVICE_BLOCKS, SERVICES_NOT_OFFERED } from '@/content/services'

export function Services() {
  return (
    <>
      <SEO title="Systems" description="Operational systems for service businesses: workflow audit, modular system build, and ongoing optimization." />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 04 · Systems ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Operations first<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">Software second<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              SVYNE maps the workflow, assembles the operational system, and keeps improving it as the business grows.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc">
        {SERVICE_BLOCKS.map(b => (
          <div key={b.num} className="service-block">
            <div className="sb-grid">
              <div className="sb-num">{b.num}</div>
              <div>
                <h2 className="sb-title">
                  {b.name} - <em>{b.accent}</em>
                </h2>
                <p className="sb-deck">{b.deck}</p>
                <div className="sb-cols">
                  <div className="sb-col">
                    <h4>{b.colA.heading}</h4>
                    <ul className="sb-list">
                      {b.colA.items.map(it => (
                        <li key={it.title}>
                          <strong>{it.title}</strong> {it.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sb-col">
                    <h4>{b.colB.heading}</h4>
                    <ul className="sb-list">
                      {b.colB.items.map(it => (
                        <li key={it.title}>
                          <strong>{it.title}</strong>
                          {it.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sb-stats">
                  {b.stats.map(([num, label]) => (
                    <div key={label} className="sb-stat">
                      <div className="sb-stat-num">{num}</div>
                      <div className="sb-stat-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="section section-parchment-deep">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Positioning · what SVYNE is not</Eyebrow>
              <Accent>clear boundaries</Accent>
            </div>
            <h2>
              Not another <em>tool vendor.</em>
            </h2>
            <p className="deck">
              SVYNE is built for businesses that need operational transformation, not another disconnected app for the staff to babysit.
            </p>
          </div>
          <div className="services-strip">
            {SERVICES_NOT_OFFERED.map(d => (
              <div key={d.name} className="pillar">
                <div className="pillar-num">{d.num}</div>
                <h3 className="pillar-h-sm">{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Talk to SVYNE about <em>your operation.</em>
          </>
        }
        deck="Bring the messy workflow. SVYNE will help identify what should become a system."
      />
    </>
  )
}
