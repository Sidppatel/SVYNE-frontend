import type { Pillar, TeamMember, Value } from '@/types'

export const ABOUT_STORY = [
  'Most small businesses get their site from one freelancer, their hosting from another company, and their "ongoing updates" from a third — usually their cousin. **Three people. Three logins. Three versions of the truth.**',
  'When something breaks at 11pm, nobody picks up the phone. The site goes down. The reservations stop. The owner shrugs and waits.',
  'Svono was built to be **one source**. Build, launch, and maintain — all under the same roof, with the same two people who know the project. You call one number. We pick up.',
]

export const ABOUT_VALUES: Value[] = [
  {
    num: 'i.',
    title: 'Real numbers',
    desc:
      'No "starting at." Every quote has a real upper bound. If we don\'t know yet, we say that.',
  },
  {
    num: 'ii.',
    title: 'One source',
    desc:
      'Build, launch, and maintain in the same hands. One number to call. Always.',
  },
  {
    num: 'iii.',
    title: 'Show the work',
    desc:
      'Staging link from day one. Weekly Friday updates. Slack channel stays open.',
  },
  {
    num: 'iv.',
    title: 'Built to last',
    desc:
      'No throw-away code. The site you launch is the site you grow on, for years.',
  },
]

export const ABOUT_TEAM: TeamMember[] = [
  {
    initial: 'A',
    name: 'Anthony',
    role: 'founder',
    meta: 'DESIGN · ENGINEERING · CARE',
    bio:
      'Eight years of building web products, mostly for restaurants and event hosts on the Gulf Coast. Reads code like a recipe. Writes proposals like correspondence.',
  },
  {
    initial: 'M',
    name: 'Marisol',
    role: 'engineering',
    meta: 'ENGINEERING · MAINTAIN OPS',
    bio:
      "Database, integrations, the parts that have to stay up at 3am. Owns Maintain operations end-to-end — if your site goes down, it's her phone that buzzes first.",
  },
]

export const ABOUT_LOCATION: Pillar[] = [
  {
    num: '01',
    name: 'Where we are',
    desc:
      'Saraland, Alabama. Just north of Mobile. Coffee meetings on Friday afternoons.',
  },
  {
    num: '02',
    name: 'Who we serve',
    desc:
      'Started Gulf Coast. Now serving clients across the South — and a few well beyond.',
  },
  {
    num: '03',
    name: 'How we work',
    desc:
      'Async-first. Slack for daily. Weekly Friday calls. Quarterly strategy sit-downs.',
  },
]
