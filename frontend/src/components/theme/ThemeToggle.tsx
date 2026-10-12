'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'segmented' | 'icon' | 'default';
}

export function ThemeToggle({ className = '', variant = 'segmented' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme, mounted } = useTheme();

  // Guard against SSR hydration differences: default to dark before client mount
  const isDark = mounted ? resolvedTheme === 'dark' : true;

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
        className={`w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-hover)] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${className}`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-transform duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-500 rotate-0 scale-100 transition-transform duration-200" />
        )}
      </button>
    );
  }

  // Segmented control with clear Light and Dark options and balanced active styling
  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={`inline-flex items-center p-0.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm transition-colors duration-200 ${className}`}
    >
      {/* Light Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={!isDark}
        onClick={() => setTheme('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
          !isDark
            ? 'bg-amber-500 text-white shadow-sm ring-1 ring-amber-400/40'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
        title="Activate Light Mode"
      >
        <Sun
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            !isDark ? 'text-white scale-110' : 'text-[var(--text-muted)]'
          }`}
        />
        <span>Light</span>
      </button>

      {/* Dark Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        onClick={() => setTheme('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
          isDark
            ? 'bg-[var(--accent)] text-white shadow-sm ring-1 ring-[var(--accent)]/40'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
        title="Activate Dark Mode"
      >
        <Moon
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isDark ? 'text-white scale-110' : 'text-[var(--text-muted)]'
          }`}
        />
        <span>Dark</span>
      </button>
    </div>
  );
}
