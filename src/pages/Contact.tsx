import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accent } from '@/components/ui/Accent'
import { Metadata } from '@/components/layout/Metadata'
import { ROUTES } from '@/routes'
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
  const { t } = useTranslation()
  const [form, setForm] = useState<ContactForm>(EMPTY_CONTACT)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const setField = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm(prev => {
      const next = { ...prev }
      Reflect.set(next, key, value)
      return next
    })
    setErrors(prev => {
      const next = { ...prev }
      Reflect.deleteProperty(next, key)
      return next
    })
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
      <Metadata title="Contact SVYNE" description="Book a system audit or tell SVYNE where your service workflow is breaking down." />
      
      <section className="hero contact-hero">
        <div className="doc">
          <div className="hero-inner-grid">
            <div className="hero-inner">
              <Eyebrow className="fade-up">{t('contact.hero.eyebrow')}</Eyebrow>
              <h1 className="h-display">
                <span className="fade-up d1">{t('contact.hero.title')}</span>
                <span className="fade-up d2">{t('contact.hero.titleEm')}<span className="brand-period">.</span></span>
              </h1>
              <p className="hero-deck fade-up d3">
                {t('contact.hero.deck')}<em>{STUDIO.email}</em>{t('contact.hero.deckEnd')}
              </p>

              <div className="contact-builder-prompt fade-up d4">
                {t('contact.builder.prompt')}<Link to={ROUTES.describe} className="link-draw">{t('contact.builder.link')}</Link>.
              </div>

              <div className="contact-meta fade-up d4">
                <div className="contact-meta-item">
                  <div className="contact-meta-label">{t('contact.meta.email')}</div>
                  <div className="contact-meta-value">
                    <em>{STUDIO.email}</em>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-label">Phone & Text</div>
                  <div className="contact-meta-value">
                    <a href="tel:+12512282342" className="link-draw">(251) 228-2342</a>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-label">{t('contact.meta.location')}</div>
                  <div className="contact-meta-value">
                    {t('contact.meta.mobile')}<em>{t('contact.meta.state')}</em>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-label">{t('contact.meta.reply')}</div>
                  <div className="contact-meta-value">
                    {t('contact.meta.one')}<em>{t('contact.meta.businessDay')}</em>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-label">{t('contact.meta.schedule')}</div>
                  <div className="contact-meta-value">
                    <a
                      href={`https://${STUDIO.schedulingUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw"
                    >
                      {t('contact.meta.bookCall')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-canvas-wrap fade-up d2 hero-form-wrap">
              <div className="contact-form">
                {submitted ? (
                  <div className="form-thanks">
                    <div className="form-thanks-mark">
                      <em>✓</em>
                    </div>
                    <h3>
                      {t('contact.form.received')}<em>{t('contact.form.thankYou')}</em>
                    </h3>
                    <p>
                      {t('contact.form.reading')}
                    </p>
                    <Button variant="secondary" onClick={resetForm}>
                      {t('contact.form.sendAnother')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="name" className="field-label">
                          {t('contact.form.nameLabel')}<span className="req">·</span> required
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
                          {t('contact.form.emailLabel')}<span className="req">·</span> required
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
                        {t('contact.form.businessLabel')}
                      </label>
                      <input
                        id="business"
                        className="field-input"
                        type="text"
                        placeholder="If you have one - optional"
                        value={form.business}
                        onChange={e => setField('business', e.target.value)}
                      />
                    </div>

                    <div className="field">
                      <span className="field-label">{t('contact.form.projectLabel')}</span>
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
                        <label htmlFor="budget" className="field-label">{t('contact.form.budgetLabel')}</label>
                        <select
                          id="budget"
                          className="field-select"
                          value={form.budget}
                          onChange={e => setField('budget', e.target.value)}
                        >
                          <option value="">{t('contact.form.optional')}</option>
                          {BUDGETS.map(b => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="timeline" className="field-label">{t('contact.form.timelineLabel')}</label>
                        <select
                          id="timeline"
                          className="field-select"
                          value={form.timeline}
                          onChange={e => setField('timeline', e.target.value)}
                        >
                          <option value="">{t('contact.form.optional')}</option>
                          {TIMELINES.map(t => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="details" className="field-label">
                        {t('contact.form.detailsLabel')}<span className="req">·</span> required
                      </label>
                      <textarea
                        id="details"
                        className="field-textarea"
                        rows={4}
                        placeholder="A paragraph is plenty. What is manual, duplicated, delayed, hidden, or hard to scale right now?"
                        value={form.details}
                        onChange={e => setField('details', e.target.value)}
                      />
                      {errors.details && <div className="field-error">{errors.details}</div>}
                      <div className="field-char-count">{form.details.length} chars</div>
                    </div>

                    <div className="field">
                      <span className="field-label">{t('contact.form.referralLabel')}</span>
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
                          <strong>{t('contact.form.errorTitle')}</strong>
                          <br />
                          I couldn't send your message. Please try again or email me directly at <em>{STUDIO.email}</em>.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <div className="doc">
        <div className="section-header">
          <div className="label-row">
            <Eyebrow>{t('contact.steps.eyebrow')}</Eyebrow>
            <Accent>{t('contact.steps.accent')}</Accent>
          </div>
          <h2>
            {t('contact.steps.title')}<em>{t('contact.steps.titleEm')}</em>{t('contact.steps.titleEnd')}
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
