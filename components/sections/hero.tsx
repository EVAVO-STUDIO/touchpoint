'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown, Nfc } from 'lucide-react';
import { LogoMark } from '@/components/logo';

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
      {/* Atmospheric background: grid + radial glow + noise */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[90%] bg-radial-glow" aria-hidden />
        <div className="absolute inset-0 bg-noise opacity-[0.025] mix-blend-overlay" aria-hidden />
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

            <motion.h1
              {...fadeUp(0.1)}
              className="display-xl mt-6 text-balance"
            >
              Asset intelligence,{' '}
              <span className="italic-accent text-accent">embedded</span>
              <br className="hidden md:block" />
              into the built environment.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-[56ch] text-lg leading-[1.55] text-muted md:text-xl"
            >
              Touchpoint connects physical assets to structured digital
              information — delivering instant access to manuals, warranties,
              and lifecycle data at the point of use.
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

          {/* Visual column: tagged asset concept */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4 md:mt-28"
        >
          <Stat value="NFC + QR" label="Dual-mode tagging" />
          <Stat value="0" label="App required" />
          <Stat value="Point of use" label="Asset data access" />
          <Stat value="AU" label="Built for local projects" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-2xl tracking-tight text-text md:text-3xl">
        {value}
      </span>
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}

/**
 * Abstract hero visual: a stylised tagged asset with connection lines
 * flowing to a structured data card. Entirely SVG/CSS — no image required —
 * so it's crisp on any device and always on-brand.
 */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-md">
      {/* Outer glow ring */}
      <div className="absolute inset-8 rounded-[2.5rem] bg-accent-soft blur-3xl" aria-hidden />

      {/* Main card frame */}
      <div className="card-bordered absolute inset-0">
        <div className="card-inner relative flex h-full flex-col justify-between overflow-hidden">
          {/* Grid backdrop inside card */}
          <div className="absolute inset-0 bg-grid opacity-50 mask-radial" aria-hidden />

          {/* Top: tag visualisation */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5">
                <Nfc className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono text-2xs uppercase tracking-[0.16em] text-muted">
                  Asset · HV-704
                </span>
              </div>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center py-8">
              <div className="relative">
                {/* Expanding NFC waves */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute h-24 w-24 animate-pulse-soft rounded-full border border-accent/30" />
                  <span
                    className="absolute h-40 w-40 animate-pulse-soft rounded-full border border-accent/20"
                    style={{ animationDelay: '0.6s' }}
                  />
                  <span
                    className="absolute h-56 w-56 animate-pulse-soft rounded-full border border-accent/10"
                    style={{ animationDelay: '1.2s' }}
                  />
                </div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-bg shadow-[0_0_32px_var(--color-accent-soft)]">
                  <LogoMark className="h-9 w-9 text-text" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: data payload */}
          <div className="relative z-10 space-y-2.5">
            <DataRow label="Status" value="Operational" accent />
            <DataRow label="O&M Manual" value="v2.4 · current" />
            <DataRow label="Warranty" value="Active · 8.2y left" />
            <DataRow label="Next service" value="14 May 2026" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-bg/60 px-3 py-2.5 backdrop-blur">
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <span
        className={`text-sm ${accent ? 'text-accent' : 'text-text'} font-medium`}
      >
        {value}
      </span>
    </div>
  );
}
