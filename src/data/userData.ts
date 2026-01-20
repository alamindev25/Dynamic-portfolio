import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link2Icon,
  Facebook,
  Phone,
} from "lucide-react";

export const fetchData = [
  { label: "User", value: "aj7@garuda" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skills = [
  { name: "Python", icon: Code }, // Python as general code
  { name: "Django", icon: Server }, // Django as backend/server
  { name: "REST API", icon: Server }, // REST API as backend/server
  { name: "Fast API", icon: Server }, // Fast API as backend/server
  { name: "API Development", icon: Server }, // API development (added)
  { name: "MongoDB", icon: Database }, // MongoDB as database
  { name: "MySQL", icon: Database }, // MySQL as database
  { name: "PostgreSQL", icon: Database }, // PostgreSQL as database
  //{ name: "Tailwind CSS", icon: Paintbrush }, // Tailwind as design/UI
  //{ name: "TypeScript", icon: Type }, // TS as type-focused language
  { name: "Git & GitHub", icon: GitBranch }, // Git
  //{ name: "Next.js", icon: Link2Icon },
  { name: "HTML", icon: Link2Icon },
  { name: "CSS", icon: Paintbrush },
  { name: "Bootstrap", icon: Paintbrush },
  { name: "JavaScript", icon: Code },
  { name: "Data Structures & Algorithms", icon: Type },
  { name: "Postman", icon: Server }
];

export const facts = [
  "Student",
  "Passion for tech",
  "Learner",
  "Django Developer",
  "Aspiring Python Developer",
];

export const timeline = [
  { year: "2021", detail: "Started exploring electronics & tech." },
  { year: "2022", detail: "Discovered coding & web development." },
  { year: "2023", detail: "Built a few small projects." },
  { year: "2024", detail: "Learned more about web development." },
  { year: "2025", detail: "Learning New things and Improving my skills..." },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "alamin88.ime@gmail.com",
    href: "mailto:alamin88.ime@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    href: null,
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alaminsql",
    href: "https://github.com/alaminsql",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/al-amin",
    href: "https://www.linkedin.com/in/al-amin-islam-144481265/",
    color: "text-blue-600",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/mdalaminislam88",
    href: "https://www.facebook.com/mdalaminislam88",
    color: "text-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1788392063",
    href: "tel:+8801788392063",
    color: "text-green-500",
  },
];

export const projectData = [
  {
    name: "HisebWala - Smart Accounting App",
    description: `📝 Project Overview Backend Python

Hisebwala is a backend-driven financial management system designed to support accounting and business operations for livestock and small farm businesses in Bangladesh.
As a Backend Python Developer, I designed and implemented the complete server-side architecture responsible for business logic, secure data processing, and API services consumed by client applications.
🎯 Backend Project Objective
Develop a robust, scalable, and secure backend system for financial data management
Handle complex accounting logic, profit/loss calculations, and transaction validation
Provide RESTful APIs for seamless integration with any frontend or client application
Ensure data security, consistency, and performance

⭐ Backend Responsibilities & Features

Designed and developed RESTful APIs for:

Sales, expenses, investments, and loss management

Product and inventory tracking

Customer accounts, billing, and payment history

Implemented secure authentication and authorization using JWT

Built automated financial calculation engines for profit, loss, and balance tracking
Designed normalized database schemas and optimized ORM queries
Integrated payment gateway APIs for secure financial transactions
Implemented data validation, error handling, and logging
Ensured scalable and maintainable backend architecture
`,
    tech: ["Django", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Firebase", "Payment Gateway API", "Python"],
    github: "",
    category: "Backend",
    images: ["/assets/hisebwala-screens.png", "/assets/hisebwala-logo.png"]
  },
  {
    name: "Ecommerce website",
    description: "Track what you achieve every day. One thing at a time.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "MongoDB"],
    live: "https://done-today.xyz",
    category: "Web",
  },
  {
    name: "Landing Page",
    description: "Simple Landing Page.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "Shadcn", "Framer-motion"],
    live: "https://landing-page-ajseven.vercel.app",
    github: "https://github.com/aj-seven/landing-page",
    category: "Web",
  },
  {
    name: "PostalMapper",
    description:
      "A digital address card generator based on postal code with QR support, export options. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "QRCode"],
    live: "https://postal-mapper.vercel.app",
    github: "https://github.com/aj-seven/postal-mapper",
    category: "Web",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
    category: "Web",
  },
  {
    name: "Task Quest",
    description: "A simple yet modern task tracker built for productivity.",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
    category: "Web",
  },
  {
    name: "Color Tailor",
    description: "A color palette generator built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "chroma-js"],
    live: "https://color-tailor.vercel.app",
    github: "https://github.com/aj-seven/color-tailor",
    category: "Web",
  },
  {
    name: "Android-Sysinfo",
    description: "A tool that efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
    category: "CLI",
  },
];
