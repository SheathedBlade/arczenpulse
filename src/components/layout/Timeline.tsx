import { experiences } from '@/data/experience';
import { FlowerIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

const Timeline = () => {
  return (
    <div className="mx-auto max-w-3xl px-12 py-10">
      <h2
        className="font-jost mb-8 text-center text-2xl underline"
        style={{ textDecorationThickness: '3px' }}
      >
        Experience & Education
      </h2>
      <div className="border-sakura-stone/40 relative border-l-2 px-8 md:ml-8">
        {experiences.map((entry, i) => (
          <motion.div
            key={i}
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
