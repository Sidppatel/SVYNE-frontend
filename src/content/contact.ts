import type { ProcessStep } from '@/types'

export const PROJECT_TYPES = [
  'Operational audit',
  'System implementation',
  'Workflow automation',
  'Reporting dashboard',
  'Ongoing optimization',
  'Something else',
] as const

export const BUDGETS = [
  '< $2K',
  '$2K - $10K',
  '$10K - $25K',
  '$25K+',
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
    title: 'You describe the bottleneck',
    desc:
      'Share where work gets lost, delayed, duplicated, or hidden. A real reply comes within one business day.',
  },
  {
    num: 'ii.',
    title: 'A 30-minute workflow call',
    desc:
      'We talk through leads, scheduling, customers, jobs, invoices, reporting, and the tools already in place.',
  },
  {
    num: 'iii.',
    title: 'A system recommendation',
    desc:
      'You get the right next step: audit, implementation scope, or a smaller workflow fix.',
  },
]
