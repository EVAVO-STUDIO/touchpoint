'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-border-strong"
    >
      {mounted ? (
        <>
          <Sun
            className={`absolute h-4 w-4 transition-all duration-300 ${
              isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <Moon
            className={`absolute h-4 w-4 transition-all duration-300 ${
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
            }`}
          />
        </>
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
