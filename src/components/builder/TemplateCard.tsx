'use client';

import React from 'react';
import { ResumeTemplateInfo, ResumeTemplateId, ResumeData } from '@/types/resume';
import { ResumeRenderer } from './templates/ResumeRenderer';
import { Check, Eye, Sparkles, ShieldCheck } from 'lucide-react';

export function TemplateCard({
  template,
  isSelected,
  onSelect,
  onPreview,
  previewData,
}: {
  template: ResumeTemplateInfo;
  isSelected: boolean;
  onSelect: (id: ResumeTemplateId) => void;
  onPreview: (id: ResumeTemplateId) => void;
  previewData: ResumeData;
}) {
  return (
    <div
      id={`template-card-${template.id}`}
      data-template-id={template.id}
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-200 overflow-hidden ${
        isSelected
          ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-lg shadow-[var(--glow-color)] ring-2 ring-[var(--accent)]'
          : 'border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:shadow-md'
      }`}
    >
      {/* Top Details & Badges */}
      <div className="p-3.5 pb-2">
        <div className="flex items-center justify-between gap-1.5 mb-1">
          <h3 className="text-xs font-bold text-[var(--text-primary)] truncate">
            {template.name}
          </h3>
          {template.isAtsFriendly ? (
            <span
              className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0"
              title="Optimized for Applicant Tracking Systems"
            >
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              ATS-Friendly
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full shrink-0"
              title="Modern styling with creative visual accents"
            >
              <Sparkles className="w-3 h-3 text-purple-500" />
              Creative
            </span>
          )}
        </div>
        <p className="text-[10.5px] text-[var(--text-secondary)] line-clamp-1 mb-1">
          {template.styleDescription}
        </p>
      </div>

      {/* Miniature Live A4 Representation (Actual Render, No Fake Screenshots) */}
      <div className="px-3.5 py-1">
        <div
          onClick={() => onSelect(template.id)}
          className="relative w-full aspect-[210/297] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-white shadow-sm cursor-pointer select-none group-hover:shadow-md transition-shadow"
          title={`Click to select ${template.name}`}
        >
          {/* Scaled Live Renderer */}
          <div
            className="absolute top-0 left-0 w-[794px] min-h-[1123px] origin-top-left pointer-events-none"
            style={{
              // Scaled to fit container width
              transform: 'scale(0.25)',
              transformOrigin: 'top left',
            }}
          >
            <ResumeRenderer data={previewData} templateId={template.id} isMiniPreview={true} />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            {isSelected && (
              <div className="absolute top-2 right-2 bg-[var(--accent)] text-white p-1 rounded-full shadow-md">
                <Check className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-3 pt-2 mt-auto border-t border-[var(--border-color)] flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPreview(template.id)}
          className="flex-1 py-1.5 px-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
          title="Full Preview of this template"
        >
          <Eye className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          Preview
        </button>

        <button
          type="button"
          onClick={() => onSelect(template.id)}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            isSelected
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm'
          }`}
          title="Select this template"
        >
          {isSelected ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Selected
            </>
          ) : (
            'Use Template'
          )}
        </button>
      </div>
    </div>
  );
}
