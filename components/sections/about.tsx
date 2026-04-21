import Image from 'next/image';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site';

const credentials = [
  { value: '10+', label: 'Years in delivery' },
  { value: 'AU', label: 'Based & operating' },
  { value: 'Bldg. + Infra.', label: 'Project exposure' },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="About"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow number="08">About</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Built from{' '}
                <span className="italic-accent text-accent">industry experience.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[60ch] text-pretty text-lg leading-[1.6] text-muted">
                Touchpoint is developed by {siteConfig.company} — a construction
                and digital delivery consultancy specialising in project
                closeout, defects management, and operational readiness. The
                product is grounded in direct site experience across building
                and infrastructure projects, not theoretical use cases.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {credentials.map((c) => (
                  <div key={c.label}>
                    <p
                      className="font-display text-3xl tracking-tight text-text md:text-4xl"
                      style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 40" }}
                    >
                      {c.value}
                    </p>
                    <p className="mt-2 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={siteConfig.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Visit {siteConfig.parent.name} <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <figure className="card-bordered">
                <div className="card-inner relative overflow-hidden p-0">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/naomi-mabvurira.jpg"
                      alt="Naomi Mabvurira, Managing Director of New Wave Synergy, on-site in New Wave Synergy branded PPE"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-bg/0" />
                  </div>
                  <figcaption className="p-6 md:p-7">
                    <p
                      className="font-display text-2xl tracking-tight text-text"
                      style={{ fontVariationSettings: "'opsz' 72, 'SOFT' 40" }}
                    >
                      {siteConfig.contact.person}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {siteConfig.contact.role}, {siteConfig.contact.entity}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
