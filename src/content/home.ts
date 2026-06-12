import type { Pillar, ProcessStep } from '@/types'

export const HOME_PILLARS: Pillar[] = [
  {
    num: '01',
    name: 'Workflow Mapping',
    desc:
      'We document how leads, jobs, customers, invoices, and handoffs actually move through your business.',
  },
  {
    num: '02',
    name: 'System Assembly',
    desc:
      'Reusable operational modules are configured around your workflow so the system feels built for your team.',
  },
  {
    num: '03',
    name: 'Operational Scale',
    desc:
      'Support, improvements, reporting, and new workflows keep the system useful as the business grows.',
  },
]

export const HOME_PILLAR_TAG = new Map<string, string>([
  ['Workflow Mapping', 'diagnose'],
  ['System Assembly', 'configure'],
  ['Operational Scale', 'improve'],
])

export const HOME_PROCESS: ProcessStep[] = [
  {
    num: 'i.',
    title: 'Map',
    accent: 'workflow audit',
    desc:
      'We identify where leads, appointments, invoices, and job details get lost, duplicated, delayed, or hidden.',
  },
  {
    num: 'ii.',
    title: 'Design',
    accent: 'operating model',
    desc:
      'Your workflow becomes a clear system plan: the modules, handoffs, automations, permissions, and reporting needed.',
  },
  {
    num: 'iii.',
    title: 'Implement',
    accent: 'training and support',
    desc:
      'SVYNE configures, launches, trains, and supports the operating system so it becomes part of daily work.',
  },
]

export const HOME_TESTIMONIAL = {
  quote:
    "SVYNE built an event ticketing system that let us keep 100% of our attendee data, cut scheduling conflicts by 90%, and saved us 5 hours a week in manual admin—all with $0 upfront cost.",
  highlight: "with $0 upfront cost",
  attr: "- Owner, L&A Studios",
  role: "Event Venue · Mobile County, AL",
}

export const HOME_OUTCOMES = [
  {
    symptom: 'Leads live in calls, texts, email, and memory.',
    system: 'One intake flow captures every opportunity and creates a follow-up path.',
    result: 'Fewer lost leads',
  },
  {
    symptom: 'Schedules change faster than the spreadsheet.',
    system: 'Jobs, appointments, and resource availability stay visible in one place.',
    result: 'Cleaner dispatch',
  },
  {
    symptom: 'Customer details are scattered across staff and tools.',
    system: 'Profiles, job history, notes, files, and next actions travel together.',
    result: 'Less rework',
  },
  {
    symptom: 'Invoices wait until someone remembers.',
    system: 'Estimates, approvals, invoices, and payments connect to the job workflow.',
    result: 'Faster cash flow',
  },
] as const
