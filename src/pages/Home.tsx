import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { SEO } from '@/components/layout/SEO'
import { HOME_PILLARS, HOME_PILLAR_TAG, HOME_PROCESS } from '@/content/home'
import { CASE_STUDIES } from '@/content/work'
import { ROUTES } from '@/routes'
import { SuccessSection } from '@/components/layout/SuccessSection'
import { FinalCta } from '@/components/layout/FinalCta'

export function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const featured = CASE_STUDIES[0]

  return (
    <>
      <SEO />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Studio Platform ◆</Eyebrow>
            <h1 className="h-display">
              <span className="fade-up d1">{t('home.hero.theLiving')}<span className="brand-period">.</span></span>
              <span className="fade-up d2">{t('home.hero.architecture')}<span className="brand-period">.</span></span>
            </h1>
            <p className="hero-deck fade-up d3">
              {t('home.hero.deck')}<span className="brand-period">.</span><br />
              For event organizers and local service business owners<span className="brand-period">.</span>
            </p>
            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('home.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.work)}>
                {t('home.hero.cta.work')}
              </Button>
            </div>
          </div>
          <div className="scroll-indicator fade-up d5">
            <div className="mouse">
              <div className="wheel" />
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.chapter1.eyebrow')}</Eyebrow>
              <Accent>{t('home.chapter1.accent')}</Accent>
            </div>
            <h2>
              {t('home.chapter1.title')}<em>{t('home.chapter1.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('home.chapter1.deck')}
            </p>
          </div>

          <div className="services-strip">
            {HOME_PILLARS.map(p => (
              <button
                key={p.num}
                className="pillar clickable"
                onClick={() => navigate(ROUTES.services)}
              >
                <div className="pillar-num">{p.num} · pillar</div>
                <h3>
                  <em>{p.name}</em>
                </h3>
                <div className="pillar-accent">{HOME_PILLAR_TAG.get(p.name)}</div>
                <p>{p.desc}</p>
                <div className="pillar-more">
                  {t('home.chapter1.readMore')}<span className="arr">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-parchment-deep">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.chapter2.eyebrow')}</Eyebrow>
              <Accent>{t('home.chapter2.accent')}</Accent>
            </div>
            <h2>
              {t('home.chapter2.title')}<em>{t('home.chapter2.titleEm')}</em>
            </h2>
            <p className="deck">{t('home.chapter2.deck')}</p>
          </div>

          <div className="work-grid">
            <Link
              to={ROUTES.workDetail(featured.id)}
              className="work-tile fade-up d1"
            >
              <div className="work-img">
                <WorkTileSvg grad={featured.grad} title={featured.title} year={featured.year} idx={featured.id} />
              </div>
              <div className="work-info">
                <div className="work-tag">{featured.tag}</div>
                <div className="work-title">
                  {featured.title} - <em>{featured.titleEm}</em>
                </div>
                <div className="work-outcome">{featured.outcome}</div>
                <p className="work-desc">{featured.desc}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="doc">
          <div className="about-home-grid">
            <div className="about-home-portrait">
              <div className="initial-block">SP</div>
              <div className="est-badge">{t('home.about.badge')}</div>
            </div>
            <div className="about-home-content">
              <Eyebrow>{t('home.about.eyebrow')}</Eyebrow>
              <h2 className="h-display">
                {t('home.about.title')}<em>{t('home.about.titleEm')}</em>
              </h2>
              <p className="deck">
                I'm Siddh Patel. I run SVYNE as a solo studio to maintain a direct line between the vision and the code. No middle managers, no agency overhead—just high-velocity development and a partner who cares about your business as much as the tech.
              </p>
              <Button variant="secondary" onClick={() => navigate(ROUTES.about)}>
                {t('home.about.cta')}<span className="arr">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('home.chapter3.eyebrow')}</Eyebrow>
              <Accent>{t('home.chapter3.accent')}</Accent>
            </div>
            <h2>
              {t('home.chapter3.title')}<em>{t('home.chapter3.titleEm')}</em>
            </h2>
          </div>
          <div className="services-strip">
            {HOME_PROCESS.map(s => (
              <div key={s.num} className="pillar">
                <div className="pillar-num">{s.num} · step</div>
                <h3>
                  <em>{s.title}</em>
                </h3>
                <div className="pillar-accent">{s.accent}</div>
                <p>{s.desc}</p>
                <button
                  className="pillar-more"
                  onClick={() => navigate(ROUTES.services)}
                >
                  {t('home.chapter3.learnMore')}<span className="arr">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SuccessSection />
      <FinalCta />
    </>
  )
}
