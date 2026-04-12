export type {
  Project,
  ProjectGalleryItem,
  ProjectLayout,
  ProjectNote,
  ProjectStatus,
  ProjectType
} from './projects/project.types';

import ArcStudioThumb from '@/assets/images/arc-studio_thumb.webp';
import EndfieldThumb from '@/assets/images/endfield_thumbnail.png';
import MachinationThumb from '@/assets/images/machination_thumb.webp';
import NightWatchThumb from '@/assets/images/nightwatch_thumb.webp';
import {
  arcStudioNarrative,
  arcStudioOutcome,
  arcStudioProcessSteps,
  arcStudioPullQuote
} from '@/content/projects/arc-studio';
import {
  endfieldArchitectNarrative,
  endfieldArchitectOutcome,
  endfieldArchitectProcessSteps,
  endfieldArchitectPullQuote
} from '@/content/projects/endfield-architect';
import {
  endlessMachinationsNarrative,
  endlessMachinationsOutcome,
  endlessMachinationsProcessSteps,
  endlessMachinationsPullQuote
} from '@/content/projects/endless-machinations';
import {
  nightwatchNarrative,
  nightwatchOutcome,
  nightwatchProcessSteps,
  nightwatchPullQuote
} from '@/content/projects/nightwatch';
import type { Project } from './projects/project.types';

export const projects: Project[] = [
  {
    id: 'endfield-architect',
    title: 'Endfield Architect',
    image: EndfieldThumb,
    imageAlt:
      'Screenshot of Endfield Architect, a production planning simulator for Arknights: Endfield',
    techStack: ['React', 'Elk.js', 'React Flow'],
    githubUrl: 'https://github.com/SheathedBlade/endfield-architect',
    pinned: true,
    year: '2026',
    type: 'tool',
    status: 'Ongoing',
    blurb:
      'A production planner and simulator based on the game Arknights: Endfield, generating efficient and optimal in-game factory layouts utilizing DFS tree searching and A* pathfinding.',
    layout: 'hero',
    accentWord: 'Systems',
    longDescription: endfieldArchitectNarrative,
    pullQuote: endfieldArchitectPullQuote,
    processSteps: endfieldArchitectProcessSteps,
    outcome: endfieldArchitectOutcome
  },
  {
    id: 'nightwatch',
    title: 'Nightwatch',
    image: NightWatchThumb,
    imageAlt: 'Screenshot of Nightwatch, a 3D stealth game prototype',
    techStack: ['Unity', 'C#'],
    githubUrl: 'https://github.com/SheathedBlade/Nightwatch',
    liveUrl: 'https://sheathblade.itch.io/nightwatch',
    pinned: true,
    year: '2023',
    type: 'game',
    status: 'Prototype',
    blurb:
      'A gritty, noir atmosphere combined with stealth mechanics; an unfinished prototype of an ambitious 3D Unity game.',
    layout: 'wide',
    accentWord: 'Atmosphere',
    longDescription: nightwatchNarrative,
    pullQuote: nightwatchPullQuote,
    processSteps: nightwatchProcessSteps,
    outcome: nightwatchOutcome
  },
  {
    id: 'endless-machinations',
    title: 'Endless Machinations',
    image: MachinationThumb,
    imageAlt:
      'Screenshot of Endless Machinations, a 2D hack-and-slash game prototype',
    techStack: ['Unity', 'C#', 'Aseprite'],
    liveUrl: 'https://sheathblade.itch.io/endless-machinations',
    pinned: true,
    year: '2021',
    type: 'game',
    status: 'Released',
    blurb:
      'A 2D hack-and-slash side-scroller, built solo in Unity with all original pixel art. A case of managing expectations.',
    layout: 'stack',
    accentWord: 'Craft',
    longDescription: endlessMachinationsNarrative,
    pullQuote: endlessMachinationsPullQuote,
    processSteps: endlessMachinationsProcessSteps,
    outcome: endlessMachinationsOutcome
  },
  {
    id: 'arc-studio',
    title: 'ARC Studio',
    image: ArcStudioThumb,
    imageAlt:
      'Screenshot of ARC Studio, the portfolio website you are currently browsing',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/SheathedBlade/arc-studio',
    liveUrl: 'https://terystal.dev',
    pinned: false,
    year: '2026',
    type: 'system',
    status: 'Released',
    blurb:
      'This portfolio — built to feel less like a resume and more like an editorial. Sakura palette, typography-led design, and motion that serves comprehension.',
    layout: 'standard',
    accentWord: 'Craft',
    longDescription: arcStudioNarrative,
    pullQuote: arcStudioPullQuote,
    processSteps: arcStudioProcessSteps,
    outcome: arcStudioOutcome
  }
];
