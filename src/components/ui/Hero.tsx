import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import Divider from './Divider';

const Hero = () => {
  return (
    <div className="z-2 flex flex-col items-center">
      <div className="mb-2 text-center">
        <h1 className="text-sakura-text font-zenmaru text-6xl leading-snug font-bold">
          Andrew Chuah.
        </h1>
        <p className="text-sakura-cobble font-dmmono text-2xl tracking-widest uppercase">
          Digital Craftsman
        </p>
        <p className="text-sakura-text/70 font-dmmono text-base tracking-wider uppercase">
          [ Developer · Artist · Maker ]
        </p>
        <p className="font-zenmaru text-sakura-text/90 bg-sakura-card mx-auto mt-6 max-w-sm rounded-md p-1 text-base leading-relaxed">
          Precise in development, passionate in design, thorough in craft.
        </p>
      </div>
      <Divider />
      <div className="px-12">
        <h1 className="font-jost mb-2 text-2xl underline">Bio:</h1>
        <p className="font-zenmaru mx-auto mb-2 max-w-prose text-base">
          Andrew (Ren-Jun) Chuah is a full-stack software engineer with a
          passion for . He got his start in cybersecurity and security
          operations internship roles, where he would gain the skills to shift
          his career into a full-time software engineer for the NSA.
        </p>
        <p className="font-zenmaru mx-auto mb-2 max-w-prose text-base">
          Andrew&apos;s main interests include 3D designing and printing,
          electronics, and digital art. He loves traveling, and by far his
          favorite places he visited are Malaysia, Thailand, and Japan
          (definitely has the best food).
        </p>
      </div>
      <Divider />
      <div className="px-12">
        <h1 className="font-jost mb-6 text-2xl underline">
          Currently Working On:
        </h1>
        <div className="bg-sakura-card rounded-md p-4">
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
            <span className="font-bold">Arknights:Endfield</span> that simulates
            a production plan onto a grid, with all machines, items, and
            recipes. It uses A* pathfinding to find the most optimal placements
            of machines, belts, and pipes in order to reach the requested
            item&apos;s production rate per minute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
