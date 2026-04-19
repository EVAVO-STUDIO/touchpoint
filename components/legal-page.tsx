import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="relative pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="container-tight max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Touchpoint
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
            Legal · {updated}
          </p>
          <h1 className="display-lg mt-6 text-balance">{title}</h1>
        </header>

        <div className="legal-prose mt-12 max-w-none space-y-8">{children}</div>
      </div>
    </article>
  );
}
