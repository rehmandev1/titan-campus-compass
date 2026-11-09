import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { PlaceholderBadge } from "@/components/site/Notices";
import { SITE } from "@/data/site";
import { CAMPUSES } from "@/data/campuses";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TITAN — Get in Touch" },
      { name: "description", content: "Contact TITAN about courses, admissions and our Sukkur and Karachi campuses." },
      { property: "og:title", content: "Contact TITAN" },
      { property: "og:description", content: "Questions about courses or admissions? Get in touch with TITAN." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { Icon: MapPin, label: "Address", value: SITE.contact.address },
    { Icon: Phone, label: "Phone", value: SITE.contact.phone },
    { Icon: Mail, label: "Email", value: SITE.contact.email },
    { Icon: Clock, label: "Hours", value: SITE.contact.hours },
  ];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact Us" }]}
        title={
          <>
            We'd Love to <span className="text-gradient-gold">Hear From You</span>
          </>
        }
        description="Questions about a course, admissions or our campuses? Send us a message."
      />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-navy">Contact details</h2>
              <PlaceholderBadge>To be confirmed</PlaceholderBadge>
            </div>
            {items.map((it) => (
              <div key={it.label} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold">
                  <it.Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</p>
                  <p className="font-medium text-navy">{it.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-navy p-6 text-on-navy shadow-card">
              <p className="font-display font-bold">Visit a campus</p>
              <ul className="mt-3 space-y-2">
                {CAMPUSES.map((c) => (
                  <li key={c.slug}>
                    <Link to="/campuses/$slug" params={{ slug: c.slug }} className="inline-flex items-center gap-2 text-on-navy-muted hover:text-gold-light">
                      <MapPin className="size-4 text-gold" aria-hidden /> {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="rounded-[2rem] bg-card p-6 shadow-lift sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">Send a message</h2>
            <p className="mt-1 text-muted-foreground">Fields marked * are required.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
