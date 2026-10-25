'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  LinkedinIcon,
} from './templateUtils';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function OliviaWilsonBlushTemplate({
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

  const nameParts = (personalInfo.fullName || 'Olivia Wilson').trim().split(/\s+/);
  const firstName = nameParts[0] || 'Olivia';
  const lastName = nameParts.slice(1).join(' ') || 'WILSON';
  const initials = `${firstName[0] || 'O'}${lastName[0] || 'W'}`;

  return (
    <div
      className={`w-full bg-white text-neutral-800 select-text leading-normal flex flex-1 min-h-full ${
        isMiniPreview ? 'text-[7px] leading-tight' : 'text-[14px]'
      }`}
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      {/* 1. LEFT COLUMN: SOFT BLUSH PINK SIDEBAR (~38%) */}
      <div
        className={`w-[38%] bg-[#f2dcde] text-neutral-800 flex flex-col justify-start shrink-0 min-w-0 ${
          isMiniPreview ? 'p-3 space-y-3' : 'p-7 sm:p-8 space-y-6'
        }`}
      >
        {/* FRAMED RECTANGULAR PORTRAIT PHOTO */}
        <div className="flex justify-center mb-2">
          <div
            className={`bg-white p-2 shadow-sm border border-neutral-200 ${
              isMiniPreview ? 'w-16 h-20 p-1' : 'w-36 h-44 sm:w-40 sm:h-48'
            }`}
          >
            <div className="w-full h-full bg-neutral-100 border border-neutral-300 flex flex-col items-center justify-center text-neutral-500 font-serif overflow-hidden">
              <span className={`font-serif italic ${isMiniPreview ? 'text-xs' : 'text-3xl'}`}>
                {initials}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION: ABOUT ME */}
        {summary && (
          <section className="mb-6 resume-section min-w-0">
            <div className="bg-white px-3 py-1.5 text-center font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-xs mb-3">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>ABOUT ME</span>
            </div>
            <p className={`text-neutral-700 leading-[1.65] text-center break-words [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[5.5px]' : 'text-[14px]'}`}>
              {summary}
            </p>
          </section>
        )}

        {/* SECTION: CONTACT */}
        {hasContactInfo(personalInfo) && (
          <section className="mb-6 resume-section min-w-0">
            <div className="bg-white px-3 py-1.5 text-center font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-xs mb-3">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>CONTACT</span>
            </div>
            <div className={`space-y-2.5 text-neutral-800 ${isMiniPreview ? 'space-y-1 text-[5.5px]' : 'text-[13px]'}`}>
              {personalInfo.phone && (
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className={`shrink-0 text-[#9c6668] ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                  <span className="truncate">{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.email && (
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className={`shrink-0 text-[#9c6668] ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                  <a href={`mailto:${personalInfo.email}`} className="break-all hover:text-black">
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.portfolio && (
                <div className="flex items-center gap-2 min-w-0">
                  <Globe className={`shrink-0 text-[#9c6668] ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
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
              {personalInfo.location && (
                <div className="flex items-start gap-2 min-w-0">
                  <MapPin className={`shrink-0 text-[#9c6668] mt-0.5 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                  <span className="break-words">{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-2 min-w-0">
                  <LinkedinIcon className={`shrink-0 text-[#9c6668] ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
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

        {/* SECTION: SKILLS */}
        {allSkills.length > 0 && (
          <section className="mb-6 resume-section min-w-0">
            <div className="bg-white px-3 py-1.5 text-center font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-xs mb-3">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>SKILLS</span>
            </div>
            <ul className={`space-y-2 text-neutral-800 ${isMiniPreview ? 'space-y-0.5 text-[5.5px]' : 'text-[13.5px]'}`}>
              {allSkills.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#9c6668] font-bold">•</span>
                  <span className="break-words [overflow-wrap:anywhere] min-w-0">{s}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* SECTION: CERTIFICATIONS */}
        {validCerts.length > 0 && (
          <section className="resume-section min-w-0">
            <div className="bg-white px-3 py-1.5 text-center font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-xs mb-3">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>CERTIFICATES</span>
            </div>
            <ul className={`space-y-2.5 text-neutral-800 ${isMiniPreview ? 'space-y-1 text-[5.5px]' : 'text-[13px]'}`}>
              {validCerts.map((c) => (
                <li key={c.id} className="resume-entry min-w-0">
                  <p className="font-semibold text-neutral-900 break-words">• {c.name}</p>
                  <p className={`text-neutral-600 pl-3 ${isMiniPreview ? 'text-[5px]' : 'text-[12px]'}`}>{c.issuer} {c.date ? `(${c.date})` : ''}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* 2. RIGHT COLUMN: CRISP WHITE BACKGROUND WITH BLUSH BARS (~62%) */}
      <div
        className={`w-[62%] flex-1 bg-white text-neutral-800 flex flex-col justify-start min-w-0 ${
          isMiniPreview ? 'p-3 pl-4 space-y-3' : 'p-7 sm:p-8 pl-8 sm:pl-10 space-y-6'
        }`}
      >
        {/* HEADER: Calligraphy Script First Name + Sans Last Name */}
        <header className={`mb-4 shrink-0 ${isMiniPreview ? 'mb-2' : ''}`}>
          <h1
            className={`leading-none mb-1 break-words ${
              isMiniPreview ? 'text-2xl' : 'text-5xl sm:text-[54px]'
            }`}
          >
            <span
              className="block font-serif italic text-neutral-900"
              style={{ fontFamily: '"Playfair Display", "Brush Script MT", "Brush Script Std", cursive' }}
            >
              {firstName}
            </span>
            <span
              className={`block font-bold tracking-[0.3em] uppercase text-neutral-900 mt-1 ${
                isMiniPreview ? 'text-[11px]' : 'text-xl sm:text-[24px]'
              }`}
            >
              {lastName}
            </span>
          </h1>

          <div className="border-b border-neutral-300 my-2.5" />

          <p
            className={`font-sans tracking-[0.25em] uppercase text-neutral-600 font-semibold break-words ${
              isMiniPreview ? 'text-[5.5px]' : 'text-[14.5px]'
            }`}
          >
            {personalInfo.headline || 'DESIGNER AND ARCHITECT'}
          </p>
        </header>

        {/* WORK EXPERIENCE */}
        {validExp.length > 0 && (
          <section className="mb-6 resume-section min-w-0">
            <div className="bg-[#eed6d8] px-3.5 py-1.5 font-bold uppercase tracking-[0.2em] text-neutral-900 mb-3.5">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>WORK EXPERIENCE</span>
            </div>
            <div className="space-y-4">
              {validExp.map((exp) => (
                <div key={exp.id} className="resume-entry min-w-0">
                  <h3 className={`font-bold uppercase tracking-wider text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-neutral-700 font-semibold mt-0.5 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                    {exp.company}
                  </p>
                  <p className={`text-neutral-500 mb-2 ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    {exp.location ? ` | ${exp.location}` : ''}
                  </p>
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className={`space-y-1.5 text-neutral-700 ${isMiniPreview ? 'text-[5px]' : 'text-[14px]'}`}>
                      {exp.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="leading-[1.6] break-words [overflow-wrap:anywhere] min-w-0">
                          {bp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {validEdu.length > 0 && (
          <section className="mb-6 resume-section min-w-0">
            <div className="bg-[#eed6d8] px-3.5 py-1.5 font-bold uppercase tracking-[0.2em] text-neutral-900 mb-3.5">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>EDUCATION</span>
            </div>
            <div className="space-y-3.5">
              {validEdu.map((edu) => (
                <div key={edu.id} className="resume-entry min-w-0">
                  <h3 className={`font-bold uppercase tracking-wider text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-neutral-700 mt-0.5 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-neutral-500 ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}>
                    {edu.graduationYear}
                    {edu.gpa ? ` | GPA: ${edu.gpa}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {validProj.length > 0 && (
          <section className="resume-section min-w-0">
            <div className="bg-[#eed6d8] px-3.5 py-1.5 font-bold uppercase tracking-[0.2em] text-neutral-900 mb-3.5">
              <span className={isMiniPreview ? 'text-[6px]' : 'text-[15px]'}>PROJECTS</span>
            </div>
            <div className="space-y-3.5">
              {validProj.map((proj) => (
                <div key={proj.id} className="resume-entry min-w-0">
                  <h3 className={`font-bold uppercase tracking-wider text-neutral-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                    {proj.title}
                  </h3>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className={`text-neutral-500 mb-1 break-words ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>
                      {proj.technologies.join(', ')}
                    </p>
                  )}
                  <p className={`text-neutral-700 mt-0.5 leading-[1.6] break-words [overflow-wrap:anywhere] min-w-0 ${isMiniPreview ? 'text-[5px]' : 'text-[14px]'}`}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
