'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { Mail, Phone, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site';

export function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = `Touchpoint pilot enquiry — ${company || name || 'New contact'}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
      '',
      '— Sent from touchpoint.newwavesynergy.com',
    ].join('\n');

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailto;
      setState('sent');
    }, 400);
  }

  return (
    <section
      id="contact"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Contact"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-radial-glow opacity-70"
        aria-hidden
      />

      <div className="container-tight">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow number="10">Explore a pilot</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-8 text-balance">
                Bring Touchpoint into{' '}
                <span className="italic-accent text-accent">a live handover.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-[1.6] text-muted">
                Talk to New Wave Synergy about a supported pilot for a real project:
                physical inspections, defect close-out, purchaser communication,
                key handover, asset information and operational readiness.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-4">
                <ContactLink
                  href={`mailto:${siteConfig.contact.email}`}
                  eyebrow="Email"
                  value={siteConfig.contact.email}
                  icon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
                />
                <ContactLink
                  href={`tel:${siteConfig.contact.phone}`}
                  eyebrow="Phone"
                  value={siteConfig.contact.phoneDisplay}
                  icon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card-bordered">
              <div className="card-inner">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" autoComplete="name" required />
                  <Field label="Company" name="company" autoComplete="organization" required />
                </div>
                <div className="mt-4">
                  <Field label="Email" name="email" type="email" autoComplete="email" required />
                </div>
                <label className="mt-4 block">
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-3 w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    placeholder="Tell us about the project, handover phase, stakeholders and what you would like to test."
                  />
                </label>

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {state === 'sent' ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="inline-flex items-center gap-2"
                      >
                        Prepared email <Check className="h-4 w-4" />
                      </motion.span>
                    ) : state === 'sending' ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        Preparing email…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="inline-flex items-center gap-2"
                      >
                        Start a pilot conversation <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-3 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
      />
    </label>
  );
}

function ContactLink({
  href,
  eyebrow,
  value,
  icon,
}: {
  href: string;
  eyebrow: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <a href={href} className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/60">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-2xs uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </span>
        <span className="mt-1 block text-sm font-medium text-text group-hover:text-accent">
          {value}
        </span>
      </span>
    </a>
  );
}
