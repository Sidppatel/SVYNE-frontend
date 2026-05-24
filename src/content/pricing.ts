import type { AddOn, Bundle, MaintainTier, Pillar, PricingTier } from '@/types'

export const PRICING_TIERS: PricingTier[] = [
  {
    key: 'foundation',
    accent: 'the foundation',
    name: 'Foundation',
    price: '$1,200 - $2,500',
    tag: 'Marketing site · 5-10 pages',
    items: [
      '5-10 page marketing site',
      'Fully mobile responsive',
      'Contact form + analytics',
      'SEO foundation + Search Console',
      'One round of revisions',
      '30 days of post-launch support',
    ],
    timeline: '2-4 weeks',
    best: 'Restaurants, local services, single-product businesses',
  },
  {
    key: 'custom',
    accent: 'the custom build',
    name: 'Custom',
    price: '$3,500 - $7,000',
    tag: 'Custom app, dashboard, or platform',
    items: [
      'Custom-built application',
      'User accounts + authentication',
      'Admin dashboard',
      'Database + integrations',
      'Stripe + API connections',
      'Two rounds of revisions',
      '60 days of post-launch support',
    ],
    timeline: '4-8 weeks',
    best: 'Event hosts, SaaS-y tools, internal platforms',
    featured: true,
  },
  {
    key: 'bespoke',
    accent: 'made to measure',
    name: 'Bespoke',
    price: '$7,000+',
    tag: 'Multi-month · custom proposal',
    items: [
      'Phased delivery',
      'Complex integrations',
      'Custom design system',
      'Multiple user types/roles',
      'Dedicated project channel',
      'Weekly sync calls',
      '90 days of post-launch support',
    ],
    timeline: '8+ weeks',
    best: 'Established businesses, multi-feature platforms',
  },
]

export const MAINTAIN_TIERS: MaintainTier[] = [
  {
    tier: 'Essential',
    price: '$49',
    features:
      'Uptime monitoring · weekly backups · security patches · 1-hour response on outages',
    best: 'Static sites with rare changes',
  },
  {
    tier: 'Growth',
    price: '$149',
    features:
      'Everything in Essential + monthly content updates (4 hrs) + performance report + minor design tweaks',
    best: 'Active local businesses',
  },
  {
    tier: 'Premium',
    price: '$349',
    features:
      'Everything in Growth + priority support + 1 feature sprint/quarter + SEO retainer',
    best: 'Event platforms & high-traffic sites',
  },
]

export const BUNDLES: Bundle[] = [
  {
    key: 'essential6',
    name: 'Build + 6 months Essential',
    desc: 'Lock the retainer at signing. 10% off all 6 months.',
    discount: '-10%',
  },
  {
    key: 'active12',
    name: 'Build + 12 months Active',
    desc: 'A full year of monthly care, prepaid. 15% off the retainer.',
    discount: '-15%',
  },
  {
    key: 'full12',
    name: 'Build + 12 months Full',
    desc: 'For serious growth. Maximum value for the most committed clients.',
    discount: '-20%',
  },
  {
    key: 'referral',
    name: 'Referral discount',
    desc: 'Refer a Build client. Both of you get one free month of Maintain.',
    discount: '1 mo',
  },
]

export const ADDONS: AddOn[] = [
  { name: 'Extra page', accent: 'beyond initial scope', price: '$150' },
  { name: 'Copywriting assistance', accent: 'if you need help with words', price: '$100/page' },
  { name: 'Photography direction', accent: 'shot list + coordination', price: '$300' },
  { name: 'Migration from old site', accent: 'content + SEO redirects', price: '$250' },
  { name: 'Email setup', accent: 'hello@yourdomain day one', price: '$100' },
  { name: 'SEO retainer', accent: 'separate from Maintain', price: '$200-500/mo' },
  { name: 'Logo / brand work', accent: 'I partner with a designer', price: '$300-800' },
  { name: 'Rush fee', accent: 'under 2-week deadline', price: '+25%' },
]

export const PAYMENT_TERMS: Pillar[] = [
  {
    num: '01',
    name: '50% deposit',
    desc:
      "Half on signing, half on launch. I don't start without the first invoice paid.",
  },
  {
    num: '02',
    name: 'Net 14',
    desc: 'Invoices due 14 days from issue. Late fees after 30 days, never punishing.',
  },
  {
    num: '03',
    name: 'Cancel anytime',
    desc:
      'Maintain has a 30-day notice. Build can be paused once - for free - by either side.',
  },
]
