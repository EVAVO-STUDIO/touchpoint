import {
  Clock3,
  MessageSquareText,
  ShieldCheck,
  KeyRound,
  Link2,
  ScrollText,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const impacts = [
  {
    icon: Clock3,
    title: 'Fewer handover delays',
    description:
      'Project teams can see which inspections, defects, documents and handover actions still need attention before they become settlement or occupancy issues.',
  },
  {
    icon: MessageSquareText,
    title: 'Calmer purchaser communication',
    description:
      'Purchasers receive clearer updates and next steps during the stage where silence, uncertainty and repeated follow-ups usually create frustration.',
  },
  {
    icon: ShieldCheck,
    title: 'Defects that stay visible',
    description:
      'Outstanding items keep an owner, evidence trail and status, so they are not buried in site notes, inboxes or spreadsheet versions.',
  },
  {
    icon: KeyRound,
    title: 'A cleaner move into occupancy',
    description:
      'Keys, inspections, documents, access requirements and readiness checks are coordinated as a managed transition rather than a last-minute rush.',
  },
  {
    icon: Link2,
    title: 'Asset information people can use',
    description:
      'QR and NFC access help connect physical assets to the right manuals, warranties, certificates and records when people are actually in the field.',
  },
  {
    icon: ScrollText,
    title: 'Evidence for decisions and reporting',
    description:
      'Structured records give developers, owners and facilities teams a clearer basis for reporting, escalation and post-completion governance.',
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Impact"
    >
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionEyebrow number="08">Impact</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 max-w-[20ch] text-balance">
                Fewer loose ends.{' '}
                <span className="italic-accent text-accent">A cleaner handover</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-muted md:text-right">
              Touchpoint reduces the manual chasing that usually sits between
              completion, settlement, occupancy and operations.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {impacts.map((item, i) => (
            <Reveal key={item.title} delay={0.08 + i * 0.06}>
              <div className="card h-full">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-text md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
