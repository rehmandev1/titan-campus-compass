import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { contactSchema, type ContactInput, type ContactOutput } from "@/lib/forms";
import { FormField, fieldCls } from "@/components/site/FormField";
import { BackendNotice } from "@/components/site/Notices";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactOutput>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const aria = (name: keyof ContactInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form
      onSubmit={handleSubmit(() => {
        // No email service is connected yet — nothing is sent.
        setChecked(true);
      })}
      noValidate
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Your name" required error={errors.name?.message}>
          <input id="name" autoComplete="name" className={fieldCls} {...aria("name")} {...register("name")} />
        </FormField>
        <FormField id="email" label="Email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={fieldCls} {...aria("email")} {...register("email")} />
        </FormField>
        <FormField id="phone" label="Mobile (optional)" error={errors.phone?.message}>
          <input id="phone" type="tel" placeholder="03XXXXXXXXX" className={fieldCls} {...aria("phone")} {...register("phone")} />
        </FormField>
        <FormField id="subject" label="Subject" required error={errors.subject?.message}>
          <input id="subject" className={fieldCls} {...aria("subject")} {...register("subject")} />
        </FormField>
      </div>
      <FormField id="message" label="Message" required error={errors.message?.message}>
        <textarea id="message" rows={5} className={cn(fieldCls, "h-auto py-3")} {...aria("message")} {...register("message")} />
      </FormField>
      {checked && (
        <BackendNotice title="Message not sent — email isn't connected yet">
          Your message passed all checks, but this form still needs an email service before it can deliver messages. Nothing
          has been sent.
        </BackendNotice>
      )}
      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
        Send Message
      </Button>
    </form>
  );
}
