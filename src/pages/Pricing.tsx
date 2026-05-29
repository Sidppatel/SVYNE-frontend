import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import {
  ADDONS,
  BUNDLES,
  MAINTAIN_TIERS,
  PAYMENT_TERMS,
  PRICING_TIERS,
} from '@/content/pricing'
import { ROUTES } from '@/routes'

export function Pricing() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeBundle, setActiveBundle] = useState<string | null>(null)

  return (
    <>
      <SEO title="Investment" description="Investment ranges for operational audits, system implementation, and ongoing optimization with SVYNE." />
      
      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('pricing.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('pricing.hero.title')}</span>
                <span className="fade-up d2">{t('pricing.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('pricing.hero.deck')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="pricing" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('pricing.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.faq)}>
                {t('pricing.hero.cta.faq')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc pricing-doc">
        <div className="section-header">
          <div className="label-row">
            <Eyebrow>{t('pricing.packages.eyebrow')}</Eyebrow>
            <Accent>{t('pricing.packages.accent')}</Accent>
          </div>
          <h2>
            {t('pricing.packages.title')}<em>{t('pricing.packages.titleEm')}</em>
          </h2>
        </div>

        <div className="pkg-grid">
          {PRICING_TIERS.map(tier => {
            const priceParts = tier.price.split(' ')
            return (
              <div key={tier.key} className={`pkg ${tier.featured ? 'featured' : ''}`}>
                <div className="pkg-accent">{tier.accent}</div>
                <h3 className="pkg-name">{tier.name}</h3>
                <div className="pkg-price">
                  {priceParts[0]} <em>{priceParts.slice(1).join(' ')}</em>
                </div>
                <div className="pkg-tag">{tier.tag}</div>
                <ul className="pkg-list">
                  {tier.items.map(it => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <div className="pkg-meta">
                  <strong>{t('pricing.packages.timeline')}</strong> {tier.timeline}
                  <br />
                  <strong>{t('pricing.packages.bestFor')}</strong> {tier.best}
                </div>
                <button className="pkg-btn" onClick={() => navigate(ROUTES.contact)}>
                  {t('pricing.packages.start')}<em>{tier.name}</em> →
                </button>
              </div>
            )
          })}
        </div>

        <div className="maintain-wrap">
          <div className="maintain-head">
            <div className="maintain-head-label">{t('pricing.maintain.eyebrow')}</div>
            <h3 className="maintain-head-title">
              {t('pricing.maintain.title')}<em>{t('pricing.maintain.titleEm')}</em>{t('pricing.maintain.titleEnd')}
            </h3>
          </div>
          {MAINTAIN_TIERS.map(m => {
            const basePrice = parseInt(m.price.replace('$', ''))
            let displayPrice = m.price
            let discountTag = null

            if (activeBundle === 'essential6') {
              displayPrice = `$${Math.floor(basePrice * 0.9)}`
              discountTag = t('pricing.maintain.discount10')
            } else if (activeBundle === 'active12') {
              displayPrice = `$${Math.floor(basePrice * 0.85)}`
              discountTag = t('pricing.maintain.discount15')
            } else if (activeBundle === 'full12') {
              displayPrice = `$${Math.floor(basePrice * 0.8)}`
              discountTag = t('pricing.maintain.discount20')
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
                      {displayPrice}<em>{t('pricing.maintain.perMo')}</em>
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
          <div className="bw-label">{t('pricing.bundles.eyebrow')}</div>
          <h3 className="bw-title">
            {t('pricing.bundles.title')}<em>{t('pricing.bundles.titlePlus')}</em>{t('pricing.bundles.titleImpl')}<em>{t('pricing.bundles.titlePlus')}</em>{t('pricing.bundles.titleOpt')}
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
          <div className="addons-head">{t('pricing.addons.eyebrow')}</div>
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
              <Eyebrow>{t('pricing.terms.eyebrow')}</Eyebrow>
              <Accent>{t('pricing.terms.accent')}</Accent>
            </div>
            <h2>
              {t('pricing.terms.title')}<em>{t('pricing.terms.titleEm')}</em>
            </h2>
          </div>
          <div className="services-strip">
            {PAYMENT_TERMS.map(term => (
              <div key={term.num} className="pillar">
                <div className="pillar-num">{term.num} {t('pricing.terms.termLabel')}</div>
                <h3 className="pillar-h-sm">{term.name}</h3>
                <p>{term.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            {t('pricing.cta.title')}<em>{t('pricing.cta.titleEm')}</em>
          </>
        }
        deck={t('pricing.cta.deck')}
      />
    </>
  )
}
