import { allSkills } from '@/data/skills';
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
    <section className="relative z-10 py-12">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost mb-8 text-center text-2xl underline"
        style={{ textDecorationThickness: '3px' }}
      >
        Current Technologies
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 px-4"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allSkills.map(({ name, Icon, desc }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="group bg-sakura-card border-sakura-stone/20 hover:border-sakura-accent/50 hover:bg-sakura-surface flex flex-col items-center gap-2 rounded-md border p-4 transition-colors"
            style={{ width: '140px', height: '140px' }}
          >
            <Icon
              size={36}
              weight="duotone"
              className="text-sakura-stone group-hover:text-sakura-accent transition-colors"
            />
            <span className="font-dmmono text-sakura-cobble group-hover:text-sakura-text text-sm transition-colors">
              {name}
            </span>
            <span className="font-zenmaru text-sakura-cobble mt-1 text-center text-xs">
              {desc}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
