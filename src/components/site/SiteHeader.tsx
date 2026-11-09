import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { LogoLink } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { COURSES } from "@/data/courses";
import { cn } from "@/lib/utils";

const linkBase =
  "nav-underline rounded-md px-3 py-2 text-[15px] font-semibold text-navy/80 transition-colors duration-300 hover:text-navy data-[status=active]:text-navy";

function CoursesDropdown() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="courses-menu"
        onClick={() => setOpen((o) => !o)}
        data-status={pathname.startsWith("/courses") ? "active" : undefined}
        className={cn(linkBase, "inline-flex items-center gap-1")}
      >
        Courses
        <ChevronDown className={cn("size-4 transition-transform duration-300", open && "rotate-180")} aria-hidden />
      </button>
      <div
        id="courses-menu"
        className={cn(
          "absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 transition-all duration-300",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-popover shadow-lift">
          <div className="h-1 bg-gradient-gold" aria-hidden />
          <ul className="grid grid-cols-2 gap-1 p-3">
            {COURSES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: c.slug }}
                  className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-gold-tint focus-visible:bg-gold-tint"
                >
                  <span className="text-sm font-semibold text-navy">{c.title}</span>
                  <span className="text-xs text-muted-foreground">{c.category}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-border bg-navy-tint px-5 py-3">
            <span className="text-xs text-muted-foreground">Explore every programme and filter by category.</span>
            <Link to="/courses" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-deep">
              View all <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNav() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const item = "block rounded-xl px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-tint data-[status=active]:bg-gold-tint";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-navy lg:hidden [&_svg]:size-6" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto p-0">
        <div className="h-1 bg-gradient-gold" aria-hidden />
        <div className="p-5">
          <SheetTitle className="sr-only">Main menu</SheetTitle>
          <SheetClose asChild>
            <div className="mb-6 pr-8">
              <LogoLink imgClassName="h-12" />
            </div>
          </SheetClose>
          <nav aria-label="Mobile" className="space-y-1">
            <SheetClose asChild>
              <Link to="/" activeOptions={{ exact: true }} className={item}>
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/about" className={item}>
                About
              </Link>
            </SheetClose>
            <div>
              <button
                type="button"
                aria-expanded={coursesOpen}
                onClick={() => setCoursesOpen((o) => !o)}
                className={cn(item, "flex w-full items-center justify-between text-left")}
              >
                Courses
                <ChevronDown className={cn("size-5 transition-transform", coursesOpen && "rotate-180")} aria-hidden />
              </button>
              <div className={cn("grid transition-all duration-300", coursesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <ul className="overflow-hidden pl-3">
                  {COURSES.map((c) => (
                    <li key={c.slug}>
                      <SheetClose asChild>
                        <Link
                          to="/courses/$slug"
                          params={{ slug: c.slug }}
                          className="block rounded-lg px-4 py-2 text-sm text-navy/80 hover:bg-gold-tint hover:text-navy"
                        >
                          {c.title}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                  <li>
                    <SheetClose asChild>
                      <Link to="/courses" className="block px-4 py-2 text-sm font-semibold text-gold-deep">
                        View all courses →
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </div>
            </div>
            <SheetClose asChild>
              <Link to="/campuses" className={item}>
                Campuses
              </Link>
            </SheetClose>
          </nav>
          <SheetClose asChild>
            <Button asChild variant="gold" size="lg" className="mt-8 w-full">
              <Link to="/enroll" search={{}}>
                Enroll Now
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled ? "border-border bg-background/90 shadow-soft backdrop-blur-xl" : "border-transparent bg-background/70 backdrop-blur",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-navy focus:px-3 focus:py-2 focus:text-on-navy">
        Skip to content
      </a>
      <div className={cn("container-site flex items-center justify-between gap-4 transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <LogoLink imgClassName={cn("transition-all duration-300", scrolled ? "h-11" : "h-14")} />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link to="/" activeOptions={{ exact: true }} className={linkBase}>
            Home
          </Link>
          <Link to="/about" className={linkBase}>
            About
          </Link>
          <CoursesDropdown />
          <Link to="/campuses" className={linkBase}>
            Campuses
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
            <Link to="/enroll" search={{}}>
              Enroll Now <ArrowRight />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
