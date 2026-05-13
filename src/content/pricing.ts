import type { AddOn, Bundle, MaintainTier, Pillar, PricingTier } from '@/types'

export const PRICING_TIERS: PricingTier[] = [
  {
    key: 'foundation',
    accent: 'the foundation',
    name: 'Foundation',
    price: '$3,500 – $6,000',
    tag: 'Marketing site · 5–10 pages',
    items: [
      '5–10 page marketing site',
      'Fully mobile responsive',
      'Contact form + analytics',
      'SEO foundation + Search Console',
      'One round of revisions',
      '30 days of post-launch support',
    ],
    timeline: '2–4 weeks',
    best: 'Restaurants, local services, single-product businesses',
  },
  {
    key: 'custom',
    accent: 'the custom build',
    name: 'Custom',
    price: '$8,000 – $25,000',
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
    timeline: '4–8 weeks',
    best: 'Event hosts, SaaS-y tools, internal platforms',
    featured: true,
  },
  {
    key: 'bespoke',
    accent: 'made to measure',
    name: 'Bespoke',
    price: '$25,000+',
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
    price: '$99',
    features:
      'Uptime monitoring · weekly backups · security patches · 1-hour response on outages',
    best: 'Static sites with rare changes',
  },
  {
    tier: 'Active',
    price: '$299',
    features:
      'Everything in Essential + monthly content updates (4 hrs) + performance report + analytics review',
    best: 'Active small businesses',
  },
  {
    tier: 'Full',
    price: '$799',
    features:
      'Everything in Active + 10 dev hours/month + priority response + monthly strategy call + SEO retainer',
    best: 'Growing businesses, custom apps',
  },
]

export const BUNDLES: Bundle[] = [
  {
    key: 'essential6',
    name: 'Build + 6 months Essential',
    desc: 'Lock the retainer at signing. 10% off all 6 months.',
    discount: '−10%',
  },
  {
    key: 'active12',
    name: 'Build + 12 months Active',
    desc: 'A full year of monthly care, prepaid. 15% off the retainer.',
    discount: '−15%',
  },
  {
    key: 'full12',
    name: 'Build + 12 months Full',
    desc: 'For serious growth. Maximum value for the most committed clients.',
    discount: '−20%',
  },
  {
    key: 'referral',
    name: 'Referral discount',
    desc: 'Refer a Build client. Both of you get one free month of Maintain.',
    discount: '1 mo',
  },
]

export const ADDONS: AddOn[] = [
  { name: 'Extra page', accent: 'beyond initial scope', price: '$300–500' },
  { name: 'Copywriting assistance', accent: 'if you need help with words', price: '$200/page' },
  { name: 'Photography direction', accent: 'shot list + coordination', price: '$500–1,500' },
  { name: 'Migration from old site', accent: 'content + SEO redirects', price: '$500–2,000' },
  { name: 'Email setup', accent: 'hello@yourdomain day one', price: '$200' },
  { name: 'SEO retainer', accent: 'separate from Maintain', price: '$400–1,200/mo' },
  { name: 'Logo / brand work', accent: 'we partner with a designer', price: '$500–2,000' },
  { name: 'Rush fee', accent: 'under 2-week deadline', price: '+25%' },
]

export const PAYMENT_TERMS: Pillar[] = [
  {
    num: '01',
    name: '50% deposit',
    desc:
      "Half on signing, half on launch. We don't start without the first invoice paid.",
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
      'Maintain has a 30-day notice. Build can be paused once — for free — by either side.',
  },
]
