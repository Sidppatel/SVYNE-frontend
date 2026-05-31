import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Metadata } from '@/components/layout/Metadata'
import { STUDIO } from '@/content/studio'
import { ROUTES } from '@/routes'


interface IndustryOption {
  id: string
  name: string
  meta: string
  desc: string
}

interface MultiOption {
  id: string
  name: string
  meta: string
  desc: string
}

interface ModuleDetail {
  id: string
  nameKey: string
  descKey: string
}

interface LeadForm {
  name: string
  email: string
  business: string
}

interface LeadErrors {
  name?: string
  email?: string
}

const INDUSTRIES: IndustryOption[] = [
  { id: 'gc', name: 'General Contracting & Construction', meta: '01 · gc', desc: 'Custom homes, commercial builds, and crew management.' },
  { id: 'repair', name: 'Repair & Service Shops', meta: '02 · repair', desc: 'Repair tickets, parts inventory tracking, and shop work orders.' },
  { id: 'field', name: 'Field Services & Dispatch', meta: '03 · field', desc: 'Plumbing, electrical, HVAC, and on-site dispatch routing.' },
  { id: 'agency', name: 'Professional & Creative Agencies', meta: '04 · agency', desc: 'Software development, design, and multi-team client projects.' },
  { id: 'other', name: 'Other Service Business', meta: '05 · other', desc: 'Custom workflows and industry-specific business operations.' }
]

const TOOLS: MultiOption[] = [
  { id: 'sheets', name: 'Spreadsheets (Excel/Google Sheets)', meta: '01 · tools', desc: 'Manual formula errors, slow updates, and constant double entry.' },
  { id: 'paper', name: 'Paper & Sticky Notes', meta: '02 · tools', desc: 'Clipboards, whiteboard scheduling boards, and misplaced records.' },
  { id: 'whatsapp', name: 'WhatsApp & SMS Group Chats', meta: '03 · tools', desc: 'Informal communications, lost threads, and noisy follow-ups.' },
  { id: 'disconnected', name: 'Multiple Disconnected Software', meta: '04 · tools', desc: 'Jumping between tabs and manually copying customer records.' },
  { id: 'calls', name: 'Phone Calls & Memory', desc: 'Relying on dispatcher memory and endless employee check-ins.', meta: '05 · tools' }
]

const BOTTLENECKS: MultiOption[] = [
  { id: 'lost-leads', name: 'Lost or Delayed Leads', meta: '01 · bottleneck', desc: 'Prospects cooling off while waiting hours for quotes and estimates.' },
  { id: 'scheduling', name: 'Scheduling Conflicts & Dispatch Drag', meta: '02 · bottleneck', desc: 'Double bookings, crew disputes, and dispatcher routing friction.' },
  { id: 'invoices', name: 'Delayed Invoices & Payments', meta: '03 · bottleneck', desc: 'Back-office hours spent chasing field sign-offs and payments.' },
  { id: 'field-exec', name: 'No Live Field Updates / Paper Tickets', meta: '04 · bottleneck', desc: 'Not knowing job status or field issues until the crew returns.' },
  { id: 'blind-spots', name: 'Owner-Dependency & Blind Spots', meta: '05 · bottleneck', desc: 'The business stalls unless the owner is answering every question.' }
]

const MODULES: ModuleDetail[] = [
  { id: 'crm', nameKey: 'describe.modules.crm.name', descKey: 'describe.modules.crm.desc' },
  { id: 'communication', nameKey: 'describe.modules.communication.name', descKey: 'describe.modules.communication.desc' },
  { id: 'scheduling', nameKey: 'describe.modules.scheduling.name', descKey: 'describe.modules.scheduling.desc' },
  { id: 'operations', nameKey: 'describe.modules.operations.name', descKey: 'describe.modules.operations.desc' },
  { id: 'inventory', nameKey: 'describe.modules.inventory.name', descKey: 'describe.modules.inventory.desc' },
  { id: 'financials', nameKey: 'describe.modules.financials.name', descKey: 'describe.modules.financials.desc' },
  { id: 'reporting', nameKey: 'describe.modules.reporting.name', descKey: 'describe.modules.reporting.desc' }
]

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export function Describe() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [industry, setIndustry] = useState('')
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [selectedBottlenecks, setSelectedBottlenecks] = useState<string[]>([])

  const [form, setForm] = useState<LeadForm>({ name: '', email: '', business: '' })
  const [errors, setErrors] = useState<LeadErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleToolToggle = (id: string) => {
    setSelectedTools(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleBottleneckToggle = (id: string) => {
    setSelectedBottlenecks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    )
  }

  const isModuleActive = (id: string): boolean => {
    switch (id) {
      case 'crm':
        return true
      case 'scheduling':
        return (
          industry === 'gc' ||
          industry === 'repair' ||
          industry === 'field' ||
          selectedBottlenecks.includes('scheduling') ||
          selectedBottlenecks.includes('field-exec')
        )
      case 'operations':
        return (
          industry === 'gc' ||
          industry === 'repair' ||
          industry === 'field' ||
          selectedBottlenecks.includes('field-exec')
        )
      case 'financials':
        return selectedBottlenecks.includes('invoices') || selectedTools.includes('sheets')
      case 'inventory':
        return industry === 'repair' || industry === 'gc'
      case 'communication':
        return (
          selectedTools.includes('whatsapp') ||
          selectedBottlenecks.includes('lost-leads') ||
          selectedBottlenecks.includes('scheduling')
        )
      case 'reporting':
        return selectedBottlenecks.includes('blind-spots') || selectedTools.includes('sheets')
      default:
        return false
    }
  }

  const handleNext = () => {
    if (step === 0 && !industry) return
    setStep(prev => prev + 1)
  }

  const handleBack = () => {
    setStep(prev => Math.max(0, prev - 1))
  }

  const handleFormChange = (field: keyof LeadForm, value: string) => {
    setForm(prev => {
      const next = { ...prev }
      if (field === 'name') next.name = value
      else if (field === 'email') next.email = value
      else if (field === 'business') next.business = value
      return next
    })
    setErrors(prev => {
      const copy = { ...prev }
      if (field === 'name') {
        delete copy.name
      } else if (field === 'email') {
        delete copy.email
      }
      return copy
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: LeadErrors = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!EMAIL_REGEX.test(form.email.trim())) errs.email = 'Valid email is required'

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const progressPercentage = ((step + 1) / 4) * 100

  const activeModules = new Map<string, boolean>([
    ['crm', isModuleActive('crm')],
    ['communication', isModuleActive('communication')],
    ['scheduling', isModuleActive('scheduling')],
    ['operations', isModuleActive('operations')],
    ['inventory', isModuleActive('inventory')],
    ['financials', isModuleActive('financials')],
    ['reporting', isModuleActive('reporting')]
  ])

  return (
    <>
      <Metadata title="System Builder" description="Map your custom SVYNE operational system." />

      <section className="hero describe-hero">
        <div className="doc">
          {step === 3 ? (
            <>
              <div className="hero-inner blueprint-header">
                <Eyebrow className="fade-up">04 · Blueprint</Eyebrow>
                <h1 className="h-display">
                  <span className="fade-up d1">
                    {t('describe.steps.recommendation.title')}
                    <em>{t('describe.steps.recommendation.titleEm')}</em>
                  </span>
                </h1>
                <p className="hero-deck fade-up d2">
                  {t('describe.steps.recommendation.deck')}
                </p>
              </div>

              <div className="hero-inner-grid step-blueprint">
                <div className="hero-inner">
                  <div className="recommended-modules-list fade-up d3">
                    {MODULES.map(m => {
                      const active = activeModules.get(m.id) ?? false
                      return (
                        <div
                          key={m.id}
                          className={`module-detail-card ${active ? 'active' : 'inactive'}`}
                        >
                          <div className="module-detail-header">
                            <span className="module-detail-name">{t(m.nameKey)}</span>
                            <span className="module-detail-status">
                              {active ? 'Recommended' : 'Optional'}
                            </span>
                          </div>
                          <p className="module-detail-desc">{t(m.descKey)}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="hero-canvas-wrap fade-up d3 hero-form-wrap describe-builder-wrap">
                  <div className="contact-form describe-form-card">
                    {submitted ? (
                      <div className="form-thanks">
                        <div className="form-thanks-mark">
                          <em>✓</em>
                        </div>
                        <h3>
                          {t('contact.form.received')}<em>{t('contact.form.thankYou')}</em>
                        </h3>
                        <p>{t('contact.form.reading')}</p>
                        <a
                          href={`https://${STUDIO.schedulingUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="form-submit"
                        >
                          {t('describe.blueprint.book')} <span className="arr">→</span>
                        </a>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate>
                        <h3 className="describe-form-heading">
                          {t('describe.steps.submission.title')}
                        </h3>
                        <p className="describe-form-desc">{t('describe.steps.submission.desc')}</p>
                        
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
                              onChange={e => handleFormChange('name', e.target.value)}
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
                              onChange={e => handleFormChange('email', e.target.value)}
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
                            onChange={e => handleFormChange('business', e.target.value)}
                          />
                        </div>

                        <button
                          type="submit"
                          className="form-submit"
                          disabled={submitting}
                        >
                          {submitting ? 'Submitting…' : 'Submit layout & book audit'}
                        </button>

                        <div className="describe-back-wrap">
                          <button
                            type="button"
                            className="describe-back-link"
                            onClick={() => setStep(2)}
                          >
                            ← Adjust system choices
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="hero-inner-grid">
              <div className="hero-inner">
                <Eyebrow className="fade-up">{t('describe.hero.eyebrow')}</Eyebrow>
                <h1 className="h-display">
                  <span className="fade-up d1">{t('describe.hero.title')}</span>
                  <span className="fade-up d2">
                    {t('describe.hero.titleEm')}
                    <span className="brand-period">.</span>
                  </span>
                </h1>
                <p className="hero-deck fade-up d3">{t('describe.hero.deck')}</p>

                <div className="describe-meta fade-up d4">
                  <div className={`describe-meta-item ${step === 0 ? 'active' : 'completed'}`}>
                    <div className="describe-meta-label">{t('describe.meta.step1.label')}</div>
                    <div className="describe-meta-value">{t('describe.meta.step1.desc')}</div>
                  </div>
                  <div className={`describe-meta-item ${step === 1 ? 'active' : step > 1 ? 'completed' : 'pending'}`}>
                    <div className="describe-meta-label">{t('describe.meta.step2.label')}</div>
                    <div className="describe-meta-value">{t('describe.meta.step2.desc')}</div>
                  </div>
                  <div className={`describe-meta-item ${step === 2 ? 'active' : step > 2 ? 'completed' : 'pending'}`}>
                    <div className="describe-meta-label">{t('describe.meta.step3.label')}</div>
                    <div className="describe-meta-value">{t('describe.meta.step3.desc')}</div>
                  </div>
                  <div className={`describe-meta-item ${step === 3 ? 'active' : 'pending'}`}>
                    <div className="describe-meta-label">{t('describe.meta.step4.label')}</div>
                    <div className="describe-meta-value">{t('describe.meta.step4.desc')}</div>
                  </div>
                </div>
              </div>

              <div className="hero-canvas-wrap fade-up d2 hero-form-wrap describe-builder-wrap">
                <div className="describe-wizard-container">
                  <div className="describe-progress-container">
                    <div className="describe-progress-labels">
                      <span>{t('describe.wizard.step', { current: step + 1, total: 3 })}</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="describe-progress-bar">
                      <div
                        className="describe-progress-fill"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  {step === 0 && (
                    <div className="describe-step-content">
                      <h2 className="describe-step-title">{t('describe.steps.industry.title')}</h2>
                      <p className="describe-step-desc">{t('describe.steps.industry.desc')}</p>
                      <div className="describe-options-grid">
                        {INDUSTRIES.map(opt => (
                          <button
                            key={opt.id}
                            className={`describe-option-card ${industry === opt.id ? 'selected' : ''}`}
                            onClick={() => setIndustry(opt.id)}
                          >
                            <span className="describe-card-meta">{opt.meta}</span>
                            <div className="describe-card-name">{opt.name}</div>
                            <div className="describe-card-desc">{opt.desc}</div>
                            {industry === opt.id && (
                              <span className="describe-option-checkmark">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                      <div className="describe-nav-buttons">
                        <Button variant="secondary" onClick={() => navigate(ROUTES.home)}>
                          {t('describe.wizard.cancel')}
                        </Button>
                        <Button variant="primary" withArrow onClick={handleNext} disabled={!industry}>
                          {t('describe.wizard.next')}
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="describe-step-content">
                      <h2 className="describe-step-title">{t('describe.steps.tools.title')}</h2>
                      <p className="describe-step-desc">{t('describe.steps.tools.desc')}</p>
                      <div className="describe-options-grid">
                        {TOOLS.map(opt => {
                          const isSelected = selectedTools.includes(opt.id)
                          return (
                            <button
                              key={opt.id}
                              className={`describe-option-card ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleToolToggle(opt.id)}
                            >
                              <span className="describe-card-meta">{opt.meta}</span>
                              <div className="describe-card-name">{opt.name}</div>
                              <div className="describe-card-desc">{opt.desc}</div>
                              {isSelected && <span className="describe-option-checkmark">✓</span>}
                            </button>
                          )
                        })}
                      </div>
                      <div className="describe-nav-buttons">
                        <Button variant="secondary" onClick={handleBack}>
                          {t('describe.wizard.back')}
                        </Button>
                        <Button variant="primary" withArrow onClick={handleNext}>
                          {t('describe.wizard.next')}
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="describe-step-content">
                      <h2 className="describe-step-title">{t('describe.steps.bottlenecks.title')}</h2>
                      <p className="describe-step-desc">{t('describe.steps.bottlenecks.desc')}</p>
                      <div className="describe-options-grid">
                        {BOTTLENECKS.map(opt => {
                          const isSelected = selectedBottlenecks.includes(opt.id)
                          return (
                            <button
                              key={opt.id}
                              className={`describe-option-card ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleBottleneckToggle(opt.id)}
                            >
                              <span className="describe-card-meta">{opt.meta}</span>
                              <div className="describe-card-name">{opt.name}</div>
                              <div className="describe-card-desc">{opt.desc}</div>
                              {isSelected && <span className="describe-option-checkmark">✓</span>}
                            </button>
                          )
                        })}
                      </div>
                      <div className="describe-nav-buttons">
                        <Button variant="secondary" onClick={handleBack}>
                          {t('describe.wizard.back')}
                        </Button>
                        <Button variant="primary" withArrow onClick={handleNext}>
                          {t('describe.wizard.buildView')}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
