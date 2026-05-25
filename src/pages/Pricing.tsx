import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import {
  ADDONS,
  BUNDLES,
  MAINTAIN_TIERS,
  PAYMENT_TERMS,
  PRICING_TIERS,
} from '@/content/pricing'
import { ROUTES } from '@/routes'

export function Pricing() {
  const navigate = useNavigate()
  const [activeBundle, setActiveBundle] = useState<string | null>(null)

  return (
    <>
      <SEO title="Investment" description="Investment ranges for operational audits, system implementation, and ongoing optimization with SVYNE." />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 05 · Investment ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">System investment<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">
                Built for outcomes<span className="brand-period sway">.</span>
              </em>
            </h1>
            <p className="hero-deck fade-up d3">
              Pricing follows operational complexity: the workflows involved, the modules needed, the data to migrate, and the level of support after launch.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc pricing-doc">
        <div className="section-header">
          <div className="label-row">
            <Eyebrow>Operational systems</Eyebrow>
            <Accent>three engagement types</Accent>
          </div>
          <h2>
            Choose the right <em>entry point.</em>
          </h2>
        </div>

        <div className="pkg-grid">
          {PRICING_TIERS.map(t => {
            const priceParts = t.price.split(' ')
            return (
              <div key={t.key} className={`pkg ${t.featured ? 'featured' : ''}`}>
                <div className="pkg-accent">{t.accent}</div>
                <h3 className="pkg-name">{t.name}</h3>
                <div className="pkg-price">
                  {priceParts[0]} <em>{priceParts.slice(1).join(' ')}</em>
                </div>
                <div className="pkg-tag">{t.tag}</div>
                <ul className="pkg-list">
                  {t.items.map(it => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <div className="pkg-meta">
                  <strong>Timeline:</strong> {t.timeline}
                  <br />
                  <strong>Best for:</strong> {t.best}
                </div>
                <button className="pkg-btn" onClick={() => navigate(ROUTES.contact)}>
                  Start <em>{t.name}</em> →
                </button>
              </div>
            )
          })}
        </div>

        <div className="maintain-wrap">
          <div className="maintain-head">
            <div className="maintain-head-label">◆ Optimize · ongoing operations · monthly support ◆</div>
            <h3 className="maintain-head-title">
              Three <em>levels</em> of ongoing improvement.
            </h3>
          </div>
          {MAINTAIN_TIERS.map(m => {
            const basePrice = parseInt(m.price.replace('$', ''))
            let displayPrice = m.price
            let discountTag = null

            if (activeBundle === 'essential6') {
              displayPrice = `$${Math.floor(basePrice * 0.9)}`
              discountTag = '10% off'
            } else if (activeBundle === 'active12') {
              displayPrice = `$${Math.floor(basePrice * 0.85)}`
              discountTag = '15% off'
            } else if (activeBundle === 'full12') {
              displayPrice = `$${Math.floor(basePrice * 0.8)}`
              discountTag = '20% off'
            }

            return (
              <div key={m.tier} className={`maintain-row ${activeBundle ? 'has-bundle' : ''}`}>
                <div className="m-tier">
                  <em>{m.tier}</em>
                </div>
                <div className="m-price">
                  <div className="m-price-stack">
                    {activeBundle && <span className="m-price-old">{m.price}</span>}
                    <span className="m-price-new">
                      {displayPrice}<em>/mo</em>
                    </span>
                  </div>
                  {discountTag && <span className="m-discount-badge">{discountTag}</span>}
                </div>
                <div className="m-feats">{m.features}</div>
                <div className="m-best">{m.best}</div>
              </div>
            )
          })}
        </div>

        <div className="bundles-wrap">
          <div className="bw-label">◆ Packages · system commitments ◆</div>
          <h3 className="bw-title">
            Audit <em>+</em> implementation <em>+</em> optimization.
          </h3>
          {BUNDLES.map(b => {
            const dim = activeBundle !== null && activeBundle !== b.key
            return (
              <button
                key={b.key}
                type="button"
                className={`bw-item ${dim ? 'dim' : ''}`}
                onClick={() => setActiveBundle(activeBundle === b.key ? null : b.key)}
              >
                <div>
                  <div className="bw-name">{b.name}</div>
                  <div className="bw-desc">{b.desc}</div>
                </div>
                <div className="bw-discount">{b.discount}</div>
              </button>
            )
          })}
        </div>

        <div className="addons-block">
          <div className="addons-head">◆ Extras · add-on services ◆</div>
          <div className="addons-grid">
            {ADDONS.map(a => (
              <div key={a.name} className="addon">
                <div>
                  <div className="addon-name">{a.name}</div>
                  <div className="addon-accent">{a.accent}</div>
                </div>
                <div className="addon-price">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section section-parchment-deep">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Terms · working agreement</Eyebrow>
              <Accent>plain language</Accent>
            </div>
            <h2>
              Honest <em>terms.</em>
            </h2>
          </div>
          <div className="services-strip">
            {PAYMENT_TERMS.map(t => (
              <div key={t.num} className="pillar">
                <div className="pillar-num">{t.num} · term</div>
                <h3 className="pillar-h-sm">{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Start with the <em>workflow.</em>
          </>
        }
        deck="The first conversation is about bottlenecks, not features. Then SVYNE scopes the system around the business outcome."
      />
    </>
  )
}
