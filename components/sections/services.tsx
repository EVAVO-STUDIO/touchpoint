import { ClipboardCheck, MessageSquareText, KeyRound, FolderCheck, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Handover management',
    items: ['Settlement strategies', 'Close-out planning', 'Handover reporting', 'Purchaser tracking'],
  },
  {
    icon: MessageSquareText,
    title: 'Purchaser experience',
    items: ['Communication plans', 'Purchaser liaison', 'Information sessions', 'Customer care support'],
  },
  {
    icon: KeyRound,
    title: 'Physical inspections & handover',
    items: ['Purchaser inspections', 'Valuation inspections', 'Key handover coordination', 'Occupation readiness'],
  },
  {
    icon: FolderCheck,
    title: 'Digital asset handover',
    items: ['O&M manuals', 'As-built documentation', 'Warranties & certificates', 'QR & NFC asset tagging'],
  },
  {
    icon: ShieldCheck,
    title: 'Operational readiness',
    items: ['Readiness assessments', 'FM readiness', 'Governance reporting', 'Asset transition strategies'],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Post-completion services"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow number="04" className="justify-center">
              Our services
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-8 text-balance">
              Practical handover work,{' '}
              <span className="italic-accent text-accent">properly controlled.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              Touchpoint gives structure to the work New Wave Synergy already does
              on real projects: inspections, handover coordination, purchaser
              support, defect close-out, asset information and operational readiness.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={0.08 + index * 0.05}
              className={index === 2 ? 'lg:row-span-2' : ''}
            >
              <article className="card flex h-full flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                  <service.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-lg font-medium tracking-tight text-text">
                  {service.title}
                </h3>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="text-[0.9rem] leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
