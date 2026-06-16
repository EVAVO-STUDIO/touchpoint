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
      {/* Atmospheric background */}
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
          {/* Copy column */}
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

            <motion.h1 {...fadeUp(0.1)} className="display-xl mt-6 max-w-[13ch] text-balance sm:max-w-[14ch] lg:max-w-none">
              Construction doesn&rsquo;t end at{' '}
              <span className="italic-accent text-accent">Practical Completion.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-[62ch] text-pretty text-lg leading-[1.55] text-muted md:text-xl"
            >
              Touchpoint is New Wave Synergy&rsquo;s hands-on post-completion,
              handover and asset-transition service model — supported by a digital
              platform, but grounded in real inspections, project close-out and
              operational-readiness experience.
            </motion.p>

            <motion.p
              {...fadeUp(0.27)}
              className="mt-4 max-w-[62ch] text-pretty text-base leading-relaxed text-muted md:text-lg"
            >
              We bring together people, process and technology so developers,
              builders and asset owners can move from construction into occupation
              and operations with clearer handovers, fewer surprises and stronger
              accountability.
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
                A New Wave Synergy product built around people on the ground,
                structured close-out processes and field-ready asset information.
              </p>
            </motion.div>
          </div>

          {/* Product disc column — transparent PNG, floats freely */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92, rotate: reduce ? 0 : -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative lg:col-span-6"
          >
            <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-xl lg:max-w-2xl">
              {/* Soft green glow bloom behind the disc */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, var(--color-accent-soft), transparent 70%)',
                }}
                aria-hidden
              />
              {/* The disc itself — transparent PNG, no container card */}
              <Image
                src="/images/hero-tag-disc.png"
                alt="A Touchpoint tag disc with the wordmark and a QR code, produced for mounting on assets"
                width={900}
                height={594}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Floating status pill under the disc */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-3 text-center md:mt-8 md:max-w-none"
            >
              <span className="relative hidden h-2 w-2 shrink-0 sm:flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-2xs uppercase leading-relaxed tracking-[0.16em] text-muted">
                Physical inspections · Handover · Asset Transition
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stat band */}
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
