import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Touchpoint wordmark.
 *
 * The "O" in TOUCHPOINT is a hollow ring containing a fingerprint-style
 * S-swirl inspired by the New Wave Synergy mark. The ring is drawn using
 * currentColor (inherits text colour) while the S uses the accent green —
 * giving it presence in both light and dark themes.
 */
export function Logo({ className, showWordmark = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-5',
    md: 'h-6 md:h-7',
    lg: 'h-8 md:h-10',
  };

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark className={cn(sizeClasses[size], 'w-auto')} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-sans text-[0.95em] font-semibold tracking-[-0.02em] text-text">
            Touchpoint
          </span>
          <span className="font-mono text-[0.58em] uppercase tracking-[0.14em] text-muted">
            by New Wave Synergy
          </span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer ring - uses currentColor so it adapts to theme */}
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="currentColor"
        strokeWidth="2.25"
        fill="none"
      />
      {/* Fingerprint-style S swirl in the accent green.
          Three concentric arcs offset to create the S/fingerprint feel. */}
      <g stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M14 18 C 18 14, 30 14, 34 18 S 30 26, 24 26 S 14 30, 18 34 C 22 38, 30 38, 34 34" />
        <path d="M17 20 C 20 17, 28 17, 31 20 S 27 25, 24 25 S 17 28, 20 31 C 23 34, 28 34, 31 31" opacity="0.55" />
      </g>
    </svg>
  );
}
