import { Router, Request, Response } from 'express';
import { loginUser, registerUser, logoutUser } from '../db';
import { getUserFromExpressReq, getVisitorIdFromExpressReq } from '../services/session';

export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password.' });
    }

    const { user, sessionToken } = loginUser({ email, password });

    res.cookie('sra_user_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('sra_user_name', encodeURIComponent(user.name), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: 'Logged in successfully.',
      user,
    });
  } catch (err: any) {
    console.log('[Auth Login Error]:', err?.message || String(err));
    return res.status(401).json({ message: err?.message || 'Invalid email or password.' });
  }
});

authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ message: 'Please provide a valid full name with at least 2 characters.' });
    }

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match. Please verify your password.' });
    }

    const visitorId = getVisitorIdFromExpressReq(req, res);

    const { user, sessionToken } = registerUser({
      name: fullName.trim(),
      email: email.trim(),
      password,
      visitorId,
    });

    res.cookie('sra_user_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('sra_user_name', encodeURIComponent(user.name), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      user,
    });
  } catch (err: any) {
    console.log('[Auth Register Error]:', err?.message || String(err));
    return res.status(400).json({ message: err?.message || 'Unable to register account.' });
  }
});

authRouter.post('/logout', async (req: Request, res: Response) => {
  try {
    const token = req.cookies?.['sra_user_session'];
    if (token) {
      logoutUser(token);
    }
  } catch (err) {
    console.log('[Auth Logout Error]:', err);
  }

  res.clearCookie('sra_user_session', { path: '/' });
  res.clearCookie('sra_user_name', { path: '/' });

  return res.json({ success: true, message: 'Logged out successfully.' });
});

authRouter.get('/me', async (req: Request, res: Response) => {
  try {
    const user = getUserFromExpressReq(req);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    return res.json({
      authenticated: Boolean(user),
      user: user || null,
    });
  } catch (err) {
    console.error('Error in /api/auth/me:', err);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    return res.json({
      authenticated: false,
      user: null,
    });
  }
});
