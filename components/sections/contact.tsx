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
              <SectionEyebrow number="11">Explore a pilot</SectionEyebrow>
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
                  label={siteConfig.contact.email}
                  icon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
                />
                <ContactLink
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  eyebrow="Direct"
                  label={siteConfig.contact.phoneDisplay}
                  icon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
                />
                <ContactLink
                  href={siteConfig.parent.contactUrl}
                  eyebrow="Main office"
                  label="newwavesynergy.com/contact"
                  external
                  icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="card-bordered"
                noValidate
              >
                <div className="card-inner space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                    <Field
                      label="Company"
                      name="company"
                      placeholder="Organisation"
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    required
                    placeholder="Tell us about your project, pilot interest, or how we might collaborate."
                  />

                  <noscript>
                    <p className="rounded-xl border border-border bg-bg px-4 py-3 text-sm leading-relaxed text-muted">
                      This form opens an email draft when JavaScript is enabled. You can
                      still contact Touchpoint directly at{' '}
                      <a className="font-medium text-accent underline-offset-4 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                        {siteConfig.contact.email}
                      </a>{' '}
                      or call {siteConfig.contact.phoneDisplay}.
                    </p>
                  </noscript>

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                      We&apos;ll respond within 2 business days.
                    </p>
                    <button
                      type="submit"
                      disabled={state !== 'idle'}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-text px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft disabled:cursor-wait disabled:opacity-70"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {state === 'sent' ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="inline-flex items-center gap-2"
                          >
                            Opening your email
                            <Check className="h-4 w-4" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="inline-flex items-center gap-2"
                          >
                            Start the conversation
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  eyebrow,
  label,
  icon,
  external,
}: {
  href: string;
  eyebrow: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </p>
        <p className="truncate text-sm font-medium text-text">
          {label}
        </p>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" />
    </a>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: 'input' | 'textarea';
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  as = 'input',
}: FieldProps) {
  const baseClasses =
    'w-full rounded-xl border border-border bg-bg px-4 py-3.5 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft';

  return (
    <label className="block">
      <span className="mb-2 block font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </label>
  );
}
