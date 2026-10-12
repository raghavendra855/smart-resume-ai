import { Request, Response } from 'express';
import crypto from 'node:crypto';
import { getUserBySessionToken, trackVisitor, verifySessionToken, type UserProfile } from '../db';

export function getUserFromExpressReq(req: Request): UserProfile | null {
  try {
    const token = req.cookies?.['sra_user_session'] || req.headers['authorization']?.replace('Bearer ', '');
    if (!token) return null;
    return getUserBySessionToken(token);
  } catch (err) {
    console.error('Error extracting user from request:', err);
    return null;
  }
}

export function getVisitorIdFromExpressReq(req: Request, res?: Response): string {
  try {
    let visitorId = req.cookies?.['sra_visitor_id'];
    const userAgent = req.headers['user-agent'] || '';

    if (visitorId) {
      trackVisitor(visitorId, userAgent);
      return visitorId;
    }

    visitorId = `anon_${crypto.randomBytes(8).toString('hex')}`;
    trackVisitor(visitorId, userAgent);
    if (res) {
      res.cookie('sra_visitor_id', visitorId, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
      });
    }
    return visitorId;
  } catch (err: any) {
    console.log('[Visitor Tracking Error]:', err?.message);
    return `anon_${Date.now()}`;
  }
}

export function getAdminFromExpressReq(req: Request): any | null {
  try {
    const token = req.cookies?.['sra_admin_session'] || req.headers['authorization']?.replace('Bearer ', '');
    if (!token) return null;
    return verifySessionToken(token);
  } catch (err) {
    return null;
  }
}
