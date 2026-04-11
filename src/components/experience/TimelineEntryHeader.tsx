import { CaretDownIcon } from '@phosphor-icons/react';
import type { ExperienceItem } from '@/data/experience';

interface TimelineEntryHeaderProps {
  entry: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineEntryHeader = ({
  entry,
  isExpanded,
  onToggle
}: TimelineEntryHeaderProps) => {
  const hasExtended = Boolean(entry.extendedDesc);

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-dmmono text-sakura-accent text-xs tracking-widest">
            {entry.date}
          </p>
          {entry.era && (
            <span className="bg-sakura-accent/10 font-dmmono text-sakura-accent rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase">
              {entry.era}
            </span>
          )}
        </div>
        <h3 className="font-jost text-sakura-text mt-1 text-lg font-bold tracking-wide md:text-xl">
          {entry.title}
        </h3>
        <p className="font-dmmono text-sakura-cobble text-sm">
          {entry.subtitle}
          {entry.location && (
            <span className="text-sakura-stone"> · {entry.location}</span>
          )}
        </p>
      </div>

      {hasExtended && (
        <button
          onClick={onToggle}
          className="group border-sakura-stone/30 hover:border-sakura-accent hover:bg-sakura-accent/10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border transition-all"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <CaretDownIcon
            size={14}
            weight="bold"
            className={`text-sakura-stone group-hover:text-sakura-accent transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default TimelineEntryHeader;
