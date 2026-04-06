import { experiences } from '@/data/experience';
import { FlowerIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

const Timeline = () => {
  return (
    <div className="mx-auto mb-10 max-w-3xl lg:mr-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost mb-8 text-center text-3xl underline lg:ml-8 lg:text-left"
        style={{ textDecorationThickness: '3px' }}
      >
        Experience & Education
      </motion.h2>
      <div className="border-sakura-stone/40 relative mr-auto ml-20 border-l-2 px-8 lg:mx-0 lg:ml-8">
        {experiences.map((entry, i) => (
          <motion.div
            key={`${entry.title}-${entry.date}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="bg-sakura-bg border-sakura-stone/40 absolute top-0 -left-10.75 flex h-5 w-5 items-center justify-center rounded-full border-2">
              <FlowerIcon
                weight="fill"
                size={14}
                className="text-sakura-accent"
              />
            </div>
            <p className="font-dmmono text-sakura-accent mb-1 text-sm">
              {entry.date}
            </p>
            <h3 className="text-sakura-text text-xl font-bold">
              {entry.title}
            </h3>
            <p className="text-sakura-cobble font-dmmono text-sm">
              {entry.subtitle} {entry.location && <>| {entry.location}</>}
            </p>
            {entry.description && (
              <p className="font-zenmaru text-sakura-text/80 mt-2 max-w-prose">
                {entry.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
