import { Router, Request, Response } from 'express';
import {
  getAdminByEmail,
  verifyPassword,
  recordAdminLogin,
  createSessionToken,
  verifyAdminToken,
  verifySessionToken,
  getRealAdminStats,
  getDetailedAnalytics,
  getAdminQuestions,
  createQuestion,
  updateQuestion,
  toggleQuestionStatus,
  softDeleteQuestion,
  getQuestionById,
  getSkillsCatalogWithMetrics,
  toggleSkillStatus,
  updateSkill,
  updateFeedbackStatus,
  getProctoringSummary,
  recordProctoringEvent,
  getAdminUsers,
  getAdminUserDetail,
  getAdminVisitors,
  getAdminResumeAnalyses,
  getAdminVerifiedSkills,
  getAdminAssessments,
  getAdminJobSearches,
  getAdminJobMatches,
  getAdminFeedback,
  getVisitorActivity,
  getAdminAssessmentAttempts,
  getAssessmentAttemptDetail,
  getAssessmentConfigs,
  updateAssessmentConfig,
  getDb,
} from '../db';
import { getAdminFromExpressReq } from '../services/session';

export const adminRouter = Router();

// Middleware: admin auth check
function requireAdmin(req: Request, res: Response, next: Function) {
  const token = req.cookies?.['sra_admin_session'] || req.headers['authorization']?.replace('Bearer ', '');
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

// POST /api/admin/auth/login
adminRouter.post('/auth/login', async (req: Request, res: Response) => {
  try {
    const { email: rawEmail, password } = req.body || {};
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

    if (!email || !password) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const admin = getAdminByEmail(email);
    if (!admin || !admin.is_active) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isValid = verifyPassword(password, admin.password_hash);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    recordAdminLogin(admin.id);

    const token = createSessionToken({
      id: admin.id,
      email: admin.email,
      role: admin.role,
    });

    res.cookie('sra_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err: any) {
    console.error('Admin login error:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// POST /api/admin/auth/logout
adminRouter.post('/auth/logout', async (req: Request, res: Response) => {
  res.clearCookie('sra_admin_session', { path: '/' });
  return res.json({ success: true, message: 'Logged out successfully.' });
});

// GET /api/admin/auth/me
adminRouter.get('/auth/me', (req: Request, res: Response) => {
  const token = req.cookies?.['sra_admin_session'] || req.headers['authorization']?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  const payload = verifySessionToken(token);
  if (!payload || payload.role !== 'ADMIN') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.json({
    admin: {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    },
  });
});

// GET /api/admin/stats
adminRouter.get('/stats', requireAdmin, (req: Request, res: Response) => {
  try {
    const stats = getRealAdminStats();
    const details = getDetailedAnalytics();
    return res.json({ stats, details });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve admin stats.' });
  }
});

// Questions CRUD: /api/admin/questions
adminRouter.get('/questions', requireAdmin, (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    if (id) {
      const question = getQuestionById(id);
      if (!question) return res.status(404).json({ message: 'Question not found' });
      return res.json({ question });
    }

    const result = getAdminQuestions({
      skill: (req.query.skill as string) || undefined,
      difficulty: (req.query.difficulty as string) || undefined,
      questionType: (req.query.type as string) || undefined,
      status: (req.query.status as string) || undefined,
      search: (req.query.search as string) || undefined,
      page: parseInt((req.query.page as string) || '1', 10),
      limit: parseInt((req.query.limit as string) || '15', 10),
    });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to query questions' });
  }
});

adminRouter.post('/questions', requireAdmin, (req: Request, res: Response) => {
  try {
    const question = createQuestion(req.body);
    return res.status(201).json({ success: true, question });
  } catch (err: any) {
    return res.status(400).json({ message: err?.message || 'Failed to create question' });
  }
});

adminRouter.put('/questions', requireAdmin, (req: Request, res: Response) => {
  try {
    const { id, ...data } = req.body || {};
    if (!id) return res.status(400).json({ message: 'Question ID is required' });
    const question = updateQuestion(id, data);
    return res.json({ success: true, question });
  } catch (err: any) {
    return res.status(400).json({ message: err?.message || 'Failed to update question' });
  }
});

adminRouter.patch('/questions', requireAdmin, (req: Request, res: Response) => {
  try {
    const { id, is_active } = req.body || {};
    toggleQuestionStatus(id, Boolean(is_active));
    return res.json({ success: true });
  } catch (err: any) {
    return res.status(400).json({ message: 'Failed to update question status' });
  }
});

adminRouter.delete('/questions', requireAdmin, (req: Request, res: Response) => {
  try {
    const id = (req.query.id as string) || req.body?.id;
    softDeleteQuestion(id);
    return res.json({ success: true });
  } catch (err: any) {
    return res.status(400).json({ message: 'Failed to delete question' });
  }
});

// Skills CRUD: /api/admin/skills
adminRouter.get('/skills', requireAdmin, (req: Request, res: Response) => {
  try {
    const skills = getSkillsCatalogWithMetrics();
    return res.json({ skills });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve skills' });
  }
});

adminRouter.patch('/skills', requireAdmin, (req: Request, res: Response) => {
  try {
    const { id, is_active } = req.body || {};
    const success = toggleSkillStatus(id, is_active);
    if (!success) return res.status(404).json({ message: 'Skill not found.' });
    return res.json({ success: true, is_active });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update skill status' });
  }
});

adminRouter.put('/skills', requireAdmin, (req: Request, res: Response) => {
  try {
    const { id, ...data } = req.body || {};
    if (!id) return res.status(400).json({ message: 'Skill ID is required' });
    const skill = updateSkill(id, data);
    return res.json({ success: true, skill });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update skill' });
  }
});

// Feedback status: PATCH /api/admin/feedback
adminRouter.patch('/feedback', requireAdmin, (req: Request, res: Response) => {
  try {
    const { id, status } = req.body || {};
    if (!id || !status) return res.status(400).json({ message: 'Feedback ID and status are required' });
    const updated = updateFeedbackStatus(id, status);
    if (!updated) return res.status(404).json({ message: 'Feedback item not found' });
    return res.json({ success: true, message: 'Status updated' });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update feedback status.' });
  }
});

// Proctoring: GET & POST /api/admin/proctoring
adminRouter.get('/proctoring', requireAdmin, (req: Request, res: Response) => {
  try {
    const summary = getProctoringSummary();
    return res.json(summary);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve proctoring data' });
  }
});

adminRouter.post('/proctoring', requireAdmin, (req: Request, res: Response) => {
  try {
    const { action, assessmentId, reason } = req.body || {};
    if (!assessmentId) return res.status(400).json({ message: 'Missing assessmentId' });

    const db = getDb();
    if (action === 'terminate') {
      db.prepare(`UPDATE assessments SET status = 'terminated', passed = 0 WHERE id = ?`).run(assessmentId);
      recordProctoringEvent(
        assessmentId,
        'ADMIN_TERMINATED',
        'violation',
        reason || 'Assessment terminated by proctoring administrator.'
      );
    }
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to process proctoring action' });
  }
});

// Records query: GET /api/admin/records
adminRouter.get('/records', requireAdmin, (req: Request, res: Response) => {
  try {
    const type = (req.query.type as string) || 'users';
    const limit = req.query.limit ? Number(req.query.limit) : 100;
    const filter = (req.query.filter as string) || undefined;
    const id = (req.query.id as string) || undefined;

    switch (type) {
      case 'users':
        return res.json({ data: getAdminUsers(limit) });
      case 'user_detail':
        if (!id) return res.status(400).json({ message: 'User ID required' });
        return res.json({ data: getAdminUserDetail(id) });
      case 'visitors':
        return res.json({ data: getAdminVisitors(limit) });
      case 'visitor_activity':
        if (!id) return res.status(400).json({ message: 'Visitor ID required' });
        return res.json({ data: getVisitorActivity(id) });
      case 'resumes':
      case 'analyses':
        return res.json({ data: getAdminResumeAnalyses(limit) });
      case 'skills':
        return res.json({ data: getAdminVerifiedSkills(limit) });
      case 'assessments':
        return res.json({ data: getAdminAssessments(limit) });
      case 'jobs':
        return res.json({ data: getAdminJobSearches(limit) });
      case 'matches':
        return res.json({ data: getAdminJobMatches(limit) });
      case 'feedback':
        return res.json({ data: getAdminFeedback(limit, filter) });
      default:
        return res.status(400).json({ message: `Unknown record type: ${type}` });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve records.' });
  }
});

// Assessment attempts: GET /api/admin/assessments/attempts
adminRouter.get('/assessments/attempts', requireAdmin, (req: Request, res: Response) => {
  try {
    const attemptId = req.query.id as string;
    if (attemptId) {
      const detail = getAssessmentAttemptDetail(attemptId);
      if (!detail) return res.status(404).json({ message: 'Attempt not found' });
      return res.json({ attempt: detail });
    }
    const attempts = getAdminAssessmentAttempts(Number(req.query.limit) || 100);
    return res.json({ attempts });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to query attempts' });
  }
});

// Assessment config: GET & POST /api/admin/assessments/config
adminRouter.get('/assessments/config', requireAdmin, (req: Request, res: Response) => {
  try {
    const configs = getAssessmentConfigs();
    return res.json({ configs });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve configs' });
  }
});

adminRouter.post('/assessments/config', requireAdmin, (req: Request, res: Response) => {
  try {
    const { skillSlug, ...configData } = req.body || {};
    if (!skillSlug) return res.status(400).json({ message: 'skillSlug is required' });
    const updated = updateAssessmentConfig(skillSlug, configData);
    return res.json({ success: true, config: updated });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update config' });
  }
});
