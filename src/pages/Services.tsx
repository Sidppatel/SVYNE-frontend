import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { SERVICE_BLOCKS, SERVICES_NOT_OFFERED } from '@/content/services'
import { ROUTES } from '@/routes'

export function Services() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <SEO title="Systems" description="Operational systems for service businesses: workflow audit, modular system build, and ongoing optimization." />
      
      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('services.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('services.hero.title')}</span>
                <span className="fade-up d2">{t('services.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('services.hero.deck')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="services" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('services.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.work)}>
                {t('services.hero.cta.work')}
              </Button>
            </div>
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
              <Eyebrow>{t('services.not.eyebrow')}</Eyebrow>
              <Accent>{t('services.not.accent')}</Accent>
            </div>
            <h2>
              {t('services.not.title')}<em>{t('services.not.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('services.not.deck')}
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
            {t('services.cta.title')}<em>{t('services.cta.titleEm')}</em>
          </>
        }
        deck={t('services.cta.deck')}
      />
    </>
  )
}
