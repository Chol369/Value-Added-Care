import { contactSubmissions, type InsertContact, type ContactSubmission } from "@shared/schema";
import * as fs from 'fs';
import * as path from 'path';
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createContactSubmission(submission: InsertContact, resumePath?: string): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmissionById(id: number): Promise<ContactSubmission | undefined>;
}

export class DatabaseStorage implements IStorage {
  private uploadDir: string;

  constructor() {
    this.uploadDir = path.join(process.cwd(), 'uploads');
    
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async createContactSubmission(submission: InsertContact, resumePath?: string): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values({ 
        ...submission, 
        resumePath: resumePath 
      })
      .returning();
    
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async getContactSubmissionById(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }
}

export const storage = new DatabaseStorage();
