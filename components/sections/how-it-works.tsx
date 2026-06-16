import {
  ClipboardList,
  MessageSquareText,
  KeyRound,
  FolderCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const stages = [
  {
    id: '01',
    icon: ClipboardList,
    title: 'Prepare',
    description:
      'Handover planning, communication strategies and project readiness assessments before the pressure of occupation begins.',
  },
  {
    id: '02',
    icon: MessageSquareText,
    title: 'Coordinate',
    description:
      'Purchaser communication, inspections, defect management and stakeholder engagement move through a structured workflow.',
  },
  {
    id: '03',
    icon: KeyRound,
    title: 'Transition',
    description:
      'Key handover, documentation management and information transfer are managed as one connected post-completion journey.',
  },
  {
    id: '04',
    icon: FolderCheck,
    title: 'Operate',
    description:
      'Digital asset records, warranties, lifecycle information and operational readiness are available when the asset goes live.',
  },
  {
    id: '05',
    icon: TrendingUp,
    title: 'Optimise',
    description:
      'Continuous reporting, asset intelligence and long-term information accessibility support stronger performance after handover.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="How it works"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow number="05" className="justify-center">
              How it works
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              One journey.{' '}
              <span className="italic-accent text-accent">Five stages.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              From the moment Practical Completion is reached through to long-term
              operations, Touchpoint manages every step of the post-completion journey.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="text-muted">Practical Completion</span>
              <ArrowRight className="h-3 w-3 text-accent" />
              <span className="text-muted">Occupation</span>
              <ArrowRight className="h-3 w-3 text-accent" />
              <span className="text-text">Operations</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-0">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={0.1 + i * 0.07}>
              <article className="relative h-full rounded-2xl border border-border bg-surface p-6 xl:rounded-none xl:border-y xl:border-l xl:border-r-0 xl:bg-transparent xl:p-8 xl:last:border-r">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    {stage.id}
                  </span>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-accent">
                    <stage.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-10 text-2xl font-medium tracking-tight md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-[32ch] text-[0.95rem] leading-relaxed text-muted">
                  {stage.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
