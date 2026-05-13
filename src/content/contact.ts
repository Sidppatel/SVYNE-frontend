import type { ProcessStep } from '@/types'

export const PROJECT_TYPES = [
  'Marketing site',
  'Custom app',
  'Event platform',
  'Dashboard',
  'Maintenance only',
  'Something else',
] as const

export const BUDGETS = [
  '< $5K',
  '$5K - $10K',
  '$10K - $25K',
  '$25K +',
  'Not sure',
] as const

export const TIMELINES = [
  'ASAP',
  '< 1 month',
  '1-3 months',
  '3+ months',
  'Flexible',
] as const

export const REFERRAL_SOURCES = [
  'Google',
  'Referral',
  'Social',
  'Existing client',
  'Other',
] as const

export const CONTACT_NEXT_STEPS: ProcessStep[] = [
  {
    num: 'i.',
    title: 'You hit send',
    desc:
      'Auto-confirmation lands in your inbox immediately. A real reply from a real person within one business day.',
  },
  {
    num: 'ii.',
    title: 'A 30-minute call',
    desc:
      'I talk. I listen. I ask the questions that turn a request into a clear scope.',
  },
  {
    num: 'iii.',
    title: 'A written proposal',
    desc:
      'Within 48 hours of the call: real number, real timeline. Sign or come back.',
  },
]
