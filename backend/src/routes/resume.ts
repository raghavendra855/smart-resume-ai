import { Router, Request, Response } from 'express';
import multer from 'multer';
import { analyzeResume, improveResumeSection } from '../lib/gemini';
import { extractResumeText } from '../lib/extractResumeText';
import { recordResumeUpload, recordResumeAnalysis } from '../db';
import { getUserFromExpressReq, getVisitorIdFromExpressReq } from '../services/session';

export const resumeRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

resumeRouter.post('/analyze', upload.single('file'), async (req: Request, res: Response) => {
  try {
    let resumeText = '';
    let extractedMeta: { fileName?: string; wordCount?: number; fileType?: string } = {};

    if (req.file) {
      const file = req.file;
      try {
        const extraction = await extractResumeText(file.buffer, file.originalname, file.mimetype);
        resumeText = extraction.text;
        extractedMeta = {
          fileName: extraction.fileName,
          wordCount: extraction.wordCount,
          fileType: extraction.fileType,
        };
      } catch (extractError: unknown) {
        const errorMsg =
          extractError instanceof Error
            ? extractError.message
            : 'Unable to read this resume. Please upload a valid PDF or DOCX file.';
        return res.status(400).json({ message: errorMsg });
      }
    } else if (req.body && typeof req.body.resumeText === 'string') {
      resumeText = req.body.resumeText.trim();
    } else {
      return res.status(400).json({
        message: 'No resume content provided. Please upload a file or supply resumeText in JSON.',
      });
    }

    if (!resumeText || resumeText.length < 20) {
      return res.status(400).json({
        message: 'Unable to read this resume. Please upload a valid PDF or DOCX file.',
      });
    }

    // Run AI / ATS analysis
    const result = await analyzeResume(resumeText);

    if (extractedMeta.wordCount) {
      result.wordCount = extractedMeta.wordCount;
    }

    // Persist real upload and analysis to database
    try {
      const user = getUserFromExpressReq(req);
      const visitorId = getVisitorIdFromExpressReq(req, res);
      const resumeId = recordResumeUpload({
        visitorId,
        userId: user?.id,
        filename: extractedMeta.fileName || 'Pasted-Resume.txt',
        fileType: extractedMeta.fileType || 'raw-text',
        parsedSuccessfully: true,
      });

      recordResumeAnalysis({
        visitorId,
        userId: user?.id,
        resumeId,
        fileType: extractedMeta.fileType || 'raw-text',
        atsScore: result.overallAtsScore,
        keywordScore: result.keywordMatchScore,
        formattingScore: result.formattingScore,
        sectionScore: result.sectionScore,
        analysisStatus: 'COMPLETED',
        detectedKeywords: result.detectedKeywords || [],
        missingKeywords: result.missingKeywords || [],
        recommendations: result.recommendations || [],
      });
    } catch (dbErr) {
      console.error('Failed to log resume upload to database:', dbErr);
    }

    return res.json(result);
  } catch (err: any) {
    console.error('API /api/resume/analyze error:', err);
    return res.status(500).json({
      message: 'Failed to analyze resume. Please check your network or try pasting text directly.',
    });
  }
});

resumeRouter.post('/improve', async (req: Request, res: Response) => {
  try {
    const { sectionName, originalContent } = req.body || {};

    if (!originalContent) {
      return res.status(400).json({ message: 'Content is required.' });
    }

    const result = await improveResumeSection(sectionName || 'section', originalContent);
    return res.json(result);
  } catch (err) {
    console.error('API /api/resume/improve error:', err);
    return res.status(500).json({ message: 'Unable to improve resume content at this moment.' });
  }
});
