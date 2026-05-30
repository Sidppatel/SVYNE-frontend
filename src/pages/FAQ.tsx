import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Metadata } from '@/components/layout/Metadata'
import { CtaBand } from '@/components/layout/CtaBand'
import { Accent } from '@/components/ui/Accent'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { FAQ_ITEMS, FAQ_WHY_SVYNE } from '@/content/faq'
import { ROUTES } from '@/routes'

export function FAQ() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Metadata
        title="FAQ"
        description="Questions and answers about SVYNE, operational systems, workflow audits, implementation, pricing, and ongoing support."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }}
      />

      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('faq.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('faq.hero.title')}</span>
                <span className="fade-up d2">{t('faq.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('faq.hero.deck')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="faq" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('faq.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.services)}>
                {t('faq.hero.cta.services')}
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
              <Eyebrow>{t('faq.why.eyebrow')}</Eyebrow>
              <Accent>{t('faq.why.accent')}</Accent>
            </div>
            <h2>
              {t('faq.why.title')}<em>{t('faq.why.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('faq.why.deck')}
            </p>
          </div>

          <div className="faq-why-grid">
            {FAQ_WHY_SVYNE.map(item => (
              <article key={item.title} className="faq-why-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-parchment-deep">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('faq.qa.eyebrow')}</Eyebrow>
              <Accent>{t('faq.qa.accent')}</Accent>
            </div>
            <h2>
              {t('faq.qa.title')}<em>{t('faq.qa.titleEm')}</em>
            </h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => (
              <article key={item.question} className="faq-item">
                <div className="faq-num">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            {t('faq.cta.title')}<em>{t('faq.cta.titleEm')}</em>
          </>
        }
        deck={t('faq.cta.deck')}
      />
    </>
  )
}
