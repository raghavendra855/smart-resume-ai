'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  hasSkillsData,
  hasExperienceData,
  hasEducationData,
  hasProjectsData,
  hasCertificationsData,
  LinkedinIcon,
} from './templateUtils';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export function NickKoeTemplate({
  data,
  isMiniPreview = false,
}: {
  data: ResumeData;
  isMiniPreview?: boolean;
}) {
  const { personalInfo, summary, skills, experience, education, projects, certifications, candidateType } = data;
  const isFresher = candidateType === 'fresher';

  const validExp = (experience || []).filter((e) => e.role?.trim() || e.company?.trim());
  const validEdu = (education || []).filter((e) => e.degree?.trim() || e.institution?.trim());
  const validProj = (projects || []).filter((p) => p.title?.trim());
  const validCerts = (certifications || []).filter((c) => c.name?.trim());

  const hardSkills = [...(skills?.technical || []), ...(skills?.tools || [])];
  const softSkills = skills?.soft || [];

  return (
    <div
      className={`w-full bg-white text-neutral-800 select-text leading-normal ${
        isMiniPreview ? 'text-[7px] leading-tight p-3' : 'text-[13px] p-8 sm:p-10'
      }`}
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      {/* HEADER: Nick Koe Top Section with Teal Accent Block + Aligned Contact Stack */}
      <header className={`border-b border-neutral-300 pb-4 mb-4 ${isMiniPreview ? 'pb-2 mb-2' : ''}`}>
        <div className="flex justify-between items-start gap-4">
          {/* Top Left: Teal block + Name + Subtitle + Summary */}
          <div className="flex-1">
            <div className="flex items-start gap-3">
              {/* Deep Teal Accent Block matching reference */}
              <div
                className={`bg-[#135274] shrink-0 mt-0.5 ${
                  isMiniPreview ? 'w-2 h-4' : 'w-4 h-8'
                }`}
              />
              <div>
                <h1
                  className={`font-semibold text-neutral-900 tracking-tight leading-tight ${
                    isMiniPreview ? 'text-[11px]' : 'text-2xl sm:text-3xl'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {personalInfo.fullName || 'Nick Koe'}
                </h1>
                <p
                  className={`font-medium text-[#2a9d8f] tracking-wide mt-0.5 ${
                    isMiniPreview ? 'text-[6.5px]' : 'text-sm'
                  }`}
                >
                  {personalInfo.headline || 'Event Photographer'}
                </p>
              </div>
            </div>

            {/* Summary right under name matching reference */}
            {summary && (
              <p
                className={`text-neutral-600 leading-relaxed mt-2.5 max-w-xl ${
                  isMiniPreview ? 'text-[5.5px] mt-1' : 'text-[13px]'
                }`}
              >
                {summary}
              </p>
            )}
          </div>

          {/* Top Right: Aligned Contact Stack with right-hand icons */}
          {hasContactInfo(personalInfo) && (
            <div
              className={`shrink-0 text-right space-y-1.5 text-neutral-600 ${
                isMiniPreview ? 'text-[5.5px] space-y-0.5' : 'text-[12.5px]'
              }`}
            >
              {personalInfo.email && (
                <div className="flex items-center justify-end gap-1.5">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-black">
                    {personalInfo.email}
                  </a>
                  <Mail className={`text-[#135274] shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center justify-end gap-1.5">
                  <span>{personalInfo.phone}</span>
                  <Phone className={`text-[#135274] shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center justify-end gap-1.5">
                  <span>{personalInfo.location}</span>
                  <MapPin className={`text-[#135274] shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                </div>
              )}
              {personalInfo.portfolio && (
                <div className="flex items-center justify-end gap-1.5">
                  <a
                    href={formatUrl(personalInfo.portfolio)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    {cleanDomain(personalInfo.portfolio)}
                  </a>
                  <Globe className={`text-[#135274] shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center justify-end gap-1.5">
                  <a
                    href={formatUrl(personalInfo.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    {cleanDomain(personalInfo.linkedin)}
                  </a>
                  <LinkedinIcon className={`text-[#135274] shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* TWO COLUMNS */}
      <div className="grid grid-cols-12 gap-5 sm:gap-7">
        {/* LEFT COLUMN: ~56% (WORK EXPERIENCE, EDUCATION) */}
        <div className="col-span-7 space-y-5">
          {/* WORK EXPERIENCE */}
          {validExp.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-3 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                {validExp.map((exp) => (
                  <div key={exp.id} className="relative pl-4 resume-entry">
                    {/* Teal Square indicator on left edge */}
                    <div
                      className={`absolute left-0 top-1 bg-[#2a9d8f] ${
                        isMiniPreview ? 'w-1.5 h-3' : 'w-2 h-4'
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-semibold text-neutral-900 leading-snug ${
                          isMiniPreview ? 'text-[7px]' : 'text-[14px]'
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div className={`flex items-center gap-1 text-neutral-700 font-medium mt-0.5 mb-1 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                        <span>{exp.company}</span>
                        <ArrowUpRight className={`text-[#2a9d8f] ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                      </div>
                      <p
                        className={`text-[#2a9d8f] font-medium mb-1.5 ${
                          isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'
                        }`}
                      >
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        {exp.location ? ` | ${exp.location}` : ''}
                      </p>
                      {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                        <ul className={`space-y-1 text-neutral-600 ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                          {exp.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                              <span className="text-[#2a9d8f] mt-0.5">•</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {validEdu.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-3 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                EDUCATION
              </h2>
              <div className="space-y-3">
                {validEdu.map((edu) => (
                  <div key={edu.id} className="relative pl-4 resume-entry">
                    {/* Teal indicator */}
                    <div
                      className={`absolute left-0 top-1 bg-[#2a9d8f] ${
                        isMiniPreview ? 'w-1.5 h-3' : 'w-2 h-4'
                      }`}
                    />
                    <h3 className={`font-semibold text-neutral-900 ${isMiniPreview ? 'text-[7px]' : 'text-[14px]'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-neutral-700 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                      {edu.institution}
                    </p>
                    <p className={`text-[#2a9d8f] font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'}`}>
                      {edu.graduationYear}
                      {edu.gpa ? ` | GPA: ${edu.gpa}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN: ~44% (HARD SKILLS PILLS, SOFT SKILLS PILLS, PORTFOLIO/PROJECTS, CERTIFICATES) */}
        <div className="col-span-5 space-y-5">
          {/* HARD SKILLS */}
          {hardSkills.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-2 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                HARD SKILLS
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {hardSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`bg-[#135274] text-white font-medium rounded tracking-wide ${
                      isMiniPreview ? 'text-[5px] px-1 py-0.2' : 'text-[12px] px-2.5 py-1'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* SOFT SKILLS */}
          {softSkills.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-2 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                SOFT SKILLS
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`bg-[#135274] text-white font-medium rounded tracking-wide ${
                      isMiniPreview ? 'text-[5px] px-1 py-0.2' : 'text-[12px] px-2.5 py-1'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* PORTFOLIO / PROJECTS */}
          {validProj.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-2 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                PORTFOLIO
              </h2>
              <div className="space-y-3">
                {validProj.map((proj) => (
                  <div key={proj.id} className="resume-entry">
                    <div className={`flex items-center gap-1 font-semibold text-neutral-900 ${isMiniPreview ? 'text-[7px]' : 'text-[14px]'}`}>
                      <span>{proj.title}</span>
                      {proj.link && (
                        <a
                          href={formatUrl(proj.link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2a9d8f] hover:underline"
                        >
                          <ArrowUpRight className={`inline ${isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'}`} />
                        </a>
                      )}
                    </div>
                    {proj.link && (
                      <p className={`text-neutral-500 mb-1 ${isMiniPreview ? 'text-[5px]' : 'text-[12px]'}`}>
                        {cleanDomain(proj.link)}
                      </p>
                    )}
                    <p className={`text-neutral-600 leading-relaxed ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                      {proj.description}
                    </p>
                    {proj.bullets && proj.bullets.length > 0 && (
                      <ul className={`space-y-0.5 mt-1 text-neutral-600 ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1">
                            <span className="text-[#2a9d8f]">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CERTIFICATES */}
          {validCerts.length > 0 && (
            <section className="resume-section">
              <h2
                className={`font-bold uppercase tracking-wider text-neutral-900 pb-1 mb-2 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[14.5px]'
                }`}
              >
                CERTIFICATES
              </h2>
              <div className="space-y-2">
                {validCerts.map((cert) => (
                  <div key={cert.id} className="text-neutral-700 resume-entry">
                    <p className={`font-semibold text-neutral-800 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                      {cert.name} {cert.date ? `– ${cert.date}` : ''}
                    </p>
                    <p className={`text-neutral-500 ${isMiniPreview ? 'text-[5px]' : 'text-[12px]'}`}>
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
