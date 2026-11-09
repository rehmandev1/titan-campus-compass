import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { enrollmentSchema, type EnrollmentInput } from "@/lib/forms";
import { COURSES } from "@/data/courses";
import { CAMPUSES } from "@/data/campuses";
import { FormField, fieldCls } from "@/components/site/FormField";
import { BackendNotice } from "@/components/site/Notices";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EDUCATION = ["Matric / O-Level", "Intermediate / A-Level", "Bachelor's", "Master's or above", "Other"];

export function EnrollForm({ defaultCourse, defaultCampus }: { defaultCourse?: string | undefined; defaultCampus?: "sukkur" | "karachi" | undefined }) {
  const [validated, setValidated] = useState<EnrollmentInput | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentInput>({
    resolver: zodResolver(enrollmentSchema),
    mode: "onTouched",
    defaultValues: {
      course: defaultCourse && COURSES.some((c) => c.slug === defaultCourse) ? defaultCourse : "",
      campus: defaultCampus,
      message: "",
    },
  });

  const aria = (name: keyof EnrollmentInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const onSubmit = (data: EnrollmentInput) => {
    // No enrollment API is connected yet — nothing is sent anywhere.
    setValidated(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (validated) {
    const course = COURSES.find((c) => c.slug === validated.course);
    const campus = CAMPUSES.find((c) => c.slug === validated.campus);
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <CheckCircle2 className="size-8 shrink-0 text-gold-deep" aria-hidden />
          <div>
            <p className="font-display text-xl font-bold text-navy">Your details look good, {validated.fullName.split(" ")[0]}.</p>
            <p className="mt-1 text-muted-foreground">
              {course?.title} · {campus?.name}
            </p>
          </div>
        </div>
        <BackendNotice title="Online enrollment isn't connected yet">
          This form checks your details but cannot submit them: it needs a database and an enrollment service to be set up.
          Your application has <strong>not</strong> been sent. Please contact the admissions office directly in the meantime.
        </BackendNotice>
        <Button variant="outline-brand" size="lg" onClick={() => setValidated(null)}>
          Edit my details
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <fieldset className="space-y-5">
        <legend className="font-display text-lg font-bold text-navy">Personal details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="fullName" label="Full name" required error={errors.fullName?.message}>
            <input id="fullName" autoComplete="name" className={fieldCls} {...aria("fullName")} {...register("fullName")} />
          </FormField>
          <FormField id="guardianName" label="Father's / guardian's name" required error={errors.guardianName?.message}>
            <input id="guardianName" className={fieldCls} {...aria("guardianName")} {...register("guardianName")} />
          </FormField>
          <FormField id="cnic" label="CNIC / B-Form number" required error={errors.cnic?.message} hint="Format: 12345-1234567-1">
            <input id="cnic" inputMode="numeric" placeholder="12345-1234567-1" className={fieldCls} {...aria("cnic")} {...register("cnic")} />
          </FormField>
          <FormField id="dateOfBirth" label="Date of birth" required error={errors.dateOfBirth?.message}>
            <input id="dateOfBirth" type="date" className={fieldCls} {...aria("dateOfBirth")} {...register("dateOfBirth")} />
          </FormField>
          <FormField id="email" label="Email" required error={errors.email?.message}>
            <input id="email" type="email" autoComplete="email" className={fieldCls} {...aria("email")} {...register("email")} />
          </FormField>
          <FormField id="phone" label="Mobile number" required error={errors.phone?.message} hint="e.g. 03001234567">
            <input id="phone" type="tel" autoComplete="tel" placeholder="03XXXXXXXXX" className={fieldCls} {...aria("phone")} {...register("phone")} />
          </FormField>
          <FormField id="city" label="City" required error={errors.city?.message}>
            <input id="city" autoComplete="address-level2" className={fieldCls} {...aria("city")} {...register("city")} />
          </FormField>
          <FormField id="education" label="Latest qualification" required error={errors.education?.message}>
            <select id="education" defaultValue="" className={cn(fieldCls, "appearance-none")} {...aria("education")} {...register("education")}>
              <option value="" disabled>
                Select…
              </option>
              {EDUCATION.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </FormField>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-display text-lg font-bold text-navy">Programme</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="course" label="Course" required error={errors.course?.message}>
            <select id="course" className={cn(fieldCls, "appearance-none")} {...aria("course")} {...register("course")}>
              <option value="" disabled>
                Choose a course…
              </option>
              {COURSES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </FormField>
          <div className="space-y-2">
            <p id="campus-label" className="text-sm font-semibold text-navy">
              Preferred campus<span className="ml-0.5 text-gold-deep" aria-hidden>*</span>
            </p>
            <div role="radiogroup" aria-labelledby="campus-label" className="grid grid-cols-2 gap-3">
              {CAMPUSES.map((c) => (
                <label
                  key={c.slug}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-input bg-card px-4 py-3 text-sm font-semibold text-navy shadow-soft transition-all has-[:checked]:border-gold has-[:checked]:bg-gold-tint has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold/20"
                >
                  <input type="radio" value={c.slug} className="accent-[var(--gold-deep)]" {...register("campus")} />
                  {c.city}
                </label>
              ))}
            </div>
            {errors.campus && (
              <p id="campus-error" role="alert" className="text-sm font-medium text-destructive">
                {errors.campus.message}
              </p>
            )}
          </div>
        </div>
        <FormField id="message" label="Anything you'd like us to know? (optional)" error={errors.message?.message}>
          <textarea id="message" rows={4} className={cn(fieldCls, "h-auto py-3")} {...aria("message")} {...register("message")} />
        </FormField>
      </fieldset>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-navy/80">
          <input type="checkbox" className="mt-1 size-4 accent-[var(--gold-deep)]" aria-invalid={errors.consent ? true : undefined} {...register("consent")} />
          I confirm that the information above is accurate.
        </label>
        {errors.consent && (
          <p role="alert" className="text-sm font-medium text-destructive">
            {errors.consent.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="gold" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
        {isSubmitting ? "Checking…" : "Submit Application"}
      </Button>
    </form>
  );
}
