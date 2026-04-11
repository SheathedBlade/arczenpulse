export interface HomeHeroLink {
  label: string;
  to: string;
  description?: string;
}

export const homeHeroLinks: HomeHeroLink[] = [
  {
    label: 'Work',
    to: '/works',
    description: 'Selected projects'
  },
  {
    label: 'Experience',
    to: '/experience',
    description: 'Where I\u2019ve worked'
  },
  {
    label: 'About',
    to: '/about',
    description: 'Who I am'
  },
  {
    label: 'Resume',
    to: '/resume.pdf',
    description: 'Download PDF'
  }
];
