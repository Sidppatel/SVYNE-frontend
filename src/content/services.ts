import type { ServiceBlock, Pillar } from '@/types'

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    num: 'i.',
    name: 'Build',
    italian: 'construction',
    deck:
      'From a clean marketing site to a custom event platform with ticketing. We design, code, and ship it — fully working, owned by you.',
    colA: {
      heading: 'What we make',
      items: [
        { title: 'Marketing sites', detail: '— 5 to 20 pages, fully responsive, fast' },
        { title: 'Custom dashboards', detail: '— admin tools, internal panels, reporting' },
        { title: 'Event platforms', detail: '— ticketing, scanning, member access' },
        { title: 'Web applications', detail: '— multi-user products with auth + database' },
        { title: 'Integrations', detail: '— Stripe, Mailchimp, calendars, third-party APIs' },
      ],
    },
    colB: {
      heading: 'Our stack',
      items: [
        { title: 'Next.js', detail: ' + React for the framework' },
        { title: 'Tailwind CSS', detail: ' for styling' },
        { title: 'Supabase', detail: ' or Postgres for the database' },
        { title: 'Vercel', detail: ' for hosting + deployment' },
        { title: 'Stripe', detail: ' for payments where needed' },
      ],
    },
    stats: [
      ['2–6 weeks', 'Typical timeline'],
      ['$3.5K — $25K+', 'Price range'],
      ['100% yours', 'Code ownership'],
    ],
  },
  {
    num: 'ii.',
    name: 'Launch',
    italian: 'going live',
    deck:
      'Launch day is not a "fingers crossed" moment. We treat it as a planned event — hosting set up, SEO foundation laid, day-of monitoring in place.',
    colA: {
      heading: 'What "launch" includes',
      items: [
        { title: 'Domain & hosting', detail: '— fully configured, SSL active' },
        { title: 'SEO foundation', detail: '— sitemap, robots, meta tags, OG images' },
        { title: 'Analytics', detail: '— Plausible or Fathom, privacy-first' },
        { title: 'Email', detail: '— hello@yourdomain working day one' },
        { title: 'Day-of coordination', detail: '— we monitor for 24 hours' },
      ],
    },
    colB: {
      heading: 'Day-one fires we handle',
      items: [
        { title: 'DNS propagation', detail: '— patient and predictable' },
        { title: 'Form submission failures', detail: '— tested before and after launch' },
        { title: 'Mobile-specific bugs', detail: '— Safari + Android Chrome regression' },
        { title: 'Image loading on slow connections', detail: '— optimized aggressively' },
        { title: 'Search engine submission', detail: '— Google Search Console verified' },
      ],
    },
    stats: [
      ['1–3 days', 'Launch window'],
      ['Included', 'With every Build'],
      ['24 hours', 'Day-of monitoring'],
    ],
  },
  {
    num: 'iii.',
    name: 'Maintain',
    italian: 'ongoing care',
    deck:
      'The thing nobody tells you: launching is 20% of the work. Maintain is the other 80%. Monthly retainer, three tiers, someone on call when things change.',
    colA: {
      heading: 'What gets watched',
      items: [
        { title: 'Uptime monitoring', detail: '— pinged every 5 minutes, alerts to phone' },
        { title: 'Security patches', detail: '— applied within 48 hours of CVE' },
        { title: 'Performance', detail: '— Core Web Vitals tracked, optimized monthly' },
        { title: 'Backups', detail: '— daily snapshots, 30-day retention' },
        { title: 'Content updates', detail: '— included in Active and Full tiers' },
      ],
    },
    colB: {
      heading: 'Response times',
      items: [
        { title: 'Outage', detail: '— within 1 hour, business or weekend' },
        { title: 'Bug report', detail: '— 4 hours business / 24 hours weekend' },
        { title: 'Content request', detail: '— 2 business days' },
        { title: 'Feature request', detail: '— quoted within 1 week' },
        { title: 'Monthly report', detail: '— first business day of the month' },
      ],
    },
    stats: [
      ['$99 — $799', 'Monthly range'],
      ['6 months', 'Minimum commitment'],
      ['30 days', 'Cancel notice'],
    ],
  },
]

export const SERVICES_NOT_OFFERED: Pillar[] = [
  {
    num: '× not us',
    name: 'Logo & brand identity',
    desc: "We partner with designers for this. Ask and we'll recommend one.",
  },
  {
    num: '× not us',
    name: 'SEO-only retainers',
    desc: 'We do SEO foundation. For ongoing content strategy, you want a specialist.',
  },
  {
    num: '× not us',
    name: 'UX research',
    desc: 'We design what you tell us users need. Discovery research is a separate scope.',
  },
]
