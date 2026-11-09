import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Network, ShieldCheck, Cpu, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoImage } from "@/components/site/Logo";
import { LaptopArt, PlaneArt, GlobeArt } from "@/components/site/Decorations";
import student1 from "@/assets/hero-student-1.jpg";
import student2 from "@/assets/hero-student-2.jpg";
import lab from "@/assets/hero-lab.jpg";

const chips = [
  { Icon: Code2, cls: "left-[4%] top-[46%] hidden md:grid", delay: "0s" },
  { Icon: Network, cls: "right-[6%] top-[14%] hidden md:grid", delay: "1.2s" },
  { Icon: ShieldCheck, cls: "left-[16%] top-[30%] hidden xl:grid", delay: "2.1s" },
  { Icon: Cpu, cls: "right-[22%] top-[52%] hidden lg:grid", delay: "0.6s" },
  { Icon: Wifi, cls: "right-[3%] top-[62%] hidden sm:grid", delay: "1.8s" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" aria-hidden />

      {/* Decorative educational line art */}
      <LaptopArt className="pointer-events-none absolute left-[5%] top-10 hidden w-24 animate-float-slow md:block lg:w-32" />
      <PlaneArt className="pointer-events-none absolute right-[8%] top-16 hidden w-52 md:block" />
      <PlaneArt flip className="pointer-events-none absolute left-[6%] top-[38%] hidden w-44 -rotate-12 lg:block" />
      <GlobeArt className="pointer-events-none absolute right-[13%] top-[36%] hidden w-24 animate-float lg:block" />
      {chips.map(({ Icon, cls, delay }, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute grid size-11 place-items-center rounded-2xl bg-card text-gold-deep shadow-card animate-float ${cls}`}
          style={{ animationDelay: delay }}
          aria-hidden
        >
          <Icon className="size-5" />
        </span>
      ))}

      <div className="container-site relative pb-16 pt-14 text-center sm:pt-20 lg:pb-24">
        <h1 className="mx-auto max-w-4xl animate-fade-up text-[2.6rem] font-extrabold leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
          Empowering Minds with
          <span className="mt-2 block text-gradient-gold animate-shimmer pb-2">Applied Technology</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:120ms] sm:text-xl">
          Practical IT and networking education that turns curious learners into confident, job-ready professionals.
        </p>
        <div className="mx-auto mt-7 flex animate-fade-up justify-center [animation-delay:200ms]">
          <LogoImage eager className="h-16 sm:h-20" />
        </div>
        <div className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:280ms] sm:flex-row">
          <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
            <Link to="/enroll" search={{}}>
              Enroll Now <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline-brand" size="xl" className="w-full sm:w-auto">
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </div>

        {/* Image row */}
        <div className="mx-auto mt-14 grid max-w-6xl animate-fade-up grid-cols-2 items-end gap-4 [animation-delay:360ms] sm:gap-6 md:grid-cols-[1fr_1.45fr_1fr]">
          <figure className="group relative overflow-hidden rounded-[2rem] bg-cream p-1.5 shadow-card">
            <img
              src={student1}
              alt="TITAN student holding a laptop"
              width={832}
              height={1024}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>
          <figure className="group relative order-first col-span-2 overflow-hidden rounded-[2rem] bg-gradient-navy p-1.5 shadow-lift md:order-none md:col-span-1">
            <img
              src={lab}
              alt="Students coding in a TITAN computer lab with an instructor"
              width={1280}
              height={832}
              className="aspect-[16/11] w-full rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2">
              {["Hands-on labs", "Real projects", "Expert guidance"].map((t) => (
                <span key={t} className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </figure>
          <figure className="group relative overflow-hidden rounded-[2rem] bg-navy-tint p-1.5 shadow-card">
            <img
              src={student2}
              alt="TITAN student holding notebooks"
              width={832}
              height={1024}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
