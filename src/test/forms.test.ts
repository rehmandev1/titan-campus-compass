import { describe, expect, it } from "vitest";
import { contactSchema, enrollmentSchema } from "@/lib/forms";

const validEnrollment = {
  fullName: "Test Learner",
  guardianName: "Test Guardian",
  cnic: "42101-1234567-1",
  email: "learner@example.com",
  phone: "0300 1234567",
  dateOfBirth: "2004-05-10",
  city: "Sukkur",
  education: "Intermediate / A-Level",
  campus: "sukkur",
  course: "web-app-development",
  message: "",
  consent: true,
};

describe("enrollment form rules", () => {
  it("accepts a complete application", () => {
    expect(enrollmentSchema.safeParse(validEnrollment).success).toBe(true);
  });

  it("rejects a CNIC in the wrong format", () => {
    expect(enrollmentSchema.safeParse({ ...validEnrollment, cnic: "4210112345" }).success).toBe(false);
  });

  it("rejects a non-Pakistani mobile number", () => {
    expect(enrollmentSchema.safeParse({ ...validEnrollment, phone: "021123456" }).success).toBe(false);
  });

  it("only allows the Sukkur or Karachi campus", () => {
    expect(enrollmentSchema.safeParse({ ...validEnrollment, campus: "lahore" }).success).toBe(false);
  });

  it("requires the accuracy confirmation", () => {
    expect(enrollmentSchema.safeParse({ ...validEnrollment, consent: false }).success).toBe(false);
  });
});

describe("contact form rules", () => {
  const valid = { name: "Ali", email: "ali@example.com", phone: "", subject: "Admissions", message: "When does the next batch start?" };

  it("accepts a message with no phone number", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a too-short message", () => {
    expect(contactSchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });
});
