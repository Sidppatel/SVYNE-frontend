import type { ServiceBlock, Pillar } from '@/types'

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    num: 'i.',
    name: 'Project-Based Builds',
    accent: 'custom operations platforms',
    deck:
      'We replace the manual notebooks and spreadsheets with a single, unified system built exactly to your specs. One-time milestone pricing.',
    colA: {
      heading: 'What we build',
      items: [
        { title: 'Operations platforms', detail: '- booking, inventory, scheduling' },
        { title: 'Internal dashboards', detail: '- staff portals and CRM panels' },
        { title: 'Event platforms', detail: '- ticketing and check-in flows' },
        { title: 'Conversion sites', detail: '- lead-gen focused marketing sites' },
        { title: 'Native apps', detail: '- companion iOS/Android applications' },
      ],
    },
    colB: {
      heading: 'The delivery',
      items: [
        { title: 'Data Migration', detail: '- we move your old spreadsheet data' },
        { title: 'Internal framework', detail: '- or fully custom architecture' },
        { title: 'Staff training', detail: '- onboarding for your operators' },
        { title: 'Code ownership', detail: '- you own the final product data' },
        { title: 'Reliability', detail: ' deployed on global edge networks' },
      ],
    },
    stats: [
      ['4-8 weeks', 'Typical timeline'],
      ['Fixed Fee', 'Milestone based'],
      ['100% yours', 'Data ownership'],
    ],
  },
  {
    num: 'ii.',
    name: 'Transaction Platforms',
    accent: 'zero upfront cost',
    deck:
      'For clients processing online bookings or ticket sales, we build and maintain the platform at no upfront cost. We simply pass a small service fee to the end customer.',
    colA: {
      heading: 'How it works',
      items: [
        { title: '$0 Build Cost', detail: '- we handle the initial development' },
        { title: 'End-customer fee', detail: '- e.g., $5 ticketing fee on checkout' },
        { title: 'Payment processing', detail: '- we manage Stripe and payouts' },
        { title: 'Ongoing updates', detail: '- the system is continually maintained' },
      ],
    },
    colB: {
      heading: 'Perfect for',
      items: [
        { title: 'Event organizers', detail: '- festivals, recurring series' },
        { title: 'Booking businesses', detail: '- high-volume appointments' },
        { title: 'Paid communities', detail: '- subscription access' },
      ],
    },
    stats: [
      ['$0', 'Upfront cost'],
      ['Volume', 'Pricing model'],
      ['Fully', 'Maintained by us'],
    ],
  },
  {
    num: 'iii.',
    name: 'Care & Partnership',
    accent: 'long-term technical partner',
    deck:
      'We don\'t launch and abandon. We provide ongoing infrastructure care, feature sprints, and white-label development for agencies.',
    colA: {
      heading: 'Care Plans',
      items: [
        { title: 'Uptime monitoring', detail: '- keeping your business online' },
        { title: 'Security patches', detail: '- proactive infrastructure defense' },
        { title: 'Feature Sprints', detail: '- adding workflows as you grow' },
        { title: 'Performance', detail: '- keeping your system blazing fast' },
        { title: 'Backups', detail: '- secure daily data snapshots' },
      ],
    },
    colB: {
      heading: 'White-Label Program',
      items: [
        { title: 'Agency partnership', detail: '- resell SVYNE platforms' },
        { title: 'Your brand', detail: '- client dashboards with your logo' },
        { title: 'Invisible tech layer', detail: '- we handle the code' },
        { title: 'Dedicated support', detail: '- direct developer access' },
      ],
    },
    stats: [
      ['Monthly', 'Retainer options'],
      ['Custom', 'Agency margins'],
      ['30 days', 'Cancel notice'],
    ],
  },
]

export const SERVICES_NOT_OFFERED: Pillar[] = [
  {
    num: '× not SVYNE',
    name: 'Logo & brand identity',
    desc: "I partner with designers for this. Ask and I'll recommend one.",
  },
  {
    num: '× not SVYNE',
    name: 'SEO-only retainers',
    desc: 'I do SEO foundation. For ongoing content strategy, you want a specialist.',
  },
  {
    num: '× not SVYNE',
    name: 'UX research',
    desc: 'I design what you tell me users need. Discovery research is a separate scope.',
  },
]
