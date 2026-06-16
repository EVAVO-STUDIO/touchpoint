import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Show only the app/product mark, without the formal wordmark. */
  markOnly?: boolean;
  /** The approved wordmark is white, so it needs a dark plate in light mode. */
  framed?: boolean;
}

/**
 * Touchpoint by New Wave Synergy wordmark.
 *
 * Logo 3 is the formal white wordmark. Rather than inverting the image and
 * changing the brand colours, we place it on a deliberate dark brand plate so
 * it remains readable in both light and dark themes.
 */
const LOGO_AR = 5.0625;

/** The app mark is a wide New Wave-inspired ribbon, not a square icon. */
const MARK_AR = 890 / 546;

export function Logo({
  className,
  size = 'md',
  markOnly = false,
  framed = true,
}: LogoProps) {
  const heights = { sm: 22, md: 30, lg: 44 };
  const h = heights[size];

  if (markOnly) {
    return <LogoMark size={h} className={className} />;
  }

  const image = (
    <Image
      src="/images/touchpoint-logo-3.png"
      alt="Touchpoint by New Wave Synergy"
      width={Math.round(h * LOGO_AR)}
      height={h}
      priority
      className="select-none"
      style={{ height: h, width: 'auto' }}
    />
  );

  if (!framed) {
    return <span className={cn('inline-flex items-center', className)}>{image}</span>;
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-[#0b0d10] shadow-[0_14px_40px_-24px_rgba(0,0,0,0.65)] ring-1 ring-black/5',
        size === 'sm' && 'px-2.5 py-1.5',
        size === 'md' && 'px-3 py-2',
        size === 'lg' && 'px-4 py-2.5',
        className
      )}
    >
      {image}
    </span>
  );
}

/**
 * Touchpoint app/product mark.
 *
 * Used for tight UI moments, app-style marks and small branded accents. The
 * formal navbar/footer wordmark remains touchpoint-logo-3.png.
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
      src="/images/touchpoint-newwave-logo.png"
      alt="Touchpoint app mark"
      width={Math.round(size * MARK_AR)}
      height={size}
      className={cn('select-none', className)}
      priority
      style={{ height: size, width: 'auto' }}
    />
  );
}
