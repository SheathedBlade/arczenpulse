import { ArrowSquareOutIcon } from '@phosphor-icons/react';

const Card = () => {
  return (
    <div className="bg-sakura-card max-w-sm rounded-md p-4">
      <a
        href="https://endfield-architect.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex flex-row items-center"
      >
        <h2 className="font-jost mr-1 mb-2 text-lg font-bold tracking-wide underline">
          Endfield Architect
        </h2>
        <ArrowSquareOutIcon size={18} className="mb-2 inline-block" />
      </a>
      <p className="font-zenmaru mx-auto mb-2 max-w-prose text-base">
        Endfield Architect is an app based on the game{' '}
        <span className="font-bold">Arknights:Endfield</span> that simulates a
        production plan onto a grid, with all machines, items, and recipes. It
        uses A* pathfinding to find the most optimal placements of machines,
        belts, and pipes in order to reach the requested item&apos;s production
        rate per minute.
      </p>
    </div>
  );
};

export default Card;
