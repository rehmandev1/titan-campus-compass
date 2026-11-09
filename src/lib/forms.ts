import { z } from "zod";

/** Pakistani mobile: 03XXXXXXXXX or +923XXXXXXXXX (spaces/dashes allowed). */
export const PK_PHONE = /^(?:\+92|0)3\d{9}$/;
/** CNIC / B-Form: 12345-1234567-1 (dashes optional). */
export const CNIC = /^\d{5}-?\d{7}-?\d$/;

const normalizePhone = (v: string) => v.replace(/[\s-]/g, "");

const phone = z
  .string()
  .trim()
  .transform(normalizePhone)
  .refine((v) => PK_PHONE.test(v), { message: "Enter a valid mobile number, e.g. 03001234567" });

export const enrollmentSchema = z.object({
  fullName: z.string().trim().min(3, "Please enter your full name").max(100),
  guardianName: z.string().trim().min(3, "Please enter your father's / guardian's name").max(100),
  cnic: z.string().trim().regex(CNIC, "Use the format 12345-1234567-1"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone,
  dateOfBirth: z
    .string()
    .min(1, "Please select your date of birth")
    .refine((v) => {
      const d = new Date(v);
      if (Number.isNaN(d.getTime())) return false;
      const age = (Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000);
      return age >= 12 && age <= 80;
    }, "Please enter a valid date of birth"),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  education: z.string().min(1, "Please select your latest qualification"),
  campus: z.enum(["sukkur", "karachi"], { errorMap: () => ({ message: "Please choose a campus" }) }),
  course: z.string().min(1, "Please choose a course"),
  message: z.string().trim().max(1000, "Keep this under 1000 characters").optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm your details are correct" }) }),
});

export type EnrollmentInput = z.input<typeof enrollmentSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .transform(normalizePhone)
    .refine((v) => v === "" || PK_PHONE.test(v), { message: "Enter a valid mobile number, e.g. 03001234567" }),
  subject: z.string().trim().min(3, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000, "Keep this under 1000 characters"),
});

export type ContactInput = z.input<typeof contactSchema>;
