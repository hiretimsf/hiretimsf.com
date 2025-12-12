import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle(
      "Tim | Frontend Developer | 5+ Years Exp",
    ),
    description: truncateDescription(
      "Frontend Developer with 5+ years experience. Pixel-perfect execution in Next.js, React, & TypeScript. Building high-quality, user-centric web & mobile apps.",
    ),
    slug: "/",
  },
  {
    page: "About",
    title: truncateTitle(
      "About Tim | Frontend Developer | 5+ Years Exp",
    ),
    description: truncateDescription(
      "Frontend Developer with 5+ years experience. Pixel-perfect execution in Next.js, React, & TypeScript. Building high-quality, user-centric web & mobile apps.",
    ),
    slug: "/about",
  },
  {
    page: "Experience",
    title: truncateTitle(
      "WorkExperience | Frontend Developer | 5+ Years Exp",
    ),
    description: truncateDescription(
      "Work experience of Tim, a Frontend Developer based in San Francisco Bay Area.",
    ),
    slug: "/experience",
  },
  {
    page: "Education",
    title: truncateTitle(
      "Education of Tim | Frontend Developer | 5+ Years Exp",
    ),
    description: truncateDescription(
      "Education of Tim, a Frontend Developer.",
    ),
    slug: "/education",
  },
  {
    page: "Blog",
    title: truncateTitle("Blog | Frontend Development Insights | Tim"),
    description: truncateDescription(
      "Thoughts on exploring new technologies and turning ideas into reality through code.",
    ),
    slug: "/blog",
  },
  {
    page: "Projects",
    title: truncateTitle("Projects | High-Quality Web & Mobile Apps | Tim"),
    description: truncateDescription(
      "Showcasing applications built with Next.js, React, TypeScript and modern front-end technologies.",
    ),
    slug: "/projects",
  },
  {
    page: "Contact",
    title: truncateTitle("Contact Tim | Hire a Frontend Developer | 5+ Years Exp"),
    description: truncateDescription(
      "Ready to build high-quality, user-centric applications? Get in touch with Tim for pixel-perfect execution.",
    ),
    slug: "/contact",
  },
  {
    page: "Privacy",
    title: truncateTitle("Privacy Policy | Hire Tim"),
    description: truncateDescription(
      "Frontend Developer with 5+ years experience. Pixel-perfect execution in Next.js, React, & TypeScript. Building high-quality, user-centric web & mobile apps.",
    ),
    slug: "/privacy",
  },
  {
    page: "Changelog",
    title: truncateTitle(
      "Changelog | The history and evolution of my portfolio website.",
    ),
    description: truncateDescription(
      "The history and evolution of my portfolio website.",
    ),
    slug: "/changelog",
  },
];

export default HEAD;
