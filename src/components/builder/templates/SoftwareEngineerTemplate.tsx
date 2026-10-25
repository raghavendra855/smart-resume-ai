'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Globe, Terminal } from 'lucide-react';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  hasSkillsData,
  GithubIcon,
  LinkedinIcon,
} from './templateUtils';

export function SoftwareEngineerTemplate({
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

  return (
    <div
      className={`w-full bg-white text-slate-800 font-sans select-text leading-normal flex-1 flex flex-col min-h-full ${
        isMiniPreview ? 'text-[7px] leading-tight p-4' : 'text-[14px] p-8 sm:p-10'
      }`}
    >
      {/* HEADER: Tech & Code Focused */}
      <header className="pb-3 mb-4 border-b-2 border-emerald-600 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div className="min-w-0">
            <h1
              className={`font-mono font-bold tracking-tight text-slate-900 break-words ${
                isMiniPreview ? 'text-[13px]' : 'text-3xl sm:text-[34px]'
              }`}
            >
              {personalInfo.fullName || 'YOUR NAME'}
            </h1>
            {personalInfo.headline && (
              <p className={`font-mono text-emerald-700 font-semibold mt-1 break-words ${isMiniPreview ? 'text-[8px]' : 'text-[16px]'}`}>
                &gt; {personalInfo.headline}
              </p>
            )}
          </div>
        </div>

        {hasContactInfo(personalInfo) && (
          <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-slate-600 font-mono ${
              isMiniPreview ? 'text-[6px]' : 'text-[13px]'
            }`}
          >
            {personalInfo.email && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Mail className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-700 hover:text-emerald-700 break-all">
                  {personalInfo.email}
                </a>
              </span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Phone className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <span>{personalInfo.phone}</span>
              </span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1.5 min-w-0">
                <MapPin className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <span className="break-words">{personalInfo.location}</span>
              </span>
            )}
            {personalInfo.github && (
              <span className="flex items-center gap-1.5 min-w-0">
                <GithubIcon className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <a
                  href={formatUrl(personalInfo.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 font-semibold hover:underline break-all"
                >
                  {cleanDomain(personalInfo.github)}
                </a>
              </span>
            )}
            {personalInfo.linkedin && (
              <span className="flex items-center gap-1.5 min-w-0">
                <LinkedinIcon className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <a
                  href={formatUrl(personalInfo.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  {cleanDomain(personalInfo.linkedin)}
                </a>
              </span>
            )}
            {personalInfo.portfolio && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Globe className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
                <a
                  href={formatUrl(personalInfo.portfolio)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  {cleanDomain(personalInfo.portfolio)}
                </a>
              </span>
            )}
          </div>
        )}
      </header>

      {/* BODY SECTIONS */}
      <div className={`space-y-${isMiniPreview ? '2' : '5'} flex-1`}>
        {/* SUMMARY */}
        {summary?.trim() && (
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // {isFresher ? 'ENGINEERING OBJECTIVE' : 'SYSTEMS PROFILE & SUMMARY'}
            </h2>
            <p className={`text-slate-700 leading-[1.65] font-sans text-justify break-words [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>{summary}</p>
          </section>
        )}

        {/* TECHNICAL SKILLS MATRIX */}
        {hasSkillsData(skills) && (
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // TECHNICAL SKILLS & STACK
            </h2>
            <div className={`bg-slate-50 border border-slate-200 rounded p-3.5 space-y-1.5 font-mono ${isMiniPreview ? 'text-[6.5px]' : 'text-[13.5px]'}`}>
              {skills.technical && skills.technical.length > 0 && (
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-slate-900 shrink-0">Languages & Core:</span>
                  <span className="text-slate-700 break-words">{skills.technical.join(' · ')}</span>
                </div>
              )}
              {skills.tools && skills.tools.length > 0 && (
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-slate-900 shrink-0">Frameworks & Cloud:</span>
                  <span className="text-slate-700 break-words">{skills.tools.join(' · ')}</span>
                </div>
              )}
              {skills.soft && skills.soft.length > 0 && (
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-slate-900 shrink-0">Architecture & Methods:</span>
                  <span className="text-slate-700 break-words">{skills.soft.join(' · ')}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* PROJECTS: Highlighted early for Software Engineers */}
        {validProj.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // FEATURED OPEN SOURCE & SYSTEMS
            </h2>
            <div className="space-y-3.5">
              {validProj.map((proj) => (
                <div key={proj.id} className="resume-entry min-w-0">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                      {proj.title}
                      {proj.technologies && proj.technologies.length > 0 && (
                        <span className={`font-mono text-emerald-700 font-semibold ml-1.5 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                          [{proj.technologies.join(', ')}]
                        </span>
                      )}
                    </span>
                    {proj.link && (
                      <a
                        href={formatUrl(proj.link)}
                        target="_blank"
                        rel="noreferrer"
                        className={`font-mono text-emerald-600 hover:underline flex items-center gap-1 break-all ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}
                      >
                        <GithubIcon className="w-3 h-3" />
                        {cleanDomain(proj.link)}
                      </a>
                    )}
                  </div>
                  {proj.description && (
                    <p className={`text-slate-700 mt-1 leading-[1.6] break-words [overflow-wrap:anywhere] min-w-0 ${isMiniPreview ? 'text-[5.5px]' : 'text-[14px]'}`}>
                      {proj.description}
                    </p>
                  )}
                  {proj.bullets && proj.bullets.length > 0 && (
                    <ul className={`list-disc list-outside ml-5 mt-1 space-y-1 text-slate-700 leading-[1.6] ${isMiniPreview ? 'text-[5px]' : 'text-[13.5px]'}`}>
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="break-words [overflow-wrap:anywhere] min-w-0">{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {validExp.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // ENGINEERING EXPERIENCE
            </h2>
            <div className="space-y-4">
              {validExp.map((exp) => (
                <div key={exp.id} className="resume-entry min-w-0">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                      {exp.role} <span className="font-normal text-slate-600">@ {exp.company}</span>
                    </span>
                    <span className={`font-mono text-slate-500 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.location && (
                    <p className={`font-mono text-slate-500 italic ${isMiniPreview ? 'text-[6px]' : 'text-[12.5px]'}`}>{exp.location}</p>
                  )}
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className={`list-disc list-outside ml-5 mt-1.5 space-y-1.5 text-slate-700 leading-[1.6] ${isMiniPreview ? 'text-[5px]' : 'text-[14px]'}`}>
                      {exp.bulletPoints.map((bp, i) => (
                        <li key={i} className="break-words [overflow-wrap:anywhere] min-w-0">{bp}</li>
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
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // EDUCATION
            </h2>
            <div className="space-y-3">
              {validEdu.map((edu) => (
                <div key={edu.id} className="resume-entry flex justify-between items-baseline flex-wrap gap-1 min-w-0">
                  <div className="min-w-0">
                    <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>{edu.degree}</span>
                    <span className={`text-slate-600 break-words ${isMiniPreview ? 'text-[6.5px]' : 'text-[13.5px]'}`}>, {edu.institution}</span>
                    {edu.gpa && (
                      <span className={`font-mono text-emerald-700 ml-1.5 font-semibold ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                        [GPA: {edu.gpa}]
                      </span>
                    )}
                  </div>
                  <span className={`font-mono text-slate-500 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>{edu.graduationYear}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {validCerts.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-200 pb-1 mb-2 flex items-center gap-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              <Terminal className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
              // CERTIFICATIONS
            </h2>
            <div className={`space-y-1.5 text-slate-700 font-mono ${isMiniPreview ? 'text-[6.5px]' : 'text-[13.5px]'}`}>
              {validCerts.map((cert) => (
                <div key={cert.id} className="resume-entry flex justify-between items-baseline flex-wrap gap-1 min-w-0">
                  <span className="break-words">
                    <strong className="text-slate-900 font-semibold">{cert.name}</strong> · {cert.issuer}
                  </span>
                  <span className={`text-slate-500 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
