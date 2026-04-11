import {
  FlowerIcon,
  GraduationCapIcon,
  FolderIcon
} from '@phosphor-icons/react';
import { motion } from 'motion/react';
import type { ExperienceItem } from '@/data/experience';

const iconMap = {
  work: FlowerIcon,
  education: GraduationCapIcon,
  project: FolderIcon
};

interface TimelineMarkerProps {
  type: ExperienceItem['type'];
  highlight?: boolean;
  isLast: boolean;
}

const TimelineMarker = ({ type, highlight, isLast }: TimelineMarkerProps) => {
  const Icon = iconMap[type] ?? FlowerIcon;

  return (
    <div className="relative z-10 flex shrink-0 flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
        className={`relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 ${
          highlight
            ? 'border-sakura-accent bg-sakura-accent/10'
            : 'border-sakura-stone/40 bg-sakura-surface'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            weight="fill"
            size={14}
            className={highlight ? 'text-sakura-accent' : 'text-sakura-stone'}
          />
        </div>
      </motion.div>
      {!isLast && <div className="bg-sakura-stone/50 w-px flex-1" />}
    </div>
  );
};

export default TimelineMarker;
