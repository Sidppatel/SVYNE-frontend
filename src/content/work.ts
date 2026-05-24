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
      { kind: 'h', text: 'The Problem' },
      {
        kind: 'p',
        text:
          'Their booking system was fragmented. Members had to be manually verified, RSVPs were tracked in spreadsheets, and door check-ins were slow and chaotic, leading to a poor experience for high-paying guests.',
      },
      { kind: 'h', text: 'The Technical Solution' },
      {
        kind: 'p',
        text:
          'We replaced the spreadsheets with a unified platform. A custom auth flow allowed members to log in, RSVP, and pay securely via Stripe. For the staff, we built a phone-native scanner app to read QR codes at the door, marking arrivals in real-time on the backend.',
      },
      { kind: 'h', text: 'The Business Outcome' },
      {
        kind: 'p',
        text:
          'The club now runs smoothly with zero manual data entry. Door check-in takes seconds instead of minutes. The owners get a real-time dashboard showing revenue, conversion rates, and member retention, saving them hours of admin work per event.',
      },
    ],
  }
]

export const WORK_FILTERS = ['All', 'Platform', 'Site', 'Dashboard'] as const
