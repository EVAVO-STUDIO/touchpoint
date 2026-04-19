export const siteConfig = {
  name: 'Touchpoint',
  company: 'New Wave Synergy',
  url: 'https://touchpoint.newwavesynergy.com', // Update to final domain when deployed
  tagline: 'Digital Asset Intelligence for the Built Environment',
  description:
    'Touchpoint by New Wave Synergy connects physical assets to structured digital information — delivering instant access to manuals, warranties, and lifecycle data at the point of use via NFC and QR technology.',
  keywords: [
    'digital asset intelligence',
    'built environment',
    'facility management',
    'NFC asset tagging',
    'QR asset tracking',
    'O&M documentation',
    'asset lifecycle management',
    'handover to operations',
    'construction defects',
    'ESG compliance',
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
    // Add X / Instagram handles here when client confirms:
    // x: 'https://x.com/newwavesynergy',
  },
  nav: [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How it works', href: '#how' },
    { label: 'Pilot', href: '#pilot' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
