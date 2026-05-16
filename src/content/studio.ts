export const STUDIO = {
  name: 'svyne',
  tagline: 'The Living Architecture.',
  description:
    'Growing your site vision through warm, structured technology.',
  email: 'hello@svyne.com',
  location: 'Mobile, Alabama',
  schedulingUrl: 'calendly.com/patelsiddh1408/30min',
  established: 'EST. 2026',
  bottomMeta: 'svyne · est. 2026 · Mobile, Alabama',
  bottomTag: 'site vision · growth · foundation.',
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
