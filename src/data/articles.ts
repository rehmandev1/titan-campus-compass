import workshop from "@/assets/article-workshop.jpg";
import career from "@/assets/article-career.jpg";
import projects from "@/assets/article-projects.jpg";
import lab from "@/assets/hero-lab.jpg";

/**
 * SAMPLE articles — editorial placeholders, not official TITAN announcements.
 * Replace with real articles before launch.
 */
export interface Article {
  slug: string;
  title: string;
  date: string; // ISO date
  category: string;
  image: string;
  excerpt: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "why-practical-learning-matters",
    title: "Why practical learning matters in technology education",
    date: "2026-10-20",
    category: "Learning",
    image: lab,
    excerpt: "Reading about technology is a start — building with it is what turns knowledge into skill.",
    body: [
      "Technology changes quickly, and the skills that matter most are the ones learners can actually apply. That is why practical, lab-based learning sits at the centre of how TITAN approaches education.",
      "When students configure a network, debug their own code or deploy a project, they meet the same problems professionals face every day. Working through those problems builds confidence that no amount of passive study can replace.",
      "This sample article is a placeholder. Replace it with an official TITAN article or announcement.",
    ],
  },
  {
    slug: "building-a-portfolio-that-gets-noticed",
    title: "Building a portfolio that gets noticed",
    date: "2026-10-05",
    category: "Careers",
    image: career,
    excerpt: "A focused portfolio shows employers and clients what you can do — here's how to start one.",
    body: [
      "A portfolio is evidence. It lets employers and clients see your thinking, your process and the quality of your work.",
      "Start with two or three projects you are proud of, explain the problem each one solves, and show what you learned along the way. Quality matters more than quantity.",
      "This sample article is a placeholder. Replace it with an official TITAN article or announcement.",
    ],
  },
  {
    slug: "learning-together-team-projects",
    title: "Learning together: the value of team projects",
    date: "2026-09-18",
    category: "Student Life",
    image: projects,
    excerpt: "Collaboration is a core professional skill. Team projects help learners practise it early.",
    body: [
      "Most real technology work happens in teams. Team projects give learners practice in planning, dividing work, communicating and reviewing each other's contributions.",
      "These are the same habits that make graduates effective from their first day in a professional role.",
      "This sample article is a placeholder. Replace it with an official TITAN article or announcement.",
    ],
  },
  {
    slug: "inside-a-technology-workshop",
    title: "Inside a technology workshop",
    date: "2026-09-02",
    category: "Events",
    image: workshop,
    excerpt: "Workshops give learners a focused, hands-on introduction to new tools and ideas.",
    body: [
      "Short workshops are a great way to explore a new topic before committing to a full course. They combine a guided demonstration with time to try things yourself.",
      "This sample article is a placeholder. Replace it with an official TITAN article or announcement.",
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
