import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ega Gofur",
  initials: "EGA GOFUR",
  portfolioUrl: "https://egagofur.me",
  url: "https://cv-egagofur.vercel.app",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Malang",
  description:
    "Fullstack Engineer passionate about building scalable, high-performance web applications. Enthusiastic about solving complex problems and delivering user-centric solutions. Actively mentoring and leading in developer communities.",
  summary:
    "Starting my career as a Fullstack Engineer at [DOT Indonesia](https://dot.co.id) in early 2024, I bring a solid foundation in fullstack development. I hold a degree in Software Engineering from [SMK Negeri 1 Kepanjen](https://smkn1kepanjen.sch.id) and have gained valuable experience through internships and freelance work. I also founded [Kopico](https://kopico.vercel.app), an online coding community with over 800 active members.",
  avatarUrl: "/me.png",
  skills: [
    "NestJS",
    "Inertia.js",
    "DDD",
    "React",
    "Next.js",
    "Framer Motion",
    "Tailwind CSS",
    "Prisma",
    "Drizzle",
    "Laravel",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "/#projects",
      icon: CodeIcon,
      label: "Projects",
    },
    {
      href: "https://medium.com/@egagofurtriwahana",
      icon: PencilLine,
      label: "Notes",
    },
  ],
  contact: {
    email: "egagofurtriwahana@gmail.com",
    tel: "+6285655501860",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/egagofur",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/egagofur/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:egagofurtriwahana@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Semudahitu.id",
      badges: ["freelance", "remote"],
      href: "https://semudahitu.id/",
      location: "Remote",
      title: "Fullstack Engineer",
      logoUrl: "/semudah-itu.png",
      start: "October 2024",
      end: "Present",
      description:
        "Currently working on a HRIS system for Semudahitu.id, utilizing NestJS and Next.js. I contribute to both front-end and back-end development, ensuring high-quality code and a seamless user experience.",
    },
    {
      company: "CodeSpace Indonesia",
      badges: ["freelance", "remote"],
      href: "https://codespace.id/",
      location: "Remote",
      title: "Fullstack Laravel Developer",
      logoUrl: "/code-space.png",
      start: "July 2024",
      end: "August 2024",
      description:
        "Developed a TOEFL test platform using Laravel Filament. Focused on fullstack development, delivering a user-friendly interface and ensuring smooth functionality across the system.",
    },
    {
      company: "DOT Indonesia",
      badges: ["full time", "WFO"],
      href: "https://dot.co.id",
      location: "WFO",
      title: "Fullstack Engineer",
      logoUrl: "/dot.png",
      start: "January 2024",
      end: "Present",
      description:
        "As a Fullstack Engineer at DOT Indonesia, I work on both front-end and back-end projects, solving complex problems and delivering scalable web solutions. My focus is on creating efficient, user-centric applications using modern web technologies.",
    },
  ],
  education: [
    {
      school: "SMK Negeri 1 Kepanjen",
      href: "https://smkn1kepanjen.sch.id",
      degree: "Vocational High School",
      logoUrl: "/smk.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "MIND ID - Recruitment Portal",
      href: "https://career.mind.id",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "Developed and maintained the MIND ID Recruitment Portal, a system used to manage the recruitment process within MIND ID Holding. Responsible for implementing new features and maintaining existing ones.",
      technologies: [
        "Next.js",
        "Typescript",
        "Nest.js",
        "Inertia.js",
        "PostgreSQL",
        "TypeORM",
        "TailwindCSS",
        "Ant Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://career.mind.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mindid-portal.png",
      video: "",
    },
    {
      title: "Kalla Property Management",
      href: "https://kalla.co.id",
      dates: "Feb 2024 - Jun 2024",
      active: true,
      description:
        "Led the development of the Kalla Property Management System, managing both the front-end and back-end components of the project.",
      technologies: [
        "Nest.js",
        "Inertia.js",
        "React",
        "Typescript",
        "MySQL",
        "TypeORM",
        "Ant Design",
        "WebHook",
      ],
      links: [
        {
          type: "Website",
          href: "https://kalla.co.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/kalla-property.png",
      video: "",
    },
    {
      title: "Open Data DPR RI",
      href: "https://data.dpr.go.id",
      dates: "Sep 2023 - Jan 2024",
      active: true,
      description:
        "Developed a website for the Indonesian House of Representatives to provide open data for research and machine learning model analysis.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "DaisyUI",
        "Laravel Lumen",
      ],
      links: [
        {
          type: "Website",
          href: "https://data.dpr.go.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/dpr.png",
      video: "",
    },
    {
      title: "Pama Tax System",
      href: "https://pamapersada.com/",
      dates: "Jan 2023 - Jun 2024",
      active: true,
      description:
        "Developed a tax module for Pama Persada’s ERP system, focusing on seamless integration and user-friendly design.",
      technologies: ["React", "Typescript", "Ant Design", "Asp.Net Core"],
      links: [
        {
          type: "Website",
          href: "https://pamapersada.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/pama.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application using augmented reality to deliver bedtime stories to children.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
