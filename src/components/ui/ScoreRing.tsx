'use client';

import React, { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  subLabel?: string;
  showPercentage?: boolean;
  className?: string;
}

export function ScoreRing({
  score,
  maxScore = 100,
  size = 120,
  strokeWidth = 9,
  label,
  subLabel,
  showPercentage = false,
  className = '',
}: ScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 150);
    return () => clearTimeout(timer);
  }, [score]);

  const percentage = Math.min(Math.max((animatedScore / maxScore) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return { stroke: '#10B981', glow: 'rgba(16, 185, 129, 0.35)', text: 'text-emerald-500' };
    if (score >= 60) return { stroke: '#F59E0B', glow: 'rgba(245, 158, 11, 0.35)', text: 'text-amber-500' };
    return { stroke: '#EF4444', glow: 'rgba(239, 68, 68, 0.35)', text: 'text-rose-500' };
  };

  const { stroke, glow, text } = getColor();

  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--border-color)"
            strokeOpacity={0.6}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: `drop-shadow(0 0 6px ${glow})`,
            }}
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
          <span className={`font-bold tracking-tight ${size > 100 ? 'text-3xl' : 'text-xl'} ${text}`}>
            {Math.round(animatedScore)}
            {showPercentage && <span className="text-sm font-normal">%</span>}
          </span>
          {subLabel && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-secondary)] opacity-80">
              {subLabel}
            </span>
          )}
        </div>
      </div>

      {label && (
        <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
          {label}
        </span>
      )}
    </div>
  );
}
