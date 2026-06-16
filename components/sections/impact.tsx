import {
  Clock3,
  MessageSquareText,
  ShieldCheck,
  KeyRound,
  Link2,
  ScrollText,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const impacts = [
  {
    icon: Clock3,
    title: 'Faster settlement and handover readiness',
    description:
      'Teams can see what is complete, what is outstanding and what needs attention before handover delays become commercial issues.',
    featured: true,
  },
  {
    icon: MessageSquareText,
    title: 'Clearer purchaser communication',
    description:
      'Updates, responsibilities and next steps are easier to coordinate, reducing the uncertainty that damages confidence after completion.',
  },
  {
    icon: ShieldCheck,
    title: 'Defect accountability',
    description:
      'Items are tracked, attributed and reported through a consistent process instead of being lost across spreadsheets, emails and site notes.',
  },
  {
    icon: KeyRound,
    title: 'Smoother transition to occupation',
    description:
      'Key handover, documentation and operational readiness become a managed journey, not a last-minute scramble.',
  },
  {
    icon: Link2,
    title: 'Connected asset information',
    description:
      'QR and NFC access connects physical assets to the information people need in the field, while existing systems remain in place.',
  },
  {
    icon: ScrollText,
    title: 'Reporting-ready governance',
    description:
      'Structured records support compliance, asset performance, customer care and post-completion reporting without rebuilding history later.',
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
              <SectionEyebrow number="09">Impact</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 max-w-[20ch] text-balance">
                Better handovers.{' '}
                <span className="italic-accent text-accent">Stronger operations.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-muted md:text-right">
              The outcomes that matter after Practical Completion: less friction,
              clearer accountability and more confidence for everyone inheriting the asset.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {impacts.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.08 + i * 0.06}
              className={item.featured ? 'lg:col-span-2' : ''}
            >
              <div className={`card h-full ${item.featured ? 'bg-surface-2/60' : ''}`}>
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
