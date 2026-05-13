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
      'Custom ticketing, scanner-based check-in, host tools, and member access — all on one stack the team owns.',
    sector: 'Private events club',
    year: '2025',
    timeline: '5 weeks',
    tier: 'Custom ($8K–25K)',
    stack: 'Next.js · Supabase · Stripe',
    grad: ['var(--color-sienna)', 'var(--color-ink)'],
    body: [
      {
        kind: 'p',
        text:
          "CODE829 is an invitation-only events club in Mobile, Alabama — a small operation hosting four to six private dinners and salon evenings each season. They had a working spreadsheet system and a hand-tooled Squarespace site. It worked. It also didn't scale.",
      },
      { kind: 'h', text: 'The brief' },
      {
        kind: 'p',
        text:
          'Replace the spreadsheets with a real platform. Members log in, see upcoming evenings, RSVP, and pay. Hosts get a scanner that reads QR codes at the door and marks arrivals in real time. Owners get a dashboard with revenue per evening, conversion, and member retention.',
      },
      { kind: 'h', text: 'How we built it' },
      {
        kind: 'p',
        text:
          'Two engineers. One designer. Weekly Friday demo. Slack channel from day one. The first staging link went out at the end of week one — empty, but live. By week three the auth, RSVP, and payment flows were solid. The last two weeks were scanner UX and the host dashboard.',
      },
      { kind: 'h', text: 'What shipped' },
      {
        kind: 'p',
        text:
          'A private members area, a Stripe-backed RSVP flow, a phone-native scanner the door host runs at check-in, and an admin panel with the three reports the founders actually look at. Plus a Maintain retainer — 10 dev hours a month, priority response.',
      },
    ],
  },
  {
    id: 'mariella',
    tag: 'Marketing Site · 2026',
    accent: 'tasting room site',
    title: 'Mariella & Co.',
    titleEm: 'tasting room',
    outcome: 'A wine-bar marketing site that books reservations.',
    desc: '12 pages, hand-set typography, OpenTable integration. Live in two and a half weeks.',
    sector: 'Restaurant · Mobile, AL',
    year: '2026',
    timeline: '2.5 weeks',
    tier: 'Foundation ($3.5K–6K)',
    stack: 'Next.js · OpenTable · Cloudinary',
    grad: ['var(--color-ink-soft)', 'var(--color-sepia)'],
    body: [
      {
        kind: 'p',
        text:
          "A new tasting room opening on Dauphin Street needed a site that would carry the room's tone — quiet, set, considered — and book reservations. We started from a printed menu and three iPhone photos.",
      },
      { kind: 'h', text: 'The work' },
      {
        kind: 'p',
        text:
          "Twelve pages of unhurried, well-set type. A menu that reads. An OpenTable embed that doesn't fight the rest of the page. Image direction for the opening shoot (we wrote the shot list, the team brought it back).",
      },
    ],
  },
  {
    id: 'aldridge',
    tag: 'Custom Dashboard · 2026',
    accent: 'internal dashboard',
    title: 'Aldridge Marine',
    titleEm: 'service dashboard',
    outcome: 'An internal admin that replaced four spreadsheets.',
    desc:
      'Repair-shop intake, parts ordering, customer status — one panel, one source.',
    sector: 'Boat services',
    year: '2026',
    timeline: '7 weeks',
    tier: 'Custom ($8K–25K)',
    stack: 'Next.js · Postgres · Twilio',
    grad: ['var(--color-forest)', 'var(--color-sienna)'],
    body: [
      {
        kind: 'p',
        text:
          'A two-location boat-services shop had a brilliant front desk and a chaotic back office. The intake form was paper. Parts orders lived in three Google Sheets. Customer status updates went out by text — when the owner remembered.',
      },
      { kind: 'h', text: 'What we built' },
      {
        kind: 'p',
        text:
          'A single admin with intake, parts, and customer status — and an auto-text via Twilio when a job changes state. The owner gets one screen on her phone. The shop floor uses a tablet at the intake bay.',
      },
    ],
  },
]

export const WORK_FILTERS = ['All', 'Platform', 'Site', 'Dashboard'] as const
