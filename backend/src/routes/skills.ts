import { Router, Request, Response } from 'express';
import { INITIAL_USER_SKILLS } from '../lib/mockData';

export const skillsRouter = Router();

skillsRouter.get('/', async (req: Request, res: Response) => {
  try {
    return res.json(INITIAL_USER_SKILLS);
  } catch (err) {
    console.error('API /api/skills error:', err);
    return res.status(500).json({ message: 'Error retrieving skills.' });
  }
});
