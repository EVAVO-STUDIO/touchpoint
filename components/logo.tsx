import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Show only the circular mark (no wordmark). For favicons / very tight spots. */
  markOnly?: boolean;
}

/**
 * Touchpoint wordmark.
 *
 * The second approved logo asset is used for the main site wordmark. The mark-only
 * variant remains separate for tight UI contexts, favicons and small icon placements.
 */
const LOGO_AR = 4;

export function Logo({ className, size = 'md', markOnly = false }: LogoProps) {
  const heights = { sm: 22, md: 30, lg: 44 };
  const h = heights[size];

  if (markOnly) {
    return <LogoMark size={h} className={className} />;
  }

  return (
    <Image
      src="/images/touchpoint-logo-2.png"
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
