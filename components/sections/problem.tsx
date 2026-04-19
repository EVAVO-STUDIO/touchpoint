import { FileWarning, Network, Unplug } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const points = [
  {
    icon: FileWarning,
    title: 'Asset information is difficult to locate',
    description:
      'O&M documentation is fragmented across PDFs, hard drives, and handover binders — rarely accessible where the asset actually lives.',
  },
  {
    icon: Network,
    title: 'Teams rely on manual workflows',
    description:
      'Disconnected systems, spreadsheets, and site visits dominate the first years of operation, long after handover is signed off.',
  },
  {
    icon: Unplug,
    title: 'Poor data continuity drives defects',
    description:
      'The gap between delivery and operations creates rework, missed warranties, and compounding inefficiencies across the portfolio.',
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="The problem"
    >
      <div className="container-tight">
        <Reveal>
          <SectionEyebrow number="01">The problem</SectionEyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h2 className="display-lg text-balance">
                The missing layer in{' '}
                <span className="italic-accent text-accent">real assets.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-[1.6] text-muted">
                Across real estate and infrastructure, asset data is not
                effectively transferred from delivery into operations. O&amp;M
                documentation is often fragmented, inaccessible, and
                disconnected from the asset itself — creating inefficiencies
                across handover, maintenance, and lifecycle performance.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="card h-full">
                <p.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium tracking-tight text-text">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
