import { Router, Request, Response } from 'express';
import { getRealAdminStats } from '../db';

export const dashboardRouter = Router();

dashboardRouter.get('/', async (req: Request, res: Response) => {
  try {
    const stats = getRealAdminStats();
    return res.json(stats);
  } catch (err) {
    console.error('API /api/dashboard error:', err);
    return res.status(500).json({ message: 'Error retrieving dashboard metrics.' });
  }
});
