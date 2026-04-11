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
          className="bg-sakura-accent block h-px"
          style={{ width: '2rem' }}
        />
        <motion.span
          variants={labelVariants}
          className="label-editorial text-sakura-accent"
        >
          {label}
        </motion.span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 gap-2 sm:grid-cols-4"
      >
        {skills.map(({ name, Icon }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="group border-sakura-stone/20 bg-sakura-card/50 hover:border-sakura-accent/40 hover:bg-sakura-card flex flex-col items-center justify-center rounded-sm border p-3"
          >
            <Icon
              aria-hidden="true"
              size={24}
              weight="duotone"
              className="text-sakura-accent mb-1.5"
            />
            <span className="font-dmmono text-sakura-text text-center text-xs">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechCategorySection;
