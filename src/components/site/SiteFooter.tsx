import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import type { ReactNode } from "react";
import { LogoLink } from "./Logo";
import { SITE } from "@/data/site";
import { COURSES } from "@/data/courses";
import { CAMPUSES } from "@/data/campuses";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.57L16.67 19.2Z" />
    </svg>
  );
}

const ICONS = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube, X: XIcon } as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-lg font-bold text-on-navy">
      {children}
      <span className="mt-2 block h-[3px] w-12 rounded-full bg-gradient-gold" aria-hidden />
    </h3>
  );
}

const linkCls = "text-[15px] text-on-navy-muted transition-colors duration-300 hover:text-gold-light";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-footer text-on-navy">
      <div className="divider-gradient" aria-hidden />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-10">
        <div>
          {/* Logo sits on a white plate so the navy artwork stays fully visible. */}
          <div className="inline-flex rounded-2xl bg-card px-4 py-3 shadow-card">
            <LogoLink imgClassName="h-14" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-on-navy-muted">{SITE.intro}</p>
          <ul className="mt-6 space-y-3 text-[15px] text-on-navy-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              {SITE.contact.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              {SITE.contact.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              {SITE.contact.email}
            </li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social media">
            {SITE.social.map((s) => {
              const Icon = ICONS[s.name];
              const cls =
                "grid size-11 place-items-center rounded-full border border-on-navy/15 bg-on-navy/5 transition-all duration-300";
              return (
                <li key={s.name}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`TITAN on ${s.name}`}
                      className={`${cls} hover:-translate-y-0.5 hover:border-gold hover:bg-gradient-gold hover:text-navy-deep`}
                    >
                      <Icon className="size-5" />
                    </a>
                  ) : (
                    <span
                      title={`${s.name} — official link coming soon`}
                      aria-label={`${s.name} — official link coming soon`}
                      className={`${cls} cursor-default text-on-navy/50`}
                    >
                      <Icon className="size-5" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-6 space-y-3">
            <li><Link to="/" className={linkCls}>Home</Link></li>
            <li><Link to="/about" className={linkCls}>About Us</Link></li>
            <li><Link to="/campuses" className={linkCls}>Campuses</Link></li>
            <li><Link to="/alumni" className={linkCls}>Alumni</Link></li>
            <li><Link to="/enroll" search={{}} className={linkCls}>Enroll Now</Link></li>
            <li><Link to="/contact" className={linkCls}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <FooterHeading>Our Courses</FooterHeading>
          <ul className="mt-6 space-y-3">
            {COURSES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className={linkCls}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Resources</FooterHeading>
          <ul className="mt-6 space-y-3">
            <li><Link to="/courses" className={linkCls}>All Courses</Link></li>
            <li><Link to="/articles" className={linkCls}>Articles &amp; News</Link></li>
            <li><Link to="/alumni" className={linkCls}>Alumni Network</Link></li>
            <li><Link to="/contact" className={linkCls}>Help &amp; Support</Link></li>
          </ul>
          <FooterHeading>
            <span className="mt-10 block">Campuses</span>
          </FooterHeading>
          <ul className="mt-6 space-y-3">
            {CAMPUSES.map((c) => (
              <li key={c.slug}>
                <Link to="/campuses/$slug" params={{ slug: c.slug }} className={`${linkCls} inline-flex items-center gap-2`}>
                  <MapPin className="size-4 text-gold" aria-hidden /> {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm text-on-navy-muted">
            <Clock className="size-4 text-gold" aria-hidden /> {SITE.contact.hours}
          </p>
        </div>
      </div>
      <div className="border-t border-on-navy/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-sm text-on-navy-muted md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} TITAN — {SITE.name}. All rights reserved.
          </p>
          <p>
            Powered by <span className="font-semibold text-gold-light">{SITE.poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
