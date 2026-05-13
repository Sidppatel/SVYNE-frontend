import type { Pillar, ProcessStep } from '@/types'

export const HOME_PILLARS: Pillar[] = [
  {
    num: '01',
    name: 'Build',
    desc:
      'Marketing sites, custom dashboards, event platforms, web apps. Modern stack — Next.js, React, Postgres, Stripe. Code you own.',
  },
  {
    num: '02',
    name: 'Launch',
    desc:
      "Hosting set up, SEO foundation laid, day-of coordination. We monitor for 24 hours so launch isn't a \"fingers crossed\" moment.",
  },
  {
    num: '03',
    name: 'Maintain',
    desc:
      'Monthly retainer, three tiers. Uptime monitoring, security patches, content updates, monthly reports. Someone on call.',
  },
]

export const HOME_PILLAR_TAG: Record<string, string> = {
  Build: 'construction',
  Launch: 'going live',
  Maintain: 'ongoing care',
}

export const HOME_PROCESS: ProcessStep[] = [
  {
    num: 'i.',
    title: 'Talk',
    accent: 'discovery',
    desc:
      'A 30-minute call. We listen. You leave with a written proposal in 48 hours — real number, real timeline.',
  },
  {
    num: 'ii.',
    title: 'Build',
    accent: 'construction',
    desc:
      'Weekly check-ins. Shared progress link from day one. Slack channel stays open for the whole project.',
  },
  {
    num: 'iii.',
    title: 'Ship',
    accent: 'launch day',
    desc:
      'Coordinated launch. 24-hour war-room mode. Then ongoing care if you want it — monthly retainer, three tiers.',
  },
]

export const HOME_TESTIMONIAL = {
  quote:
    "Svono shipped the platform we'd been quoted six months for — in five weeks. The site still works. We still talk every month.",
  highlight: 'in five weeks',
  attr: '— Founder, CODE829',
  role: 'Private events · Mobile, AL',
}
