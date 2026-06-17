import { Building2, HardHat, Landmark, ClipboardList, Users } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const stakeholders = [
  {
    icon: Building2,
    title: 'Developers',
    body: 'Protect settlement confidence, purchaser experience and post-completion governance when the project is most exposed.',
  },
  {
    icon: HardHat,
    title: 'Builders',
    body: 'Keep defects, inspections, handover actions and close-out responsibilities visible without chasing multiple email trails.',
  },
  {
    icon: Landmark,
    title: 'Asset owners',
    body: 'Receive a clearer building record, stronger handover evidence and fewer late surprises before operations begin.',
  },
  {
    icon: ClipboardList,
    title: 'Facilities managers',
    body: 'Find manuals, warranties, compliance records and asset information in a form that works in the field, not just in a folder.',
  },
  {
    icon: Users,
    title: 'Purchasers and end users',
    body: 'Move into a new home, workplace or asset with clearer communication, fewer unknowns and a more supported handover experience.',
  },
];

export function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Who we help"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow number="01">Who we help</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Built for the people carrying a project{' '}
                <span className="italic-accent text-accent">over the line</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
                Touchpoint supports the parties most involved after Practical
                Completion, when communication, evidence, readiness and trust matter most.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stakeholders.map((item, index) => (
                <Reveal key={item.title} delay={0.08 + index * 0.05}>
                  <article className="card h-full">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                        <item.icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium tracking-tight text-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      {item.body}
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
