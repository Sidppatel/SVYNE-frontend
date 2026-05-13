import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { SERVICE_BLOCKS, SERVICES_NOT_OFFERED } from '@/content/services'

export function Services() {
  return (
    <>
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 04 · Services ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Three things.</span>
              <br />
              <em className="fade-up d2">Done well.</em>
            </h1>
            <p className="hero-deck fade-up d3">
              Build, launch, maintain. The <strong>full lifecycle</strong> of a website or web product. No handoffs between four people.
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
                  {b.name} <em>— {b.accent}</em>
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
              <Eyebrow>Honest list</Eyebrow>
              <Accent>what we don't do</Accent>
            </div>
            <h2>
              What we <em>don't</em> do.
            </h2>
            <p className="deck">
              Two minutes saved beats a misaligned project. If you need any of the below, we'll point you somewhere good.
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
            Talk to us about <em>your project.</em>
          </>
        }
        deck="A 30-minute call. Written proposal in 48 hours. Real number, real timeline."
      />
    </>
  )
}
