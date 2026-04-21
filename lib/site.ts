export const siteConfig = {
  name: 'Touchpoint',
  company: 'New Wave Synergy',
  url: 'https://touchpoint.newwavesynergy.com',
  tagline: 'Digital asset intelligence for the built environment',
  description:
    'Touchpoint is an asset identity layer for the built environment. Every physical thing — space, system, asset, component — gets a persistent digital record. Every interaction updates it. Every action is logged. Built by New Wave Synergy.',
  keywords: [
    'asset identity platform',
    'digital asset intelligence',
    'built environment',
    'facility management software',
    'NFC asset tagging',
    'QR asset tracking',
    'handover operations',
    'asset lifecycle management',
    'defect management',
    'construction closeout',
    'O&M documentation',
    'ESG reporting built environment',
    'predictive maintenance',
    'Australia proptech',
  ],
  locale: 'en_AU',
  parent: {
    name: 'New Wave Synergy',
    url: 'https://www.newwavesynergy.com',
    contactUrl: 'https://www.newwavesynergy.com/contact',
  },
  contact: {
    email: 'naomi@newwavesynergy.com',
    phone: '+61 410 323 102',
    phoneDisplay: '0410 323 102',
    person: 'Naomi Mabvurira',
    role: 'Managing Director',
    entity: 'New Wave Synergy Pty Ltd',
    location: 'Australia',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/new-wave-synergy',
  },
  // Main nav — About surfaced here, not only in footer
  nav: [
    { label: 'Solution', href: '#solution' },
    { label: 'System', href: '#system' },
    { label: 'Workflows', href: '#workflows' },
    { label: 'Pilot', href: '#pilot' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
