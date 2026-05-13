import type { ContactForm } from '@/types'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export type ContactErrors = Partial<Record<keyof ContactForm, string>>

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  if (!form.name.trim()) errors.name = 'Please provide your name'
  if (!form.email.trim()) errors.email = 'Email address is required'
  else if (!EMAIL_REGEX.test(form.email)) errors.email = 'Please provide a valid email address'
  if (!form.projectType) errors.projectType = 'Please select a project type'
  if (!form.details.trim()) errors.details = 'Please tell us about your project'
  else if (form.details.trim().length < 20) errors.details = 'Please provide a few more details (min 20 chars)'
  return errors
}

export const EMPTY_CONTACT: ContactForm = {
  name: '',
  email: '',
  business: '',
  projectType: '',
  budget: '',
  timeline: '',
  details: '',
  referral: '',
}
