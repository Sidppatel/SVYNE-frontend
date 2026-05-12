export const ROUTES = {
  home: '/',
  services: '/services',
  work: '/work',
  workDetail: (slug: string) => `/work/${slug}`,
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
} as const

export const NAV_ITEMS = [
  { to: ROUTES.services, label: 'Services' },
  { to: ROUTES.work, label: 'Work' },
  { to: ROUTES.pricing, label: 'Pricing' },
  { to: ROUTES.about, label: 'About' },
  { to: ROUTES.contact, label: 'Contact' },
] as const
