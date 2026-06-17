import { FileWarning, MessageSquareWarning, ClipboardX } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const points = [
  {
    icon: MessageSquareWarning,
    title: 'Purchasers are left chasing answers',
    description:
      'After Practical Completion, updates, inspection outcomes, defect status and handover information often sit across email chains, spreadsheets and individual inboxes. The experience depends on who remembers the latest version.',
  },
  {
    icon: ClipboardX,
    title: 'Defects lose clear ownership',
    description:
      'Unresolved items, unclear responsibility and fragmented reporting create friction between developers, builders, purchasers and facilities teams at the point confidence should be increasing.',
  },
  {
    icon: FileWarning,
    title: 'Information arrives as a document dump',
    description:
      'Manuals, warranties, certificates, as-builts and asset registers often arrive too late, with too little structure, and with no easy way for operations teams to use them in the field.',
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
                The hard part often starts when construction is technically complete:
                purchasers need answers, inspections need evidence, defects need
                owners, keys need coordination and operations teams need reliable
                records. If those pieces are managed in different places, the handover
                becomes harder than it needs to be.
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
