import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import type { ExperienceItem } from '@/data/experience';
import TimelineEntrySkills from './TimelineEntrySkills';

interface TimelineEntryDetailsProps {
  entry: ExperienceItem;
  isExpanded: boolean;
  detailsId: string;
}

const TimelineEntryDetails = ({
  entry,
  isExpanded,
  detailsId
}: TimelineEntryDetailsProps) => {
  return (
    <div id={detailsId}>
      <p className="font-zenmaru text-sakura-text/90 mt-2 max-w-prose text-sm leading-relaxed">
        {entry.description}
      </p>

      <AnimatePresence initial={false}>
        {isExpanded && entry.extendedDesc && (
          <motion.div
            initial={{ opacity: 0, gridTemplateRows: '0fr' }}
            animate={{ opacity: 1, gridTemplateRows: '1fr' }}
            exit={{ opacity: 0, gridTemplateRows: '0fr' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid' }}
          >
            <div className="overflow-hidden">
              <div className="border-sakura-accent/30 mt-4 border-t pt-4">
                {entry.extendedDesc.map((para, i) => (
                  <p
                    key={i}
                    className="font-zenmaru text-sakura-text/90 text-sm leading-relaxed"
                  >
                    {para}
                  </p>
                ))}

                {entry.skills && entry.skills.length > 0 && (
                  <TimelineEntrySkills
                    skills={entry.skills}
                    isExpanded={true}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {entry.skills && entry.skills.length > 0 && !isExpanded && (
        <TimelineEntrySkills skills={entry.skills} isExpanded={false} />
      )}
    </div>
  );
};

export default TimelineEntryDetails;
