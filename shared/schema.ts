import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiry: text("inquiry").notNull(),
  message: text("message").notNull(),
  resumePath: text("resume_path"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  resumePath: true,
});

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  inquiry: z.string().min(1, "Inquiry type is required"),
  message: z.string().min(1, "Message is required"),
  consent: z.boolean().refine(val => val === true, "Consent is required"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type ContactFormData = z.infer<typeof contactSchema>;
