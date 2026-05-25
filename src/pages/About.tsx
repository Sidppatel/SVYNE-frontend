import { SEO } from '@/components/layout/SEO'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { ABOUT_LOCATION, ABOUT_STORY, ABOUT_TEAM, ABOUT_VALUES } from '@/content/about'
import { renderBold } from '@/lib/renderBold'

export function About() {
  return (
    <>
      <SEO title="About SVYNE" description="SVYNE designs operational systems for service businesses that need clearer workflows and scalable operations." />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 02 · About SVYNE ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Service operations<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">made scalable<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              SVYNE is based in <strong>Mobile, Alabama</strong>. I help service businesses replace scattered manual work with operational systems built around the way their teams actually work.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc">
        <div className="story-block">
          <div>
            <Eyebrow className="story-eyebrow">◆ The story ◆</Eyebrow>
            <h2 className="story-h">
              Why SVYNE <em>exists<span className="brand-period sway">.</span></em>
            </h2>
            <p className="story-accent">workflow clarity · operating systems.</p>
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
            <em>SERVICE VISION</em> <span className="plus">+</span> <em>VINE</em> <span className="eq">=</span> SVYNE<span className="period">.</span>
          </div>
          <p className="ne-desc">
            A name for growth, connection, and the technical structure that lets a service operation expand.
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Values · operating principles</Eyebrow>
              <Accent>four rules</Accent>
            </div>
            <h2>
              Four <em>principles.</em>
            </h2>
            <p className="deck">
              Strong enough to keep the work focused on outcomes instead of feature sprawl.
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
              <Eyebrow>The founder · who maps and builds it</Eyebrow>
              <Accent>one person</Accent>
            </div>
            <h2>
              One <em>person.</em>
            </h2>
            <p className="deck">
              No account managers. No project coordinators. The person mapping the workflow is the person designing and shipping the system.
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
              <Eyebrow>Location · where & how</Eyebrow>
              <Accent>Saraland, Alabama</Accent>
            </div>
            <h2>
              Local. <em>Working everywhere.</em>
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
            Build around <em>your workflow.</em>
          </>
        }
        deck="One partner from operational audit to implementation, launch, training, and long-term optimization."
      />
    </>
  )
}
