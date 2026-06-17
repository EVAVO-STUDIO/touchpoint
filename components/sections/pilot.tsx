import { Check } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const pilot = {
  scope: [
    'Physical inspection support',
    'Handover dashboard',
    'Customer communications',
    'Defect close-out tracking',
    'Key handover coordination',
    'Digital asset information',
    'QR & NFC asset tagging',
    'Operational readiness reporting',
  ],
  stakeholders: [
    'Developers',
    'Builders',
    'Asset owners',
    'Facilities managers',
    'Purchasers and end users',
  ],
  outcomes: [
    'Clearer purchaser experience',
    'Faster inspection visibility',
    'Lower handover risk',
    'Stronger operational readiness',
    'Better stakeholder communication',
    'Clearer post-completion governance',
  ],
};

const groups = [
  { title: 'What the pilot covers', items: pilot.scope, tag: 'Scope' },
  { title: 'Who it supports', items: pilot.stakeholders, tag: 'People' },
  { title: 'What should improve', items: pilot.outcomes, tag: 'Outcomes' },
];

export function Pilot() {
  return (
    <section
      id="pilot"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Pilot pathway"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow number="07">Pilot pathway</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Trial Touchpoint on{' '}
                <span className="italic-accent text-accent">a real handover</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-[1.6] text-muted">
                The 90-day pilot is a supported engagement with New Wave Synergy,
                not just access to a login. It is designed around a live project,
                real inspections, live purchaser questions, defect follow-up and
                the information needed before operations begin.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Discuss a pilot <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {groups.map((g, i) => (
                <Reveal key={g.title} delay={0.1 + i * 0.08}>
                  <div className="card">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium tracking-tight">
                        {g.title}
                      </h3>
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                        {g.tag}
                      </span>
                    </div>
                    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {g.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <Check className="h-2.5 w-2.5 text-accent" strokeWidth={3} />
                          </span>
                          <span className="text-[0.95rem] leading-relaxed text-text">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
