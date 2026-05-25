import type { Pillar, TeamMember, Value } from '@/types'

export const ABOUT_STORY = [
  'Most service businesses do not wake up asking for software. They feel the symptoms first: missed follow-ups, double entry, delayed invoices, unclear job status, and too much owner dependency.',
  'SVYNE exists to turn scattered daily operations into a clear operating system: workflow mapped, tools connected, manual steps reduced, and reporting visible enough to make better decisions.',
  'The name comes from **Site Vision + Vine**. A vine grows by connection and structure. So does a strong operation: clear direction above, flexible growth through the middle, stable infrastructure underneath.',
]

export const ABOUT_VALUES: Value[] = [
  {
    num: 'i.',
    title: 'Operations before tools',
    desc:
      'The work starts by understanding how leads, jobs, customers, invoices, and staff handoffs actually move.',
  },
  {
    num: 'ii.',
    title: 'Workflow fit',
    desc:
      'The business should not contort itself around generic software. The system should fit the workflow.',
  },
  {
    num: 'iii.',
    title: 'Visible operations',
    desc:
      'Owners need to see work in motion: leads, jobs, invoices, bottlenecks, capacity, and outcomes.',
  },
  {
    num: 'iv.',
    title: 'Built to scale',
    desc:
      'The system should reduce owner dependency and make hiring, delegation, and expansion easier.',
  },
]

export const ABOUT_TEAM: TeamMember[] = [
  {
    initial: 'S',
    name: 'Siddh',
    role: 'founder',
    meta: 'STRATEGY · UX · ENGINEERING',
    bio:
      'The single point of contact for every engagement. From workflow mapping to system design, engineering, launch, and long-term optimization, I keep the strategy close to the implementation.',
  },
]

export const ABOUT_LOCATION: Pillar[] = [
  {
    num: '01',
    name: 'Where SVYNE is based',
    desc:
      'Mobile, Alabama. Local enough for Gulf Coast service businesses, remote-ready for teams beyond.',
  },
  {
    num: '02',
    name: 'Who I serve',
    desc:
      'General contractors, repair shops, service businesses, and teams outgrowing spreadsheets.',
  },
  {
    num: '03',
    name: 'How I work',
    desc:
      'Workflow-first. Clear scope, visible progress, staff training, and ongoing system improvement.',
  },
]
