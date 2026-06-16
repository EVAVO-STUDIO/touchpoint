import { ClipboardCheck, MessageSquareText, KeyRound, FolderCheck, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Handover management',
    items: ['Settlement strategies', 'Risk management', 'Handover reporting', 'Purchaser tracking'],
  },
  {
    icon: MessageSquareText,
    title: 'Purchaser experience',
    items: ['Communication plans', 'Purchaser liaison', 'Information sessions', 'Customer care support'],
  },
  {
    icon: KeyRound,
    title: 'Inspections & handover',
    items: ['Handover packs', 'Defect reporting', 'Key handover coordination', 'Occupation readiness'],
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
              The work after Practical Completion,{' '}
              <span className="italic-accent text-accent">properly managed.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-[1.6] text-muted">
              Touchpoint brings the services New Wave Synergy already understands —
              handover, purchaser experience, inspections, digital asset handover and
              operational readiness — into one governed post-completion platform.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.08 + index * 0.05}>
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
