import { motion, Variants } from 'motion/react';
import type { Skill } from '@/data/skills';

const categoryHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15
    }
  }
};

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '2rem',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const labelVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.06
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

interface TechCategorySectionProps {
  category: string;
  label: string;
  skills: Skill[];
}

const TechCategorySection = ({
  category,
  label,
  skills
}: TechCategorySectionProps) => {
  return (
    <motion.div
      key={category}
      variants={categoryHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-4 flex items-center gap-3 lg:justify-start">
        <motion.span
          variants={lineVariants}
          className="bg-sakura-accent/50 block h-px"
          style={{ width: '2rem' }}
        />
        <motion.span
          variants={labelVariants}
          className="font-dmmono text-sakura-cobble text-xs tracking-widest uppercase"
        >
          {label}
        </motion.span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-x-4 gap-y-1"
      >
        {skills.map(({ name }) => (
          <motion.span
            key={name}
            variants={itemVariants}
            className="font-dmmono text-sakura-stone text-xs"
          >
            {name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechCategorySection;
