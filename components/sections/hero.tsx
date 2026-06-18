'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

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
        <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-[80%]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, var(--color-accent-soft), transparent 66%)',
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
              <span className="inline-flex h-6 w-9 items-center justify-center rounded-full border border-border bg-surface px-1.5">
                <Image
                  src="/images/touchpoint-newwave-logo.png"
                  alt=""
                  width={36}
                  height={22}
                  className="h-auto w-full"
                  priority
                />
              </span>
              Touchpoint by New Wave Synergy™
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="display-xl mt-6 max-w-[13ch] text-balance sm:max-w-[14ch] lg:max-w-none"
            >
              Construction doesn&rsquo;t end at{' '}
              <span className="italic-accent text-accent">Practical Completion</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-[62ch] text-pretty text-lg leading-[1.55] text-muted md:text-xl"
            >
              Touchpoint gives New Wave Synergy&rsquo;s post-completion team one place
              to run the work that usually gets split across inboxes, site notes
              and spreadsheets: inspections, defects, purchaser updates, key
              handover and readiness.
            </motion.p>

            <motion.p
              {...fadeUp(0.27)}
              className="mt-4 max-w-[62ch] text-pretty text-base leading-relaxed text-muted md:text-lg"
            >
              It is practical support first, technology second, built for the
              people carrying a project from construction into settlement,
              occupation and operations.
            </motion.p>

            <motion.div
              {...fadeUp(0.35)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary group">
                Request a pilot conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#system" className="btn-secondary group">
                See the support model
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-12 flex items-center gap-4 border-t border-border pt-6"
            >
              <div className="h-8 w-px bg-accent" />
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Designed for live handover work: site inspections, defect
                close-out, purchaser communication and asset information that
                teams can actually use.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative lg:col-span-6"
          >
            <HeroImage />
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

function HeroImage() {
  return (
    <div className="relative mx-auto flex min-h-[32rem] w-full items-center justify-center sm:min-h-[38rem] lg:min-h-[42rem]">
      <div
        className="pointer-events-none absolute inset-x-10 top-12 -z-10 h-[28rem] rounded-full blur-3xl sm:inset-x-16 lg:h-[32rem]"
        style={{
          background:
            'radial-gradient(ellipse 56% 56% at 50% 48%, rgba(47, 189, 111, 0.16), transparent 74%)',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 hidden h-[32rem] w-[64%] -translate-x-1/2 rounded-[3.25rem] border border-border bg-surface/35 shadow-[0_34px_100px_-76px_rgba(0,0,0,0.5)] md:block" />
      <Image
        src="/images/touchpoint-hero.png"
        alt="Touchpoint mobile app interface showing a live handover dashboard, inspections, purchaser defects, key handover and purchaser updates"
        width={1024}
        height={1536}
        priority
        sizes="(min-width: 1280px) 38vw, (min-width: 768px) 46vw, 86vw"
        className="relative z-10 h-auto w-[min(86vw,22rem)] select-none drop-shadow-[0_34px_82px_rgba(0,0,0,0.38)] sm:w-[min(60vw,25rem)] lg:w-[min(38vw,28.25rem)]"
      />
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
