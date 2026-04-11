import { ExpandableTimelineEntry } from '@/components/experience';
import { experiences } from '@/data/experience';
import { motion } from 'motion/react';

const Timeline = () => {
  return (
    <div className="mx-auto mb-10 max-w-3xl lg:mr-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost text-sakura-text mb-8 text-center text-3xl md:text-left lg:ml-8 lg:text-left"
      >
        <span className="relative">
          The Path
          <span className="bg-sakura-accent/70 absolute -bottom-1 left-0 h-px w-full" />
        </span>
      </motion.h2>

      <div className="relative mx-auto px-8 lg:mr-auto lg:ml-8 lg:px-0">
        {experiences.map((entry, i) => (
          <ExpandableTimelineEntry
            key={`${entry.title}-${entry.date}`}
            entry={entry}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
