import { useState } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { SEO } from '@/components/layout/SEO'
import {
  BUDGETS,
  CONTACT_NEXT_STEPS,
  PROJECT_TYPES,
  REFERRAL_SOURCES,
  TIMELINES,
} from '@/content/contact'
import { STUDIO } from '@/content/studio'
import { EMPTY_CONTACT, validateContact, type ContactErrors } from '@/lib/validators'
import type { ContactForm } from '@/types'

const SUBMIT_DELAY_MS = 900

export function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY_CONTACT)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const setField = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    if (submitError) setSubmitError(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validateContact(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setSubmitting(true)
    setSubmitError(false)

    setTimeout(() => {
      // Simulate failure for a specific email for testing
      if (form.email.includes('error')) {
        setSubmitError(true)
        setSubmitting(false)
      } else {
        setSubmitted(true)
        setSubmitting(false)
      }
    }, SUBMIT_DELAY_MS)
  }

  const resetForm = () => {
    setSubmitted(false)
    setSubmitError(false)
    setForm(EMPTY_CONTACT)
    setErrors({})
  }

  return (
    <>
      <SEO title="Contact Us" description="Ready to start your project? Tell us about it and we'll reply within one business day." />
      <div className="doc">
        <div className="contact-grid">
          <div>
            <Eyebrow>◆ Chapter 07 · Let's begin ◆</Eyebrow>
            <h1 className="contact-h">
              Tell us<br />
              <em>about it.</em>
            </h1>
            <p className="contact-deck">
              The form below goes straight to <em>{STUDIO.email}</em>. We read every inquiry and reply within one business day.
            </p>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <div className="contact-meta-label">Email</div>
                <div className="contact-meta-value">
                  <em>{STUDIO.email}</em>
                </div>
              </div>
              <div className="contact-meta-item">
                <div className="contact-meta-label">Where we are</div>
                <div className="contact-meta-value">
                  Saraland · <em>Alabama</em>
                </div>
              </div>
              <div className="contact-meta-item">
                <div className="contact-meta-label">Reply window</div>
                <div className="contact-meta-value">
                  One <em>business day</em>
                </div>
              </div>
              <div className="contact-meta-item">
                <div className="contact-meta-label">Schedule</div>
                <div className="contact-meta-value">
                  <button className="link-draw">{STUDIO.schedulingUrl} →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-thanks">
                <div className="form-thanks-mark">
                  <em>✓</em>
                </div>
                <h3>
                  Received. <em>Thank you.</em>
                </h3>
                <p>
                  Reading every word. We'll be back within one business day — usually sooner.
                </p>
                <button className="btn btn-secondary" onClick={resetForm}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name" className="field-label">
                      Name <span className="req">·</span> required
                    </label>
                    <input
                      id="name"
                      className="field-input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setField('name', e.target.value)}
                    />
                    {errors.name && <div className="field-error">{errors.name}</div>}
                  </div>
                  <div className="field">
                    <label htmlFor="email" className="field-label">
                      Email <span className="req">·</span> required
                    </label>
                    <input
                      id="email"
                      className="field-input"
                      type="email"
                      placeholder="you@business.com"
                      value={form.email}
                      onChange={e => setField('email', e.target.value)}
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="business" className="field-label">
                    Business or project name
                  </label>
                  <input
                    id="business"
                    className="field-input"
                    type="text"
                    placeholder="If you have one — optional"
                    value={form.business}
                    onChange={e => setField('business', e.target.value)}
                  />
                </div>

                <div className="field">
                  <span className="field-label">What kind of project</span>
                  <div className="field-pills">
                    {PROJECT_TYPES.map(p => (
                      <button
                        key={p}
                        type="button"
                        className={`field-pill ${form.projectType === p ? 'selected' : ''}`}
                        onClick={() => setField('projectType', p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  {errors.projectType && <div className="field-error">{errors.projectType}</div>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="budget" className="field-label">Budget range</label>
                    <select
                      id="budget"
                      className="field-select"
                      value={form.budget}
                      onChange={e => setField('budget', e.target.value)}
                    >
                      <option value="">Pick one — optional</option>
                      {BUDGETS.map(b => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="timeline" className="field-label">Timeline</label>
                    <select
                      id="timeline"
                      className="field-select"
                      value={form.timeline}
                      onChange={e => setField('timeline', e.target.value)}
                    >
                      <option value="">Pick one — optional</option>
                      {TIMELINES.map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="details" className="field-label">
                    Tell us about the project <span className="req">·</span> required
                  </label>
                  <textarea
                    id="details"
                    className="field-textarea"
                    rows={4}
                    placeholder="A paragraph is plenty. What you're trying to build, who it's for, and one thing that would make it a success."
                    value={form.details}
                    onChange={e => setField('details', e.target.value)}
                  />
                  {errors.details && <div className="field-error">{errors.details}</div>}
                  <div className="field-char-count">{form.details.length} chars</div>
                </div>

                <div className="field">
                  <span className="field-label">How did you hear about us</span>
                  <div className="field-pills">
                    {REFERRAL_SOURCES.map(r => (
                      <button
                        key={r}
                        type="button"
                        className={`field-pill ${form.referral === r ? 'selected' : ''}`}
                        onClick={() => setField('referral', r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting ? (
                    'Sending…'
                  ) : (
                    <>
                      Send to {STUDIO.email}
                      <span className="arr">→</span>
                    </>
                  )}
                </button>

                {submitError && (
                  <div className="form-error-block fade-up">
                    <p>
                      <strong>Something went wrong.</strong>
                      <br />
                      We couldn't send your message. Please try again or email us directly at <em>{STUDIO.email}</em>.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="doc">
        <div className="section-header">
          <div className="label-row">
            <Eyebrow>The journey · what happens next</Eyebrow>
            <Accent>three steps</Accent>
          </div>
          <h2>
            Three <em>steps</em> from here.
          </h2>
        </div>
        <div className="next-steps">
          {CONTACT_NEXT_STEPS.map(s => (
            <div key={s.num} className="ns-step">
              <div className="ns-num">{s.num}</div>
              <h3 className="ns-title">
                <em>{s.title}</em>
              </h3>
              <p className="ns-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
