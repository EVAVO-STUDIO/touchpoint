import { FileWarning, MessageSquareWarning, ClipboardX } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const points = [
  {
    icon: MessageSquareWarning,
    title: 'Purchasers are left chasing answers',
    description:
      'After Practical Completion, updates, inspection outcomes, defect status and handover information often sit across email chains, spreadsheets and individual inboxes. The customer experience depends on who remembers what.',
  },
  {
    icon: ClipboardX,
    title: 'Defects become a governance problem',
    description:
      'Unresolved items, unclear ownership and fragmented reporting create unnecessary friction between developers, builders, purchasers and facilities teams exactly when confidence should be increasing.',
  },
  {
    icon: FileWarning,
    title: 'Handover information arrives too late',
    description:
      'Manuals, warranties, certificates, as-builts and asset registers are often delivered as a document dump, not as usable information that operations teams can trust from day one.',
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
          <SectionEyebrow number="02">The problem</SectionEyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h2 className="display-lg text-balance">
                Practical Completion is not{' '}
                <span className="italic-accent text-accent">the end of the project</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-[1.6] text-muted">
                The most sensitive phase often begins after construction is
                technically complete: purchaser communications, inspections,
                defects, key handover, document transfer and operational readiness.
                When those pieces are managed in different places, the work becomes
                reactive, expensive and hard to govern.
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
