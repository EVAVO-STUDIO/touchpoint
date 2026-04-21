import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** When true, shows only the circular mark (no wordmark). Useful in tight footers / mobile. */
  markOnly?: boolean;
  /** Show the "by New Wave Synergy" subline under the wordmark */
  showSubline?: boolean;
}

/**
 * The official Touchpoint wordmark — client-supplied PNG with transparent
 * background. Sizing is controlled by height; width scales via intrinsic
 * ratio. `priority` loading in nav so it never flashes.
 */
export function Logo({
  className,
  size = 'md',
  markOnly = false,
  showSubline = false,
}: LogoProps) {
  const heights = { sm: 20, md: 28, lg: 40 };
  const h = heights[size];

  if (markOnly) {
    return <LogoMark size={h} className={className} />;
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src="/images/touchpoint-logo.png"
        alt="Touchpoint"
        width={h * 5.7} // wordmark aspect ratio ~5.7:1
        height={h}
        priority
        style={{ height: h, width: 'auto' }}
        className="select-none"
      />
      {showSubline && (
        <span className="hidden font-mono text-[0.62em] uppercase tracking-[0.16em] text-muted md:inline">
          by New Wave Synergy
        </span>
      )}
    </div>
  );
}

/**
 * The extracted O — used for favicons, footer corner marks, and anywhere
 * space won't allow the full wordmark. PNG crop from the client logo.
 */
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/touchpoint-mark.png"
      alt="Touchpoint mark"
      width={size}
      height={size}
      className={cn('select-none', className)}
      priority
    />
  );
}
