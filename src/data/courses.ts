import web from "@/assets/course-web.jpg";
import networking from "@/assets/course-networking.jpg";
import cyber from "@/assets/course-cyber.jpg";
import ai from "@/assets/course-ai.jpg";
import python from "@/assets/course-python.jpg";
import design from "@/assets/course-design.jpg";
import cloud from "@/assets/course-cloud.jpg";
import marketing from "@/assets/course-marketing.jpg";

/**
 * SAMPLE course catalogue. Titles, durations and outlines are editable
 * placeholders until TITAN publishes its official course details.
 */
export const COURSE_CATEGORIES = [
  "Development",
  "Networks & Security",
  "Data & AI",
  "Cloud",
  "Design",
  "Digital Skills",
] as const;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  image: string;
  summary: string;
  duration: string;
  level: string;
  mode: string;
  overview: string;
  outcomes: string[];
  modules: { title: string; topics: string[] }[];
  prerequisites: string[];
}

export const COURSES: Course[] = [
  {
    slug: "web-app-development",
    title: "Web & App Development",
    category: "Development",
    image: web,
    summary: "Build responsive websites and modern web apps with HTML, CSS, JavaScript and React.",
    duration: "6 months",
    level: "Beginner to Intermediate",
    mode: "On-campus",
    overview:
      "A project-driven path from the fundamentals of the web to building complete, responsive applications. Learners write real code every session and finish with a portfolio of working projects.",
    outcomes: [
      "Structure and style responsive pages with semantic HTML and modern CSS",
      "Write clean, modular JavaScript",
      "Build interactive interfaces with React",
      "Use Git and GitHub for version control and collaboration",
      "Deploy a finished project online",
    ],
    modules: [
      { title: "Web Foundations", topics: ["HTML5 semantics", "CSS layout: Flexbox & Grid", "Responsive design"] },
      { title: "JavaScript Essentials", topics: ["Variables, functions & arrays", "DOM manipulation", "Async code & APIs"] },
      { title: "React Development", topics: ["Components & props", "State & hooks", "Routing & forms"] },
      { title: "Capstone Project", topics: ["Planning & wireframes", "Build & review", "Deployment & presentation"] },
    ],
    prerequisites: ["Basic computer literacy", "Enthusiasm to practise regularly"],
  },
  {
    slug: "networking-ccna",
    title: "Networking & CCNA Essentials",
    category: "Networks & Security",
    image: networking,
    summary: "Design, configure and troubleshoot networks with hands-on router and switch labs.",
    duration: "4 months",
    level: "Beginner",
    mode: "On-campus labs",
    overview:
      "Applied networking at the heart of TITAN. Learners configure real and simulated equipment, covering the concepts aligned with entry-level networking certification tracks.",
    outcomes: [
      "Explain the OSI and TCP/IP models",
      "Plan IPv4/IPv6 addressing and subnetting",
      "Configure switches, VLANs and routing",
      "Troubleshoot connectivity step by step",
    ],
    modules: [
      { title: "Network Fundamentals", topics: ["OSI & TCP/IP", "Cabling & devices", "IP addressing"] },
      { title: "Switching", topics: ["VLANs & trunking", "STP basics", "Switch security"] },
      { title: "Routing", topics: ["Static routing", "OSPF introduction", "NAT & DHCP"] },
      { title: "Lab Practice", topics: ["Packet simulation", "Hands-on equipment", "Troubleshooting drills"] },
    ],
    prerequisites: ["Basic computer literacy"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security Fundamentals",
    category: "Networks & Security",
    image: cyber,
    summary: "Understand threats, secure systems and practise defensive security techniques.",
    duration: "4 months",
    level: "Intermediate",
    mode: "On-campus",
    overview:
      "A practical introduction to protecting systems and networks — from security principles to hands-on defensive exercises in a controlled lab environment.",
    outcomes: [
      "Identify common threats and vulnerabilities",
      "Harden operating systems and networks",
      "Use essential security tools responsibly",
      "Respond to basic security incidents",
    ],
    modules: [
      { title: "Security Principles", topics: ["CIA triad", "Threat landscape", "Policies & ethics"] },
      { title: "System Hardening", topics: ["Linux & Windows security", "Access control", "Patching"] },
      { title: "Network Defence", topics: ["Firewalls", "Monitoring", "Secure protocols"] },
      { title: "Incident Basics", topics: ["Detection", "Response steps", "Reporting"] },
    ],
    prerequisites: ["Networking basics recommended"],
  },
  {
    slug: "ai-data-science",
    title: "AI & Data Science",
    category: "Data & AI",
    image: ai,
    summary: "Analyse data, build visualisations and train your first machine-learning models.",
    duration: "6 months",
    level: "Intermediate",
    mode: "On-campus",
    overview:
      "Learn to turn raw data into insight. The course moves from Python data tools to visualisation and introductory machine learning through guided projects.",
    outcomes: [
      "Clean and explore datasets with Python",
      "Visualise data clearly",
      "Train and evaluate basic ML models",
      "Present findings to non-technical audiences",
    ],
    modules: [
      { title: "Python for Data", topics: ["NumPy", "Pandas", "Data cleaning"] },
      { title: "Visualisation", topics: ["Charts & dashboards", "Storytelling with data"] },
      { title: "Machine Learning", topics: ["Regression", "Classification", "Model evaluation"] },
      { title: "Applied Project", topics: ["Problem framing", "Modelling", "Presentation"] },
    ],
    prerequisites: ["Basic programming helpful", "Comfort with school-level maths"],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    category: "Development",
    image: python,
    summary: "Learn programming logic and problem solving with one of the most versatile languages.",
    duration: "3 months",
    level: "Beginner",
    mode: "On-campus",
    overview:
      "An ideal first programming course. Learners build strong logic and problem-solving habits while writing useful Python scripts and small applications.",
    outcomes: [
      "Think algorithmically and break down problems",
      "Write clean Python using functions and modules",
      "Work with files and data structures",
      "Build small automation tools",
    ],
    modules: [
      { title: "Programming Basics", topics: ["Variables & types", "Conditions & loops"] },
      { title: "Data Structures", topics: ["Lists, dicts, sets", "Comprehensions"] },
      { title: "Functions & Modules", topics: ["Reusable code", "Packages", "Error handling"] },
      { title: "Mini Projects", topics: ["File automation", "Simple games", "API scripts"] },
    ],
    prerequisites: ["None — beginners welcome"],
  },
  {
    slug: "graphic-ui-design",
    title: "Graphic & UI Design",
    category: "Design",
    image: design,
    summary: "Master visual design principles and craft polished interfaces and brand assets.",
    duration: "4 months",
    level: "Beginner",
    mode: "On-campus",
    overview:
      "From layout, colour and typography to designing app screens — learners build a design portfolio through briefs that mirror real client work.",
    outcomes: [
      "Apply layout, colour and typography principles",
      "Create brand and social media assets",
      "Design user interfaces and simple prototypes",
      "Present work in a professional portfolio",
    ],
    modules: [
      { title: "Design Principles", topics: ["Composition", "Colour theory", "Typography"] },
      { title: "Graphic Tools", topics: ["Raster & vector editing", "Brand assets"] },
      { title: "UI Design", topics: ["Wireframes", "Components", "Prototyping"] },
      { title: "Portfolio", topics: ["Case studies", "Presentation"] },
    ],
    prerequisites: ["None — beginners welcome"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud Computing & DevOps",
    category: "Cloud",
    image: cloud,
    summary: "Deploy and automate applications using cloud platforms, containers and CI/CD.",
    duration: "5 months",
    level: "Intermediate",
    mode: "On-campus",
    overview:
      "Learn how modern software is shipped. Covers Linux, cloud fundamentals, containers and automated pipelines through guided deployments.",
    outcomes: [
      "Administer Linux servers confidently",
      "Understand core cloud services",
      "Containerise applications",
      "Build a basic CI/CD pipeline",
    ],
    modules: [
      { title: "Linux & Scripting", topics: ["Shell basics", "Bash scripting", "Permissions"] },
      { title: "Cloud Fundamentals", topics: ["Compute", "Storage", "Networking"] },
      { title: "Containers", topics: ["Images & containers", "Compose"] },
      { title: "Automation", topics: ["CI/CD concepts", "Monitoring basics"] },
    ],
    prerequisites: ["Networking or programming basics recommended"],
  },
  {
    slug: "digital-marketing-freelancing",
    title: "Digital Marketing & Freelancing",
    category: "Digital Skills",
    image: marketing,
    summary: "Grow brands online and learn to find, win and deliver freelance projects.",
    duration: "3 months",
    level: "Beginner",
    mode: "On-campus",
    overview:
      "Practical digital marketing combined with the professional skills needed to work independently — planning campaigns, measuring results and managing clients.",
    outcomes: [
      "Plan content and social media campaigns",
      "Understand SEO and analytics basics",
      "Create a professional freelance profile",
      "Communicate and manage client projects",
    ],
    modules: [
      { title: "Marketing Foundations", topics: ["Audience & positioning", "Content strategy"] },
      { title: "Channels", topics: ["Social media", "SEO basics", "Email"] },
      { title: "Analytics", topics: ["Measuring campaigns", "Reporting"] },
      { title: "Freelancing", topics: ["Profiles & proposals", "Client communication", "Pricing basics"] },
    ],
    prerequisites: ["None — beginners welcome"],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
