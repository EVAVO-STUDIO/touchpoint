import {
  Zap,
  History,
  GitBranchPlus,
  ShieldCheck,
  Link2,
  ScrollText,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const impacts = [
  {
    icon: Zap,
    title: 'Eliminates information friction',
    description:
      'Frontline teams move from hours of searching to seconds at the asset. No more asking where the manual is.',
    featured: true,
  },
  {
    icon: History,
    title: 'Creates real history',
    description:
      'Every interaction is captured at source — timestamped, attributed, and tied to the object. Not lost. Not disputed.',
  },
  {
    icon: GitBranchPlus,
    title: 'Bridges delivery to operations',
    description:
      'One continuous record survives practical completion. The FM team inherits a working system, not a zip file.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability by default',
    description:
      '&ldquo;Who logged this?&rdquo; stops being a question. Every write is auditable, with before-and-after state on key updates.',
  },
  {
    icon: Link2,
    title: 'Connects, doesn\u2019t replace',
    description:
      'Touchpoint works alongside Procore, Aconex, and existing CMMS tools. It&rsquo;s the physical-to-digital bridge they don&rsquo;t have.',
  },
  {
    icon: ScrollText,
    title: 'Reporting-ready from day one',
    description:
      'Structured records mean ESG, compliance, and asset-performance reporting is a query — not a forensic rebuild.',
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
              <SectionEyebrow number="07">Impact</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 max-w-[18ch] text-balance">
                More than convenience —{' '}
                <span className="italic-accent text-accent">accountability.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-muted md:text-right">
              The outcomes that make Touchpoint a system, not a scanner.
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
                <p
                  className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
