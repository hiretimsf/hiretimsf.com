import { DE, MN, US } from "country-flag-icons/react/3x2";
import AndroidIcon from "@/icons/android-icon";
import DriverIcon from "@/icons/driver-icon";
import ForkliftIcon from "@/icons/forklift-icon";
import FrontendIcon from "@/icons/frontend-icon";
import GraduateIcon from "@/icons/graduate-icon";
import MarketingIcon from "@/icons/marketing-icon";
import ServerIcon from "@/icons/server-icon";
import WorkerIcon from "@/icons/worker-icon";
import { projectsSource } from "@/lib/source";
import type { ExperienceItemType, ProjectItemType } from "@/types";

type ExperienceProject = ProjectItemType & { slug: string };

const PROJECTS: ExperienceProject[] = projectsSource
  .getPages()
  .map(({ data, slugs }, index) => {
    const d = (data ?? {}) as {
      title?: string;
      description?: string;
      date?: string;
      imageUrl?: string;
      imageAlt?: string;
      github?: string;
      liveDemo?: string;
      category?: string;
    };

    const slug = Array.isArray(slugs) ? slugs[slugs.length - 1] : "";

    return {
      id: index,
      title: d.title ?? "",
      date: d.date,
      description: d.description ?? "",
      imageUrl: d.imageUrl ?? "/images/app-placeholder.jpg",
      imageAlt: d.imageAlt ?? d.title ?? "Project",
      github: d.github,
      liveDemo: d.liveDemo,
      category: d.category,
      slug,
    } satisfies ExperienceProject;
  });

export const EXPERIENCE: ExperienceItemType[] = [
  {
    id: "self-employed-android",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Walnut Creek, CA",
    country: US,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2025",
        title: "Android Developer",
        employmentPeriod: "October 2025 — Present",
        employmentDuration: "2 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,
        description: `Built an open-source Mongolian Sign Language (MSL) Dictionary app using Jetpack Compose, Hilt, Coroutines, Flow, Room, Ktor, and Material 3, featuring interactive lessons, user authentication, bookmarks, and offline access.
- [Earned 100+ GitHub stars](https://github.com/hiretimsf)
- [Earned 100+ Play Store downloads](https://github.com/hiretimsf)`,
      },
    ],
    isCurrentEmployer: true,
    projects: (() => {
      const project = PROJECTS.find((p) => p.slug === "sign-language-kotlin");
      return project ? [project] : [];
    })(),
  },
  {
    id: "self-employed-frontend",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "frontend-developer-2025",
        title: "Frontend Developer",
        employmentPeriod: "January 2025 — October 2025",
        employmentDuration: "10 months",
        employmentType: "Self-employed",
        icon: FrontendIcon,
        description: `

Built an open-source portfolio apps with Next.js, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, and Framer Motion. Features advanced SEO, built-in live search, a mobile-first design, and a blog with MDX support powered by FumaDocs.
- Featured on [WeAreDevelopers (March 2025)](https://www.wearedevelopers.com/en/magazine/561/web-developer-portfolio-inspiration-and-examples-march-2025-561)
- Reviewed by [Danny Thompson](https://x.com/DThompsonDev) on his [Youtube channel](https://www.youtube.com/watch?v=wfL5arWfeOw&t=2866s)`,

        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: (() => {
      return PROJECTS.filter(
        (p) =>
          p.slug === "portfolio-website-v3" ||
          p.slug === "portfolio-website-v2",
      );
    })(),
  },
  {
    id: "tesla-production-associate",
    companyName: "Tesla",
    companyLogo: "/images/logos/tesla-logo.jpg",
    companyLogoAlt: "Tesla Logo",
    companyLocation: "Tesla Factory, Fremont, CA",
    companyWebsite: "https://www.tesla.com",
    country: US,
    positions: [
      {
        id: "production-associate-2020",
        title: "Production Associate",
        employmentPeriod: "October 2023 — January 2025",
        employmentDuration: "1 year 4 months",
        employmentType: "Full-time",
        icon: WorkerIcon,
        description: `- Monitored and performed functional testing for Model S and X vehicles at the end of the production line.
- Conducted drive tests for Model 3 and Y to ensure vehicle performance and quality.
- Assembled and installed body-side components for Model S.
- Recognized for hard work and dedication with Employee Appreciation Awards.`,
        skills: [
          "Model S",
          "Model X",
          "Model Y",
          "Functional Testing",
          "Drive Tests",
          "Assembly",
          "Installation",
          "Vehicle Testing",
          "Vehicle Performance Testing",
          "Vehicle Quality Control",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "self-employed-frontend-2025",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "frontend-developer-2023",
        title: "Frontend Developer",
        employmentPeriod: "January 2023 — October 2023",
        employmentDuration: "8 months",
        employmentType: "Self-employed",
        icon: FrontendIcon,
        description: `Built an open-source, full-stack blog app using Next.js, TypeScript, Tailwind CSS, and Supabase, featuring an admin panel, WYSIWYG editor, image uploads, login, search, paging, and commenting system.

- [Earned 450+ GitHub stars](https://github.com/hiretimsf/Next.js-Blog-App)
- [Earned Vercel swag for open-source contributions (June 2024)](https://x.com/hiretimsf/status/1799500139662651526)

Built an open-source portfolio apps with Next.js 13, TypeScript, Tailwind CSS, Shadcn UI. Features advanced SEO, a blog with MDX support, and a modern, clean UI.
- [Earned 30+ GitHub stars](https://github.com/hiretimsf/Portfolio-Web-v1)`,
        isExpanded: false,
      },
    ],
    projects: (() => {
      return PROJECTS.filter(
        (p) =>
          p.slug === "full-stack-blog-app" || p.slug === "portfolio-website-v1",
      );
    })(),
  },
  {
    id: "tesla-material-handler",
    companyName: "Tesla",
    companyLogo: "/images/logos/tesla-logo.jpg",
    companyLogoAlt: "Tesla Logo",
    companyLocation: "Tesla Factory, Fremont, CA",
    companyWebsite: "https://www.tesla.com",
    country: US,
    positions: [
      {
        id: "material-handler-2020",
        title: "Material Handler",
        employmentPeriod: "January 2020 — December 2022",
        employmentDuration: "2 years 12 months",
        employmentType: "Full-time",
        icon: ForkliftIcon,
        description: `- Operated forklifts and delivered parts to the Model 3 Body-in-White production line.
- Maintained inventory flow and supported the production team with on-time deliveries.
- Recognized for hard work and dedication with a “Kick-Ass Worker” award.`,

        skills: [
          "Forklift",
          "Model 3",
          "Body-in-White",
          "Inventory Management",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "self-employed-android-early",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://www.github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2017",
        title: "Android Developer",
        employmentPeriod: "April 2017 — July 2020",
        employmentDuration: "3 years 4 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,
        description: `Developed and published two Android portfolio apps demonstrating modern architecture, testing, and best development practices.

- [Portfolio App (Kotlin)](https://github.com/timtbdev/Android-Portfolio-App-Kotlin): Rebuilt the app in Kotlin using MVVM, Navigation, LiveData, DataBinding, Material Design, Coroutines, Retrofit, Room, and Koin, improving data flow and image handling. Earned 50+ stars on GitHub.

- [Portfolio App (Java)](https://github.com/timtbdev/Android-Portfolio-App-Java): Developed the initial version in Java and XML using MVC architecture with the Android SDK and Retrofit for API integration, earning 10+ stars on GitHub.

- [Portfolio Website](https://personal-website-76368.web.app/index.html):Built the initial version of my portfolio website using HTML, CSS, and JavaScript, with Firebase as the backend.`,
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,

    projects: (() => {
      return PROJECTS.filter(
        (p) =>
          p.slug === "portfolio-app-kotlin" ||
          p.slug === "portfolio-app-java" ||
          p.slug === "portfolio-website-v0",
      );
    })(),
  },
  {
    id: "morningstar",
    companyName: "MorningStar Senior Living",
    companyLogo: "/images/logos/morning-star-logo.jpg",
    companyLogoAlt: "MorningStar Senior Living Logo",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://www.morningstarseniorliving.com",
    positions: [
      {
        id: "server-2019",
        title: "Server",
        employmentPeriod: "October 2019 — January 2020",
        employmentDuration: "4 months",
        employmentType: "Full-time",
        icon: ServerIcon,
        description: `- Served meals and drinks to residents.
- Kept dining room clean and organized.`,
        skills: [
          "Meal Service",
          "Customer Service",
          "Communication",
          "Teamwork",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "driver",
    companyName: "Uber, Lyft, Doordash",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Delivery Services Logo",
    companyLocation: "San Francisco Bay Area, CA",
    country: US,
    companyWebsite: "https://www.uber.com",
    positions: [
      {
        id: "driver-2017",
        title: "Driver",
        employmentPeriod: "April 2017 — October 2019",
        employmentDuration: "2 years 7 months",
        employmentType: "Part-time",
        icon: DriverIcon,
        description: `- Completed 2,000+ safe rides and deliveries across multiple platforms.
- Maintained a 5-star customer service rating and excellent communication skills.`,
        skills: [
          "Customer Service",
          "Time Management",
          "Multi-tasking",
          "Communication",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "renewable-energy",
    companyName: "Renewable Energy Project",
    companyLogo: "/images/logos/renewable-energy-logo.png",
    companyLogoAlt: "Renewable Energy Logo",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://www.eghpp.mn",
    positions: [
      {
        id: "web-developer-2013",
        title: "Frontend Developer",
        employmentPeriod: "November 2013 — February 2016",
        employmentDuration: "2 years 4 months",
        employmentType: "Full-time",
        icon: FrontendIcon,
        description: `- Designed and developed a responsive project website using HTML, CSS, and JavaScript.
- Created digital marketing materials, improving project visibility and engagement.`,
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: (() => {
      return PROJECTS.filter(
        (p) =>
          p.slug === "renewable-energy-project" ||
          p.slug === "project-marketing-materials",
      );
    })(),
  },
  {
    id: "self-employed-android-early-2012",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2012",
        title: "Android Developer",
        employmentPeriod: "September 2012 — November 2013",
        employmentDuration: "1 year 3 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,

        description: `- Developed and launched a full-stack, location-based marketplace app for buying and selling items within local neighborhoods, built on the Ushahidi open-source platform using Java, XML, and Eclipse IDE.
- Created a custom T-shirt design app featuring exclusive collections by Mongolian designer [@ido.dsnr](https://www.behance.net/ido_dsnr?locale=en_US), combining modern aesthetics with cultural inspiration.`,

        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,

    projects: (() => {
      return PROJECTS.filter(
        (p) =>
          p.slug === "local-market-place-app" || p.slug === "tshirt-design-app",
      );
    })(),
  },
  {
    id: "unitel",
    companyName: "Unitel Group",
    companyLogo: "/images/logos/unitel-logo.png",
    companyLogoAlt: "Unitel Logo",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://www.unitel.mn",
    positions: [
      {
        id: "marketing-associate-2009",
        title: "Marketing Associate",
        employmentPeriod: "November 2009 — August 2012",
        employmentDuration: "2 years 10 months",
        employmentType: "Full-time",
        icon: MarketingIcon,
        description: `- Launched BlackBerry services in Mongolia, selling over 6,000 devices.
- Developed a product landing page with HTML & CSS, boosting user engagement by 10%.`,
        isExpanded: false,
      },
    ],
    projects: (() => {
      return PROJECTS.filter((p) => p.slug === "product-landing-page");
    })(),
    isCurrentEmployer: false,
  },
  {
    id: "mercedes-benz",
    companyName: "Mercedes-Benz AG",
    companyLogo: "/images/logos/daimler-logo.png",
    companyLogoAlt: "Daimler Logo",
    companyLocation: "Stuttgart, Germany",
    country: DE,
    companyWebsite: "https://www.mercedes-benz.com",
    positions: [
      {
        id: "intern-2007",
        title: "Intern",
        employmentPeriod: "March 2007 — August 2007",
        employmentDuration: "6 months",
        employmentType: "Full-time",
        icon: GraduateIcon,
        description: `- Migrated over 100 logistics reports to a new Cognos BI system.
- Assisted Data Warehouse users by creating custom data reports using SQL.`,
        skills: [
          "SQL",
          "IBM Cognos Analytics",
          "Cognos",
          "Microsoft Access",
          "Visual Basic",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
