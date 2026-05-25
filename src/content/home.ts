import type { Pillar, ProcessStep } from '@/types'

export const HOME_PILLARS: Pillar[] = [
  {
    num: '01',
    name: 'Project Builds',
    desc:
      'Conversion sites, internal staff dashboards, and operations platforms built exactly to your spec. One-time fee.',
  },
  {
    num: '02',
    name: 'Transaction Platforms',
    desc:
      'For event organizers and booking clients: zero upfront cost. A small service fee is passed to your end customer on checkout.',
  },
  {
    num: '03',
    name: 'Ongoing Care',
    desc:
      'We replace the "build and disappear" model. Uptime monitoring, security, updates, and feature sprints as you grow.',
  },
]

export const HOME_PILLAR_TAG = new Map<string, string>([
  ['Project Builds', 'one-time'],
  ['Transaction Platforms', '$0 upfront'],
  ['Ongoing Care', 'recurring'],
])

export const HOME_PROCESS: ProcessStep[] = [
  {
    num: 'i.',
    title: 'Talk',
    accent: 'discovery',
    desc:
      'A 30-minute call. I listen. You leave with a written proposal in 48 hours - real number, real timeline.',
  },
  {
    num: 'ii.',
    title: 'Build',
    accent: 'foundation',
    desc:
      'Weekly check-ins. Shared progress link from day one. Slack channel stays open for the whole project.',
  },
  {
    num: 'iii.',
    title: 'Ship',
    accent: 'growth point',
    desc:
      'Coordinated launch. 24-hour war-room mode. Then ongoing care if you want it - monthly retainer, three tiers.',
  },
]

export const HOME_TESTIMONIAL = {
  quote:
    "SVYNE shipped the platform we'd been quoted six months for - in five weeks. The site still works. We still talk every month.",
  highlight: 'in five weeks',
  attr: '- Founder, CODE829',
  role: 'Private events · Mobile, AL',
}
