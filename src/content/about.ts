import type { Pillar, TeamMember, Value } from '@/types'

export const ABOUT_STORY = [
  'Most businesses have a site idea before they have the structure to support it. The vision is real, but the roots are scattered across tools, logins, templates, and half-finished systems.',
  'SVYNE exists to turn that loose vision into living architecture: a digital foundation that can launch, adapt, and keep growing after the first version goes live.',
  'The name comes from **Site Vision + Vine**. A vine grows by connection and structure. So does a good web system: clear direction above, flexible growth through the middle, stable infrastructure underneath.',
]

export const ABOUT_VALUES: Value[] = [
  {
    num: 'i.',
    title: 'Real numbers',
    desc:
      'No "starting at." Every quote has a real upper bound. If I don\'t know yet, I say that.',
  },
  {
    num: 'ii.',
    title: 'Living systems',
    desc:
      'Websites should take root and keep expanding. Build, launch, and maintain belong in one living system.',
  },
  {
    num: 'iii.',
    title: 'Visible growth',
    desc:
      'Staging link from day one. Weekly Friday updates. Slack channel stays open.',
  },
  {
    num: 'iv.',
    title: 'Built to root',
    desc:
      'No throw-away code. The site you launch is the foundation you grow on, for years.',
  },
]

export const ABOUT_TEAM: TeamMember[] = [
  {
    initial: 'S',
    name: 'Siddh',
    role: 'founder',
    meta: 'DESIGN · ENGINEERING · CARE',
    bio:
      'The single point of contact for every project. From initial design to core engineering and long-term maintenance, I handle everything end-to-end to ensure nothing is lost in translation.',
  },
]

export const ABOUT_LOCATION: Pillar[] = [
  {
    num: '01',
    name: 'Where I am',
    desc:
      'Mobile, Alabama. Just north of Mobile. Coffee meetings on Friday afternoons.',
  },
  {
    num: '02',
    name: 'Who I serve',
    desc:
      'Started Gulf Coast. Now serving clients across the South - and a few well beyond.',
  },
  {
    num: '03',
    name: 'How I work',
    desc:
      'Async-first. Slack for daily. Weekly Friday calls. Quarterly strategy sit-downs.',
  },
]
