'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  FileSearch,
  CheckCircle2,
  Cpu,
  BadgeCheck,
  FileEdit,
  Briefcase,
  LayoutDashboard,
  ShieldCheck,
  Target,
  Wand2,
  TrendingUp,
  FileText,
  Search,
  Zap,
  Award,
} from 'lucide-react';
import { ScoreRing } from '@/components/ui/ScoreRing';
import { GlassCard } from '@/components/ui/GlassCard';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'improver' | 'builder' | 'skills' | 'match'>('analyzer');

  const steps = [
    {
      step: '01',
      title: 'Upload & Parse',
      desc: 'Drop your PDF or DOCX resume into our instant parsing engine to extract tokens, formatting, and sections.',
      icon: FileText,
      badge: 'Multi-Format',
    },
    {
      step: '02',
      title: 'ATS Audit',
      desc: 'Evaluate 45+ metrics including keyword density, section layout, contact parseability, and ATS compliance.',
      icon: FileSearch,
      badge: 'Instant Score',
    },
    {
      step: '03',
      title: 'Factual Improvement',
      desc: 'Refine bullets with quantified achievements and action verbs while preserving 100% factual truth.',
      icon: Wand2,
      badge: 'Side-by-Side',
    },
    {
      step: '04',
      title: 'A4 Resume Builder',
      desc: 'Generate pixel-perfect A4 resumes using 8 battle-tested recruitment templates ready for PDF export.',
      icon: FileEdit,
      badge: 'Standard A4',
    },
    {
      step: '05',
      title: 'Proctored Skill Verification',
      desc: 'Take webcam-monitored technical assessments to earn tamper-proof verifiable skill certificates.',
      icon: BadgeCheck,
      badge: 'Camera Proctoring',
    },
    {
      step: '06',
      title: 'Targeted Job Matching',
      desc: 'Compare your profile against open job descriptions to pinpoint missing requirements before applying.',
      icon: Target,
      badge: 'Gap Analysis',
    },
  ];

  const features = [
    {
      title: 'AI Resume Analyzer',
      desc: 'Comprehensive ATS parsing audits keyword distribution, section tokens, and layout readability across 45+ recruiter benchmarks.',
      href: '/analyzer',
      icon: FileSearch,
      badge: 'Core Engine',
    },
    {
      title: 'Resume Improver',
      desc: 'Side-by-side phrasing optimizer. Transform weak descriptions into high-converting quantified achievements with zero hallucinations.',
      href: '/improver',
      icon: Wand2,
      badge: 'Generative AI',
    },
    {
      title: 'Resume Builder',
      desc: 'Multi-step guided editor creating compliant A4 PDF resumes with zoomable preview and 8 recruiter-approved templates.',
      href: '/builder',
      icon: FileEdit,
      badge: 'A4 Export',
    },
    {
      title: 'Skill Verification',
      desc: 'Technical assessments with browser fullscreen proctoring, webcam readiness detection, and verifiable digital certificates.',
      href: '/skills',
      icon: BadgeCheck,
      badge: '11 Skills',
    },
    {
      title: 'Job Match Engine',
      desc: 'Deep comparative alignment between your resume and target job descriptions with exact keyword and qualification breakdown.',
      href: '/job-match',
      icon: Target,
      badge: 'Instant Match',
    },
    {
      title: 'Job Search Discovery',
      desc: 'Curated technical and product roles with salary transparency and one-click resume matching against your profile.',
      href: '/jobs',
      icon: Briefcase,
      badge: 'Live Postings',
    },
    {
      title: 'Career Dashboard',
      desc: 'Comprehensive intelligence hub tracking real ATS score evolution, applications, verified certificates, and career courses.',
      href: '/dashboard',
      icon: LayoutDashboard,
      badge: 'Analytics',
    },
    {
      title: 'Tamper-Proof Certificates',
      desc: 'Verifiable credentials for passed assessments with unique credential IDs and clean print/download formatting.',
      href: '/skills',
      icon: Award,
      badge: 'Verified',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient background glows */}
      <div className="ambient-glow -top-40 -left-40 w-[600px] h-[600px] bg-[var(--accent)] opacity-20" />
      <div className="ambient-glow top-[30%] -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-15" />
      <div className="ambient-glow bottom-20 left-1/4 w-[600px] h-[600px] bg-purple-600 opacity-10" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Next-Generation Career Intelligence Platform</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-5xl leading-[1.1] mb-6">
          Turn Your Resume Into Your{' '}
          <span className="bg-gradient-to-r from-[var(--accent)] via-[#818CF8] to-indigo-400 bg-clip-text text-transparent">
            Next Opportunity.
          </span>
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed mb-10">
          AI-powered resume intelligence for analyzing ATS compatibility, improving bullet points with factual impact, building A4 resumes, and earning proctored skill certifications.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-14 z-10 w-full sm:w-auto">
          <Link
            href="/analyzer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            Analyze My Resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/builder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-semibold text-sm transition-all shadow-sm"
          >
            <FileEdit className="w-4 h-4 text-[var(--accent)]" />
            Build A4 Resume
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-hover)] text-[var(--text-primary)] font-semibold text-sm transition-all shadow-sm"
          >
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
            View Dashboard
          </Link>
        </div>

        {/* Key Platform Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full mb-16">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 backdrop-blur-sm text-left">
            <span className="text-2xl font-black text-[var(--text-primary)]">45+</span>
            <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">ATS Checkpoints</p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 backdrop-blur-sm text-left">
            <span className="text-2xl font-black text-[var(--text-primary)]">8</span>
            <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Recruiter Templates</p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 backdrop-blur-sm text-left">
            <span className="text-2xl font-black text-[var(--text-primary)]">11</span>
            <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Proctored Skill Tests</p>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 backdrop-blur-sm text-left">
            <span className="text-2xl font-black text-emerald-500">100%</span>
            <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Factual Integrity</p>
          </div>
        </div>

        {/* Interactive Real Application Showcase */}
        <div className="w-full max-w-5xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl overflow-hidden text-left">
          {/* Showcase Tab Navigation */}
          <div className="flex items-center gap-1 p-2 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-x-auto">
            <button
              onClick={() => setActiveTab('analyzer')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'analyzer'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileSearch className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>ATS Analyzer</span>
            </button>
            <button
              onClick={() => setActiveTab('improver')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'improver'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Bullet Improver</span>
            </button>
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'builder'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <FileEdit className="w-3.5 h-3.5 text-blue-400" />
              <span>A4 Resume Builder</span>
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proctored Skills</span>
            </button>
            <button
              onClick={() => setActiveTab('match')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'match'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Target className="w-3.5 h-3.5 text-rose-400" />
              <span>Job Match</span>
            </button>
          </div>

          {/* Showcase Panel Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'analyzer' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center text-2xl font-black text-emerald-500 mb-3">
                    88
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Overall ATS Score</span>
                  <span className="text-[11px] text-emerald-500 font-semibold mt-1">Recruiter Ready</span>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
                    <span className="text-xs font-bold text-[var(--text-primary)]">Parsed Resume Sections</span>
                    <span className="text-[10px] font-semibold text-emerald-400">4 of 4 Verified</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[var(--text-secondary)]">Experience Impact</span>
                      <span className="font-bold text-emerald-400">92%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[var(--text-secondary)]">Technical Keywords</span>
                      <span className="font-bold text-emerald-400">86%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[var(--text-secondary)]">ATS Formatting</span>
                      <span className="font-bold text-emerald-400">94%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[var(--text-secondary)]">Contact Verification</span>
                      <span className="font-bold text-emerald-400">100%</span>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <Link
                      href="/analyzer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      Try Live Resume Analysis <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'improver' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-xs font-bold text-[var(--text-primary)]">Side-by-Side Bullet Comparison</span>
                  <span className="text-[10px] font-semibold text-purple-400">Zero Hallucination Guaranteed</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1.5">Original Phrasing</span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      "Responsible for optimizing database queries and improving performance for the user search application."
                    </p>
                    <span className="text-[10px] text-red-400/80 font-medium mt-2 block">Lacks quantifiable impact and action verbs</span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1.5">AI-Enhanced Output</span>
                    <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                      "Architected multi-column indexing strategy across PostgreSQL clusters, reducing search latency by 42% for 250K+ daily active users."
                    </p>
                    <span className="text-[10px] text-emerald-500 font-semibold mt-2 block">Quantified metric + action verb + tech stack highlighted</span>
                  </div>
                </div>
                <div className="pt-1 flex justify-end">
                  <Link
                    href="/improver"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    Open Resume Improver <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'builder' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">Guided 6-Step Editor</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Build professional resumes with live real-time A4 preview, zoom controls, and instant PDF printing formatted specifically for applicant tracking systems.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>8 Industry Templates (Tech, Minimal, Executive)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Strict A4 Standard Dimensions (210mm × 297mm)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero Content Clipping in PDF Generation</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col items-center justify-center">
                  <div className="w-full max-w-sm bg-white text-slate-900 rounded-lg p-5 shadow-lg border border-slate-200 text-left scale-95">
                    <div className="border-b border-slate-200 pb-2 mb-3">
                      <h5 className="font-bold text-sm text-slate-900">ALEX JOHNSON</h5>
                      <p className="text-[10px] text-slate-600">Senior Full-Stack Engineer • San Francisco, CA • alex@example.com</p>
                    </div>
                    <div className="space-y-2 text-[10px]">
                      <div>
                        <span className="font-bold text-indigo-700 uppercase tracking-wider block text-[9px]">Professional Summary</span>
                        <p className="text-slate-600 line-clamp-2">Systems architect with 6+ years designing distributed TypeScript and Python cloud architectures.</p>
                      </div>
                      <div>
                        <span className="font-bold text-indigo-700 uppercase tracking-wider block text-[9px]">Technical Skills</span>
                        <p className="text-slate-600">React, Next.js, Node.js, Python, PostgreSQL, AWS, Docker</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end w-full">
                    <Link
                      href="/builder"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      Open Live Resume Builder <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-xs font-bold text-[var(--text-primary)]">Live Proctoring & Digital Verification</span>
                  <span className="text-[10px] font-semibold text-emerald-400">Real Camera API</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-left">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[var(--text-primary)] mb-1">Enforced Fullscreen</h5>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Automatic violation logging upon tab-switching or leaving exam window.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                      <BadgeCheck className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[var(--text-primary)] mb-1">Webcam Readiness</h5>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Browser-level camera permission check before timer begins.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-left">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[var(--text-primary)] mb-1">Verifiable Credentials</h5>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Earn tamper-proof certificates with unique verification codes.</p>
                  </div>
                </div>
                <div className="pt-1 flex justify-end">
                  <Link
                    href="/skills"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    Explore Technical Skill Assessments <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'match' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-xs font-bold text-[var(--text-primary)]">Target Role Alignment Breakdown</span>
                  <span className="text-[10px] font-semibold text-rose-400">Senior Systems Architect</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center flex flex-col justify-center items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 flex items-center justify-center text-xl font-black text-indigo-400 mb-2">
                      85%
                    </div>
                    <span className="text-xs font-bold text-[var(--text-primary)]">Skill Alignment Match</span>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs">
                      <span className="font-bold text-emerald-400 block mb-0.5">Matched Qualifications (8)</span>
                      <span className="text-[var(--text-secondary)]">Python, TypeScript, PostgreSQL, AWS ECS, Docker, Distributed Systems, CI/CD, Microservices</span>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs">
                      <span className="font-bold text-amber-400 block mb-0.5">Missing High-Impact Terms (2)</span>
                      <span className="text-[var(--text-secondary)]">Kubernetes Operator development, Kafka partition rebalancing</span>
                    </div>
                  </div>
                </div>
                <div className="pt-1 flex justify-end">
                  <Link
                    href="/job-match"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    Open Job Match Engine <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works (6 Steps) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[var(--accent)] tracking-widest uppercase mb-2 block">
            End-to-End Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            How Smart Resume AI Works
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto mt-3">
            Six disciplined stages transforming raw career history into verified, market-ready intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="group p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all duration-200 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-[var(--accent)] tracking-tighter">
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-color)]/60">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                    {st.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-color)]">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[var(--accent)] tracking-widest uppercase mb-2 block">
            Comprehensive Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Built For Serious Career Growth
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto mt-3">
            Every feature engineered to commercial standards with seamless integration across the entire platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <Link
                key={feat.title}
                href={feat.href}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-[var(--border-color)]">
        <div className="p-8 sm:p-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-3">
              Ready To Maximize Your Career Potential?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              Equip yourself with precision ATS analysis, factual resume improvements, and proctor-verified technical credentials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/analyzer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs shadow-md transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Analyze My Resume
              </Link>
              <Link
                href="/builder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold text-xs transition-all"
              >
                Build A4 Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-[var(--text-primary)]">
              SMART RESUME AI
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Smart Resume AI. Built for commercial career intelligence.
          </p>
          <div className="flex items-center gap-5 text-xs text-[var(--text-secondary)]">
            <Link href="/analyzer" className="hover:text-[var(--text-primary)] transition-colors">
              Analyzer
            </Link>
            <Link href="/builder" className="hover:text-[var(--text-primary)] transition-colors">
              Builder
            </Link>
            <Link href="/improver" className="hover:text-[var(--text-primary)] transition-colors">
              Improver
            </Link>
            <Link href="/skills" className="hover:text-[var(--text-primary)] transition-colors">
              Verification
            </Link>
            <Link href="/jobs" className="hover:text-[var(--text-primary)] transition-colors">
              Job Search
            </Link>
            <Link href="/feedback" className="hover:text-[var(--text-primary)] transition-colors">
              Feedback
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}