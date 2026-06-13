import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { HOME_TESTIMONIAL } from '@/content/home'

export function SuccessSection() {
  const { quote, highlight, attr, role } = HOME_TESTIMONIAL
  const [before, after] = quote.split(highlight)

  return (
    <section className="section section-cream">
      <div className="doc">
        <div className="section-header fade-up">
          <div className="label-row">
            <Eyebrow>Result · proof of impact</Eyebrow>
            <Accent>proven success</Accent>
          </div>
          <h2>
            Proof of <em>impact.</em>
          </h2>
        </div>

        <div className="integrated-testimonial fade-up d1">
          <div className="testimonial-mark">“</div>
          <p className="testimonial-quote">
            {before}
            <em className="kinetic-fill">{highlight}</em>
            {after}
          </p>
          <div className="testimonial-attr">
            <span className="testimonial-attr-name">{attr}</span>
            <span className="testimonial-attr-role">{role}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
