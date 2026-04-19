import { Tag, Link2, Smartphone, Activity, ArrowRight } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const steps = [
  {
    id: '01',
    icon: Tag,
    title: 'Tag',
    description:
      'Apply NFC or QR tags to assets, systems, and spaces during delivery or as a retrofit.',
  },
  {
    id: '02',
    icon: Link2,
    title: 'Connect',
    description:
      'Link each tag to a structured digital asset profile containing documentation and metadata.',
  },
  {
    id: '03',
    icon: Smartphone,
    title: 'Access',
    description:
      'Open information instantly on mobile. No app, no login, no friction at the point of use.',
  },
  {
    id: '04',
    icon: Activity,
    title: 'Operate',
    description:
      'Improve handover, maintenance response, and operational continuity across the lifecycle.',
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
            <SectionEyebrow number="03" className="justify-center">
              How it works
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              Simple to deploy. Easy to use.{' '}
              <span className="italic-accent text-accent">Designed to scale.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="text-muted">Asset</span>
              <ArrowRight className="h-3 w-3 text-accent" />
              <span className="text-muted">Tag</span>
              <ArrowRight className="h-3 w-3 text-accent" />
              <span className="text-muted">Phone</span>
              <ArrowRight className="h-3 w-3 text-accent" />
              <span className="text-text">Data</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={0.1 + i * 0.08}>
              <div className="relative h-full px-0 py-6 lg:border-l lg:border-border lg:px-8">
                {/* Number + icon row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    {step.id}
                  </span>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-accent">
                    <step.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-10 text-2xl font-medium tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[28ch] text-[0.95rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
