import {
  QrCode,
  Nfc,
  Search,
  FileSearch,
  FlagTriangleRight,
  Wrench,
  Stamp,
  History,
  Building2,
  Layers,
  FileCheck2,
  Shield,
} from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const layers = [
  {
    id: 'Access',
    tag: 'Layer 01',
    title: 'Access',
    description:
      'How users reach a record. Public where it should be, authenticated where it has to be.',
    items: [
      { icon: QrCode, label: 'QR scan' },
      { icon: Nfc, label: 'NFC tap' },
      { icon: Search, label: 'Direct search' },
      { icon: FileSearch, label: 'Deep link from other tools' },
    ],
  },
  {
    id: 'Application',
    tag: 'Layer 02',
    title: 'Application',
    description:
      'What Touchpoint actually does — the workflows that turn taps and scans into structured activity.',
    items: [
      { icon: FlagTriangleRight, label: 'Maintenance logging' },
      { icon: Wrench, label: 'Service events' },
      { icon: Stamp, label: 'Inspections & approvals' },
      { icon: History, label: 'Full audit capture' },
    ],
  },
  {
    id: 'Data',
    tag: 'Layer 03',
    title: 'Data',
    description:
      'The source of truth. Relational, structured, and built to be queried — not a dumping ground.',
    items: [
      { icon: Building2, label: 'Site · Building · Level · Space' },
      { icon: Layers, label: 'System · Asset · Component' },
      { icon: FileCheck2, label: 'Documents · Records · Media' },
      { icon: Shield, label: 'Users · Roles · Audit log' },
    ],
  },
];

export function System() {
  return (
    <section
      id="system"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="System architecture"
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
            <SectionEyebrow number="04" className="justify-center">
              The system
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              Three layers,{' '}
              <span className="italic-accent text-accent">one source of truth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              Touchpoint is built as a physical-to-digital platform, not a
              tagging tool. Access stays simple. The application layer handles
              real site workflows. The data layer stays structured and fully
              audited — so every tap makes the record better.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {layers.map((layer, i) => (
            <Reveal key={layer.id} delay={0.1 + i * 0.08}>
              <div className="card-bordered h-full">
                <div className="card-inner flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xs uppercase tracking-[0.16em] text-accent">
                      {layer.tag}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="display-md mt-6 text-text">{layer.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {layer.description}
                  </p>
                  <ul className="mt-8 space-y-2 border-t border-border pt-6">
                    {layer.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-text"
                      >
                        <item.icon
                          className="h-4 w-4 shrink-0 text-accent"
                          strokeWidth={1.75}
                        />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 max-w-2xl text-center font-mono text-2xs uppercase tracking-[0.16em] text-muted">
            Works alongside existing tools (Procore, Aconex, CMMS)
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Doesn&rsquo;t replace them — it connects reality to them
          </p>
        </Reveal>
      </div>
    </section>
  );
}
