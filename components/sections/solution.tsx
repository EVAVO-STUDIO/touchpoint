import { Nfc, QrCode, ClipboardCheck, MessageSquareText, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'People-led close-out support',
    body: 'New Wave Synergy supports the practical work after completion: site walks, purchaser inspections, defect follow-up, handover planning and readiness checks.',
  },
  {
    icon: MessageSquareText,
    title: 'Clear communication between parties',
    body: 'Developers, builders, purchasers, asset owners and facilities teams can work from the same view instead of chasing status across meetings, inboxes and spreadsheets.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance built into the process',
    body: 'Every inspection, update, handover item and asset record can be tracked with ownership, timing, evidence and reporting context.',
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Solution"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow number="03">The solution</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Touchpoint keeps the handover phase{' '}
                <span className="italic-accent text-accent">under control</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-[1.6] text-muted">
                It combines New Wave Synergy&rsquo;s hands-on post-completion delivery
                support with a shared system for inspections, defects, handover
                tasks, documents and operational readiness.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-[52ch] text-pretty text-base leading-relaxed text-muted">
                The work still happens with people on site and in the project team.
                Touchpoint makes that work visible, easier to coordinate and easier
                to hand across when the building moves into occupation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-10 rounded-2xl border border-border bg-surface p-6">
                <p className="display-md italic-accent leading-[1.2] text-text">
                  &ldquo;The project changes hands
                  <br />
                  The intelligence should not&rdquo;
                </p>
                <footer className="mt-4 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  Touchpoint, in one line
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.08}>
                  <div className="card group">
                    <div className="flex items-start gap-5">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                        <p.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium tracking-tight text-text">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                          {p.body}
                        </p>
                      </div>
                      <span className="hidden font-mono text-2xs uppercase tracking-[0.14em] text-muted md:inline">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-border bg-surface-2/40 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <Nfc className="h-4 w-4 text-accent" strokeWidth={1.75} />
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    NFC tap
                  </span>
                </div>
                <span className="h-3 w-px bg-border-strong" />
                <div className="flex items-center gap-2.5">
                  <QrCode className="h-4 w-4 text-accent" strokeWidth={1.75} />
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    QR scan
                  </span>
                </div>
                <span className="h-3 w-px bg-border-strong" />
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  Physical inspections · Handover workflows · Operational readiness
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
