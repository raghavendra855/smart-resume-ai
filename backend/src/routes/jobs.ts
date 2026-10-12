import { Router, Request, Response } from 'express';
import { executeJobSearch } from '../lib/jobs/search';
import { JobSearchParams } from '../lib/jobs/types';
import { recordJobSearchEvent, recordJobMatchEvent } from '../db';
import { matchResumeToJob } from '../lib/gemini';
import { getUserFromExpressReq, getVisitorIdFromExpressReq } from '../services/session';

export const jobsRouter = Router();

// GET /api/jobs
jobsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const params: JobSearchParams = {
      keywords: (req.query.q as string) || (req.query.keywords as string) || '',
      location: (req.query.location as string) || '',
      radiusKm: req.query.radius ? Number(req.query.radius) : undefined,
      workplaceType: (req.query.workplace as JobSearchParams['workplaceType']) || 'all',
      employmentType: (req.query.type as JobSearchParams['employmentType']) || 'all',
      experienceLevel: (req.query.experience as JobSearchParams['experienceLevel']) || 'all',
      salaryMin: req.query.salaryMin ? Number(req.query.salaryMin) : undefined,
      postedWithinDays: req.query.days ? Number(req.query.days) : undefined,
      sortBy: (req.query.sortBy as JobSearchParams['sortBy']) || 'relevance',
      page: req.query.page ? Number(req.query.page) : 1,
      limit: req.query.limit ? Number(req.query.limit) : 20,
    };

    const skillsParam = (req.query.skill as string) || (req.query.skills as string);
    if (skillsParam) {
      params.resumeSkills = skillsParam.split(',').map((s) => s.trim()).filter(Boolean);
    }

    const response = await executeJobSearch(params);
    return res.json(response.jobs);
  } catch (err) {
    console.error('API /api/jobs error:', err);
    return res.status(500).json({ message: 'Live job search is temporarily unavailable.' });
  }
});

// GET & POST /api/jobs/search
async function handleSearch(req: Request, res: Response) {
  try {
    const query = req.method === 'POST' ? req.body : req.query;

    const params: JobSearchParams = {
      keywords: query.q || query.keywords || '',
      location: query.location || '',
      radiusKm: query.radius ? Number(query.radius) : undefined,
      workplaceType: (query.workplace as JobSearchParams['workplaceType']) || 'all',
      employmentType: (query.type as JobSearchParams['employmentType']) || 'all',
      experienceLevel: (query.experience as JobSearchParams['experienceLevel']) || 'all',
      salaryMin: query.salaryMin ? Number(query.salaryMin) : undefined,
      postedWithinDays: query.days ? Number(query.days) : undefined,
      sortBy: (query.sortBy as JobSearchParams['sortBy']) || 'relevance',
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 15,
      bypassCache: query.refresh === 'true' || query.refresh === true,
    };

    if (query.skills) {
      const skills = Array.isArray(query.skills)
        ? query.skills
        : String(query.skills).split(',').map((s) => s.trim()).filter(Boolean);
      params.resumeSkills = skills;
    }

    const results = await executeJobSearch(params);

    try {
      const user = getUserFromExpressReq(req);
      const visitorId = getVisitorIdFromExpressReq(req, res);
      recordJobSearchEvent({
        visitorId,
        userId: user?.id,
        query: params.keywords || (params.resumeSkills ? params.resumeSkills.join(', ') : 'All Opportunities'),
        location: params.location || 'India',
        provider: results.activeSources?.[0] || 'LinkedIn',
        resultsCount: results.totalJobs || (results.jobs ? results.jobs.length : 0),
      });
    } catch (dbErr) {
      console.error('[DB Event Error] Failed to persist job search:', dbErr);
    }

    return res.json(results);
  } catch (err) {
    console.error('[API /api/jobs/search Error]:', err);
    return res.status(500).json({ message: 'Live job search is temporarily unavailable. Please try again.' });
  }
}

jobsRouter.get('/search', handleSearch);
jobsRouter.post('/search', handleSearch);

// POST /api/job/match (mounted also directly or here)
export async function handleJobMatch(req: Request, res: Response) {
  try {
    const { resumeText, jobTitle, company, jobDescription } = req.body || {};

    const result = await matchResumeToJob(
      resumeText || '',
      jobTitle || 'Target Role',
      company || 'Target Company',
      jobDescription || ''
    );

    try {
      const user = getUserFromExpressReq(req);
      const visitorId = getVisitorIdFromExpressReq(req, res);
      recordJobMatchEvent({
        visitorId,
        userId: user?.id,
        jobTitle: jobTitle || 'Target Role',
        company: company || 'Target Company',
        matchScore: result.overallMatchScore,
        matchedSkills: (result.matchedSkills || []).map((s: any) => (typeof s === 'string' ? s : s.skill)),
        partialSkills: (result.partialSkills || []).map((s: any) => (typeof s === 'string' ? s : s.skill)),
        missingSkills: (result.missingSkills || []).map((s: any) => (typeof s === 'string' ? s : s.skill)),
      });
    } catch (dbErr: any) {
      console.log('[DB Event Error] Failed to persist job match:', dbErr?.message);
    }

    return res.json(result);
  } catch (err) {
    console.error('API /api/job/match error:', err);
    return res.status(500).json({ message: 'Unable to evaluate job match at this time.' });
  }
}
