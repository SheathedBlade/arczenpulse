import { useState } from 'react';
import {
  FlowerIcon,
  GraduationCapIcon,
  FolderIcon,
  CaretDownIcon
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import type { ExperienceItem } from '@/data/experience';

interface ExpandableTimelineEntryProps {
  entry: ExperienceItem;
  index: number;
  isLast: boolean;
}

const iconMap = {
  work: FlowerIcon,
  education: GraduationCapIcon,
  project: FolderIcon
};

const ExpandableTimelineEntry = ({
  entry,
  index,
  isLast
}: ExpandableTimelineEntryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[entry.type] ?? FlowerIcon;
  const hasExtended = Boolean(entry.extendedDesc);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative flex"
    >
      <div className="flex gap-5">
        <div className="relative z-10 flex shrink-0 flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className={`relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 ${
              entry.highlight
                ? 'border-sakura-accent bg-sakura-accent/10'
                : 'border-sakura-stone/40 bg-sakura-surface'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                weight="fill"
                size={14}
                className={
                  entry.highlight ? 'text-sakura-accent' : 'text-sakura-stone'
                }
              />
            </div>
          </motion.div>
          {!isLast && <div className="bg-sakura-stone/50 w-px flex-1" />}
        </div>

        <div className="mb-8 flex-1 pb-4">
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
                onClick={() => setIsExpanded(!isExpanded)}
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

          <p className="font-zenmaru text-sakura-text/80 mt-2 max-w-prose text-sm leading-relaxed">
            {entry.description}
          </p>

          <AnimatePresence>
            {isExpanded && entry.extendedDesc && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="border-sakura-accent/30 mt-4 space-y-3 border-l-2 pl-4">
                  {entry.extendedDesc.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="font-zenmaru text-sakura-text/70 text-sm leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}

                  {entry.skills && entry.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {entry.skills.map(skill => (
                        <span
                          key={skill}
                          className="bg-sakura-bg font-dmmono text-sakura-cobble border-sakura-stone/30 rounded-sm border px-2 py-0.5 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {entry.skills && entry.skills.length > 0 && !isExpanded && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.skills.slice(0, 4).map(skill => (
                <span
                  key={skill}
                  className="bg-sakura-bg/50 font-dmmono text-sakura-stone rounded-sm px-1.5 py-0.5 text-xs"
                >
                  {skill}
                </span>
              ))}
              {entry.skills.length > 4 && (
                <span className="font-dmmono text-sakura-stone text-xs">
                  +{entry.skills.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableTimelineEntry;
