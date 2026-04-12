export type ProjectType = 'tool' | 'game' | 'visual' | 'system';
export type ProjectStatus = 'Released' | 'Ongoing' | 'Prototype';
export type ProjectLayout = 'hero' | 'wide' | 'stack' | 'standard';

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectNote {
  label: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  pinned?: boolean;
  year?: string;
  type?: ProjectType;
  status?: ProjectStatus;
  blurb?: string;
  layout?: ProjectLayout;
  accentWord?: string;
  longDescription: string[];
  pullQuote?: string;
  gallery?: ProjectGalleryItem[];
  processSteps?: string[];
  outcome?: string;
  notes?: ProjectNote[];
}
