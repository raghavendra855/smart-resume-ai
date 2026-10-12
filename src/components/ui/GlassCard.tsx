'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'interactive' | 'accent';
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  glow = false,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default:
      'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]',
    elevated:
      'bg-[var(--bg-elevated)] border border-[var(--border-color)] shadow-lg text-[var(--text-primary)]',
    interactive:
      'bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer text-[var(--text-primary)]',
    accent:
      'bg-[var(--bg-card)] border border-[var(--accent)]/40 shadow-[0_0_20px_var(--glow-color)] text-[var(--text-primary)]',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-200 backdrop-blur-md',
        variantStyles[variant],
        glow && 'shadow-[0_0_25px_var(--glow-color)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
