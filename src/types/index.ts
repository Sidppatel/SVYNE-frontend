export type ServicePillar = {
  num: string
  name: string
  accent: string
  desc: string
}

export type ServiceBlock = {
  num: string
  name: string
  accent: string
  deck: string
  colA: { heading: string; items: ServiceItem[] }
  colB: { heading: string; items: ServiceItem[] }
  stats: [string, string][]
}

export type ServiceItem = {
  title: string
  detail: string
}

export type CaseStudy = {
  id: string
  tag: string
  accent: string
  title: string
  titleEm: string
  outcome: string
  desc: string
  sector: string
  year: string
  timeline: string
  tier: string
  stack: string
  grad: [string, string]
  body: ({ kind: 'p' | 'h'; text: string })[]
}

export type PricingTier = {
  key: string
  accent: string
  name: string
  price: string
  tag: string
  items: string[]
  timeline: string
  best: string
  featured?: boolean
}

export type MaintainTier = {
  tier: string
  price: string
  features: string
  best: string
}

export type Bundle = {
  key: string
  name: string
  desc: string
  discount: string
}

export type AddOn = {
  name: string
  accent: string
  price: string
}

export type Value = {
  num: string
  title: string
  desc: string
}

export type TeamMember = {
  initial: string
  name: string
  role: string
  meta: string
  bio: string
}

export type ProcessStep = {
  num: string
  title: string
  accent?: string
  desc: string
}

export type Pillar = {
  num: string
  name: string
  desc: string
}

export type ContactForm = {
  name: string
  email: string
  business: string
  projectType: string
  budget: string
  timeline: string
  details: string
  referral: string
}
