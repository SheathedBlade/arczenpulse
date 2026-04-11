import type { ExperienceItem } from '@/data/experience';
import { motion } from 'motion/react';
import { useState } from 'react';
import TimelineEntryDetails from './TimelineEntryDetails';
import TimelineEntryHeader from './TimelineEntryHeader';
import TimelineMarker from './TimelineMarker';

interface ExpandableTimelineEntryProps {
  entry: ExperienceItem;
  index: number;
  isLast: boolean;
  showConnector?: boolean;
  onEntered?: (index: number) => void;
}

const ExpandableTimelineEntry = ({
  entry,
  index,
  isLast,
  showConnector,
  onEntered
}: ExpandableTimelineEntryProps) => {
  const [isExpanded, setIsExpanded] = useState(entry.defaultExpanded ?? false);
  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => onEntered?.(index)}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative flex"
    >
      <div className="flex gap-5">
        <TimelineMarker
          type={entry.type}
          highlight={entry.highlight ?? false}
          isLast={isLast}
          showConnector={showConnector}
        />

        <div className="mb-8 flex-1 pb-4">
          <TimelineEntryHeader
            entry={entry}
            isExpanded={isExpanded}
            onToggle={toggleExpanded}
            detailsId={`entry-details-${index}`}
          />

          <TimelineEntryDetails
            entry={entry}
            isExpanded={isExpanded}
            detailsId={`entry-details-${index}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableTimelineEntry;
