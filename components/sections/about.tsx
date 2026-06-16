import Image from 'next/image';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site';

const credentials = [
  { value: '10+', label: 'Years in delivery' },
  { value: 'AU + NZ', label: 'Operating region' },
  { value: 'Tier 1–2 + Govt', label: 'Project exposure' },
];

const experience = [
  'Tier 1 and Tier 2 contractors',
  'Government projects',
  'Residential developments',
  'Infrastructure projects',
  'Asset owners',
  'Facilities management teams',
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
              <SectionEyebrow number="09">About</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Built from real project{' '}
                <span className="italic-accent text-accent">delivery experience.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[60ch] text-pretty text-lg leading-[1.6] text-muted">
                Touchpoint is a product of {siteConfig.company} — a specialist
                consultancy focused on project delivery and close-out,
                operational readiness and post-completion performance across
                Australia and New Zealand.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[60ch] text-pretty text-base leading-relaxed text-muted">
                The platform has been developed from direct experience supporting
                the teams responsible for taking projects from Practical
                Completion into occupation and operations.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {experience.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-5 w-1 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-8 sm:grid-cols-3">
                {credentials.map((c) => (
                  <div key={c.label}>
                    <p className="font-display text-3xl tracking-tight text-text sm:text-2xl md:text-4xl">
                      {c.value}
                    </p>
                    <p className="mt-2 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="card-bordered overflow-hidden">
                <div className="card-inner">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-2">
                    <Image
                      src="/images/nws-logo.png"
                      alt="New Wave Synergy logo"
                      fill
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="object-contain p-10"
                    />
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    Touchpoint is designed to extend New Wave Synergy&rsquo;s practical
                    delivery capability into the post-completion phase.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
