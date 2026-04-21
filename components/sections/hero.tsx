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
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <motion.div
              {...fadeUp(0)}
              className="flex items-center gap-3 font-mono text-2xs uppercase tracking-[0.18em] text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              New Wave Synergy presents
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="display-xl mt-6 text-balance">
              Asset intelligence,{' '}
              <span className="italic-accent text-accent">embedded</span>
              <br className="hidden md:block" />
              into the built environment.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-[58ch] text-pretty text-lg leading-[1.55] text-muted md:text-xl"
            >
              Touchpoint gives every physical thing — space, system, asset,
              component — a persistent digital identity. Every interaction
              updates the record. Every action is logged. Accessed in seconds
              via QR or NFC, from any smartphone.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary group">
                Request a pilot conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#solution" className="btn-secondary group">
                View the solution
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.45)}
              className="mt-12 flex items-center gap-4 border-t border-border pt-6"
            >
              <div className="h-8 w-px bg-accent" />
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Designed for{' '}
                <span className="text-text">handover</span>,{' '}
                <span className="text-text">operations</span>, and{' '}
                <span className="text-text">lifecycle performance</span>.
              </p>
            </motion.div>
          </div>

          {/* Product photo column */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Accent glow behind the image */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-80 blur-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse at center, var(--color-accent-soft), transparent 70%)',
                }}
                aria-hidden
              />
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/hero-tag-hvac.jpg"
                  alt="A Touchpoint NFC and QR tag mounted on a stainless-steel HVAC unit, alongside a mobile phone showing the asset record screen"
                  width={740}
                  height={542}
                  priority
                  className="h-auto w-full"
                />
              </div>

              {/* Tiny overlaid data caption — anchors the product in 'field' context */}
              <div className="absolute -bottom-5 left-4 right-4 flex items-center justify-between rounded-xl border border-border bg-bg/90 px-4 py-3 backdrop-blur-md md:left-6 md:right-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-[0.16em] text-muted">
                    HV-704 · Optimal
                  </span>
                </div>
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">
                  Tap to open
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-24 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4 md:mt-32"
        >
          <Stat value="QR + NFC" label="Hybrid access" />
          <Stat value="0" label="App install required" />
          <Stat value="Every action" label="Timestamped & audited" />
          <Stat value="AU" label="Built for local delivery" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="font-display text-2xl tracking-tight text-text md:text-3xl"
        style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 40" }}
      >
        {value}
      </span>
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
