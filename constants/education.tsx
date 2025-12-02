import { DE, US } from "country-flag-icons/react/3x2";
import GraduateIcon from "@/icons/graduate-icon";
import type { ExperienceItemType } from "@/types";

export const EDUCATION: ExperienceItemType[] = [
  {
    id: "education-hochschule-mittweida",
    companyName: "Hochschule Mittweida",
    companyLogo: "/images/education/mittweida.jpg",
    companyLogoAlt: "Hochschule Mittweida Logo",
    companyLocation: "Mittweida, Germany",
    country: DE,
    positions: [
      {
        id: "bachelors-computer-science",
        title: "Bachelor's degree, Computer Science",
        employmentPeriod: "October 2002 — May 2008",
        employmentDuration: "5 years 7 months",
        employmentType: "Full-time",
        icon: GraduateIcon,
      },
    ],
  },
  {
    id: "education-berkeley-city-college",
    companyName: "Berkeley City College",
    companyLogo: "/images/education/berkeley.jpg",
    companyLogoAlt: "Berkeley City College Logo",
    companyLocation: "Berkeley, CA",
    country: US,
    positions: [
      {
        id: "esl-berkeley",
        title: "English as Second Language",
        employmentPeriod: "August 2016 — June 2018",
        employmentDuration: "1 year 10 months",
        employmentType: "Full-time",
        icon: GraduateIcon,
      },
    ],
  },
  {
    id: "education-sf-state",
    companyName: "San Francisco State University",
    companyLogo: "/images/education/sfsu.jpg",
    companyLogoAlt: "San Francisco State University Logo",
    companyLocation: "San Francisco, CA",
    country: US,
    positions: [
      {
        id: "ipe-sf-state",
        title: "Intensive Program in English",
        employmentPeriod: "June 2016 — August 2016",
        employmentDuration: "3 months",
        employmentType: "Full-time",
        icon: GraduateIcon,
      },
    ],
  },
];
