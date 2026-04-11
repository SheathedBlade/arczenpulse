import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import type { ExperienceItem } from '@/data/experience';
import TimelineEntrySkills from './TimelineEntrySkills';

interface TimelineEntryDetailsProps {
  entry: ExperienceItem;
  isExpanded: boolean;
}

const TimelineEntryDetails = ({
  entry,
  isExpanded
}: TimelineEntryDetailsProps) => {
  return (
    <>
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
              {entry.extendedDesc.map((para, i) => (
                <p
                  key={i}
                  className="font-zenmaru text-sakura-text/70 text-sm leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {entry.skills && entry.skills.length > 0 && (
                <TimelineEntrySkills skills={entry.skills} isExpanded={true} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {entry.skills && entry.skills.length > 0 && !isExpanded && (
        <TimelineEntrySkills skills={entry.skills} isExpanded={false} />
      )}
    </>
  );
};

export default TimelineEntryDetails;
