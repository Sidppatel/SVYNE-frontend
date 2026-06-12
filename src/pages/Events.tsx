import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { Metadata } from '@/components/layout/Metadata'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { ROUTES } from '@/routes'

export function Events() {
  const navigate = useNavigate()

  const features = [
    {
      num: '01',
      title: 'Seating Chart Designer',
      desc: 'Drag-and-drop table layouts. VIP, standard, and high-top configurations that map directly to your venue floor plan.'
    },
    {
      num: '02',
      title: 'Self-Serve Widget',
      desc: 'Embed ticketing directly on your own website. Customers select seats and complete checkout in under 30 seconds.'
    },
    {
      num: '03',
      title: 'Passwordless Magic Links',
      desc: 'No more forgotten accounts. Attendees log in with a single secure email link to view or manage tickets.'
    },
    {
      num: '04',
      title: 'Staff Portal & QR Scan',
      desc: 'Web-native check-in app. Scan tickets at the door using any smartphone camera with real-time sync.'
    },
    {
      num: '05',
      title: 'Instant Self-Service Refunds',
      desc: 'Reduce admin work. Allow ticket buyers to request cancellations and process refunds automatically based on your rules.'
    },
    {
      num: '06',
      title: 'Data Ownership',
      desc: '100% of attendee names, emails, and purchase histories remain your property. No sharing, no advertisements.'
    }
  ]

  const comparisons = [
    {
      label: 'Eventbrite & General Platforms',
      items: [
        'Attendee lists are shared or marketed to',
        'Redirects customers off your website to checkout',
        'Complex, rigid layout maps for local venues',
        'Payouts delayed until after the event closes'
      ]
    },
    {
      label: 'SVYNE Event Platform',
      items: [
        'You own 100% of attendee contact data',
        'Embedded checkout keeps buyers on your site',
        'Custom floor plan designed for your space',
        'Funds sent directly to your Stripe account'
      ],
      highlight: true
    }
  ]

  return (
    <>
      <Metadata
        title="Event Platform"
        description="Ticketing and seating chart builder for event venues. Keep your customer data, design your own seating layout, and embed checkout directly."
      />

      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">◆ Chapter 03 · Events ◆</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">Own Your Ticketing</span>
                <span className="fade-up d2">Keep Your Data<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                No third-party accounts. No hidden data sharing. Sell tickets directly on your own website and manage seating with a custom visual designer.
              </p>
            </div>

            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="work" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Book free audit
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.services)}>
                Explore modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Capabilities · features</Eyebrow>
              <Accent>event manager</Accent>
            </div>
            <h2>
              Designed for <em>venue operators.</em>
            </h2>
            <p className="deck">
              Everything needed to manage ticket sales, seating arrangements, door check-ins, and repeat marketing.
            </p>
          </div>

          <div className="services-strip">
            {features.map(feat => (
              <div key={feat.num} className="pillar">
                <div className="pillar-num">{feat.num}</div>
                <h3 className="pillar-h-sm">{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Comparison · why it matters</Eyebrow>
              <Accent>data alignment</Accent>
            </div>
            <h2>
              How we <em>compare.</em>
            </h2>
            <p className="deck">
              Most platforms treat your buyers as their future marketing targets. We protect your client relationship.
            </p>
          </div>

          <div className="compare-panel">
            {comparisons.map(comp => (
              <div key={comp.label} className="compare-column">
                <div className="compare-column-title">
                  <span className={comp.highlight ? 'bullet-svyne' : 'bullet-chaos'} /> {comp.label}
                </div>
                <div className={`compare-card ${comp.highlight ? 'compare-card-svyne' : 'compare-card-chaos'}`}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {comp.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: '12px 0',
                          borderBottom: idx < comp.items.length - 1 ? '1px solid var(--color-surface-3)' : 'none',
                          fontSize: '15px',
                          color: comp.highlight ? 'var(--color-ink)' : 'var(--color-text-muted)',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '10px'
                        }}
                      >
                        <span style={{ color: comp.highlight ? 'var(--color-growth)' : 'var(--color-accent)' }}>
                          {comp.highlight ? '✓' : '×'}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Map your <em>event workflow.</em>
          </>
        }
        deck="Let's build a customized ticketing system with $0 upfront costs. We'll outline your seating rules and launch in under two weeks."
      />
    </>
  )
}
