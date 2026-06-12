import type { AddOn, Bundle, MaintainTier, Pillar, PricingTier } from '@/types'

export const PRICING_TIERS: PricingTier[] = [
  {
    key: 'event',
    accent: 'transaction model',
    name: 'Event Ticketing System',
    price: '$0 setup',
    tag: 'Small platform fee per ticket sold',
    items: [
      'Visual table booking & seating chart',
      'Direct website ticketing widget embed',
      'Passwordless attendee magic links',
      'Smartphone-native QR scanning app',
      'Self-service instant refunds',
      'You own 100% of customer attendee list',
    ],
    timeline: '1-2 weeks',
    best: 'Event venues, performers, and festivals who only want to pay when they sell tickets',
  },
  {
    key: 'hub',
    accent: 'retainer model',
    name: 'Operational Hub',
    price: '$1,500 - $3,000 setup',
    tag: 'Plus $99 - $299 / month',
    items: [
      'CRM, scheduling, dispatch, & invoicing modules',
      'Automatic spreadsheet & database migration',
      'Two-way SMS, email, & review automation',
      'Custom Kanban boards & crew dispatch view',
      'Live mobile technician work orders',
      'Continuous local support & workflow sprints',
    ],
    timeline: '4-8 weeks',
    best: 'Contractors, auto shops, spas, and service teams running daily operations',
    featured: true,
  },
  {
    key: 'quick',
    accent: 'one-time fix',
    name: 'Quick Workflow Fixes',
    price: '$750 - $1,500 setup',
    tag: 'Plus $29 - $49 / month hosting',
    items: [
      'Clean up a single broken bottleneck',
      'Configure automated lead capture forms',
      'Setup SMS alert confirmations',
      'Build single-purpose owner KPI dashboard',
      'Basic database sync (e.g. CRM to Sheets)',
      'Secure hosting and backups included',
    ],
    timeline: '1 week',
    best: 'Small businesses needing a quick win without fully changing their software stack',
  },
]

export const MAINTAIN_TIERS: MaintainTier[] = [
  {
    tier: 'Essential',
    price: '$250',
    features:
      'Hosting · backups · security updates · basic support · monthly health check',
    best: 'Small teams with stable workflows',
  },
  {
    tier: 'Growth',
    price: '$750',
    features:
      'Everything in Essential + monthly workflow sprint + reporting review + priority fixes',
    best: 'Active service teams improving operations',
  },
  {
    tier: 'Premium',
    price: '$1500',
    features:
      'Everything in Growth + deeper automation work + integrations + quarterly system planning',
    best: 'Growing companies with multiple workflows',
  },
]

export const BUNDLES: Bundle[] = [
  {
    key: 'essential6',
    name: 'Audit + Implementation',
    desc: 'Apply the audit fee to implementation when the system build is approved.',
    discount: '-10%',
  },
  {
    key: 'active12',
    name: 'Implementation + 12 months Growth',
    desc: 'Launch with a full year of operational improvement already planned.',
    discount: '-15%',
  },
  {
    key: 'full12',
    name: 'Multi-location Scale Plan',
    desc: 'For teams rolling the system across locations, crews, or departments.',
    discount: '-20%',
  },
  {
    key: 'referral',
    name: 'Referral credit',
    desc: 'Refer another service business. Both accounts receive one support credit.',
    discount: '1 mo',
  },
]

export const ADDONS: AddOn[] = [
  { name: 'Heavy data migration', accent: 'multiple spreadsheets or legacy exports', price: '$750+' },
  { name: 'Customer portal', accent: 'self-serve status, payments, and files', price: 'Custom' },
  { name: 'Advanced reporting', accent: 'custom KPIs and owner dashboards', price: '$1,000+' },
  { name: 'Extra workflows', accent: 'beyond initial operating scope', price: '$500+' },
  { name: 'Third-party integration', accent: 'accounting, calendars, inventory, SMS', price: 'Custom' },
  { name: 'Mobile field view', accent: 'technician or crew workflow', price: 'Custom' },
  { name: 'Rush fee', accent: 'under 2-week deadline', price: '+25%' },
]

export const PAYMENT_TERMS: Pillar[] = [
  {
    num: '01',
    name: 'Milestone deposit',
    desc:
      'Implementation work starts after the signed scope and first milestone invoice.',
  },
  {
    num: '02',
    name: 'Data ownership',
    desc: 'Your business keeps ownership of its records, exports, customer data, and operational content.',
  },
  {
    num: '03',
    name: 'Ongoing care',
    desc:
      'Support plans have a 30-day notice and can change as the system matures.',
  },
]
