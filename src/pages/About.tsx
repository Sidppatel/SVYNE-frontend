import { SEO } from '@/components/layout/SEO'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { CtaBand } from '@/components/layout/CtaBand'
import { ABOUT_LOCATION, ABOUT_STORY, ABOUT_TEAM, ABOUT_VALUES } from '@/content/about'
import { renderBold } from '@/lib/renderBold'

export function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about the philosophy and people behind Svono. Built in Saraland, Alabama." />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 02 · About the studio ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">A small studio.</span>
              <br />
              <em className="fade-up d2">One source.</em>
            </h1>
            <p className="hero-deck fade-up d3">
              Svono is a two-person studio in <strong>Saraland, Alabama</strong>. We build websites and custom web products for small businesses across the Gulf Coast — and we don't disappear after launch.
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
              Why we <em>exist.</em>
            </h2>
            <p className="story-accent">one source — everything online.</p>
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
            <em>SOUND</em> <span className="plus">+</span> <em>DREAM</em> <span className="eq">=</span> SVONO<span className="period">.</span>
          </div>
          <p className="ne-desc">
            A studio name that sounds like both — and a wordmark that signs itself with an italic period.
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Values · our principles</Eyebrow>
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
              <Eyebrow>The team · who builds it</Eyebrow>
              <Accent>two people</Accent>
            </div>
            <h2>
              Two <em>people.</em>
            </h2>
            <p className="deck">
              No account managers. No project coordinators. The people who quote the work are the people who ship it.
            </p>
          </div>
          {ABOUT_TEAM.map(member => (
            <div key={member.initial} className="team-strip">
              <div className="team-portrait">{member.initial}</div>
              <div className="team-info">
                <h4>
                  {member.name} <em>— {member.role}</em>
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
            Work with <em>two people.</em>
          </>
        }
        deck="Same two faces from inquiry to launch to the third year of maintenance."
      />
    </>
  )
}
