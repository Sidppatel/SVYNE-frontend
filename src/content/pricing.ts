import type { AddOn, Bundle, MaintainTier, Pillar, PricingTier } from '@/types'

export const PRICING_TIERS: PricingTier[] = [
  {
    key: 'audit',
    accent: 'start here',
    name: 'Operational Audit',
    price: '$400 - $1,200',
    tag: 'Workflow map and system scope',
    items: [
      'Map the current workflow',
      'Identify manual bottlenecks',
      'Define the target operating system',
      'Prioritize the highest-impact modules',
      'Document data and integration needs',
      'Clear implementation recommendation',
    ],
    timeline: '1-2 weeks',
    best: 'Businesses that know operations feel messy but need clarity before committing',
  },
  {
    key: 'system',
    accent: 'core engagement',
    name: 'System Implementation',
    price: '$5,000 - $25,000+',
    tag: 'Workflow-fit operating system',
    items: [
      'Customer, scheduling, work order, and invoicing modules',
      'Spreadsheet and record migration',
      'Role-based staff workflows',
      'Notifications and customer updates',
      'Dashboards and operational reporting',
      'Training and launch support',
    ],
    timeline: '4-8 weeks',
    best: 'General contractors, repair shops, and service businesses ready to replace manual operations',
    featured: true,
  },
  {
    key: 'scale',
    accent: 'ongoing operations',
    name: 'Optimization Partner',
    price: '$250 - $1,500/mo',
    tag: 'Support, reporting, and new workflows',
    items: [
      'Hosting, maintenance, backups, and updates',
      'Workflow improvements as the business changes',
      'Quarterly reporting and bottleneck review',
      'New modules and automations',
      'Staff training refreshes',
      'Integration support',
    ],
    timeline: 'Ongoing',
    best: 'Teams that want the system to keep improving after launch',
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
