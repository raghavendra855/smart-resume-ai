import { Router, Request, Response } from 'express';
import {
  getUserDashboardData,
  updateUserProfile,
  changeUserPassword,
  getUserSkills,
  addUserSkill,
  deleteUserSkill,
  getUserSkillsStatus,
  getUserResumes,
  getUserJobMatches,
  getUserCertificates,
  getCertificateByCode,
  getUserAssessments,
  getUserJobApplications,
  createJobApplication,
  updateJobApplication,
  deleteJobApplication,
  getUserAnalyses,
  getUserSingleAnalysis,
  getUserImprovements,
  getUserCourses,
  updateUserCourseProgress,
} from '../db';
import { getUserFromExpressReq } from '../services/session';
import { INITIAL_USER_SKILLS } from '../lib/mockData';

export const userRouter = Router();

// Middleware: require user
function requireAuth(req: Request, res: Response, next: Function) {
  const user = getUserFromExpressReq(req);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  (req as any).user = user;
  next();
}

// GET & PUT /api/user/profile
userRouter.get('/profile', requireAuth, (req: Request, res: Response) => {
  const user = (req as any).user;
  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      lastLoginAt: user.lastLoginAt,
    },
  });
});

userRouter.put('/profile', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { name, email, currentPassword, newPassword } = req.body || {};

    if (currentPassword && newPassword) {
      const pwSuccess = changeUserPassword(user.id, currentPassword, newPassword);
      if (!pwSuccess) {
        return res.status(400).json({ message: 'Current password is incorrect or failed to update password' });
      }
    }

    let updated = user;
    if (name || email) {
      updated = updateUserProfile(user.id, { name, email });
    }

    res.cookie('sra_user_name', encodeURIComponent(updated.name), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: 'Profile updated successfully.',
      user: {
        id: updated.id,
        name: updated.name,
        email: updated.email,
        role: updated.role,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
        lastLoginAt: updated.lastLoginAt,
      },
    });
  } catch (err: any) {
    console.error('Error updating profile:', err);
    return res.status(400).json({ message: err?.message || 'Failed to update profile' });
  }
});

// GET /api/user/dashboard
userRouter.get('/dashboard', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const data = getUserDashboardData(user.id);
    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      ...data,
    });
  } catch (err) {
    console.error('Error fetching dashboard:', err);
    return res.status(500).json({ message: 'Failed to fetch dashboard data' });
  }
});

// GET, POST, DELETE /api/user/skills
userRouter.get('/skills', (req: Request, res: Response) => {
  try {
    const user = getUserFromExpressReq(req);
    const wantCatalog = req.query.catalog === 'true';

    if (!user) {
      if (wantCatalog) return res.status(401).json({ message: 'Unauthorized' });
      return res.json({ success: true, skills: INITIAL_USER_SKILLS });
    }

    if (wantCatalog) {
      const skills = getUserSkillsStatus(user.id);
      return res.json({ skills });
    }

    const skills = getUserSkills(user.id);
    return res.json({ success: true, skills });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch user skills' });
  }
});

userRouter.post('/skills', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { name, category = 'Technical', claimDirectly = true } = req.body || {};
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Skill name is required.' });
    }
    const skill = addUserSkill(user.id, name.trim(), category, claimDirectly);
    return res.json({ success: true, skill });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to add skill' });
  }
});

userRouter.delete('/skills/:id', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    deleteUserSkill(user.id, req.params.id as string);
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to delete skill' });
  }
});

// GET /api/user/resumes
userRouter.get('/resumes', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const resumes = getUserResumes(user.id);
    return res.json({ resumes });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch resumes' });
  }
});

// GET /api/user/jobs
userRouter.get('/jobs', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const jobs = getUserJobMatches(user.id);
    return res.json({ jobs });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch jobs' });
  }
});

// GET /api/user/certificates
userRouter.get('/certificates', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const certificates = getUserCertificates(user.id);
    return res.json({ certificates });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch certificates' });
  }
});

// GET /api/user/assessments
userRouter.get('/assessments', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const assessments = getUserAssessments(user.id);
    return res.json({ assessments });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch assessments' });
  }
});

// GET, POST, PATCH, DELETE /api/user/applications
userRouter.get('/applications', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const applications = getUserJobApplications(user.id);
    return res.json({ applications });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch applications' });
  }
});

userRouter.post('/applications', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { jobTitle, company, location, source, jobUrl, appliedAt, status, notes, jobId } = req.body || {};
    if (!jobTitle || !company) {
      return res.status(400).json({ message: 'Job title and Company name are required.' });
    }
    const application = createJobApplication(user.id, {
      jobId,
      jobTitle,
      company,
      location,
      source,
      jobUrl,
      appliedAt,
      status,
      notes,
    });
    return res.json({ success: true, application });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to create application' });
  }
});

userRouter.patch('/applications/:id', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { status, notes } = req.body || {};
    const success = updateJobApplication(user.id, req.params.id as string, { status, notes });
    if (!success) return res.status(404).json({ message: 'Application not found' });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update application' });
  }
});

userRouter.delete('/applications/:id', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const success = deleteJobApplication(user.id, req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Application not found' });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to delete application' });
  }
});

// GET /api/user/analyses and GET /api/user/analyses/:id
userRouter.get('/analyses', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const analyses = getUserAnalyses(user.id);
    return res.json({ analyses });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch analyses' });
  }
});

userRouter.get('/analyses/:id', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const analysis = getUserSingleAnalysis(user.id, req.params.id as string);
    if (!analysis) return res.status(404).json({ message: 'Analysis not found' });
    return res.json({ analysis });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch analysis' });
  }
});

// GET /api/user/improvements
userRouter.get('/improvements', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const improvements = getUserImprovements(user.id);
    return res.json({ improvements });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch improvements' });
  }
});

// GET & POST /api/user/courses
userRouter.get('/courses', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const courses = getUserCourses(user.id);
    return res.json({ courses });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch courses' });
  }
});

userRouter.post('/courses', requireAuth, (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { courseId, lessonsCompleted } = req.body || {};
    if (!courseId || typeof lessonsCompleted !== 'number') {
      return res.status(400).json({ message: 'Course ID and lessonsCompleted (number) are required.' });
    }
    const progress = updateUserCourseProgress(user.id, courseId, lessonsCompleted);
    return res.json({ success: true, progress });
  } catch (err: any) {
    return res.status(400).json({ message: err?.message || 'Failed to update progress' });
  }
});
