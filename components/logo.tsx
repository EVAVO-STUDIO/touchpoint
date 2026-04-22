import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Show only the circular mark (no wordmark). For favicons / very tight spots. */
  markOnly?: boolean;
}

/**
 * Touchpoint wordmark — the client's official TOUCHPOINT lettering with
 * the green fingerprint-S forming the O. Transparent PNG so it sits
 * cleanly on any background.
 *
 * Source aspect ratio: 1200 x 227 = 5.286:1 — width is computed from height
 * to keep it crisp at every size.
 */
const LOGO_AR = 5.286;

export function Logo({ className, size = 'md', markOnly = false }: LogoProps) {
  const heights = { sm: 22, md: 30, lg: 44 };
  const h = heights[size];

  if (markOnly) {
    return <LogoMark size={h} className={className} />;
  }

  return (
    <Image
      src="/images/touchpoint-logo.png"
      alt="Touchpoint"
      width={Math.round(h * LOGO_AR)}
      height={h}
      priority
      className={cn('select-none', className)}
      style={{ height: h, width: 'auto' }}
    />
  );
}

/**
 * Standalone mark — the green fingerprint-S inside the O.
 * Used for favicons, small-space displays, and the app-switcher icon.
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
