import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

// Initialize Database singleton on startup
import { getDb } from './db';
getDb();

import { authRouter } from './routes/auth';
import { adminRouter } from './routes/admin';
import { resumeRouter } from './routes/resume';
import { jobsRouter, handleJobMatch } from './routes/jobs';
import { skillsRouter } from './routes/skills';
import { certificatesRouter } from './routes/certificates';
import { dashboardRouter } from './routes/dashboard';
import { feedbackRouter } from './routes/feedback';
import { assessmentsRouter } from './routes/assessments';
import { userRouter } from './routes/user';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Enable CORS for frontend
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5000',
  'http://127.0.0.1:5000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in development
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Health Check
app.get(['/health', '/api/health'], (req, res) => {
  res.json({
    status: 'ok',
    service: 'smart-resume-backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/jobs', jobsRouter);
app.post('/api/job/match', handleJobMatch);
app.use('/api/skills', skillsRouter);
app.use('/api/certificates', certificatesRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/assessments', assessmentsRouter);
app.use('/api/user', userRouter);

// 404 handler for unhandled api routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found.` });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('[Backend Unhandled Error]:', err);
  res.status(500).json({
    message: err?.message || 'Internal server error occurred.',
  });
});

export const server = app.listen(PORT, () => {
  console.log(`🚀 Smart Resume AI Backend Server running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});

export default app;
