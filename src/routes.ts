export const ROUTES = {
  home: '/',
  services: '/systems',
  work: '/outcomes',
  workDetail: (slug: string) => `/outcomes/${slug}`,
  pricing: '/investment',
  faq: '/faq',
  about: '/about',
  contact: '/contact',
  describe: '/describe',
} as const

export const NAV_ITEMS = [
  { to: ROUTES.services, label: 'Systems' },
  { to: ROUTES.work, label: 'Outcomes' },
  { to: ROUTES.about, label: 'About' },
  { to: ROUTES.pricing, label: 'Investment' },
  { to: ROUTES.faq, label: 'FAQ' },
  { to: ROUTES.describe, label: 'Builder' },
  { to: ROUTES.contact, label: 'Contact' },
] as const
