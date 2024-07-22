import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ega Gofur",
  initials: "EGA GOFUR",
  url: "https:/cv-egagofur.vercel.app",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Malang",
  description:
    "Software Engineer. I love building things and helping people. Very active on Tiktok.",
  summary:
    "In early 2024, I began my career as a software engineer at [DOT Indonesia](https://dot.co.id). Prior to that, I had graduated from [Vocational High School with a focus in software engineering](https://smkn1kepanjen.sch.id/) and completed an [internship at a large technology company in Malang, Indonesia](https://www.linkedin.com/posts/egagofur_keepingahead-dotindonesia-intern-activity-7054005843763023872-8geM?utm_source=share&utm_medium=member_desktop).  I'm also proud to be the [founder of Kopico](https://kopico.vercel.app), the first online coding community with over 800 members.",
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
      company: "CodeSpace Indonesia",
      badges: ["freelance", "remote"],
      href: "https://codespace.id/",
      location: "Remote",
      title: "Fullstack Laravel",
      logoUrl: "/code-space.png",
      start: "July 2024",
      end: "Present",
      description:
        "In my spare time, I freelance as a fullstack developer at CodeSpace Indonesia, currently working on a TOEFL test website built with Laravel Filament. I leverage my full-stack development expertise to handle both front-end and back-end aspects of the project, with a strong focus on delivering high-quality code and user-friendly web applications.",
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
        "Currently, I have transitioned into the role of a Full Stack Engineer at DOT Indonesia, where my responsibilities span both front-end and back-end development. I excel at solving complex problems, delivering high-quality code, and creating user-friendly web applications. I remain dedicated to staying updated on the latest industry trends and cutting-edge technologies.",
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
      title: "MIND ID - Portal Recruitment",
      href: "https://career.mind.id",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "MIND ID Portal Recruitment is a system that is used to manage all recruitment processes in the MIND ID Holding company. on this project I was creating a feature and maintenance.",
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
      title: "Kalla Property Management.",
      href: "https://kalla.co.id",
      dates: "Feb 2024 - Jun 2024",
      active: true,
      description:
        "Kalla Property Management is a property management system that is used to manage all properties owned by the Kalla Group. on this project I was responsible for the front-end and back-end.",
      technologies: [
        "Nest.js",
        "Inertia.js",
        "React",
        "Typescript",
        "Mysql",
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
      title: "Open Data DPR RI.",
      href: "https://data.dpr.go.id",
      dates: "Sep 2023 - Jan 2024",
      active: true,
      description:
        "Develop a website that provides data for research needs analysis, even your machine learning model. This project is a collaboration with the Indonesian House of Representatives.",
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
      title: "Pama Tax System.",
      href: "https://pamapersada.com/",
      dates: "Jan 2023 - Jun 2024",
      active: true,
      description:
        "Developed an ERP System for Pama Persada, a company engaged in the mining sector, ERP Module tax system. This project is a collaboration with PT. Pama Persada.",
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
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
