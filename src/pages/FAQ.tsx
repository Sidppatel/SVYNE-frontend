import { SEO } from '@/components/layout/SEO'
import { CtaBand } from '@/components/layout/CtaBand'
import { Accent } from '@/components/ui/Accent'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FAQ_ITEMS, FAQ_WHY_SVYNE } from '@/content/faq'

export function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Questions and answers about SVYNE, operational systems, workflow audits, implementation, pricing, and ongoing support."
      />

      <section className="hero">
        <div className="doc">
          <div className="hero-inner">
            <Eyebrow className="fade-up">◆ Chapter 06 · FAQ ◆</Eyebrow>
            <h1>
              <span className="fade-up d1">Questions answered<span className="brand-period sway">.</span></span>
              <br />
              <em className="fade-up d2">Before the call<span className="brand-period sway">.</span></em>
            </h1>
            <p className="hero-deck fade-up d3">
              What SVYNE is, who it helps, how the process works, and why operational systems are different from buying another tool.
            </p>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="section">
        <div className="doc">
          <div className="section-header">
            <div className="label-row">
              <Eyebrow>Why SVYNE</Eyebrow>
              <Accent>operational transformation</Accent>
            </div>
            <h2>
              Less tool switching. <em>More operating clarity.</em>
            </h2>
            <p className="deck">
              SVYNE exists for businesses where growth is being slowed by scattered work. The system is built around the workflow so the team can move faster without adding more administrative drag.
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
              <Eyebrow>Questions · answers</Eyebrow>
              <Accent>before you reach out</Accent>
            </div>
            <h2>
              Most things buyers <em>ask first.</em>
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
            Still wondering where to start? <em>Bring the messy workflow.</em>
          </>
        }
        deck="SVYNE will help identify whether you need an audit, an implementation, or a smaller workflow fix."
      />
    </>
  )
}
