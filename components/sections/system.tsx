import {
  ClipboardCheck,
  MessageSquareText,
  KeyRound,
  FolderCheck,
  QrCode,
  ShieldCheck,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const modules = [
  {
    icon: ClipboardCheck,
    tag: 'Close-out',
    title: 'Handover management',
    description:
      'Helps the project team keep settlement strategy, handover risks, reporting and purchaser tracking in one clear view.',
    items: ['Settlement strategies', 'Risk registers', 'Reporting dashboards', 'Purchaser tracking'],
  },
  {
    icon: MessageSquareText,
    tag: 'Purchasers',
    title: 'Customer experience',
    description:
      'Gives purchaser liaison, communication plans, information sessions and customer care a clearer rhythm after completion.',
    items: ['Communication plans', 'Information sessions', 'Direct communications', 'Customer portals'],
  },
  {
    icon: KeyRound,
    tag: 'On site',
    title: 'Inspections & handover',
    description:
      'Keeps purchaser inspections, valuation inspections, key handover, defect reporting and occupation readiness visible.',
    items: ['Purchaser inspections', 'Valuation inspections', 'Key handover', 'Occupation readiness'],
  },
  {
    icon: FolderCheck,
    tag: 'Records',
    title: 'Asset information',
    description:
      'Keeps manuals, warranties, certificates, as-builts, commissioning records and asset registers structured and accessible.',
    items: ['Manuals & warranties', 'Certificates', 'As-builts', 'Commissioning records'],
  },
  {
    icon: QrCode,
    tag: 'Field data',
    title: 'Digital asset intelligence',
    description:
      'Links physical assets to useful records through QR codes, NFC tags, searchable information, audit logs and lifecycle data.',
    items: ['QR codes', 'NFC tags', 'Searchable records', 'Audit logs'],
  },
  {
    icon: ShieldCheck,
    tag: 'Readiness',
    title: 'Operational readiness',
    description:
      'Helps readiness assessments, FM transition planning, building information packs and governance reporting happen before operations begin.',
    items: ['Readiness assessments', 'FM transition', 'Building info packs', 'Governance reporting'],
  },
];

export function System() {
  return (
    <section
      id="system"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Support model"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, var(--color-accent-soft), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow number="05" className="justify-center">
              Support model
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              People do the work.{' '}
              <span className="italic-accent text-accent">Touchpoint keeps it visible.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              New Wave Synergy still leads the practical work: inspections,
              purchaser communication, defect follow-up, document control and
              readiness checks. Touchpoint keeps the record clear so nothing is
              lost between site, project teams and operations.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, i) => (
            <Reveal key={module.title} delay={0.1 + i * 0.06}>
              <article className="card-bordered h-full">
                <div className="card-inner flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">
                      {module.tag}
                    </span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                      <module.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-text md:text-2xl">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {module.description}
                  </p>
                  <ul className="mt-8 space-y-2 border-t border-border pt-6">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-text"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 max-w-2xl text-center font-mono text-2xs uppercase tracking-[0.16em] text-muted">
            People on site · Clear records · Field-ready information · Governance from day one
          </p>
        </Reveal>
      </div>
    </section>
  );
}
