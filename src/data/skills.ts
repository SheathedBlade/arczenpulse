import {
  AmazonLogoIcon,
  AtomIcon,
  CubeIcon,
  DatabaseIcon,
  FilePyIcon,
  FileTsIcon,
  GitBranchIcon,
  Icon,
  LeafIcon,
  WindIcon
} from '@phosphor-icons/react';

export interface Skill {
  name: string;
  Icon: Icon;
  desc: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'creative';
}

export const allSkills: Skill[] = [
  {
    name: 'React',
    Icon: AtomIcon,
    desc: 'Frontend Library',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    Icon: FileTsIcon,
    desc: 'Type-Safe JavaScript',
    category: 'frontend'
  },
  {
    name: 'AWS',
    Icon: AmazonLogoIcon,
    desc: 'Cloud Services',
    category: 'cloud'
  },
  {
    name: 'Tailwind',
    Icon: WindIcon,
    desc: 'CSS Framework',
    category: 'frontend'
  },
  {
    name: 'Three.js',
    Icon: CubeIcon,
    desc: '3D Graphics',
    category: 'frontend'
  },
  {
    name: 'PostgreSQL',
    Icon: DatabaseIcon,
    desc: 'Relational DB',
    category: 'backend'
  },
  { name: 'MongoDB', Icon: LeafIcon, desc: 'NoSQL DB', category: 'backend' },
  {
    name: 'Python',
    Icon: FilePyIcon,
    desc: 'Scripting & Backend',
    category: 'backend'
  },
  {
    name: 'Git',
    Icon: GitBranchIcon,
    desc: 'Version Control',
    category: 'tools'
  }
];

export const techSkills = allSkills.filter(s => s.category !== 'creative');
