/**
 * Site-wide settings. Every value marked PLACEHOLDER must be replaced with
 * verified TITAN information before launch.
 */
export const SITE = {
  shortName: "TITAN",
  name: "Taj Institute of Technology & Applied Networks",
  poweredBy: "Saylani Welfare International Trust",
  tagline: "Learn Technology. Lead the Future.",
  intro:
    "TITAN is a technology institute focused on practical, industry-relevant IT and networking education — helping learners across Sindh build real skills for real careers.",
  // PLACEHOLDER contact details — shown as plain text until verified.
  contact: {
    address: "Head office address — to be confirmed",
    phone: "Phone number — to be confirmed",
    email: "Email address — to be confirmed",
    hours: "Office hours — to be confirmed",
  },
  // Add official profile URLs here; icons without a URL render as "coming soon".
  social: [
    { name: "Facebook", href: "" },
    { name: "Instagram", href: "" },
    { name: "LinkedIn", href: "" },
    { name: "YouTube", href: "" },
    { name: "X", href: "" },
  ] as { name: "Facebook" | "Instagram" | "LinkedIn" | "YouTube" | "X"; href: string }[],
};

/** Homepage statistics — PLACEHOLDER figures, replace with verified numbers. */
export const STATS = [
  { key: "students", label: "Students Trained", value: 1000, suffix: "+", placeholder: true },
  { key: "trainers", label: "Professional Trainers", value: 25, suffix: "+", placeholder: true },
  { key: "courses", label: "Courses Offered", value: 8, suffix: "", placeholder: true },
  { key: "projects", label: "Industry Projects", value: 100, suffix: "+", placeholder: true },
] as const;
