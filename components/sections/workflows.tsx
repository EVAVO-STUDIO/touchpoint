import {
  FlagTriangleRight,
  KeyRound,
  ClipboardCheck,
  Wrench,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

interface Workflow {
  icon: typeof FlagTriangleRight;
  tag: string;
  title: string;
  description: string;
  steps: string[];
  who: string;
}

const workflows: Workflow[] = [
  {
    icon: FlagTriangleRight,
    tag: 'Workflow 01',
    title: 'Defect logging',
    description:
      'From &ldquo;there&rsquo;s an issue&rdquo; to a structured, assigned, photographed defect in seconds — with no typing the location or guessing the asset.',
    steps: [
      'Scan or tap the asset tag',
      'Location & asset auto-populated',
      'Take photo, add note, set severity',
      'Assign to contractor, set due date',
    ],
    who: 'Supervisors, technicians, clients',
  },
  {
    icon: KeyRound,
    tag: 'Workflow 02',
    title: 'Handover',
    description:
      'Replace the practical-completion document dump with something a facility manager can actually use on day one.',
    steps: [
      'Client or operator taps the asset',
      'Opens manuals, warranties, certificates',
      'Sees installer, commissioning date, serial',
      'No PDF digging. No missing records.',
    ],
    who: 'Developers, operators, FM teams',
  },
  {
    icon: ClipboardCheck,
    tag: 'Workflow 03',
    title: 'Commissioning',
    description:
      'Structured checklists at the point of use, with evidence attached to the asset itself — not stored in a separate folder someone has to find later.',
    steps: [
      'Tap asset to open the right checklist',
      'Complete items with photos & notes',
      'Sign off if permitted by role',
      'Evidence written to asset record',
    ],
    who: 'Contractors, commissioning agents',
  },
  {
    icon: Wrench,
    tag: 'Workflow 04',
    title: 'Maintenance',
    description:
      'Tap an asset and see everything that&rsquo;s ever happened to it. Log work at source. Real history replaces guesswork.',
    steps: [
      'Tap asset → full service history',
      'Log work performed & outcome',
      'Attach photos, mark parts replaced',
      'Set next service due date',
    ],
    who: 'Facility managers, field technicians',
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
              <SectionEyebrow number="05">Workflows</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Built for the site,{' '}
                <span className="italic-accent text-accent">not the spreadsheet.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
                Touchpoint is designed around what actually happens on real
                projects — defect calls, handover hand-offs, commissioning
                sign-offs, maintenance visits. Every workflow is captured
                where it happens, in under a minute.
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
                    <p
                      className="mt-3 text-[0.95rem] leading-relaxed text-muted"
                      dangerouslySetInnerHTML={{ __html: w.description }}
                    />
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
