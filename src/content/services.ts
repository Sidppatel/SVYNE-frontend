import type { ServiceBlock, Pillar } from '@/types'

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    num: 'i.',
    name: 'Launch Packages',
    accent: 'project builds',
    deck:
      'From a clean marketing site to a custom event platform with ticketing. We design, code, and ship operator-centric systems—fully working, owned by you.',
    colA: {
      heading: 'What we build',
      items: [
        { title: 'Marketing sites', detail: '- fast, conversion-optimized funnels' },
        { title: 'Custom dashboards', detail: '- admin tools, internal panels, reporting' },
        { title: 'Event platforms', detail: '- ticketing, scanning, member access' },
        { title: 'Web applications', detail: '- multi-user products with auth + database' },
        { title: 'Integrations', detail: '- Stripe, CRMs, booking systems' },
      ],
    },
    colB: {
      heading: 'The stack',
      items: [
        { title: 'Vite & React/Svelte', detail: ' for the frontend' },
        { title: 'Cloudflare', detail: ' for edge deployment' },
        { title: 'Supabase/Turso', detail: ' for the database' },
        { title: 'Custom Domains', detail: ' for trusted production' },
        { title: 'Stripe', detail: ' for payments where needed' },
      ],
    },
    stats: [
      ['2-6 weeks', 'Typical timeline'],
      ['Custom', 'Price range'],
      ['100% yours', 'Code ownership'],
    ],
  },
  {
    num: 'ii.',
    name: 'System Audits',
    accent: 'technical consulting',
    deck:
      'Before building, we evaluate your current setup. We uncover bottlenecks in your booking flows, poor staff UX, and unreliable infrastructure.',
    colA: {
      heading: 'What we audit',
      items: [
        { title: 'Booking funnels', detail: '- identifying friction in conversions' },
        { title: 'Staff operations', detail: '- mapping manual, time-wasting tasks' },
        { title: 'Tech stack review', detail: '- performance and resilience check' },
        { title: 'Architecture design', detail: '- roadmapping the ideal solution' },
      ],
    },
    colB: {
      heading: 'Deliverables',
      items: [
        { title: 'Written Report', detail: '- actionable insights' },
        { title: 'Strategic Roadmap', detail: '- phased implementation plan' },
        { title: 'Vendor advice', detail: '- recommended tools/platforms' },
      ],
    },
    stats: [
      ['1 week', 'Timeline'],
      ['Consulting', 'Fixed fee'],
      ['Actionable', 'Clear next steps'],
    ],
  },
  {
    num: 'iii.',
    name: 'Ongoing Care',
    accent: 'recurring revenue',
    deck:
      'We replace the "launch and abandon" agency model. We act as your technical partner, managing infrastructure and rolling out feature sprints as you grow.',
    colA: {
      heading: 'What we manage',
      items: [
        { title: 'Uptime monitoring', detail: '- keeping your business online' },
        { title: 'Security patches', detail: '- proactive infrastructure defense' },
        { title: 'Performance', detail: '- keeping your site blazing fast' },
        { title: 'Backups', detail: '- daily snapshots' },
        { title: 'Feature Sprints', detail: '- Booking, Performance, Event upgrades' },
      ],
    },
    colB: {
      heading: 'Response times',
      items: [
        { title: 'Outage', detail: '- within 1 hour, business or weekend' },
        { title: 'Bug report', detail: '- 4 hours business / 24 hours weekend' },
        { title: 'Content request', detail: '- 2 business days' },
        { title: 'Feature sprint', detail: '- scheduled iteratively' },
      ],
    },
    stats: [
      ['$249 - $999', 'Monthly range'],
      ['6 months', 'Minimum commitment'],
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
