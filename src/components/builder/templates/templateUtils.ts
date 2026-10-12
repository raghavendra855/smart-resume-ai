import React from 'react';
import { PersonalInfo, ResumeData } from '@/types/resume';

export function hasContactInfo(info?: PersonalInfo): boolean {
  if (!info) return false;
  return Boolean(
    info.email?.trim() ||
    info.phone?.trim() ||
    info.location?.trim() ||
    info.linkedin?.trim() ||
    info.github?.trim() ||
    info.portfolio?.trim()
  );
}

export function formatUrl(url?: string): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function cleanDomain(url?: string): string {
  if (!url) return '';
  return url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
}

export function hasSkillsData(skills?: ResumeData['skills']): boolean {
  if (!skills) return false;
  return (
    (skills.technical && skills.technical.length > 0) ||
    (skills.tools && skills.tools.length > 0) ||
    (skills.soft && skills.soft.length > 0)
  );
}

export function hasExperienceData(exp?: ResumeData['experience']): boolean {
  if (!exp || exp.length === 0) return false;
  return exp.some((e) => Boolean(e.role?.trim() || e.company?.trim()));
}

export function hasEducationData(edu?: ResumeData['education']): boolean {
  if (!edu || edu.length === 0) return false;
  return edu.some((e) => Boolean(e.degree?.trim() || e.institution?.trim()));
}

export function hasProjectsData(proj?: ResumeData['projects']): boolean {
  if (!proj || proj.length === 0) return false;
  return proj.some((p) => Boolean(p.title?.trim()));
}

export function hasCertificationsData(certs?: ResumeData['certifications']): boolean {
  if (!certs || certs.length === 0) return false;
  return certs.some((c) => Boolean(c.name?.trim()));
}

export function LinkedinIcon({ className = "w-3 h-3" }: { className?: string }) {
  return React.createElement(
    'svg',
    { className, fill: 'currentColor', viewBox: '0 0 24 24' },
    React.createElement('path', {
      d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    })
  );
}

