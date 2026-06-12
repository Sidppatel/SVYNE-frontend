import type { Pillar, TeamMember, Value } from '@/types'

export const ABOUT_STORY = [
  'SVYNE started when we saw a local event venue—L&A Studios in Mobile County—managing everything by hand. They were using paper tickets, manual seating charts, and spreadsheets. Their customer list was trapped inside Eventbrite, and they were leaking revenue at every event.',
  'We built a custom operating system that let them sell tickets directly on their website, keep 100% of their customer list, and manage seating layouts with a drag-and-drop seating chart builder. They saved hours of manual work and cut scheduling conflicts by 90%.',
  'We soon realized this operational friction exists in almost every small business. SVYNE exists to turn scattered manual processes into structured, workflow-fit operating systems: mapped, configured, and supported locally.',
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
      'Based in Saraland, AL, I design, build, and support every system personally. I answer my own phone. From workflow audits to mockup design and launch training, you deal directly with me.',
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
