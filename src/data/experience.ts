import { DoDNarrative } from '@/content/experience/dod';
import { fortressNarrative } from '@/content/experience/fortress';
import { jefferiesNarrative } from '@/content/experience/jefferies';
import { stevensNarrative } from '@/content/experience/stevens';
import { truefortNarrative } from '@/content/experience/truefort';

export interface ExperienceItem {
  date: string;
  type: 'work' | 'education' | 'project';
  title: string;
  subtitle: string;
  location: string;
  description: string;
  extendedDesc?: string[];
  skills?: string[];
  notes?: string[];
  highlight?: boolean;
  defaultExpanded?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    date: 'March 2024 - Present',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'National Security Agency',
    location: 'Fort Meade, MD',
    description:
      'Developed and directed the design and implementation of innovative solutions for 2 critical initiatives, efficiently navigating between competing demands across both projects.',
    skills: ['TypeScript', 'React', 'Angular', 'AWS', 'Terraform', 'Docker'],
    highlight: true,
    extendedDesc: DoDNarrative,
    defaultExpanded: true
  },
  {
    date: 'May 2023',
    type: 'education',
    title: 'B.S. Computer Science',
    subtitle: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    description:
      'Graduated with a major in Computer Science, and a minor in Visual Arts & Technology',
    extendedDesc: stevensNarrative,
    skills: ['Python', 'C++', 'Java', 'Unity', 'Web Development', 'Game Design']
  },
  {
    date: 'January 2022 - July 2022',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Fortress Investment Group LLC',
    location: 'New York City, NY',
    description:
      'Developed a web application that integrates with Tenable API to track internal IT assets and vulnerabilities using ASP.NET, Python, and SQL.',
    extendedDesc: fortressNarrative,
    skills: ['ASP.NET', 'Python', 'SQL', 'PowerShell', 'ServiceNow', 'Tenable']
  },
  {
    date: 'June 2021 - August 2021',
    type: 'work',
    title: 'Frontend Software Engineer',
    subtitle: 'TrueFort',
    location: 'Weehawken, NJ',
    description:
      "Developed a customer portal and redesigned the UI/UX for the company's zero trust product. Refactored the codebase from ExtJS to React, improving maintainability and user experience.",
    extendedDesc: truefortNarrative,
    skills: ['React', 'ExtJS', 'TypeScript', 'UI/UX Design']
  },
  {
    date: 'January 2020 - December 2020',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Jefferies, LLC',
    location: 'Jersey City, NJ',
    description:
      'Developed a security feature using Python to scan Google Chrome extensions on every workstation and restrict the use of malicious or suspicious extensions. Integrated this feature into the ServiceNow ticketing workflow for SOC review and approval.',
    extendedDesc: jefferiesNarrative,
    skills: ['Python', 'ServiceNow', 'AWS', 'Security Automation']
  }
];
