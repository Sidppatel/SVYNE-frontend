import { SEO } from '@/components/layout/SEO'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { ABOUT_LOCATION, ABOUT_STORY, ABOUT_TEAM, ABOUT_VALUES } from '@/content/about'
import { renderBold } from '@/lib/renderBold'

export function About() {
  return (
    <>
      <SEO title="About SVYNE" description="Learn about the living architecture philosophy behind SVYNE." />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 02 · About the studio ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Site vision<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">Given roots<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              SVYNE is a one-person studio in <strong>Saraland, Alabama</strong>. I build websites and custom web products that can take root, launch cleanly, and keep growing after release.
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
            <p className="story-accent">site vision - living architecture.</p>
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
            <em>SITE VISION</em> <span className="plus">+</span> <em>VINE</em> <span className="eq">=</span> SVYNE<span className="period">.</span>
          </div>
          <p className="ne-desc">
            A studio name for growth, connection, and the technical structure that lets a digital presence expand.
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Values · my principles</Eyebrow>
              <Accent>four rules</Accent>
            </div>
            <h2>
              Four <em>principles.</em>
            </h2>
            <p className="deck">
              Small enough to fit on the wall above the desk. Strong enough to say no to bad projects.
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
              <Eyebrow>The founder · who builds it</Eyebrow>
              <Accent>one person</Accent>
            </div>
            <h2>
              One <em>person.</em>
            </h2>
            <p className="deck">
              No account managers. No project coordinators. The person who quotes the work is the person who ships it.
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
            Work with <em>one person.</em>
          </>
        }
        deck="The same face from inquiry to launch to the third year of maintenance."
      />
    </>
  )
}
