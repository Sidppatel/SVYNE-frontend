import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { SEO } from '@/components/layout/SEO'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { HeroCanvas3D } from '@/components/ui/HeroCanvas3D'
import { ABOUT_LOCATION, ABOUT_STORY, ABOUT_TEAM, ABOUT_VALUES } from '@/content/about'
import { renderBold } from '@/lib/renderBold'
import { ROUTES } from '@/routes'

export function About() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <SEO title="About SVYNE" description="SVYNE designs operational systems for service businesses that need clearer workflows and scalable operations." />
      
      <section className="hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('about.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('about.hero.title')}</span>
                <span className="fade-up d2">{t('about.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('about.hero.deckStart')}<strong>{t('about.hero.location')}</strong>{t('about.hero.deckEnd')}
              </p>
            </div>
            
            <div className="hero-canvas-wrap fade-up d2">
              <HeroCanvas3D mode="about" />
            </div>

            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                {t('about.hero.cta.book')}
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.pricing)}>
                {t('about.hero.cta.pricing')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc">
        <div className="story-block">
          <div>
            <Eyebrow className="story-eyebrow">{t('about.story.eyebrow')}</Eyebrow>
            <h2 className="story-h">
              {t('about.story.title')}<em>{t('about.story.titleEm')}<span className="brand-period sway">.</span></em>
            </h2>
            <p className="story-accent">{t('about.story.accent')}</p>
          </div>
          <div className="story-body">
            {ABOUT_STORY.map((p, i) => (
              <p key={i}>{renderBold(p)}</p>
            ))}
          </div>
        </div>

        <div className="name-etymology">
          <div className="ne-label">◆ The name ◆</div>
          <div className="ne-formula">
            <em>{t('about.name.title')}</em> <span className="plus">+</span> <em>{t('about.name.plus')}</em> <span className="eq">=</span> SVYNE<span className="period">.</span>
          </div>
          <p className="ne-desc">
            {t('about.name.desc')}
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('about.values.eyebrow')}</Eyebrow>
              <Accent>{t('about.values.accent')}</Accent>
            </div>
            <h2>
              {t('about.values.title')}<em>{t('about.values.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('about.values.deck')}
            </p>
          </div>
          <div className="values-grid">
            {ABOUT_VALUES.map(v => (
              <div key={v.num} className="value-card">
                <div className="value-num">{v.num}</div>
                <h3 className="value-title">
                  <em>{v.title}</em>
                </h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('about.team.eyebrow')}</Eyebrow>
              <Accent>{t('about.team.accent')}</Accent>
            </div>
            <h2>
              {t('about.team.title')}<em>{t('about.team.titleEm')}</em>
            </h2>
            <p className="deck">
              {t('about.team.deck')}
            </p>
          </div>
          {ABOUT_TEAM.map(member => (
            <div key={member.initial} className="team-strip">
              <div className="team-portrait">{member.initial}</div>
              <div className="team-info">
                <h4>
                  {member.name} <em>- {member.role}</em>
                </h4>
                <div className="team-role">{member.meta}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section section-parchment-deep">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>{t('about.location.eyebrow')}</Eyebrow>
              <Accent>{t('about.location.accent')}</Accent>
            </div>
            <h2>
              {t('about.location.title')}<em>{t('about.location.titleEm')}</em>
            </h2>
          </div>
          <div className="services-strip">
            {ABOUT_LOCATION.map(t => (
              <div key={t.num} className="pillar">
                <div className="pillar-num">{t.num}</div>
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
            {t('about.cta.title')}<em>{t('about.cta.titleEm')}</em>
          </>
        }
        deck={t('about.cta.deck')}
      />
    </>
  )
}
