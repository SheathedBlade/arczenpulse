import EndfieldThumb from '@/assets/images/endfield_thumbnail.png';
import MachinationThumb from '@/assets/images/machination_thumb.webp';
import NightWatchThumb from '@/assets/images/nightwatch_thumb.webp';

export type ProjectType = 'tool' | 'game' | 'visual' | 'system';
export type ProjectStatus = 'released' | 'ongoing' | 'prototype';
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
  description: string;
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
  longDescription?: string;
  pullQuote?: string;
  gallery?: ProjectGalleryItem[];
  processSteps?: string[];
  outcome?: string;
  notes?: ProjectNote[];
}

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
    status: 'released',
    blurb:
      'Factory planning meets graph search — when games become systems problems',
    layout: 'hero',
    accentWord: 'Systems',
    longDescription: `The core problem wasn't really about game mechanics — it was about constraint satisfaction. Given a set of production goals and a limited grid, what is the minimum number of facilities needed, and where should each one be placed to maximize throughput?\n\nThe first approach was brute force: try every combination. That broke down almost immediately once the grid grew beyond 4×4. The breakthrough came when I realized the problem had a tree structure — production chains form directed acyclic graphs, not arbitrary meshes. Once I switched to DFS for facility counting and A* for placement optimization, the solver ran in milliseconds even for complex layouts.\n\nReact Flow made the visualization side clean, but the real challenge was the data layer: translating between the game's internal facility model and a graph the solver could reason about. That translation layer took the most time to get right.`,
    pullQuote:
      'The breakthrough was realizing production chains form a tree structure — not an arbitrary mesh.',
    processSteps: [
      'Mapped game production mechanics to a formal constraint satisfaction problem',
      'Implemented DFS tree search for optimal facility counting',
      'Built A* pathfinding for placement optimization on constrained grid',
      'Designed React Flow visualization layer with real-time feedback',
      'Added Elk.js logging for production line efficiency analytics'
    ],
    outcome:
      'A tool that takes seconds to solve layouts that would take hours to plan manually. Used by the Endfield community for optimizing late-game factory design.'
  },
  // {
  //   id: 'arc-studio',
  //   title: 'ARC Studio',
  //   description:
  //     'Production planning simulator for Arknights: Endfield with A* pathfinding and DFS tree search.',
  //   longDescription:
  //     'An app based on the game Arknights: Endfield that simulates a production plan onto an in-game factory layout, being as efficient as possible with limited space and resources. It achieves this through DFS tree search to find the amount of facilities needed, and A* pathfinding to find the most optimal placement of those facilities onto a constrained grid.',
  //   image: EndfieldThumb,
  //   imageAlt:
  //     'Screenshot of Endfield Architect, a production planning simulator for Arknights: Endfield',
  //   techStack: ['React', 'Three.js', 'd3'],
  //   githubUrl: 'https://github.com/SheathedBlade/arc-studio',
  //   pinned: true,
  //   year: '2025'
  // },
  // {
  //   id: 'windtrace',
  //   title: 'WindTrace',
  //   description:
  //     'Image recognition app to score Mahjong hands based on selected rulesets.',
  //   longDescription: `...`,
  //   image: EndfieldThumb,
  //   imageAlt:
  //     'Screenshot of WindTrace, an image recognition app for Mahjong hands',
  //   pinned: false
  // },
  // {
  //   id: 'vantage',
  //   title: 'Vantage',
  //   description:
  //     'Esports management platform for organizers to manage teams, players, and matches.',
  //   longDescription: `...`,
  //   image: EndfieldThumb,
  //   imageAlt: 'Screenshot of Vantage, an esports management platform',
  //   pinned: false
  // },
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
    longDescription: `The goal was atmosphere first, mechanics second. I wanted players to feel the weight of a rain-soaked cyberpunk city before they ever encountered a puzzle or enemy. Cinemachine gave me the camera control to direct attention precisely — where to look, when to look, how the environment frames the player.\n\nThe stealth mechanics are deliberately forgiving. This was a conscious choice: the prototype was scoped to prove the environment and narrative hook, not to ship a balanced stealth game. The guards have simple patrol logic, detection windows are wide, and the penalty for being seen is a quick restart rather than a systemic consequence.\n\nWhat didn't make it in: talking NPCs in the opening section, a post-game cutscene with recorded voicelines, and a more aggressive difficulty curve. Those were scoped out due to the college semester timeline, not design decisions.`,
    pullQuote:
      'Atmosphere first, mechanics second — every scene was lit to feel like a film still.',
    processSteps: [
      'Built environment in Unity using ProBuilder and Cinemachine for cinematic camera work',
      'Implemented simple patrol AI with line-of-sight detection',
      'Designed noir lighting using volumetric fog and custom point lights',
      'Storyboarded opening sequence before implementing any mechanics',
      'Cut NPC dialogue and post-game cutscene due to semester deadline'
    ],
    outcome:
      'A vertical slice that proved the atmosphere and narrative hook. Community feedback highlighted the environment design as the standout element.'
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
    longDescription: `Solo development forces a particular kind of clarity. When you can't hand off the sprite work or the enemy AI to someone else, every decision has to be made with the whole project in mind. That constraint is what kept Endless Machinations coherent.\n\nAll sprites and tilesets were made in Aseprite — pixel art with a limited palette that tried to give each actor a readable silhouette. The automata protagonist needed to read as both mechanical and sympathetic. The enemy battalions needed to feel numerous and relentless without drowning the player in visual noise.\n\nThe wave system was a scope adjustment, not a design failure. The original plan had structured levels, but the solo timeline made that unrealistic. The wave format turned out to serve the game's rhythm well: escalation without requiring level design for each stage.`,
    pullQuote:
      'Every sprite had to earn its place — solo development means every pixel is a deliberate choice.',
    processSteps: [
      'Designed protagonist and enemy sprites in Aseprite with readable silhouettes',
      'Built wave-based enemy spawning system with escalating reinforcement logic',
      'Implemented actor state management for damage, health, and animation transitions',
      'Composed game feel through hit-stop frames and screen-shake on impact',
      'Scoped structured levels down to a 20-wave survival format under deadline pressure'
    ],
    outcome:
      'A complete, playable prototype that shipped on itch.io. Community response was strongest around the sprite work and the weight of the combat feel.'
  }
];
