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
    tag: 'Module 01',
    title: 'Handover Management',
    description:
      'Settlement strategies, reporting dashboards, risk registers and purchaser tracking in one structured handover view.',
    items: ['Settlement strategies', 'Risk registers', 'Reporting dashboards', 'Purchaser tracking'],
  },
  {
    icon: MessageSquareText,
    tag: 'Module 02',
    title: 'Customer Experience',
    description:
      'Communication plans, information sessions, direct communications and customer portals for a more supported transition.',
    items: ['Communication plans', 'Information sessions', 'Direct communications', 'Customer portals'],
  },
  {
    icon: KeyRound,
    tag: 'Module 03',
    title: 'Inspections & Handover',
    description:
      'Purchaser inspections, key handovers, defect reporting and occupation readiness coordinated through one platform.',
    items: ['Purchaser inspections', 'Key handovers', 'Defect reporting', 'Occupation readiness'],
  },
  {
    icon: FolderCheck,
    tag: 'Module 04',
    title: 'Asset Information',
    description:
      'Manuals, warranties, certificates, as-builts, commissioning records and asset registers remain structured and accessible.',
    items: ['Manuals & warranties', 'Certificates', 'As-builts', 'Commissioning records'],
  },
  {
    icon: QrCode,
    tag: 'Module 05',
    title: 'Digital Asset Intelligence',
    description:
      'QR codes, NFC tags, searchable records, audit logs and lifecycle data management connect physical assets to digital records.',
    items: ['QR codes', 'NFC tags', 'Searchable records', 'Audit logs'],
  },
  {
    icon: ShieldCheck,
    tag: 'Module 06',
    title: 'Operational Readiness',
    description:
      'Readiness assessments, FM transition planning, building information packs and governance reporting before operations begin.',
    items: ['Readiness assessments', 'FM transition', 'Building info packs', 'Governance reporting'],
  },
];

export function System() {
  return (
    <section
      id="system"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Platform modules"
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
            <SectionEyebrow number="06" className="justify-center">
              The platform
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              One platform. Complete{' '}
              <span className="italic-accent text-accent">post-completion management.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              Six integrated modules connect people, process and technology across
              the post-completion lifecycle — from settlement and purchaser
              communication through to digital asset information and operational readiness.
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
            Handover Management · Customer Experience · Inspections · Asset Information · Digital Intelligence · Operational Readiness
          </p>
        </Reveal>
      </div>
    </section>
  );
}
