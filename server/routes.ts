import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { contactSchema } from "@shared/schema";
import fs from "fs";

// Configure multer for file uploads
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Create a unique filename with original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

// File filter for resume uploads
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept only pdf, doc, docx files
  const allowedFileTypes = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedFileTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, DOCX files are allowed'));
  }
};

const upload = multer({ 
  storage: storage2,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post('/api/contact', upload.single('resume'), async (req: Request, res: Response) => {
    try {
      // Extract form data
      const formData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone || null,
        inquiry: req.body.inquiry,
        message: req.body.message,
        consent: req.body.consent === 'true',
      };

      // Validate form data
      const result = contactSchema.safeParse(formData);
      if (!result.success) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation failed', 
          errors: result.error.errors 
        });
      }

      // Get resume file path if uploaded
      const resumePath = req.file ? req.file.path : undefined;

      // Store in database
      const contactSubmission = await storage.createContactSubmission({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        inquiry: formData.inquiry,
        message: formData.message,
      }, resumePath);

      return res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          id: contactSubmission.id,
          createdAt: contactSubmission.createdAt,
        }
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request'
      });
    }
  });

  // Get all contact submissions (could be protected in a real app)
  app.get('/api/contact-submissions', async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json({
        success: true,
        data: submissions
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching contact submissions'
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
