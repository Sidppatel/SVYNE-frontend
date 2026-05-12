export const STUDIO = {
  name: 'svono',
  tagline: 'One source. Everything online.',
  description:
    'Built in Saraland, Alabama — working everywhere.',
  email: 'hello@svono.com',
  location: 'Saraland, Alabama',
  schedulingUrl: 'calendly.com/svono',
  established: 'EST. 2026',
  bottomMeta: 'svono · est. 2026 · Saraland, Alabama',
  bottomTag: 'one source — everything online.',
} as const

export const FOOTER_LINKS = {
  pages: [
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
  ],
  elsewhere: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Are.na', href: '#' },
    { label: 'RSS · Journal', href: '#' },
  ],
} as const
