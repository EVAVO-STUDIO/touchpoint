'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-bg/75 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent'
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-18">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="Touchpoint home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Request a pilot
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 z-30 origin-top border-b border-border bg-bg/98 backdrop-blur-xl transition-all duration-300 lg:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        )}
      >
        <nav
          className="container-tight flex flex-col gap-1 py-6"
          aria-label="Mobile primary"
        >
          {siteConfig.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-4 text-lg transition-colors hover:bg-surface"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span>{item.label}</span>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-text px-5 py-3.5 text-sm font-medium text-bg"
          >
            Request a pilot conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
