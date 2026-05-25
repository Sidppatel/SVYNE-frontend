import type { AddOn, Bundle, MaintainTier, Pillar, PricingTier } from '@/types'

export const PRICING_TIERS: PricingTier[] = [
  {
    key: 'project',
    accent: 'one-time build',
    name: 'Project Build',
    price: '$1,200 - $7,000+',
    tag: 'Custom platforms & internal tools',
    items: [
      'Built specifically to your workflow',
      'Operations dashboards & CRM panels',
      'Conversion-optimized marketing sites',
      'Data migration from spreadsheets',
      'One-time milestone pricing',
      'Full ownership of your data',
    ],
    timeline: '4-8 weeks',
    best: 'Service businesses, internal tools, custom requirements',
  },
  {
    key: 'transaction',
    accent: 'zero upfront cost',
    name: 'Transaction Platform',
    price: '$0 Upfront',
    tag: 'Service fee passed to end customer',
    items: [
      'Event ticketing & check-in apps',
      'High-volume appointment booking',
      'Paid subscriptions & communities',
      'We handle Stripe and payment infrastructure',
      'Continually maintained at no cost to you',
      'We succeed when you succeed',
    ],
    timeline: '2-4 weeks',
    best: 'Event organizers, booking-heavy businesses, communities',
    featured: true,
  },
  {
    key: 'whitelabel',
    accent: 'for agencies',
    name: 'White-Label',
    price: 'Custom Margin',
    tag: 'Resell SVYNE under your brand',
    items: [
      'Invisible technical layer',
      'Client dashboards with your logo',
      'You control the client relationship',
      'Dedicated developer support',
      'Agreed SLA and response times',
      'Scales with your agency',
    ],
    timeline: 'Ongoing',
    best: 'Marketing agencies, business consultants',
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
  { name: 'Data Migration (Heavy)', accent: 'large multi-source records', price: '$500+' },
  { name: 'Native Mobile App', accent: 'companion iOS/Android app', price: 'Custom Quote' },
  { name: 'System Audit', accent: 'tech & operational review', price: '$400-800' },
  { name: 'Extra workflows', accent: 'beyond initial scope', price: '$150/each' },
  { name: 'Copywriting assistance', accent: 'if you need help with words', price: '$100/page' },
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
