import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { WorkTileSvg } from '@/components/ui/WorkTileSvg'
import { CtaBand } from '@/components/layout/CtaBand'
import { SEO } from '@/components/layout/SEO'
import { HOME_PILLARS, HOME_PILLAR_TAG, HOME_PROCESS, HOME_TESTIMONIAL } from '@/content/home'
import { CASE_STUDIES } from '@/content/work'
import { ROUTES } from '@/routes'

export function Home() {
  const navigate = useNavigate()
  const featured = CASE_STUDIES[0]

  return (
    <>
      <SEO />
      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ One source. Online. ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">One source<span className="svono-period sway">.</span></span>
              <br />
              <em className="fade-up d2">Everything online<span className="svono-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              Svono <strong>builds, launches, and maintains</strong> websites, custom apps, and event platforms for small businesses across the Gulf Coast. <em>One source for everything.</em>
            </p>
            <div className="hero-ctas fade-up d4">
              <Button variant="primary" withArrow onClick={() => navigate(ROUTES.contact)}>
                Start a project
              </Button>
              <Button variant="secondary" onClick={() => navigate(ROUTES.work)}>
                See the work
              </Button>
            </div>
          </div>
          <div className="scroll-indicator fade-up d5">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Chapter I · Services</Eyebrow>
              <Accent>three pillars</Accent>
            </div>
            <h2>
              Three things. <em>Done well.</em>
            </h2>
            <p className="deck">
              The full lifecycle of a website or web product. Build, launch, maintain — no handoffs between four people.
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
                <div className="pillar-accent">{HOME_PILLAR_TAG[p.name]}</div>
                <p>{p.desc}</p>
                <div className="pillar-more">
                  Read more <span className="arr">→</span>
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
              <Eyebrow>Chapter II · The work</Eyebrow>
              <Accent>what I've built</Accent>
            </div>
            <h2>
              What I've <em>shipped.</em>
            </h2>
            <p className="deck">A small set, growing slowly. Better two real than ten placeholders.</p>
          </div>

          <div className="work-grid">
            <Link
              to={ROUTES.workDetail(featured.id)}
              className="work-tile"
            >
              <div className="work-img">
                <WorkTileSvg grad={featured.grad} title={featured.title} year={featured.year} idx={featured.id} />
              </div>
              <div className="work-info">
                <div className="work-tag">{featured.tag}</div>
                <div className="work-title">
                  {featured.title} — <em>{featured.titleEm}</em>
                </div>
                <div className="work-outcome">{featured.outcome}</div>
                <p className="work-desc">{featured.desc}</p>
              </div>
            </Link>

            <div className="work-tile placeholder">
              <div className="work-outcome">NEXT · IN PROGRESS</div>
              <div className="work-title">
                <em>Your project here.</em>
              </div>
              <p className="placeholder-note">One slot remains this quarter.</p>
              <Button variant="primary" withArrow to={ROUTES.contact}>
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Chapter III · The process</Eyebrow>
              <Accent>how I work</Accent>
            </div>
            <h2>
              Three steps. <em>No surprises.</em>
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
                  Learn more <span className="arr">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="doc-narrow">
          <div className="testimonial">
            <div className="testimonial-mark">"</div>
            <p className="testimonial-quote">
              {HOME_TESTIMONIAL.quote.split(HOME_TESTIMONIAL.highlight)[0]}
              <em>{HOME_TESTIMONIAL.highlight}</em>
              {HOME_TESTIMONIAL.quote.split(HOME_TESTIMONIAL.highlight)[1]}
            </p>
            <div className="testimonial-attr">
              <span className="testimonial-attr-name">{HOME_TESTIMONIAL.attr}</span>
              <span className="testimonial-attr-role">{HOME_TESTIMONIAL.role}</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Everything online. <em>One source.</em>
          </>
        }
        deck="Tell Svono what you're trying to build. I reply within one business day."
      />
    </>
  )
}
