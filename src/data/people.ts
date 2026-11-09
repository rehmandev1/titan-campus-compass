/**
 * PLACEHOLDER testimonials and alumni. No real identities are used.
 * Replace each entry with verified, consented information (and a photo URL).
 */
export interface Testimonial {
  id: string;
  name: string;
  course: string;
  feedback: string;
  rating?: number;
  photo?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Student Name",
    course: "Web & App Development",
    feedback:
      "Placeholder testimonial. Replace with a verified quote from a TITAN student describing their learning experience.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Student Name",
    course: "Networking & CCNA Essentials",
    feedback:
      "Placeholder testimonial. Add the student's own words about the labs, instructors or projects here.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Student Name",
    course: "Graphic & UI Design",
    feedback:
      "Placeholder testimonial. Keep quotes short, specific and approved by the student before publishing.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Student Name",
    course: "AI & Data Science",
    feedback: "Placeholder testimonial. Replace with a verified student review.",
    rating: 5,
  },
];

export interface Alumnus {
  id: string;
  name: string;
  qualification: string;
  course: string;
  achievement: string;
  quote: string;
  photo?: string;
}

export const ALUMNI: Alumnus[] = [
  {
    id: "a1",
    name: "Alumni Name",
    qualification: "Qualification — to be added",
    course: "Web & App Development",
    achievement: "Career achievement — to be verified",
    quote: "Placeholder alumni testimonial. Replace with the graduate's verified words.",
  },
  {
    id: "a2",
    name: "Alumni Name",
    qualification: "Qualification — to be added",
    course: "Networking & CCNA Essentials",
    achievement: "Career achievement — to be verified",
    quote: "Placeholder alumni testimonial. Replace with the graduate's verified words.",
  },
  {
    id: "a3",
    name: "Alumni Name",
    qualification: "Qualification — to be added",
    course: "Cyber Security Fundamentals",
    achievement: "Career achievement — to be verified",
    quote: "Placeholder alumni testimonial. Replace with the graduate's verified words.",
  },
  {
    id: "a4",
    name: "Alumni Name",
    qualification: "Qualification — to be added",
    course: "Digital Marketing & Freelancing",
    achievement: "Career achievement — to be verified",
    quote: "Placeholder alumni testimonial. Replace with the graduate's verified words.",
  },
];
