import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Show only the circular mark (no wordmark). For favicons / very tight spots. */
  markOnly?: boolean;
}

/**
 * Touchpoint wordmark — keep the current approved logo asset in production.
 *
 * The logo may be revisited later as a separate brand exercise, but this component
 * intentionally preserves the existing client-facing mark for now.
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
 * Standalone mark — current approved mark asset.
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
