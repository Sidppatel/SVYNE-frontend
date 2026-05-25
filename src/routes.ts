export const ROUTES = {
  home: '/',
  services: '/services',
  work: '/work',
  workDetail: (slug: string) => `/work/${slug}`,
  pricing: '/pricing',
  faq: '/faq',
  about: '/about',
  contact: '/contact',
} as const

export const NAV_ITEMS = [
  { to: ROUTES.about, label: 'About' },
  { to: ROUTES.work, label: 'Outcomes' },
  { to: ROUTES.services, label: 'Systems' },
  { to: ROUTES.pricing, label: 'Investment' },
  { to: ROUTES.faq, label: 'FAQ' },
  { to: ROUTES.contact, label: 'Contact' },
] as const
