import type { ServiceBlock, Pillar } from '@/types'

export const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    num: 'i.',
    name: 'Operational Audit',
    accent: 'workflow clarity',
    deck:
      'Before anything gets built, SVYNE maps the way work moves through the business and identifies the manual steps costing time, money, and visibility.',
    colA: {
      heading: 'What we map',
      items: [
        { title: 'Lead intake', detail: '- calls, forms, texts, referrals' },
        { title: 'Scheduling', detail: '- jobs, appointments, crews, resources' },
        { title: 'Customer data', detail: '- profiles, history, files, notes' },
        { title: 'Job flow', detail: '- estimates, approvals, work orders' },
        { title: 'Reporting', detail: '- owner visibility and KPIs' },
      ],
    },
    colB: {
      heading: 'What you receive',
      items: [
        { title: 'Workflow map', detail: '- current state and target state' },
        { title: 'Bottleneck list', detail: '- the highest-cost manual steps' },
        { title: 'System scope', detail: '- modules, users, data, automations' },
        { title: 'Implementation path', detail: '- timeline, risks, and rollout plan' },
        { title: 'Investment range', detail: '- clear next step before build' },
      ],
    },
    stats: [
      ['1-2 weeks', 'Audit timeline'],
      ['Fixed scope', 'Clear deliverable'],
      ['Workflow', 'Before software'],
    ],
  },
  {
    num: 'ii.',
    name: 'Operating System Build',
    accent: 'workflow-fit modules',
    deck:
      'SVYNE assembles customer, scheduling, work order, invoicing, communication, and reporting modules around the way your team already works.',
    colA: {
      heading: 'Core modules',
      items: [
        { title: 'Customer management', detail: '- leads, profiles, history' },
        { title: 'Scheduling', detail: '- calendar, dispatch, resources' },
        { title: 'Financial operations', detail: '- estimates, invoices, payments' },
        { title: 'Work orders', detail: '- tasks, status, field updates' },
        { title: 'Communication', detail: '- notifications and customer updates' },
      ],
    },
    colB: {
      heading: 'Built for',
      items: [
        { title: 'General contractors', detail: '- estimates, crews, projects' },
        { title: 'Repair shops', detail: '- tickets, parts, approvals' },
        { title: 'Service businesses', detail: '- scheduling, dispatch, billing' },
        { title: 'Growing teams', detail: '- less owner dependency' },
      ],
    },
    stats: [
      ['4-8 weeks', 'Typical launch'],
      ['Modular', 'Reusable foundation'],
      ['Tailored', 'Workflow experience'],
    ],
  },
  {
    num: 'iii.',
    name: 'Optimization & Scale',
    accent: 'continuous improvement',
    deck:
      'The system should keep improving after launch. SVYNE maintains the platform, adds workflows, improves reporting, and helps the business scale without falling back into spreadsheets.',
    colA: {
      heading: 'Operational care',
      items: [
        { title: 'Maintenance', detail: '- hosting, updates, security, backups' },
        { title: 'Workflow sprints', detail: '- new modules and automations' },
        { title: 'Reporting reviews', detail: '- KPIs owners can act on' },
        { title: 'Staff enablement', detail: '- training as roles change' },
        { title: 'Integrations', detail: '- connect the tools worth keeping' },
      ],
    },
    colB: {
      heading: 'What improves',
      items: [
        { title: 'Visibility', detail: '- fewer blind spots' },
        { title: 'Consistency', detail: '- fewer one-off processes' },
        { title: 'Capacity', detail: '- less administrative drag' },
        { title: 'Scalability', detail: '- easier hiring and delegation' },
      ],
    },
    stats: [
      ['Monthly', 'Support options'],
      ['Quarterly', 'Workflow review'],
      ['Ongoing', 'System evolution'],
    ],
  },
]

export const SERVICES_NOT_OFFERED: Pillar[] = [
  {
    num: '× not SVYNE',
    name: 'A generic CRM',
    desc: 'SVYNE is not a blank database your team must force into shape.',
  },
  {
    num: '× not SVYNE',
    name: 'Booking software',
    desc: 'Scheduling can be one module, but the real work is the full operation around it.',
  },
  {
    num: '× not SVYNE',
    name: 'Custom software agency',
    desc: 'The model is a repeatable operational platform configured to your workflow.',
  },
]
