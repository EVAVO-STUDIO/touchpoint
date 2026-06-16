import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site';

const footerNav = {
  product: [
    { label: 'Problem', href: '/#problem' },
    { label: 'Solution', href: '/#solution' },
    { label: 'How it works', href: '/#how' },
    { label: 'Support model', href: '/#system' },
    { label: 'Workflows', href: '/#workflows' },
    { label: 'Pilot', href: '/#pilot' },
    { label: 'Impact', href: '/#impact' },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
    {
      label: 'New Wave Synergy',
      href: siteConfig.parent.url,
      external: true,
    },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of use', href: '/terms' },
  ],
};

const ecosystem = [
  'Post-Completion',
  'Physical Inspections',
  'Handover',
  'Operational Readiness',
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
        aria-hidden
      />

      <div className="container-tight relative py-16 md:py-24">
        {/* Top band: wordmark + pitch + CTA */}
        <div className="flex flex-col items-start justify-between gap-10 pb-14 md:flex-row md:items-end">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted">
              A New Wave Synergy-backed support model for post-completion,
              handover and asset transition — combining physical inspections,
              structured close-out and field-ready asset information.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {ecosystem.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
          >
            Request a pilot conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divider-gradient" />

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <p className="text-sm font-medium text-text">
                  {siteConfig.contact.person}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {siteConfig.contact.role}
                </p>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs text-muted">
                  {siteConfig.contact.entity}
                  <br />
                  Australia and New Zealand
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              Touchpoint
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              New Wave Synergy
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                Follow
              </p>
              <div className="mt-4 flex gap-2">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Touchpoint on Instagram (${siteConfig.social.instagramHandle})`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                  >
                    <Instagram className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="New Wave Synergy on LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                )}
              </div>
              {siteConfig.social.instagramHandle && (
                <p className="mt-3 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  {siteConfig.social.instagramHandle}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="divider-gradient" />

        {/* NWS attribution card */}
        <a
          href={siteConfig.parent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-border bg-bg/40 p-5 transition-colors hover:border-border-strong md:flex-row md:items-center md:p-6"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/images/nws-logo.png"
              alt="New Wave Synergy"
              width={140}
              height={54}
              className="h-10 w-auto shrink-0 md:h-12"
            />
            <div>
              <p className="text-sm font-medium text-text">
                Touchpoint is a product of {siteConfig.parent.name}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                Specialist project delivery, close-out, operational readiness and post-completion performance consultancy.
              </p>
            </div>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            strokeWidth={1.75}
          />
        </a>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © {year} {siteConfig.contact.entity}. All rights reserved.
          </p>
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
            Touchpoint · New Wave Synergy · Australia and New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
