'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Globe, Link2, Code2 } from 'lucide-react';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  hasSkillsData,
} from './templateUtils';

export function ModernProfessionalTemplate({
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
      {/* HEADER */}
      <header className="pb-3 mb-4 border-b border-slate-200 shrink-0">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div className="min-w-0">
            <h1
              className={`font-extrabold tracking-tight text-slate-900 break-words ${
                isMiniPreview ? 'text-[13px]' : 'text-3xl sm:text-[34px]'
              }`}
            >
              {personalInfo.fullName || 'YOUR NAME'}
            </h1>
            {personalInfo.headline && (
              <p className={`font-semibold text-indigo-700 mt-1 break-words ${isMiniPreview ? 'text-[8px]' : 'text-[16px]'}`}>
                {personalInfo.headline}
              </p>
            )}
          </div>
        </div>

        {hasContactInfo(personalInfo) && (
          <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-slate-600 ${
              isMiniPreview ? 'text-[6.5px]' : 'text-[13px]'
            }`}
          >
            {personalInfo.email && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Mail className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 break-all">
                  {personalInfo.email}
                </a>
              </span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Phone className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <span>{personalInfo.phone}</span>
              </span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1.5 min-w-0">
                <MapPin className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <span className="break-words">{personalInfo.location}</span>
              </span>
            )}
            {personalInfo.linkedin && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Link2 className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <a
                  href={formatUrl(personalInfo.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 break-all"
                >
                  {cleanDomain(personalInfo.linkedin)}
                </a>
              </span>
            )}
            {personalInfo.github && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Code2 className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <a
                  href={formatUrl(personalInfo.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 break-all"
                >
                  {cleanDomain(personalInfo.github)}
                </a>
              </span>
            )}
            {personalInfo.portfolio && (
              <span className="flex items-center gap-1.5 min-w-0">
                <Globe className={`text-indigo-600 shrink-0 ${isMiniPreview ? 'w-2 h-2' : 'w-4 h-4'}`} />
                <a
                  href={formatUrl(personalInfo.portfolio)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 break-all"
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
            <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              {isFresher ? 'CAREER OBJECTIVE' : 'EXECUTIVE SUMMARY'}
            </h2>
            <p className={`text-slate-700 leading-[1.65] text-justify px-0.5 break-words [overflow-wrap:anywhere] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>{summary}</p>
          </section>
        )}

        {isFresher ? (
          <>
            {/* EDUCATION */}
            {validEdu.length > 0 && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  EDUCATION & ACADEMIC CREDENTIALS
                </h2>
                <div className="space-y-3 px-0.5">
                  {validEdu.map((edu) => (
                    <div key={edu.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>{edu.degree}</span>
                        <span className={`font-semibold text-indigo-700 ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>{edu.graduationYear}</span>
                      </div>
                      <div className={`flex justify-between items-baseline text-slate-600 flex-wrap gap-1 ${isMiniPreview ? 'text-[5px]' : 'text-[13.5px]'}`}>
                        <span className="break-words">{edu.institution}</span>
                        {edu.location && <span>{edu.location}</span>}
                      </div>
                      {(edu.gpa || edu.honors) && (
                        <p className={`text-slate-600 mt-0.5 ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>
                          {edu.gpa && <span className="font-semibold text-slate-700">GPA: {edu.gpa}</span>}
                          {edu.gpa && edu.honors && <span> · </span>}
                          {edu.honors && <span className="text-emerald-700 font-medium">{edu.honors}</span>}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SKILLS */}
            {hasSkillsData(skills) && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  SKILLS & EXPERTISE
                </h2>
                <div className={`space-y-1.5 px-0.5 text-slate-700 leading-[1.6] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                  {skills.technical && skills.technical.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Technical Proficiencies: </strong>
                      <span>{skills.technical.join(' · ')}</span>
                    </p>
                  )}
                  {skills.tools && skills.tools.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Tools & Frameworks: </strong>
                      <span>{skills.tools.join(' · ')}</span>
                    </p>
                  )}
                  {skills.soft && skills.soft.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Core Competencies: </strong>
                      <span>{skills.soft.join(' · ')}</span>
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* PROJECTS */}
            {validProj.length > 0 && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  FEATURED PROJECTS & CODE
                </h2>
                <div className="space-y-3 px-0.5">
                  {validProj.map((proj) => (
                    <div key={proj.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className="font-bold text-slate-900">
                          <span className={`break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>{proj.title}</span>
                          {proj.technologies && proj.technologies.length > 0 && (
                            <span className={`font-medium text-indigo-700 ml-1.5 break-words ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}>
                              ({proj.technologies.join(', ')})
                            </span>
                          )}
                        </span>
                        {proj.link && (
                          <a
                            href={formatUrl(proj.link)}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-indigo-600 hover:underline break-all ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}
                          >
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
                            <li key={i} className="break-words [overflow-wrap:anywhere]">{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* INTERNSHIPS / EXPERIENCE */}
            {validExp.length > 0 && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  PRACTICAL EXPERIENCE
                </h2>
                <div className="space-y-4 px-0.5">
                  {validExp.map((exp) => (
                    <div key={exp.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                          {exp.role} · <span className="font-semibold text-slate-700">{exp.company}</span>
                        </span>
                        <span className={`text-indigo-700 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <p className={`text-slate-500 italic ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>{exp.location}</p>
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
          </>
        ) : (
          <>
            {/* WORK EXPERIENCE */}
            {validExp.length > 0 && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="space-y-4 px-0.5">
                  {validExp.map((exp) => (
                    <div key={exp.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>
                          {exp.role} <span className="text-slate-500 font-normal">|</span> {exp.company}
                        </span>
                        <span className={`text-indigo-700 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <p className={`text-slate-500 italic ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>{exp.location}</p>
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

            {/* SKILLS */}
            {hasSkillsData(skills) && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  CORE COMPETENCIES & TECHNICAL PROFICIENCY
                </h2>
                <div className={`space-y-1.5 px-0.5 text-slate-700 leading-[1.6] ${isMiniPreview ? 'text-[6px]' : 'text-[14px]'}`}>
                  {skills.technical && skills.technical.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Technical Proficiencies: </strong>
                      <span>{skills.technical.join(' · ')}</span>
                    </p>
                  )}
                  {skills.tools && skills.tools.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Tools & Technologies: </strong>
                      <span>{skills.tools.join(' · ')}</span>
                    </p>
                  )}
                  {skills.soft && skills.soft.length > 0 && (
                    <p className="break-words">
                      <strong className="text-slate-900">Leadership & Management: </strong>
                      <span>{skills.soft.join(' · ')}</span>
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* PROJECTS */}
            {validProj.length > 0 && (
              <section className="resume-section">
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  STRATEGIC PROJECTS
                </h2>
                <div className="space-y-3 px-0.5">
                  {validProj.map((proj) => (
                    <div key={proj.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className="font-bold text-slate-900">
                          <span className={`break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>{proj.title}</span>
                          {proj.technologies && proj.technologies.length > 0 && (
                            <span className={`font-medium text-indigo-700 ml-1.5 break-words ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}>
                              [{proj.technologies.join(', ')}]
                            </span>
                          )}
                        </span>
                        {proj.link && (
                          <a
                            href={formatUrl(proj.link)}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-indigo-600 hover:underline break-all ${isMiniPreview ? 'text-[5px]' : 'text-[13px]'}`}
                          >
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
                            <li key={i} className="break-words [overflow-wrap:anywhere]">{b}</li>
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
                <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
                  EDUCATION
                </h2>
                <div className="space-y-3 px-0.5">
                  {validEdu.map((edu) => (
                    <div key={edu.id} className="resume-entry min-w-0">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className={`font-bold text-slate-900 break-words ${isMiniPreview ? 'text-[7px]' : 'text-[15.5px]'}`}>{edu.degree}</span>
                        <span className={`text-indigo-700 font-medium ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>{edu.graduationYear}</span>
                      </div>
                      <div className={`flex justify-between items-baseline text-slate-600 flex-wrap gap-1 ${isMiniPreview ? 'text-[5px]' : 'text-[13.5px]'}`}>
                        <span className="break-words">{edu.institution}</span>
                        {edu.location && <span>{edu.location}</span>}
                      </div>
                      {(edu.gpa || edu.honors) && (
                        <p className={`text-slate-600 mt-0.5 ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>
                          {edu.gpa && <span className="font-semibold text-slate-700">GPA: {edu.gpa}</span>}
                          {edu.gpa && edu.honors && <span> · </span>}
                          {edu.honors && <span className="text-emerald-700 font-medium">{edu.honors}</span>}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* CERTIFICATIONS */}
        {validCerts.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-slate-900 border-l-4 border-indigo-600 bg-slate-50 pl-3 py-1 mb-2 ${isMiniPreview ? 'text-[7.5px]' : 'text-[16px]'}`}>
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="space-y-2 px-0.5">
              {validCerts.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline text-slate-800 resume-entry flex-wrap gap-1 min-w-0">
                  <span className="break-words">
                    <strong className="text-slate-900">{cert.name}</strong> · {cert.issuer}
                    {cert.credentialId && (
                      <span className={`text-slate-500 ml-1.5 ${isMiniPreview ? 'text-[5px]' : 'text-[12.5px]'}`}>
                        (ID: {cert.credentialId})
                      </span>
                    )}
                  </span>
                  <span className={`text-slate-600 ${isMiniPreview ? 'text-[5.5px]' : 'text-[13px]'}`}>{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
