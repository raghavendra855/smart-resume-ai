import { Router, Request, Response } from 'express';
import { startAssessmentAttempt, submitAssessmentAttempt, getAssessmentAttemptDetail } from '../db';
import { getUserFromExpressReq, getVisitorIdFromExpressReq } from '../services/session';

export const assessmentsRouter = Router();

assessmentsRouter.post('/start', async (req: Request, res: Response) => {
  try {
    const skill = (req.body?.skill as string) || 'Python';
    const user = getUserFromExpressReq(req);
    const visitorId = getVisitorIdFromExpressReq(req, res);

    const result = startAssessmentAttempt(skill, visitorId, user?.id);

    if (!result.success) {
      return res.status(400).json({
        error: result.error,
        message: result.message,
      });
    }

    return res.json(result);
  } catch (err) {
    console.error('API /api/assessments/start error:', err);
    return res.status(500).json({ message: 'Unable to start assessment.' });
  }
});

assessmentsRouter.post('/submit', async (req: Request, res: Response) => {
  try {
    const {
      attemptId,
      userAnswers = {},
      proctoringEvents = [],
      durationSeconds = 1200,
      terminationReason,
    } = req.body || {};

    if (!attemptId) {
      return res.status(400).json({ message: 'attemptId is required' });
    }

    const user = getUserFromExpressReq(req);
    const visitorId = getVisitorIdFromExpressReq(req, res);

    const graded = submitAssessmentAttempt({
      attemptId,
      userAnswers,
      proctoringEvents,
      durationSeconds,
      terminationReason,
      requesterUserId: user?.id,
      requesterVisitorId: visitorId,
    }) as any;

    if (graded && graded.error) {
      const status = typeof graded.error === 'string' && graded.error.startsWith('unauthorized') ? 403 : 400;
      return res.status(status).json(graded);
    }

    const detail = getAssessmentAttemptDetail(attemptId);
    const snapshots = detail?.snapshots || [];

    const topicMap: Record<string, { correct: number; total: number }> = {};
    snapshots.forEach((s) => {
      const topic = s.questionType || 'Technical';
      if (!topicMap[topic]) topicMap[topic] = { correct: 0, total: 0 };
      topicMap[topic].total += 1;
      if (s.isCorrect) topicMap[topic].correct += 1;
    });

    const topicBreakdown = Object.entries(topicMap).map(([topic, stats]) => ({
      topic,
      correct: stats.correct,
      total: stats.total,
    }));

    return res.json({
      ...graded,
      userAnswers,
      proctoringEvents,
      topicBreakdown,
    });
  } catch (err) {
    console.error('API /api/assessments/submit error:', err);
    return res.status(500).json({ message: 'Unable to submit assessment.' });
  }
});
