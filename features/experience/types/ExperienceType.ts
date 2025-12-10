type ExperienceType = {
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  companyLocation?: string;
  country?: string;
  isCurrentEmployer?: boolean;
  positions: Array<{
    id: string;
    title: string;
    employmentPeriod: string;
    employmentDuration?: string;
    employmentType?: string;
    description?: string;
    skills?: string[];
    icon?: string;
  }>;
  projectSlugs?: string[];
};

export type { ExperienceType };
