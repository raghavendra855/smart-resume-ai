'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Link2 } from 'lucide-react';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
} from './templateUtils';

export function ContemporaryTemplate({
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
      className={`w-full bg-white text-slate-800 font-sans select-text flex flex-1 min-h-full leading-normal ${
        isMiniPreview ? 'text-[6.5px] leading-tight' : 'text-[14px]'
      }`}
    >
      {/* LEFT SIDEBAR (34%) */}
      <div
        className={`w-[34%] bg-slate-50 border-r border-slate-200 flex flex-col justify-start shrink-0 min-w-0 ${
          isMiniPreview ? 'p-3 space-y-2' : 'p-7 sm:p-8 space-y-6'
        }`}
      >
        <div className={`space-y-${isMiniPreview ? '2' : '5'}`}>
          {/* INITIALS BADGE */}
          <div className="flex items-center gap-3">
            <div
              className={`rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shrink-0 shadow-sm ${
                isMiniPreview ? 'w-6 h-6 text-[9px]' : 'w-12 h-12 text-lg'
              }`}
            >
              {(personalInfo.fullName || 'CR')
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </div>
            <div className="min-w-0">
              <span className={`font-bold text-slate-900 block leading-tight break-words ${isMiniPreview ? 'text-[8px]' : 'text-[15px]'}`}>
                {personalInfo.fullName || 'YOUR NAME'}
              </span>
              {personalInfo.location && (
                <span className={`text-slate-500 block truncate ${isMiniPreview ? 'text-[6px]' : 'text-[12.5px]'}`}>{personalInfo.location}</span>
              )}
            </div>
          </div>

          {/* CONTACT INFO */}
          {hasContactInfo(personalInfo) && (
            <div className={`space-y-2 text-slate-600 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
              <h3 className={`font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 ${isMiniPreview ? 'text-[7px]' : 'text-[15px]'}`}>
                CONTACT
              </h3>
              {personalInfo.email && (
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-indigo-600 shrink-0`} />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="truncate hover:text-indigo-600"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-indigo-600 shrink-0`} />
                  <span className="truncate">{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-indigo-600 shrink-0`} />
                  <span className="truncate">{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-2 min-w-0">
                  <Link2 className={`${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'} text-indigo-600 shrink-0`} />
                  <a
                    href={formatUrl(personalInfo.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate hover:text-indigo-600"
                  >
                    {cleanDomain(personalInfo.linkedin)}
                  </a>
                </div>
              )}
            </div>
          )}

          {/* SKILLS */}
          {skills && (skills.technical?.length || skills.tools?.length || skills.soft?.length) ? (
            <div className={`space-y-3 text-slate-700 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
              <h3 className={`font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 ${isMiniPreview ? 'text-[7px]' : 'text-[15px]'}`}>
                SKILLS
              </h3>
              {skills.technical && skills.technical.length > 0 && (
                <div>
                  <span className={`font-semibold text-slate-900 block ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>Technical:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skills.technical.map((s, idx) => (
                      <span
                        key={idx}
                        className={`bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-medium ${
                          isMiniPreview ? 'text-[5px]' : 'text-[12px]'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {skills.tools && skills.tools.length > 0 && (
                <div className="mt-2">
                  <span className={`font-semibold text-slate-900 block ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>Tools & Frameworks:</span>
                  <p className="text-slate-600 mt-0.5 leading-relaxed break-words">{skills.tools.join(', ')}</p>
                </div>
              )}
              {skills.soft && skills.soft.length > 0 && (
                <div className="mt-2">
                  <span className={`font-semibold text-slate-900 block ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>Competencies:</span>
                  <p className="text-slate-600 mt-0.5 leading-relaxed break-words">{skills.soft.join(', ')}</p>
                </div>
              )}
            </div>
          ) : null}

          {/* EDUCATION */}
          {validEdu.length > 0 && (
            <div className={`space-y-3 text-slate-700 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
              <h3 className={`font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 ${isMiniPreview ? 'text-[7px]' : 'text-[15px]'}`}>
                EDUCATION
              </h3>
              {validEdu.map((edu) => (
                <div key={edu.id} className="resume-entry space-y-0.5 min-w-0">
                  <p className={`font-bold text-slate-900 leading-snug break-words ${isMiniPreview ? 'text-[6.5px]' : 'text-[14px]'}`}>{edu.degree}</p>
                  <p className={`text-slate-600 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>{edu.institution}</p>
                  <p className={`text-indigo-700 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'}`}>{edu.graduationYear}</p>
                  {edu.gpa && <p className={`text-slate-500 ${isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'}`}>GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {validCerts.length > 0 && (
            <div className={`space-y-2 text-slate-700 ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
              <h3 className={`font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 ${isMiniPreview ? 'text-[7px]' : 'text-[15px]'}`}>
                CERTIFICATIONS
              </h3>
              {validCerts.map((cert) => (
                <div key={cert.id} className="resume-entry min-w-0">
                  <p className={`font-semibold text-slate-900 break-words ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>{cert.name}</p>
                  <p className={`text-slate-500 ${isMiniPreview ? 'text-[5.5px]' : 'text-[12px]'}`}>{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT MAIN PANEL (66%) */}
      <div
        className={`w-[66%] flex-1 bg-white flex flex-col justify-start min-w-0 ${
          isMiniPreview ? 'p-3 space-y-2' : 'p-7 sm:p-8 space-y-6'
        }`}
      >
        <div className={`space-y-${isMiniPreview ? '2' : '5'}`}>
          {/* HEADER IN MAIN PANEL */}
          <div className="pb-3 border-b border-slate-200">
            <h1
              className={`font-black tracking-tight text-slate-900 break-words ${
                isMiniPreview ? 'text-[14px]' : 'text-3xl sm:text-[34px]'
              }`}
            >
              {personalInfo.fullName || 'YOUR NAME'}
            </h1>
            {personalInfo.headline && (
              <p className={`font-semibold text-indigo-600 mt-1 break-words ${isMiniPreview ? 'text-[8px]' : 'text-[16px]'}`}>
                {personalInfo.headline}
              </p>
            )}
          </div>

          {/* SUMMARY */}
          {summary?.trim() && (
            <section className="resume-section">
              <h2 className={`font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-100 pb-1 mb-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[15.5px]'}`}>
                {isFresher ? 'CAREER OBJECTIVE' : 'EXECUTIVE SUMMARY'}
              </h2>
              <p className={`text-slate-700 leading-[1.65] text-justify break-words [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                {summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {validExp.length > 0 && (
            <section className="resume-section">
              <h2 className={`font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-100 pb-1 mb-3 ${isMiniPreview ? 'text-[7.5px]' : 'text-[15.5px]'}`}>
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {validExp.map((exp) => (
                  <div key={exp.id} className="resume-entry min-w-0">
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                        {exp.role} <span className="font-normal text-slate-600">| {exp.company}</span>
                      </span>
                      <span className={`text-indigo-700 font-medium ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}>
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    {exp.location && (
                      <p className={`text-slate-500 italic mb-1 ${isMiniPreview ? 'text-[6px]' : 'text-[12.5px]'}`}>{exp.location}</p>
                    )}
                    {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                      <ul className={`list-disc list-outside ml-5 mt-1.5 space-y-1.5 text-slate-700 leading-[1.6] ${isMiniPreview ? 'text-[5.5px]' : 'text-[14px]'}`}>
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

          {/* PROJECTS */}
          {validProj.length > 0 && (
            <section className="resume-section">
              <h2 className={`font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-100 pb-1 mb-3 ${isMiniPreview ? 'text-[7.5px]' : 'text-[15.5px]'}`}>
                FEATURED PROJECTS
              </h2>
              <div className="space-y-4">
                {validProj.map((proj) => (
                  <div key={proj.id} className="resume-entry min-w-0">
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                        {proj.title}
                        {proj.technologies && proj.technologies.length > 0 && (
                          <span className={`font-normal text-indigo-600 ml-1.5 ${isMiniPreview ? 'text-[6px]' : 'text-[12.5px]'}`}>
                            [{proj.technologies.join(', ')}]
                          </span>
                        )}
                      </span>
                      {proj.link && (
                        <a
                          href={formatUrl(proj.link)}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-indigo-600 hover:underline break-all [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[6px]' : 'text-[13px]'}`}
                        >
                          View Project ↗
                        </a>
                      )}
                    </div>
                    <p className={`text-slate-700 leading-[1.6] mt-1 break-words [overflow-wrap:anywhere] min-w-0 ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                      {proj.description}
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
