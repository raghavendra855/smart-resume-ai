'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { GraduationCap, Award, FolderGit2 } from 'lucide-react';
import {
  hasContactInfo,
  formatUrl,
  cleanDomain,
  hasSkillsData,
  hasExperienceData,
  hasEducationData,
  hasProjectsData,
  hasCertificationsData,
} from './templateUtils';

export function FreshGraduateTemplate({
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

  return (
    <div
      className={`w-full bg-white text-slate-800 font-sans select-text leading-normal ${
        isMiniPreview ? 'text-[7px] leading-tight p-4' : 'text-[13px] p-8 sm:p-10'
      }`}
    >
      {/* HEADER */}
      <header className="text-center pb-3 mb-3 border-b-2 border-teal-600">
        <h1
          className={`font-extrabold tracking-tight text-slate-900 ${
            isMiniPreview ? 'text-[13px]' : 'text-3xl'
          }`}
        >
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>
        {personalInfo.headline ? (
          <p className={`font-medium text-teal-700 mt-0.5 ${isMiniPreview ? 'text-[8px]' : 'text-sm'}`}>
            {personalInfo.headline}
          </p>
        ) : (
          <p className={`font-medium text-teal-700 mt-0.5 ${isMiniPreview ? 'text-[8px]' : 'text-sm'}`}>
            Entry-Level Professional & Graduate
          </p>
        )}

        {hasContactInfo(personalInfo) && (
          <div
            className={`flex flex-wrap justify-center items-center gap-x-2.5 gap-y-0.5 mt-2 text-slate-600 ${
              isMiniPreview ? 'text-[6px]' : 'text-[12.5px]'
            }`}
          >
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-teal-800 hover:underline">
                {personalInfo.email}
              </a>
            )}
            {personalInfo.phone && <span>•</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>•</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.linkedin && (
              <>
                <span>•</span>
                <a
                  href={formatUrl(personalInfo.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-800 hover:underline"
                >
                  {cleanDomain(personalInfo.linkedin)}
                </a>
              </>
            )}
            {personalInfo.github && (
              <>
                <span>•</span>
                <a
                  href={formatUrl(personalInfo.github)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-800 hover:underline"
                >
                  {cleanDomain(personalInfo.github)}
                </a>
              </>
            )}
          </div>
        )}
      </header>

      {/* BODY SECTIONS: Education First */}
      <div className={`space-y-${isMiniPreview ? '2' : '4'}`}>
        {/* OBJECTIVE */}
        {summary?.trim() && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              CAREER OBJECTIVE & FOCUS
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify">{summary}</p>
          </section>
        )}

        {/* EDUCATION & ACADEMIC CREDENTIALS (ELEVATED) */}
        {validEdu.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1.5 flex items-center gap-1.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              <GraduationCap className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-teal-700`} />
              EDUCATION & ACADEMIC ACHIEVEMENTS
            </h2>
            <div className="space-y-2">
              {validEdu.map((edu) => (
                <div key={edu.id} className="resume-entry bg-teal-50/40 p-2.5 rounded border border-teal-100">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span className={isMiniPreview ? 'text-[7px]' : 'text-[14px]'}>{edu.degree}</span>
                    <span className={`text-teal-800 ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}>{edu.graduationYear}</span>
                  </div>
                  <div className={`flex justify-between items-baseline text-slate-600 mt-0.5 ${isMiniPreview ? 'text-[6.5px]' : 'text-[12.5px]'}`}>
                    <span className="font-medium text-slate-800">{edu.institution}</span>
                    {edu.location && <span>{edu.location}</span>}
                  </div>
                  {(edu.gpa || edu.honors) && (
                    <div className={`flex items-center gap-2 mt-1.5 ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}>
                      {edu.gpa && (
                        <span className="px-2 py-0.5 bg-teal-600 text-white rounded font-semibold text-[11.5px]">
                          GPA: {edu.gpa}
                        </span>
                      )}
                      {edu.honors && (
                        <span className="text-teal-800 font-medium italic">
                          Honors: {edu.honors}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TECHNICAL & PROFESSIONAL SKILLS */}
        {hasSkillsData(skills) && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              TECHNICAL & FOUNDATIONAL COMPETENCIES
            </h2>
            <div className="space-y-1 text-slate-700">
              {skills.technical && skills.technical.length > 0 && (
                <p>
                  <strong className="text-slate-900">Programming & Core: </strong>
                  <span>{skills.technical.join(', ')}</span>
                </p>
              )}
              {skills.tools && skills.tools.length > 0 && (
                <p>
                  <strong className="text-slate-900">Frameworks & Tools: </strong>
                  <span>{skills.tools.join(', ')}</span>
                </p>
              )}
              {skills.soft && skills.soft.length > 0 && (
                <p>
                  <strong className="text-slate-900">Collaboration & Strengths: </strong>
                  <span>{skills.soft.join(', ')}</span>
                </p>
              )}
            </div>
          </section>
        )}

        {/* ACADEMIC & CAPSTONE PROJECTS */}
        {validProj.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1.5 flex items-center gap-1.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              <FolderGit2 className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-teal-700`} />
              ACADEMIC & CAPSTONE PROJECTS
            </h2>
            <div className="space-y-2.5">
              {validProj.map((proj) => (
                <div key={proj.id} className="resume-entry">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className={`text-slate-900 ${isMiniPreview ? 'text-[7px]' : 'text-[14px]'}`}>
                      {proj.title}
                      {proj.technologies && proj.technologies.length > 0 && (
                        <span className={`font-normal text-teal-700 ml-1.5 ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}>
                          ({proj.technologies.join(', ')})
                        </span>
                      )}
                    </span>
                    {proj.link && (
                      <a
                        href={formatUrl(proj.link)}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-teal-700 hover:underline ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}
                      >
                        {cleanDomain(proj.link)}
                      </a>
                    )}
                  </div>
                  {proj.description && (
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      {proj.description}
                    </p>
                  )}
                  {proj.bullets && proj.bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-slate-700 leading-relaxed">
                      {proj.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* INTERNSHIPS (OPTIONAL) */}
        {validExp.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              INTERNSHIPS & PRACTICAL TENURE
            </h2>
            <div className="space-y-2.5">
              {validExp.map((exp) => (
                <div key={exp.id} className="resume-entry">
                  <div className="flex justify-between items-baseline">
                    <span className={`font-bold text-slate-900 ${isMiniPreview ? 'text-[7px]' : 'text-[14px]'}`}>
                      {exp.role} <span className="font-normal text-slate-600">| {exp.company}</span>
                    </span>
                    <span className={`text-slate-500 font-medium ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-slate-700 leading-relaxed">
                      {exp.bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {validCerts.length > 0 && (
          <section className="resume-section">
            <h2 className={`font-bold uppercase tracking-wider text-teal-900 border-b border-teal-200 pb-0.5 mb-1 flex items-center gap-1.5 ${isMiniPreview ? 'text-[7.5px]' : 'text-[14px]'}`}>
              <Award className={`${isMiniPreview ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-teal-700`} />
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="space-y-1 text-slate-700">
              {validCerts.map((cert) => (
                <div key={cert.id} className="resume-entry flex justify-between items-baseline">
                  <span>
                    <strong className="text-slate-900">{cert.name}</strong> · {cert.issuer}
                  </span>
                  <span className={`text-teal-700 font-semibold ${isMiniPreview ? 'text-[6px]' : 'text-[12px]'}`}>{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
