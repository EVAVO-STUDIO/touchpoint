import { FileWarning, MapPinOff, Unplug } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';

const points = [
  {
    icon: FileWarning,
    title: 'Information exists but it\u2019s unusable',
    description:
      'Manuals buried in PDFs. Drawings scattered across platforms. Warranties in email chains. Decisions locked in people\u2019s heads. The data is there — it just can\u2019t be reached.',
  },
  {
    icon: MapPinOff,
    title: 'No link to physical reality',
    description:
      'The asset register doesn\u2019t match what\u2019s on site. Defects aren\u2019t tied to location. Maintenance history lives somewhere else. Nothing connects the digital record to the thing you\u2019re standing in front of.',
  },
  {
    icon: Unplug,
    title: 'Handover is a document dump',
    description:
      'Practical completion arrives as a zip file with no structure, no usability, and no continuity. Operations teams inherit paper instead of a working system — and maintenance starts blind.',
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="The problem"
    >
      <div className="container-tight">
        <Reveal>
          <SectionEyebrow number="01">The problem</SectionEyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h2 className="display-lg text-balance">
                The missing layer in{' '}
                <span className="italic-accent text-accent">real assets.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-[1.6] text-muted">
                Across real estate and infrastructure, asset data doesn&rsquo;t
                transfer from delivery into operations. The result is wasted
                time, poor decisions, defect disputes, and assets that quietly
                underperform for years after practical completion.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="card h-full">
                <p.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium tracking-tight text-text">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
