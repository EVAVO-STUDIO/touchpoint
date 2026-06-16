'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Clock3,
  KeyRound,
  MessageSquareText,
  QrCode,
  ShieldCheck,
} from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-[90%]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, var(--color-accent-soft), transparent 60%)',
          }}
          aria-hidden
        />
      </div>

      <div className="container-tight">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <motion.div
              {...fadeUp(0)}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-2xs uppercase tracking-[0.18em] text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Touchpoint by New Wave Synergy™
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="display-xl mt-6 max-w-[13ch] text-balance sm:max-w-[14ch] lg:max-w-none"
            >
              Construction doesn&rsquo;t end at{' '}
              <span className="italic-accent text-accent">Practical Completion.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-[62ch] text-pretty text-lg leading-[1.55] text-muted md:text-xl"
            >
              Touchpoint gives New Wave Synergy&rsquo;s post-completion team a clear
              way to manage the real work after completion: inspections, defects,
              purchaser updates, key handover and operational readiness.
            </motion.p>

            <motion.p
              {...fadeUp(0.27)}
              className="mt-4 max-w-[62ch] text-pretty text-base leading-relaxed text-muted md:text-lg"
            >
              It supports the people on site and in the project team, so nothing
              important is lost between construction, settlement, occupation and
              operations.
            </motion.p>

            <motion.div
              {...fadeUp(0.35)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary group">
                Request a pilot conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#services" className="btn-secondary group">
                View the services
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-12 flex items-center gap-4 border-t border-border pt-6"
            >
              <div className="h-8 w-px bg-accent" />
              <p className="max-w-md text-sm leading-relaxed text-muted">
                A New Wave Synergy product built around site support, practical
                close-out and field-ready asset information.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative lg:col-span-6"
          >
            <PhoneShowcase />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4 md:mt-28"
        >
          <Stat value="People" label="On-site post-completion support" />
          <Stat value="Process" label="Structured handover workflows" />
          <Stat value="Technology" label="Field-ready asset information" />
          <Stat value="AU + NZ" label="Where we operate" />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneShowcase() {
  const workflowItems = [
    { label: 'Valuation inspection', status: 'Complete', meta: 'Tower B · Level 14', icon: CheckCircle2 },
    { label: 'Purchaser defects', status: '12 open', meta: '5 due this week', icon: Clock3 },
    { label: 'Key handover', status: 'Ready', meta: '32 lots scheduled', icon: KeyRound },
  ];

  return (
    <div className="relative mx-auto flex min-h-[33rem] w-full max-w-[34rem] items-center justify-center sm:min-h-[38rem] lg:max-w-[38rem]">
      <div
        className="pointer-events-none absolute inset-x-8 top-8 h-[28rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse 62% 58% at 50% 45%, var(--color-accent-soft), transparent 72%)',
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[82%] w-[72%] -translate-x-1/2 rotate-3 rounded-[3rem] border border-border bg-surface/45 shadow-[0_36px_110px_-70px_rgba(0,0,0,0.55)] md:block" />

      <div className="relative w-[18rem] rounded-[2.55rem] border border-white/10 bg-[#090b0d] p-2 shadow-[0_38px_110px_-54px_rgba(0,0,0,0.82)] sm:w-[20.25rem] lg:rotate-[-2deg]">
        <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#f5f3eb] text-[#15181d]">
          <div className="bg-[#0d1113] px-5 pb-5 pt-8 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-accent text-[0.7rem] font-semibold text-[#07110b]">
                    T
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-[-0.035em]">Touchpoint</p>
                    <p className="font-mono text-[0.54rem] uppercase tracking-[0.16em] text-white/50">
                      New Wave Synergy
                    </p>
                  </div>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.055em]">
                  Harbour Quarter
                </h3>
                <p className="mt-1 text-sm text-white/58">Handover control · Today</p>
              </div>
              <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-[#06130d]">
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <Metric value="18" label="Items" />
              <Metric value="12" label="Open" />
              <Metric value="4" label="Ready" />
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="grid grid-cols-4 gap-1 rounded-2xl border border-[#dedbd0] bg-[#ebe8dd] p-1 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#687066]">
              <span className="rounded-xl bg-white px-2 py-2 text-center text-[#15181d] shadow-sm">Inspect</span>
              <span className="px-2 py-2 text-center">Defects</span>
              <span className="px-2 py-2 text-center">Keys</span>
              <span className="px-2 py-2 text-center">Assets</span>
            </div>

            <div className="rounded-2xl border border-[#dedbd0] bg-white p-4 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[#687066]">
                    Site inspection run
                  </p>
                  <p className="mt-1 text-base font-semibold tracking-[-0.035em]">
                    72% closed out
                  </p>
                </div>
                <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.8} />
              </div>
              <div className="mt-4 h-2 rounded-full bg-[#e7e4db]">
                <div className="h-2 w-[72%] rounded-full bg-accent" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <MiniStatus label="Photos" value="48" />
                <MiniStatus label="Evidence" value="31" />
              </div>
            </div>

            <div className="space-y-2.5">
              {workflowItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-[#dedbd0] bg-white px-3.5 py-3"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e9f6ee] text-accent">
                    <item.icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium tracking-tight">
                      {item.label}
                    </span>
                    <span className="block truncate text-xs text-[#687066]">
                      {item.meta}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full bg-[#f0eee6] px-2 py-1 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#4f5750]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 rounded-2xl border border-[#d4eadb] bg-[#eaf7ef] p-4">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <MessageSquareText className="h-4 w-4" strokeWidth={1.8} />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em]">
                    Purchaser update
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#27312b]">
                  Inspection outcome and next steps ready to send.
                </p>
              </div>
              <QrCode className="mt-1 h-5 w-5 text-accent" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2">
      <span className="block text-lg font-semibold tracking-[-0.04em]">{value}</span>
      <span className="block font-mono text-[0.55rem] uppercase tracking-[0.14em] text-white/55">
        {label}
      </span>
    </div>
  );
}

function MiniStatus({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f5f3eb] px-3 py-2">
      <span className="block font-mono text-[0.54rem] uppercase tracking-[0.13em] text-[#777b73]">
        {label}
      </span>
      <span className="mt-0.5 block text-sm font-semibold tracking-[-0.02em] text-[#15181d]">
        {value}
      </span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-2xl font-medium tracking-[-0.04em] text-text md:text-3xl">
        {value}
      </span>
      <span className="font-mono text-2xs uppercase leading-relaxed tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
