import {
  ShieldCheck,
  Zap,
  Wrench,
  Timer,
  Recycle,
  FileCheck2,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const impacts = [
  {
    icon: ShieldCheck,
    title: 'Reduced defects and rework',
    description:
      'Clearer asset data at handover closes the loop between delivery teams and operators.',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Faster access to operational information',
    description:
      'Frontline teams move from hours of searching to seconds at the asset.',
  },
  {
    icon: Wrench,
    title: 'Improved maintenance efficiency',
    description:
      'Right asset, right procedure, right warranty — on the first visit.',
  },
  {
    icon: Timer,
    title: 'Extended asset lifespan',
    description:
      'Condition-based servicing and timely interventions protect capital.',
  },
  {
    icon: Recycle,
    title: 'Reduced documentation waste',
    description:
      'Paper manuals, duplicate binders, and printed guides become unnecessary.',
  },
  {
    icon: FileCheck2,
    title: 'Stronger ESG and compliance readiness',
    description:
      'Traceable, auditable asset records aligned to reporting frameworks.',
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Impact"
    >
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionEyebrow number="05">Impact</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 max-w-[18ch] text-balance">
                Designed to improve{' '}
                <span className="italic-accent text-accent">
                  asset performance.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-muted md:text-right">
              Outcomes across the asset lifecycle — from handover through
              long-term operations.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {impacts.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.1 + i * 0.06}
              className={item.featured ? 'lg:col-span-2' : ''}
            >
              <div
                className={`card h-full ${
                  item.featured
                    ? 'bg-surface-2/60'
                    : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-text md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
