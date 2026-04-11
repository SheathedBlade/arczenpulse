export const endfieldArchitectNarrative: string[] = [
  "The core problem wasn't really about game mechanics — it was about constraint satisfaction. Given a set of production goals and a limited grid, what is the minimum number of facilities needed, and where should each one be placed to maximize throughput?",
  'The first approach was brute force: try every combination. That broke down almost immediately once the grid grew beyond 4×4. The breakthrough came when I realized the problem had a tree structure — production chains form directed acyclic graphs, not arbitrary meshes. Once I switched to DFS for facility counting and A* for placement optimization, the solver ran in milliseconds even for complex layouts.',
  "React Flow made the visualization side clean, but the real challenge was the data layer: translating between the game's internal facility model and a graph the solver could reason about. That translation layer took the most time to get right."
];

export const endfieldArchitectProcessSteps: string[] = [
  'Mapped game production mechanics to a formal constraint satisfaction problem',
  'Implemented DFS tree search for optimal facility counting',
  'Built A* pathfinding for placement optimization on constrained grid',
  'Designed React Flow visualization layer with real-time feedback',
  'Added Elk.js logging for production line efficiency analytics'
];

export const endfieldArchitectOutcome =
  'A tool that takes seconds to solve layouts that would take hours to plan manually. Used by the Endfield community for optimizing late-game factory design.';

export const endfieldArchitectPullQuote =
  'The breakthrough was realizing production chains form a tree structure — not an arbitrary mesh.';
