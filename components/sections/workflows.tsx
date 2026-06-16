import {
  ClipboardCheck,
  KeyRound,
  MessageSquareText,
  ShieldCheck,
  SearchCheck,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

interface Workflow {
  icon: typeof ClipboardCheck;
  tag: string;
  title: string;
  description: string;
  steps: string[];
  who: string;
}

const workflows: Workflow[] = [
  {
    icon: SearchCheck,
    tag: 'On site',
    title: 'Physical inspection',
    description:
      'Site walks, purchaser inspections and valuation inspections are captured as proper project records, not scattered notes and follow-up emails.',
    steps: [
      'Walk the asset or lot on site',
      'Capture findings, photos and status',
      'Assign ownership and next action',
      'Report progress without rebuilding the record',
    ],
    who: 'NWS, developers, builders, purchasers',
  },
  {
    icon: ClipboardCheck,
    tag: 'Close-out',
    title: 'Defect close-out',
    description:
      'Outstanding defects are easier to govern when each item has evidence, responsibility, timing and a clear path to closure.',
    steps: [
      'Log item with location and evidence',
      'Assign to the right party',
      'Track updates and completion status',
      'Retain a clear audit trail',
    ],
    who: 'Builders, developers, project teams',
  },
  {
    icon: MessageSquareText,
    tag: 'Purchasers',
    title: 'Purchaser communication',
    description:
      'Purchasers and end users receive clearer information during the period when uncertainty can quickly become frustration.',
    steps: [
      'Prepare communication plan',
      'Coordinate updates and responses',
      'Track inspection and handover status',
      'Reduce repeated questions and confusion',
    ],
    who: 'Developers, customer care teams, purchasers',
  },
  {
    icon: KeyRound,
    tag: 'Handover',
    title: 'Key handover',
    description:
      'Keys, documents, access requirements and final readiness steps are coordinated as a managed transition, not a last-minute scramble.',
    steps: [
      'Confirm handover readiness',
      'Coordinate keys and documents',
      'Record handover completion',
      'Escalate anything still outstanding',
    ],
    who: 'Developers, owners, purchasers, FM teams',
  },
  {
    icon: ShieldCheck,
    tag: 'Readiness',
    title: 'Operational readiness',
    description:
      'Facilities teams inherit a clearer picture of the asset before operations begin, with documentation and readiness evidence in one place.',
    steps: [
      'Review readiness requirements',
      'Confirm asset information is available',
      'Prepare transition and FM packs',
      'Report readiness gaps early',
    ],
    who: 'Asset owners, FM teams, operators',
  },
];

export function Workflows() {
  return (
    <section
      id="workflows"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Workflows"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow number="06">Workflows</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                What happens on site,{' '}
                <span className="italic-accent text-accent">captured properly.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
                Touchpoint supports the practical work that happens after Practical
                Completion: inspections, defects, purchaser updates, key handover
                and operational readiness. The work stays human; the record becomes clearer.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {workflows.map((w, i) => (
                <Reveal key={w.tag} delay={0.1 + i * 0.08}>
                  <article className="card group h-full">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                        <w.icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                        {w.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-medium tracking-tight text-text md:text-2xl">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      {w.description}
                    </p>
                    <ol className="mt-6 space-y-2 border-t border-border pt-5">
                      {w.steps.map((step, j) => (
                        <li key={step} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[10px] font-medium text-accent">
                            {j + 1}
                          </span>
                          <span className="text-[0.925rem] leading-relaxed text-text">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-6 border-t border-border pt-4 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                      Used by · {w.who}
                    </p>
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
