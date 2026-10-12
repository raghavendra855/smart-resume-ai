import { Router, Request, Response } from 'express';
import { recordFeedbackEvent } from '../db';
import { getUserFromExpressReq, getVisitorIdFromExpressReq } from '../services/session';

export const feedbackRouter = Router();

feedbackRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { rating, category, suggestions } = req.body || {};
    const feedbackText = req.body?.feedback || req.body?.message;

    if (!rating || !feedbackText) {
      return res.status(400).json({ message: 'Rating and feedback text are required.' });
    }

    const user = getUserFromExpressReq(req);
    const visitorId = getVisitorIdFromExpressReq(req, res);
    const feedbackId = recordFeedbackEvent({
      visitorId,
      userId: user?.id,
      rating: Number(rating),
      category: category || 'General UX',
      message: feedbackText,
      suggestions: suggestions || '',
    });

    const recorded = {
      id: feedbackId,
      rating,
      category: category || 'General UX',
      feedback: feedbackText,
      suggestions: suggestions || '',
      submittedAt: new Date().toISOString(),
    };

    return res.json({ success: true, data: recorded });
  } catch (err) {
    console.error('API /api/feedback error:', err);
    return res.status(500).json({ message: 'Unable to submit feedback.' });
  }
});
