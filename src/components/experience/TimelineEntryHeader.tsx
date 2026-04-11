import { CaretDownIcon } from '@phosphor-icons/react';
import type { ExperienceItem } from '@/data/experience';

interface TimelineEntryHeaderProps {
  entry: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
  detailsId: string;
}

const TimelineEntryHeader = ({
  entry,
  isExpanded,
  onToggle,
  detailsId
}: TimelineEntryHeaderProps) => {
  const hasExtended = Boolean(entry.extendedDesc);

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-dmmono text-sakura-accent text-xs tracking-widest">
            {entry.date}
          </p>
        </div>
        <h3 className="font-jost text-sakura-text mt-1 text-lg font-bold tracking-wide md:text-xl">
          {entry.title}
        </h3>
        <p className="font-dmmono text-sakura-cobble text-sm">
          {entry.subtitle}
        </p>
        {entry.location && (
          <p className="font-dmmono text-sakura-stone text-sm">
            {entry.location}
          </p>
        )}
      </div>

      {hasExtended && (
        <button
          onClick={onToggle}
          aria-controls={detailsId}
          className="group border-sakura-stone/30 hover:border-sakura-accent hover:bg-sakura-accent/10 mt-1 flex items-center gap-1.5 rounded-sm border px-2 py-1 transition-all"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <span className="font-dmmono text-sakura-stone group-hover:text-sakura-accent text-xs tracking-widest uppercase transition-colors">
            {isExpanded ? 'Less' : 'More'}
          </span>
          <CaretDownIcon
            size={12}
            weight="bold"
            className={`text-sakura-stone group-hover:text-sakura-accent transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

export default TimelineEntryHeader;
