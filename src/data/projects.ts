export type {
  Project,
  ProjectGalleryItem,
  ProjectLayout,
  ProjectNote,
  ProjectStatus,
  ProjectType
} from './projects/project.types';

import EndfieldThumb from '@/assets/images/endfield_thumbnail.png';
import MachinationThumb from '@/assets/images/machination_thumb.webp';
import NightWatchThumb from '@/assets/images/nightwatch_thumb.webp';
import type { Project } from './projects/project.types';
import {
  endfieldArchitectNarrative,
  endfieldArchitectProcessSteps,
  endfieldArchitectOutcome,
  endfieldArchitectPullQuote
} from '@/content/projects/endfield-architect';
import {
  nightwatchNarrative,
  nightwatchProcessSteps,
  nightwatchOutcome,
  nightwatchPullQuote
} from '@/content/projects/nightwatch';
import {
  endlessMachinationsNarrative,
  endlessMachinationsProcessSteps,
  endlessMachinationsOutcome,
  endlessMachinationsPullQuote
} from '@/content/projects/endless-machinations';

export const projects: Project[] = [
  {
    id: 'endfield-architect',
    title: 'Endfield Architect',
    description:
      'A production planner and simulator based on the game Arknights: Endfield, generating efficient and optimal in-game factory layouts utilizing DFS tree searching and A* pathfinding.\n\nThe tool takes in one or more production goals and calculates the amount of facilities needed, how efficient the production lines are, and the most optimal placement of those facilities onto a constrained grid.',
    image: EndfieldThumb,
    imageAlt:
      'Screenshot of Endfield Architect, a production planning simulator for Arknights: Endfield',
    techStack: ['React', 'Elk.js', 'React Flow'],
    githubUrl: 'https://github.com/SheathedBlade/endfield-architect',
    pinned: true,
    year: '2026',
    type: 'tool',
    status: 'ongoing',
    blurb:
      'Factory planning meets graph search — when games become systems problems',
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
    description:
      "Nightwatch is a Noir-styled, sci-fi, cyberpunk aesthetic stealth game, where you are an inspector trying to solve a peculiar case. This is mostly an experiment on environment building and storytelling through the use of Cinemachine.\n\nI wanted to build on the cyberpunk, futuristic aesthetic and combine it with stealth gameplay. It's almost complete, but it's missing a few pieces of flourish.\n\nI do think I could've upped the difficulty of the stealth gameplay. One thing I wanted to add that I didn't have enough time to is adding the talking NPCs aspect of the first section, as I ran out of time to do so. In addition, I planned to add a post-game cutscene, and I had the voicelines ready.\n\nThis serves as one of my Game Design college class projects.",
    image: NightWatchThumb,
    imageAlt: 'Screenshot of Nightwatch, a 3D stealth game prototype',
    techStack: ['Unity', 'C#'],
    githubUrl: 'https://github.com/SheathedBlade/Nightwatch',
    liveUrl: 'https://sheathblade.itch.io/nightwatch',
    pinned: true,
    year: '2023',
    type: 'game',
    status: 'prototype',
    blurb: 'Noir atmosphere and stealth mechanics — an unfinished case file',
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
    description:
      "Endless Machinations is a 2D hack-and-slash side-scroller, where you play as the last surviving automata, and you make a last-ditch attempt and wreak havoc on the enemy's battalions.\n\nAll spritework and tilesets are done by me in Aseprite.\n\nThis was originally supposed to have structured levels, but due to the time constraints of the project, I settled for a fixed, twenty wave game, where each wave has more reinforcements than the last. The development of this game has taught me many things to do with game state, all the actors and how to transfer multiple states such as damage, health, etc. It also put my sprite and animation creation to the test, making sure each actor has impactful animations, and timing it with the code.\n\nOverall, it was a cool project that put the reality of deadlines to game development, especially acting as the solo developer.",
    image: MachinationThumb,
    imageAlt:
      'Screenshot of Endless Machinations, a 2D hack-and-slash game prototype',
    techStack: ['Unity', 'C#', 'Aseprite'],
    liveUrl: 'https://sheathblade.itch.io/endless-machinations',
    pinned: true,
    year: '2021',
    type: 'game',
    status: 'released',
    blurb: 'Solo-built automata warfare — sprite, code, and deadline reality',
    layout: 'stack',
    accentWord: 'Craft',
    longDescription: endlessMachinationsNarrative,
    pullQuote: endlessMachinationsPullQuote,
    processSteps: endlessMachinationsProcessSteps,
    outcome: endlessMachinationsOutcome
  }
];
