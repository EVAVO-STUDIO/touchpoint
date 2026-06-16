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
    'Improved purchaser experience',
    'Faster inspection visibility',
    'Reduced handover risk',
    'Increased operational readiness',
    'Better stakeholder communication',
    'Structured post-completion governance',
  ],
};

const groups = [
  { title: 'Pilot includes', items: pilot.scope, tag: 'Scope' },
  { title: 'Stakeholders supported', items: pilot.stakeholders, tag: 'Who' },
  { title: 'Outcomes delivered', items: pilot.outcomes, tag: 'Proof' },
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
              <SectionEyebrow number="08">Pilot pathway</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Prove the model on{' '}
                <span className="italic-accent text-accent">a live project.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-[1.6] text-muted">
                The 90-day pilot is a supported engagement, not just access to a
                tool. New Wave Synergy works with project teams across inspections,
                handover activity, purchaser communication and readiness reporting
                so Touchpoint can be tested against real post-completion pressure.
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
