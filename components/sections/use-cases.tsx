import { ArrowUpRight, Building2, Wrench, Home } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const cases = [
  {
    icon: ArrowUpRight,
    tag: 'Handover to operations',
    title: 'Improve the transition from project completion into asset operation.',
    description:
      'Close the gap between practical completion and operational readiness with asset data that travels with the building.',
  },
  {
    icon: Wrench,
    tag: 'Plant & equipment access',
    title: 'Provide instant access to manuals, warranties, and maintenance records.',
    description:
      'Technicians reach the right information at the right asset in seconds — not by rummaging through shared drives.',
  },
  {
    icon: Building2,
    tag: 'Residential & commercial',
    title: 'Create a consistent digital layer across high-volume buildings.',
    description:
      'A repeatable standard for developers and operators managing multi-residential and commercial portfolios.',
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Use cases"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow number="07">Use cases</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Starting where the{' '}
                <span className="italic-accent text-accent">need is highest.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
                Initial deployment focuses on high-complexity assets and the
                handover moments where data continuity matters most — with
                clear pathways into infrastructure and alternative asset
                classes.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {cases.map((c, i) => (
                <Reveal key={c.tag} delay={0.1 + i * 0.08}>
                  <article className="group grid grid-cols-12 items-start gap-4 p-6 transition-colors hover:bg-surface-2/50 md:gap-8 md:p-8">
                    <div className="col-span-12 md:col-span-4">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg text-accent">
                          <c.icon className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="mt-4 font-mono text-2xs uppercase tracking-[0.14em] text-accent">
                        {c.tag}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <h3 className="text-xl font-medium leading-snug tracking-tight text-text md:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-3 max-w-[56ch] text-[0.95rem] leading-relaxed text-muted">
                        {c.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
