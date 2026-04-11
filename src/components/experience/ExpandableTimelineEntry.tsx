import { useState } from 'react';
import { motion } from 'motion/react';
import type { ExperienceItem } from '@/data/experience';
import TimelineMarker from './TimelineMarker';
import TimelineEntryHeader from './TimelineEntryHeader';
import TimelineEntryDetails from './TimelineEntryDetails';

interface ExpandableTimelineEntryProps {
  entry: ExperienceItem;
  index: number;
  isLast: boolean;
}

const ExpandableTimelineEntry = ({
  entry,
  index,
  isLast
}: ExpandableTimelineEntryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(prev => !prev);

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
        <TimelineMarker
          type={entry.type}
          highlight={entry.highlight ?? false}
          isLast={isLast}
        />

        <div className="mb-8 flex-1 pb-4">
          <TimelineEntryHeader
            entry={entry}
            isExpanded={isExpanded}
            onToggle={toggleExpanded}
          />

          <TimelineEntryDetails entry={entry} isExpanded={isExpanded} />
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableTimelineEntry;
