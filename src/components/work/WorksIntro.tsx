import { motion } from 'motion/react';

const WorksIntro = () => {
  return (
    <div className="relative mb-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="label-editorial text-sakura-accent mb-3"
          >
            Selected Works — 2021 → Present
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-jost text-sakura-text text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Things I&apos;ve created
            <br />
            <span className="text-sakura-accent">with purpose.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="font-zenmaru text-sakura-cobble/90 max-w-sm text-base md:text-right md:text-lg"
        >
          A collection of projects; some finished, some ongoing, all distinct.
          Tools, games, and the occasional experiment.
        </motion.p>
      </div>
    </div>
  );
};

export default WorksIntro;
