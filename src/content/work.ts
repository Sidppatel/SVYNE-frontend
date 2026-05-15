import type { CaseStudy } from '@/types'

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'code829',
    tag: 'Event Platform · 2025',
    accent: 'private events',
    title: 'CODE829',
    titleEm: 'private events',
    outcome: 'A members-only platform from sketch to ship in five weeks.',
    desc:
      'Custom ticketing, scanner-based check-in, host tools, and member access - all on one stack the team owns.',
    sector: 'Private events club',
    year: '2025',
    timeline: '5 weeks',
    tier: 'Custom ($8K-25K)',
    stack: 'Vite & React · Supabase · Stripe',
    grad: ['var(--color-sienna)', 'var(--color-ink)'],
    body: [
      {
        kind: 'p',
        text:
          "CODE829 is an invitation-only events club in Mobile, Alabama - a small operation hosting four to six private dinners and salon evenings each season. They had a working spreadsheet system and a hand-tooled Squarespace site. It worked. It also didn't scale.",
      },
      { kind: 'h', text: 'The brief' },
      {
        kind: 'p',
        text:
          'Replace the spreadsheets with a real platform. Members log in, see upcoming evenings, RSVP, and pay. Hosts get a scanner that reads QR codes at the door and marks arrivals in real time. Owners get a dashboard with revenue per evening, conversion, and member retention.',
      },
      { kind: 'h', text: 'How I built it' },
      {
        kind: 'p',
        text:
          'One person - me. Designing, coding, and deploying. Weekly Friday demos. Slack channel from day one. The first staging link went out at the end of week one - empty, but live. By week three the auth, RSVP, and payment flows were solid. The last two weeks were scanner UX and the host dashboard.',
      },
      { kind: 'h', text: 'What shipped' },
      {
        kind: 'p',
        text:
          'A private members area, a Stripe-backed RSVP flow, a phone-native scanner the door host runs at check-in, and an admin panel with the three reports the founders actually look at. Plus a Maintain retainer - 10 dev hours a month, priority response.',
      },
    ],
  }
]

export const WORK_FILTERS = ['All', 'Platform', 'Site', 'Dashboard'] as const
