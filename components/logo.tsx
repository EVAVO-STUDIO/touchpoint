import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Show only the circular mark. For favicons / very tight spots. */
  markOnly?: boolean;
}

const sizeClass = {
  sm: {
    root: 'gap-1.5',
    word: 'text-[1.05rem] tracking-[0.08em]',
    mark: 'h-3 w-3',
    byline: 'text-[0.44rem] tracking-[0.18em]',
  },
  md: {
    root: 'gap-2',
    word: 'text-[1.35rem] tracking-[0.085em]',
    mark: 'h-4 w-4',
    byline: 'text-[0.52rem] tracking-[0.2em]',
  },
  lg: {
    root: 'gap-2.5',
    word: 'text-[1.9rem] tracking-[0.09em]',
    mark: 'h-5 w-5',
    byline: 'text-[0.66rem] tracking-[0.22em]',
  },
} as const;

export function Logo({ className, size = 'md', markOnly = false }: LogoProps) {
  const classes = sizeClass[size];

  if (markOnly) {
    return <LogoMark className={className} size={size} />;
  }

  return (
    <span
      className={cn(
        'inline-flex select-none flex-col leading-none text-text',
        classes.root,
        className
      )}
      aria-label="Touchpoint by New Wave Synergy"
    >
      <span className="inline-flex items-center whitespace-nowrap font-sans font-extrabold uppercase leading-none">
        <span className={classes.word}>TOUCHP</span>
        <span
          className={cn(
            'mx-[0.05em] inline-flex shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_0_24px_var(--color-accent-soft)]',
            classes.mark
          )}
          aria-hidden
        >
          <span className="h-1/2 w-1/2 rounded-full bg-bg/25" />
        </span>
        <span className={classes.word}>INT</span>
      </span>
      <span className={cn('font-mono font-semibold uppercase text-muted', classes.byline)}>
        by New Wave Synergy
      </span>
    </span>
  );
}

export function LogoMark({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const classes = sizeClass[size];

  return (
    <span
      className={cn(
        'inline-flex select-none items-center justify-center rounded-full bg-accent text-bg shadow-[0_0_24px_var(--color-accent-soft)]',
        classes.mark,
        className
      )}
      aria-label="Touchpoint mark"
    >
      <span className="h-1/2 w-1/2 rounded-full bg-bg/25" aria-hidden />
    </span>
  );
}
