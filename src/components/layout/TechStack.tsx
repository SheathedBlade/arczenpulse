import { techSkills } from '@/data/skills';
import { motion, Variants } from 'motion/react';

const TechStack = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative z-10 mx-4 lg:mx-0">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost mb-8 text-center text-3xl underline decoration-3"
      >
        Current Technologies
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-center gap-4"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techSkills.map(({ name, Icon, desc }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="border-sakura-accent/50 bg-sakura-surface/70 flex flex-col items-center rounded-md border-2 p-3 transition-colors"
            style={{ width: '150px', height: '150px' }}
          >
            <Icon
              aria-hidden="true"
              size={48}
              weight="duotone"
              className="text-sakura-accent mb-4 transition-colors"
            />
            <span className="font-dmmono text-sakura-text text-base transition-colors">
              {name}
            </span>
            <span className="font-zenmaru text-sakura-cobble mt-0.5 text-center text-sm leading-tight">
              {desc}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
