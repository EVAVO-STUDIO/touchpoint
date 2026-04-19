import { cn } from '@/lib/utils';

interface SectionEyebrowProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ number, children, className }: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 font-mono text-2xs uppercase tracking-[0.18em] text-muted',
        className
      )}
    >
      <span className="text-accent">{number}</span>
      <span className="h-px w-8 bg-border-strong" />
      <span>{children}</span>
    </div>
  );
}
