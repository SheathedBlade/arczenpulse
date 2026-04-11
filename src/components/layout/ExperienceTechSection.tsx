import TechStack from '@/components/layout/TechStack';
import Timeline from '@/components/layout/Timeline';
import { motion } from 'motion/react';

const ExperienceTechSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-4 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-7/12">
          <Timeline />
        </div>
        <div className="w-full lg:w-5/12">
          <div className="border-sakura-stone/20 mb-6 border-t pt-6">
            <p className="label-editorial text-sakura-accent mb-2">Stack</p>
            <h2 className="font-jost text-sakura-text text-2xl font-bold tracking-wide">
              What I work with
            </h2>
          </div>
          <TechStack />
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceTechSection;
