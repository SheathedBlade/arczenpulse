import TechStack from '@/components/layout/TechStack';
import Timeline from '@/components/layout/Timeline';
import { motion } from 'motion/react';

const ExperienceTechSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-4 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="w-full lg:w-7/12">
          <Timeline />
        </div>
        <div className="w-full lg:w-5/12">
          <TechStack />
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceTechSection;
