import { FlowerIcon } from '@phosphor-icons/react';

const Divider = () => {
  return (
    <>
      <div className="mx-auto my-5 flex w-4/5 items-center gap-4">
        <div className="bg-sakura-stone/40 h-0.5 flex-1" />
        <span className="text-sakura-accent font-zenmaru text-sm">
          <FlowerIcon weight="fill" size={18} aria-hidden="true" />
        </span>
        <div className="bg-sakura-stone/40 h-0.5 flex-1" />
      </div>
    </>
  );
};

export default Divider;
