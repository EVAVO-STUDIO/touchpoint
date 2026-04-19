import { TrendingUp, Database, LineChart, GitBranch } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const capabilities = [
  { icon: TrendingUp, label: 'Performance insights' },
  { icon: LineChart, label: 'Lifecycle optimisation' },
  { icon: GitBranch, label: 'Portfolio benchmarking' },
  { icon: Database, label: 'Predictive maintenance' },
];

export function DataLayer() {
  return (
    <section
      id="data"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Data layer"
    >
      {/* Accent atmosphere */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-radial-glow opacity-60"
        aria-hidden
      />

      <div className="container-tight">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionEyebrow number="06" className="justify-center">
              Data layer
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              Building the{' '}
              <span className="italic-accent text-accent">data layer</span>
              <br className="hidden md:block" /> for real assets.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              Touchpoint captures structured asset data across buildings and
              portfolios, creating a consistent and accessible source of truth
              — enabling future capabilities such as performance insights,
              lifecycle optimisation, and predictive maintenance.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {capabilities.map((c, i) => (
              <div
                key={c.label}
                className="card group text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-2 text-accent transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-sm font-medium tracking-tight text-text md:text-base">
                  {c.label}
                </p>
                <p className="mt-1 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  Future state
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
