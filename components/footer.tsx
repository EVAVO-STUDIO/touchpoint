import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site';

const footerNav = {
  product: [
    { label: 'Problem', href: '/#problem' },
    { label: 'Solution', href: '/#solution' },
    { label: 'How it works', href: '/#how' },
    { label: 'Pilot pathway', href: '/#pilot' },
    { label: 'Impact', href: '/#impact' },
    { label: 'Use cases', href: '/#use-cases' },
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Subtle grid wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
        aria-hidden
      />

      <div className="container-tight relative py-16 md:py-24">
        {/* Top band: big wordmark + CTA */}
        <div className="flex flex-col items-start justify-between gap-10 pb-14 md:flex-row md:items-end">
          <div>
            <Logo size="lg" />
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted">
              Digital asset intelligence embedded into the built environment —
              designed for handover, operations, and lifecycle performance.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
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
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs text-muted">
                  {siteConfig.contact.entity}
                  <br />
                  {siteConfig.contact.location}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              Product
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-text"
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
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {siteConfig.social.linkedin && (
              <div className="mt-8">
                <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  Follow
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="New Wave Synergy on LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg transition-colors hover:border-accent hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="divider-gradient" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © {year} {siteConfig.contact.entity}. All rights reserved. ABN
            registered in Australia.
          </p>
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
            Touchpoint · v1.0 · Made in AU
          </p>
        </div>
      </div>
    </footer>
  );
}
