import type { ExperienceType } from "@/features/experience/types/ExperienceType";

export const getExperienceItems = (): ExperienceType[] => {
  return [
    {
      companyName: "Personal Projects",
      companyWebsite: "https://github.com/hiretimsf",
      companyLocation: "Walnut Creek, CA",
      country: "US",
      positions: [
        {
          id: "pp-2025",
          title: "Frontend Developer",
          employmentPeriod: "Jan, 2025 - Present",
          employmentDuration: "1 yr",
          employmentType: "Self-employed",
          icon: "FrontendIcon",
          skills: [],
          description: `Built an open-source portfolio apps with Next.js, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, and Framer Motion. Features advanced SEO, built-in live search, a mobile-first design, and a blog with MDX support powered by FumaDocs.

- Featured on [WeAreDevelopers (March 2025)](https://www.wearedevelopers.com/en/magazine/561/web-developer-portfolio-inspiration-and-examples-march-2025-561)
- Reviewed by [Danny Thompson](https://x.com/DThompsonDev) on his [Youtube channel](https://www.youtube.com/watch?v=wfL5arWfeOw&t=2866s)`,
        },
      ],
    },
    {
      companyName: "Tesla",
      companyWebsite: "https://www.tesla.com",
      companyLocation: "Tesla Factory, Fremont, CA",
      country: "US",
      positions: [
        {
          id: "tesla-2023",
          title: "Production Associate",
          employmentPeriod: "Oct, 2023 - Jan, 2025",
          employmentDuration: "1 yr 4 mos",
          employmentType: "Full-time",
          icon: "WorkerIcon",
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
          description: `- Monitored and performed functional testing for Model S and X vehicles at the end of the production line.
- Conducted drive tests for Model 3 and Y to ensure vehicle performance and quality.
- Assembled and installed body-side components for Model S.
- Recognized for hard work and dedication with Employee Appreciation Awards.`,
        },
      ],
    },
    {
      companyName: "Personal Projects",
      companyWebsite: "https://github.com/hiretimsf",
      companyLocation: "Hayward, CA",
      country: "US",
      positions: [
        {
          id: "pp-2023",
          title: "Frontend Developer",
          employmentPeriod: "Jan, 2023 - Oct, 2023",
          employmentDuration: "10 mos",
          employmentType: "Self-employed",
          icon: "FrontendIcon",
          skills: [],
          description: `Built an open-source, full-stack blog app using Next.js, TypeScript, Tailwind CSS, and Supabase, featuring an admin panel, WYSIWYG editor, image uploads, login, search, paging, and commenting system.

- [Earned 450+ GitHub stars](https://github.com/hiretimsf/Next.js-Blog-App)
- [Earned Vercel swag for open-source contributions (June 2024)](https://x.com/hiretimsf/status/1799500139662651526)

Built an open-source portfolio apps with Next.js 13, TypeScript, Tailwind CSS, Shadcn UI. Features advanced SEO, a blog with MDX support, and a modern, clean UI.

- [Earned 30+ GitHub stars](https://github.com/hiretimsf/Portfolio-Web-v1)`,
        },
      ],
    },
    {
      companyName: "Tesla",
      companyWebsite: "https://www.tesla.com",
      companyLocation: "Tesla Factory, Fremont, CA",
      country: "US",
      positions: [
        {
          id: "tesla-2020",
          title: "Material Handler",
          employmentPeriod: "Jan, 2020 - Dec, 2022",
          employmentDuration: "3 yrs",
          employmentType: "Full-time",
          icon: "ForkliftIcon",
          skills: [
            "Forklift",
            "Model 3",
            "Body-in-White",
            "Inventory Management",
          ],
          description: `- Operated forklifts and delivered parts to the Model 3 Body-in-White production line.
- Maintained inventory flow and supported the production team with on-time deliveries.
- Recognized for hard work and dedication with a "Kick-Ass Worker" award.`,
        },
      ],
    },
    {
      companyName: "Personal Projects",
      companyWebsite: "https://www.github.com/hiretimsf",
      companyLocation: "Hayward, CA",
      country: "US",
      positions: [
        {
          id: "pp-2017",
          title: "Android Developer",
          employmentPeriod: "Apr, 2017 - Jul, 2020",
          employmentDuration: "3 yrs 4 mos",
          employmentType: "Self-employed",
          icon: "AndroidIcon",
          skills: [],
          description: `Developed and published two Android portfolio apps demonstrating modern architecture, testing, and best development practices.

- [Portfolio App (Kotlin)](https://github.com/timtbdev/Android-Portfolio-App-Kotlin): Rebuilt the app in Kotlin using MVVM, Navigation, LiveData, DataBinding, Material Design, Coroutines, Retrofit, Room, and Koin, improving data flow and image handling. Earned 50+ stars on GitHub.

- [Portfolio App (Java)](https://github.com/timtbdev/Android-Portfolio-App-Java): Developed the initial version in Java and XML using MVC architecture with the Android SDK and Retrofit for API integration, earning 10+ stars on GitHub.

- [Portfolio Website](https://personal-website-76368.web.app/index.html):Built the initial version of my portfolio website using HTML, CSS, and JavaScript, with Firebase as the backend.`,
        },
      ],
    },
    {
      companyName: "MorningStar Senior Living",
      companyWebsite: "https://www.morningstarseniorliving.com",
      companyLocation: "Hayward, CA",
      country: "US",
      positions: [
        {
          id: "morningstar-2019",
          title: "Server",
          employmentPeriod: "Oct, 2019 - Jan, 2020",
          employmentDuration: "4 mos",
          employmentType: "Full-time",
          icon: "ServerIcon",
          skills: [
            "Meal Service",
            "Customer Service",
            "Communication",
            "Teamwork",
          ],
          description: `- Served meals and drinks to residents.
- Kept dining room clean and organized.`,
        },
      ],
    },
    {
      companyName: "Uber, Lyft, Doordash",
      companyWebsite: "https://www.uber.com",
      companyLocation: "San Francisco Bay Area, CA",
      country: "US",
      positions: [
        {
          id: "gig-2017",
          title: "Driver",
          employmentPeriod: "Apr, 2017 - Oct, 2019",
          employmentDuration: "2 yrs 7 mos",
          employmentType: "Part-time",
          icon: "DriverIcon",
          skills: [
            "Customer Service",
            "Time Management",
            "Multi-tasking",
            "Communication",
          ],
          description: `- Completed 2,000+ safe rides and deliveries across multiple platforms.
- Maintained a 5-star customer service rating and excellent communication skills.`,
        },
      ],
    },
    {
      companyName: "Renewable Energy Project",
      companyWebsite: "https://www.eghpp.mn",
      companyLocation: "Ulaanbaatar, Mongolia",
      country: "MN",
      positions: [
        {
          id: "renewable-2013",
          title: "Frontend Developer",
          employmentPeriod: "Nov, 2013 - Feb, 2016",
          employmentDuration: "2 yrs 4 mos",
          employmentType: "Full-time",
          icon: "FrontendIcon",
          skills: [],
          description: `- Designed and developed a responsive project website using HTML, CSS, and JavaScript.
- Created digital marketing materials, improving project visibility and engagement.`,
        },
      ],
    },
    {
      companyName: "Personal Projects",
      companyWebsite: "https://github.com/hiretimsf",
      companyLocation: "Ulaanbaatar, Mongolia",
      country: "MN",
      positions: [
        {
          id: "pp-2012",
          title: "Android Developer",
          employmentPeriod: "Sep, 2012 - Nov, 2013",
          employmentDuration: "1 yr 3 mos",
          employmentType: "Self-employed",
          icon: "AndroidIcon",
          skills: [],
          description: `- Developed and launched a full-stack, location-based marketplace app for buying and selling items within local neighborhoods, built on the Ushahidi open-source platform using Java, XML, and Eclipse IDE.
- Created a custom T-shirt design app featuring exclusive collections by Mongolian designer [@ido.dsnr](https://www.behance.net/ido_dsnr?locale=en_US), combining modern aesthetics with cultural inspiration.`,
        },
      ],
    },
    {
      companyName: "Unitel Group",
      companyWebsite: "https://www.unitel.mn",
      companyLocation: "Ulaanbaatar, Mongolia",
      country: "MN",
      positions: [
        {
          id: "unitel-2009",
          title: "Marketing Associate",
          employmentPeriod: "Nov, 2009 - Aug, 2012",
          employmentDuration: "2 yrs 10 mos",
          employmentType: "Full-time",
          icon: "MarketingIcon",
          skills: [],
          description: `- Launched BlackBerry services in Mongolia, selling over 6,000 devices.
- Developed a product landing page with HTML & CSS, boosting user engagement by 10%.`,
        },
      ],
    },
    {
      companyName: "Mercedes-Benz AG",
      companyWebsite: "https://www.mercedes-benz.com",
      companyLocation: "Stuttgart, Germany",
      country: "DE",
      positions: [
        {
          id: "mercedes-2007",
          title: "Intern",
          employmentPeriod: "Mar, 2007 - Aug, 2007",
          employmentDuration: "6 mos",
          employmentType: "Full-time",
          icon: "GraduateIcon",
          skills: [
            "SQL",
            "IBM Cognos Analytics",
            "Cognos",
            "Microsoft Access",
            "Visual Basic",
          ],
          description: `- Migrated over 100 logistics reports to a new Cognos BI system.
- Assisted Data Warehouse users by creating custom data reports using SQL.`,
        },
      ],
    },
  ];
};
