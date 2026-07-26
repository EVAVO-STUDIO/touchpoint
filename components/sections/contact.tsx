'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { Mail, Phone, ArrowUpRight, Check, CircleAlert } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site';

const CONTACT_LIMITS = Object.freeze({
  name: 100,
  company: 160,
  email: 254,
  message: 2_000,
  messageMinimum: 20,
  subject: 180,
});

type ContactState = 'idle' | 'opening' | 'prepared' | 'error';

export function Contact() {
  const [state, setState] = useState<ContactState>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState('opening');
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = `Touchpoint pilot enquiry: ${company || name || 'New contact'}`.slice(
      0,
      CONTACT_LIMITS.subject,
    );
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
      '',
      'Prepared at touchpointsynergy.com. Review and send this draft from your email application.',
    ].join('\n');

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.assign(mailto);
      setState('prepared');
    } catch {
      setState('error');
    }
  }

  const statusMessage =
    state === 'prepared'
      ? 'Your email application should open with a draft. Review it and choose Send there; Touchpoint has not sent anything automatically.'
      : state === 'error'
        ? `The email application could not be opened. Email ${siteConfig.contact.email} directly instead.`
        : state === 'opening'
          ? 'Opening your email application…'
          : 'Submitting this form opens a draft in your email application. Nothing is sent automatically.';

  return (
    <section
      id="contact"
      className="relative border-t border-border py-24 md:py-32"
      aria-label="Contact"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 opacity-55"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top, var(--color-accent-soft), transparent 68%)',
        }}
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
                Pilot the future of{' '}
                <span className="italic-accent text-accent">post-completion</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-[1.6] text-muted">
                Touchpoint is being positioned for pilot deployment across live
                developments in Australia and New Zealand. For partnership
                discussions, pilot opportunities or investor conversations, get in touch.
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
            <form onSubmit={handleSubmit} className="card-bordered" noValidate={false}>
              <div className="card-inner">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    autoComplete="name"
                    maxLength={CONTACT_LIMITS.name}
                    required
                  />
                  <Field
                    label="Company"
                    name="company"
                    autoComplete="organization"
                    maxLength={CONTACT_LIMITS.company}
                    required
                  />
                </div>
                <div className="mt-4">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    maxLength={CONTACT_LIMITS.email}
                    required
                  />
                </div>
                <label className="mt-4 block" htmlFor="touchpoint-contact-message">
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                    Message
                  </span>
                  <textarea
                    id="touchpoint-contact-message"
                    name="message"
                    required
                    minLength={CONTACT_LIMITS.messageMinimum}
                    maxLength={CONTACT_LIMITS.message}
                    rows={6}
                    aria-describedby="touchpoint-message-guidance"
                    className="mt-3 min-h-36 w-full resize-y rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    placeholder="Tell us about the project, handover phase, stakeholders and what you would like to test."
                  />
                </label>
                <p
                  id="touchpoint-message-guidance"
                  className="mt-2 max-w-[64ch] text-xs leading-5 text-muted"
                >
                  Use {CONTACT_LIMITS.messageMinimum}–{CONTACT_LIMITS.message.toLocaleString()}{' '}
                  characters. Do not include passwords, access credentials or confidential
                  project records.
                </p>

                <button
                  type="submit"
                  disabled={state === 'opening'}
                  aria-describedby="touchpoint-contact-status"
                  className="btn-primary mt-6 min-h-12 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {state === 'prepared' ? (
                    <span className="inline-flex items-center gap-2">
                      Open email draft again <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                  ) : state === 'opening' ? (
                    'Opening email application…'
                  ) : state === 'error' ? (
                    <span className="inline-flex items-center gap-2">
                      Try opening email draft <CircleAlert className="h-4 w-4" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Prepare pilot enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </button>

                <p
                  id="touchpoint-contact-status"
                  role={state === 'error' ? 'alert' : 'status'}
                  aria-live={state === 'error' ? 'assertive' : 'polite'}
                  className={`mt-4 max-w-[64ch] text-sm leading-6 ${
                    state === 'error' ? 'text-red-500' : 'text-muted'
                  }`}
                >
                  {statusMessage}
                </p>
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
  inputMode,
  autoComplete,
  maxLength,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?: 'email' | 'text';
  autoComplete?: string;
  maxLength: number;
  required?: boolean;
}) {
  const id = `touchpoint-contact-${name}`;
  return (
    <label className="block" htmlFor={id}>
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        className="mt-3 min-h-12 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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
    <a
      href={href}
      aria-label={`${eyebrow}: ${value}`}
      className="group flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-surface p-4 outline-none transition-colors hover:border-accent/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-2xs uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </span>
        <span className="mt-1 block break-all text-sm font-medium text-text group-hover:text-accent">
          {value}
        </span>
      </span>
    </a>
  );
}
