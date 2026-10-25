'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  LinkedinIcon,
} from './templateUtils';
import { Mail, Phone, MapPin, Globe, User, Briefcase, GraduationCap, Award } from 'lucide-react';

export function RichardSanchezTemplate({
  data,
  isMiniPreview = false,
}: {
  data: ResumeData;
  isMiniPreview?: boolean;
}) {
  const { personalInfo, summary, skills, experience, education, projects, certifications } = data;

  const validExp = (experience || []).filter((e) => e.role?.trim() || e.company?.trim());
  const validEdu = (education || []).filter((e) => e.degree?.trim() || e.institution?.trim());
  const validProj = (projects || []).filter((p) => p.title?.trim());
  const validCerts = (certifications || []).filter((c) => c.name?.trim());

  const allSkills = [
    ...(skills?.technical || []),
    ...(skills?.tools || []),
    ...(skills?.soft || []),
  ];

  const nameParts = (personalInfo.fullName || 'RICHARD SANCHEZ').trim().split(/\s+/);
  const initials = `${nameParts[0]?.[0] || 'R'}${nameParts[1]?.[0] || 'S'}`;

  return (
    <div
      className={`w-full bg-white text-neutral-800 select-text leading-normal flex-1 flex flex-col min-h-full ${
        isMiniPreview ? 'text-[7px] leading-tight' : 'text-[14px]'
      }`}
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      {/* 1. DEEP NAVY FULL-WIDTH TOP HEADER BANNER */}
      <div
        className={`bg-[#2c3442] text-white relative flex items-center justify-between px-8 sm:px-10 shrink-0 ${
          isMiniPreview ? 'h-14 px-4' : 'h-28 sm:h-32'
        }`}
      >
        {/* Placeholder spacer for the avatar circle overlapping */}
        <div className={isMiniPreview ? 'w-12' : 'w-28 sm:w-32'} />

        {/* Name and Title aligned to the right/center right */}
        <div className="text-right flex-1 pl-4 min-w-0">
          <h1
            className={`font-bold tracking-wider uppercase text-white leading-tight break-words ${
              isMiniPreview ? 'text-[12px]' : 'text-3xl sm:text-[34px]'
            }`}
          >
            {personalInfo.fullName || 'RICHARD SANCHEZ'}
          </h1>
          <p
            className={`tracking-[0.25em] uppercase text-neutral-300 font-medium mt-1 break-words ${
              isMiniPreview ? 'text-[6px]' : 'text-[14.5px]'
            }`}
          >
            {personalInfo.headline || 'MARKETING MANAGER'}
          </p>
        </div>
      </div>

      {/* 2. MAIN BODY: LEFT GREY SIDEBAR + RIGHT CONNECTED TIMELINE */}
      <div className="grid grid-cols-12 flex-1 min-h-0 relative">
        {/* CIRCULAR AVATAR OVERLAPPING NAVY HEADER & GREY SIDEBAR */}
        <div
          className={`absolute left-8 sm:left-10 z-20 rounded-full border-4 border-white shadow-md bg-white overflow-hidden ${
            isMiniPreview
              ? 'w-12 h-12 -top-6 left-4 border-2'
              : 'w-28 h-28 sm:w-32 sm:h-32 -top-14 sm:-top-16'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-600 font-bold">
            <span className={isMiniPreview ? 'text-xs' : 'text-3xl'}>{initials}</span>
          </div>
        </div>

        {/* LEFT COLUMN: ~32% Soft Grey Background (#eceef0) */}
        <div
          className={`col-span-4 bg-[#eceef0] text-neutral-800 flex flex-col justify-start min-w-0 ${
            isMiniPreview ? 'pt-8 p-3 space-y-3' : 'pt-20 sm:pt-24 p-6 sm:p-7 space-y-6'
          }`}
        >
          {/* CONTACT INFO */}
          {hasContactInfo(personalInfo) && (
            <section className="mb-6 resume-section">
              <h2
                className={`font-bold uppercase tracking-widest text-neutral-900 pb-1 mb-3 border-b border-neutral-400 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                }`}
              >
                CONTACT
              </h2>
              <div className={`space-y-2.5 text-neutral-800 ${isMiniPreview ? 'space-y-1 text-[6px]' : 'text-[13px]'}`}>
                {personalInfo.phone && (
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone className={`shrink-0 text-neutral-800 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                    <span className="truncate">{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className={`shrink-0 text-neutral-800 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                    <a href={`mailto:${personalInfo.email}`} className="break-all hover:text-black">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-start gap-2 min-w-0">
                    <MapPin className={`shrink-0 text-neutral-800 mt-0.5 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                    <span className="break-words">{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.portfolio && (
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe className={`shrink-0 text-neutral-800 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                    <a
                      href={formatUrl(personalInfo.portfolio)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all hover:text-black"
                    >
                      {cleanDomain(personalInfo.portfolio)}
                    </a>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-2 min-w-0">
                    <LinkedinIcon className={`shrink-0 text-neutral-800 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                    <a
                      href={formatUrl(personalInfo.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all hover:text-black"
                    >
                      {cleanDomain(personalInfo.linkedin)}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {allSkills.length > 0 && (
            <section className="mb-6 resume-section">
              <h2
                className={`font-bold uppercase tracking-widest text-neutral-900 pb-1 mb-3 border-b border-neutral-400 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                }`}
              >
                SKILLS
              </h2>
              <ul className={`space-y-2 text-neutral-800 ${isMiniPreview ? 'space-y-0.5 text-[6px]' : 'text-[13.5px]'}`}>
                {allSkills.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-500 font-bold mt-0.5">•</span>
                    <span className="break-words [overflow-wrap:anywhere] min-w-0">{s}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* LANGUAGES / CERTIFICATIONS */}
          {validCerts.length > 0 && (
            <section className="mb-6 resume-section">
              <h2
                className={`font-bold uppercase tracking-widest text-neutral-900 pb-1 mb-3 border-b border-neutral-400 ${
                  isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                }`}
              >
                CERTIFICATES
              </h2>
              <ul className={`space-y-2.5 text-neutral-800 ${isMiniPreview ? 'space-y-1 text-[6px]' : 'text-[13px]'}`}>
                {validCerts.map((c) => (
                  <li key={c.id} className="resume-entry min-w-0">
                    <p className="font-semibold text-neutral-900 break-words">• {c.name}</p>
                    <p className={`text-neutral-600 pl-3 ${isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'}`}>{c.issuer} {c.date ? `(${c.date})` : ''}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* REFERENCES */}
          <section className="resume-section">
            <h2
              className={`font-bold uppercase tracking-widest text-neutral-900 pb-1 mb-2 border-b border-neutral-400 ${
                isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
              }`}
            >
              REFERENCES
            </h2>
            <p className={`italic text-neutral-600 ${isMiniPreview ? 'text-[5.5px]' : 'text-[12.5px]'}`}>
              Available upon request
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN: ~68% White Background with ICON-CONNECTED VERTICAL TIMELINE */}
        <div
          className={`col-span-8 bg-white text-neutral-800 flex flex-col justify-start min-w-0 ${
            isMiniPreview ? 'p-3 pl-4' : 'p-6 sm:p-8 pl-8 sm:pl-10'
          }`}
        >
          <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-300 space-y-6 sm:space-y-8 flex-1">
            {/* TIMELINE SECTION 1: PROFILE / SUMMARY */}
            {summary && (
              <div className="relative resume-section min-w-0">
                {/* Node icon on vertical line */}
                <div
                  className={`absolute rounded-full bg-[#2c3442] text-white flex items-center justify-center -left-[31px] sm:-left-[41px] top-0 ${
                    isMiniPreview ? 'w-4 h-4 -left-[27px]' : 'w-6 h-6'
                  }`}
                >
                  <User className={isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'} />
                </div>

                <div className="border-b border-neutral-300 pb-1 mb-3">
                  <h2
                    className={`font-bold uppercase tracking-widest text-neutral-900 ${
                      isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                    }`}
                  >
                    PROFILE
                  </h2>
                </div>

                <p className={`text-neutral-700 leading-[1.65] text-justify break-words [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                  {summary}
                </p>
              </div>
            )}

            {/* TIMELINE SECTION 2: WORK EXPERIENCE */}
            {validExp.length > 0 && (
              <div className="relative resume-section min-w-0">
                {/* Node icon on vertical line */}
                <div
                  className={`absolute rounded-full bg-[#2c3442] text-white flex items-center justify-center -left-[31px] sm:-left-[41px] top-0 ${
                    isMiniPreview ? 'w-4 h-4 -left-[27px]' : 'w-6 h-6'
                  }`}
                >
                  <Briefcase className={isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'} />
                </div>

                <div className="border-b border-neutral-300 pb-1 mb-3.5">
                  <h2
                    className={`font-bold uppercase tracking-widest text-neutral-900 ${
                      isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                    }`}
                  >
                    WORK EXPERIENCE
                  </h2>
                </div>

                <div className="space-y-4">
                  {validExp.map((exp) => (
                    <div key={exp.id} className="relative resume-entry min-w-0">
                      {/* Small hollow circle node on timeline for individual role */}
                      <div
                        className={`absolute w-2.5 h-2.5 rounded-full border-2 border-[#2c3442] bg-white -left-[30px] sm:-left-[38px] top-1.5 ${
                          isMiniPreview ? '-left-[27px] w-1.5 h-1.5' : ''
                        }`}
                      />

                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h3 className={`font-bold text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                          {exp.company}
                        </h3>
                        <span className={`text-neutral-500 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>

                      <p className={`text-neutral-700 font-semibold mt-0.5 mb-2 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[13.5px]'}`}>
                        {exp.role} {exp.location ? `| ${exp.location}` : ''}
                      </p>

                      {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                        <ul className={`space-y-1.5 text-neutral-700 ${isMiniPreview ? 'text-[5.5px]' : 'text-[14px]'}`}>
                          {exp.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 leading-[1.6]">
                              <span className="text-neutral-400 mt-1 shrink-0">•</span>
                              <span className="break-words [overflow-wrap:anywhere] min-w-0">{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIMELINE SECTION 3: EDUCATION */}
            {validEdu.length > 0 && (
              <div className="relative resume-section min-w-0">
                {/* Node icon on vertical line */}
                <div
                  className={`absolute rounded-full bg-[#2c3442] text-white flex items-center justify-center -left-[31px] sm:-left-[41px] top-0 ${
                    isMiniPreview ? 'w-4 h-4 -left-[27px]' : 'w-6 h-6'
                  }`}
                >
                  <GraduationCap className={isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'} />
                </div>

                <div className="border-b border-neutral-300 pb-1 mb-3.5">
                  <h2
                    className={`font-bold uppercase tracking-widest text-neutral-900 ${
                      isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                    }`}
                  >
                    EDUCATION
                  </h2>
                </div>

                <div className="space-y-3.5">
                  {validEdu.map((edu) => (
                    <div key={edu.id} className="relative resume-entry min-w-0">
                      <div
                        className={`absolute w-2.5 h-2.5 rounded-full border-2 border-[#2c3442] bg-white -left-[30px] sm:-left-[38px] top-1.5 ${
                          isMiniPreview ? '-left-[27px] w-1.5 h-1.5' : ''
                        }`}
                      />

                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h3 className={`font-bold text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                          {edu.degree}
                        </h3>
                        <span className={`text-neutral-500 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                          {edu.graduationYear}
                        </span>
                      </div>

                      <p className={`text-neutral-700 mt-0.5 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[13.5px]'}`}>
                        {edu.institution} {edu.location ? `| ${edu.location}` : ''}
                      </p>
                      {edu.gpa && (
                        <p className={`text-neutral-500 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[12.5px]'}`}>
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIMELINE SECTION 4: PROJECTS */}
            {validProj.length > 0 && (
              <div className="relative resume-section min-w-0">
                <div
                  className={`absolute rounded-full bg-[#2c3442] text-white flex items-center justify-center -left-[31px] sm:-left-[41px] top-0 ${
                    isMiniPreview ? 'w-4 h-4 -left-[27px]' : 'w-6 h-6'
                  }`}
                >
                  <Award className={isMiniPreview ? 'w-2 h-2' : 'w-3.5 h-3.5'} />
                </div>

                <div className="border-b border-neutral-300 pb-1 mb-3.5">
                  <h2
                    className={`font-bold uppercase tracking-widest text-neutral-900 ${
                      isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'
                    }`}
                  >
                    PROJECTS
                  </h2>
                </div>

                <div className="space-y-3.5">
                  {validProj.map((proj) => (
                    <div key={proj.id} className="relative resume-entry min-w-0">
                      <div
                        className={`absolute w-2.5 h-2.5 rounded-full border-2 border-[#2c3442] bg-white -left-[30px] sm:-left-[38px] top-1.5 ${
                          isMiniPreview ? '-left-[27px] w-1.5 h-1.5' : ''
                        }`}
                      />
                      <h3 className={`font-bold text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                        {proj.title}
                      </h3>
                      {proj.technologies && proj.technologies.length > 0 && (
                        <p className={`text-neutral-500 mb-1 break-words ${isMiniPreview ? 'text-[5.5px]' : 'text-[12.5px]'}`}>
                          {proj.technologies.join(', ')}
                        </p>
                      )}
                      <p className={`text-neutral-700 leading-[1.6] break-words [overflow-wrap:anywhere] min-w-0 ${isMiniPreview ? 'text-[5.5px]' : 'text-[14px]'}`}>
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
