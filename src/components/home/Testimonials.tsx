import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/people";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PersonAvatar } from "@/components/site/Avatar";
import { PlaceholderBadge } from "@/components/site/Notices";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section className="section-pad bg-gradient-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Student Voices"
          title={
            <>
              What Our <span className="text-gradient-gold">Students Say</span>
            </>
          }
          description="Feedback from TITAN learners will appear here once verified and approved for publication."
        />
        <Carousel opts={{ align: "start", loop: true }} className="mt-12" aria-label="Student testimonials">
          <CarouselContent className="-ml-6 py-4">
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <figure className="gradient-ring relative flex h-full flex-col rounded-3xl bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="absolute -top-4 right-7 grid size-11 place-items-center rounded-2xl bg-gradient-gold text-navy-deep shadow-gold">
                    <Quote className="size-5" aria-hidden />
                  </span>
                  {t.rating && (
                    <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={i < (t.rating ?? 0) ? "size-4 fill-gold text-gold" : "size-4 text-border"} aria-hidden />
                      ))}
                    </div>
                  )}
                  <blockquote className="mt-4 flex-1 leading-relaxed text-navy/80">“{t.feedback}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    <PersonAvatar photo={t.photo} name={t.name} className="size-14" />
                    <div className="min-w-0">
                      <p className="font-display font-bold text-navy">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.course}</p>
                    </div>
                  </figcaption>
                  <PlaceholderBadge className="mt-4 self-start" />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static size-12 translate-y-0 border-navy/20 bg-card text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gradient-gold hover:text-navy-deep" />
            <CarouselNext className="static size-12 translate-y-0 border-navy/20 bg-card text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gradient-gold hover:text-navy-deep" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
