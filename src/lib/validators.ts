import type { ContactForm } from '@/types'

const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export type ContactErrors = Partial<Record<keyof ContactForm, string>>

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  if (!form.name.trim()) errors.name = 'Required'
  if (!form.email.trim()) errors.email = 'Required'
  else if (!EMAIL_REGEX.test(form.email)) errors.email = 'Not a valid email'
  if (!form.projectType) errors.projectType = 'Pick one'
  if (!form.details.trim()) errors.details = 'Tell us a little'
  else if (form.details.trim().length < 20) errors.details = 'A few sentences please'
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
