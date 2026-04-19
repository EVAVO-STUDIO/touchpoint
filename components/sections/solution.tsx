import { Nfc, QrCode, Smartphone, FileText, type LucideIcon } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const capabilities = [
  {
    icon: FileText,
    label: 'O&M manuals',
  },
  {
    icon: FileText,
    label: 'FF&E specifications',
  },
  {
    icon: FileText,
    label: 'Warranty & lifecycle',
  },
  {
    icon: FileText,
    label: 'Maintenance schedules',
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="The solution"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow number="02">The solution</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Introducing{' '}
                <span className="italic-accent text-accent">Touchpoint.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-[1.6] text-muted">
                Touchpoint is a digital asset intelligence layer embedded into
                the built environment. It connects physical assets to
                structured data — manuals, warranties, specifications, and
                maintenance information — all accessible instantly via NFC and
                QR technology.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Smartphone className="h-4 w-4 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-base font-medium text-text">
                    Tap or scan to access asset intelligence at the point of
                    use.
                  </p>
                  <p className="mt-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    No app · No login · Works on any modern phone
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <SolutionVisual capabilities={capabilities} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Capability {
  icon: LucideIcon;
  label: string;
}

function SolutionVisual({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        {/* NFC mode card */}
        <div className="card-bordered">
          <div className="card-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 mask-radial" aria-hidden />
            <div className="relative z-10">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2">
                <Nfc className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">NFC tag</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tap-to-access. Embedded behind finishes or mounted to plant.
              </p>
              <p className="mt-6 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                &lt; 0.5s response
              </p>
            </div>
          </div>
        </div>

        {/* QR mode card */}
        <div className="card-bordered">
          <div className="card-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 mask-radial" aria-hidden />
            <div className="relative z-10">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2">
                <QrCode className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">QR code</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scan-to-access. Printed or etched onto asset plates.
              </p>
              <p className="mt-6 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                Universal fallback
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data list */}
      <div className="mt-4 rounded-2xl border border-border bg-surface p-6 md:mt-5 md:p-7">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
          Structured asset profile
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {capabilities.map((c) => (
            <li
              key={c.label}
              className="flex items-center gap-3 bg-surface px-4 py-3.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-sm text-text">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
