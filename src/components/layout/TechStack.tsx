import { techSkills } from '@/data/skills';
import { motion, Variants } from 'motion/react';

const categoryOrder = ['frontend', 'backend', 'cloud', 'tools'] as const;
type Category = (typeof categoryOrder)[number];

const categoryLabel: Record<Category, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  cloud: 'Cloud',
  tools: 'Tools'
};

const grouped = categoryOrder.map(cat => ({
  category: cat,
  skills: techSkills.filter(s => s.category === cat)
}));

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const TechStack = () => {
  return (
    <section className="relative z-10 mx-4 flex flex-col items-center justify-center lg:mx-0 lg:px-5">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-dmmono text-sakura-cobble mb-2 text-center text-xs tracking-widest uppercase"
      >
        Current Technologies
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost text-sakura-text mb-8 text-center text-2xl font-medium tracking-wide"
      >
        What I Work With
      </motion.h2>

      <div className="flex flex-col gap-6">
        {grouped.map(({ category, skills }) => (
          <div key={category}>
            {/* Category label with subtle line, centered max-width block */}
            <div className="mb-3 flex items-center gap-3">
              <span className="font-dmmono text-sakura-cobble text-xs tracking-widest uppercase">
                {categoryLabel[category]}
              </span>
              <span className="bg-sakura-stone/20 h-px flex-1" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex w-90 flex-row flex-wrap gap-3"
            >
              {skills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  className="group hover:bg-sakura-surface/40 flex h-20 w-28 flex-col items-center justify-center rounded-md px-3 py-2.5 transition-colors"
                >
                  <Icon
                    aria-hidden="true"
                    size={32}
                    weight="duotone"
                    className="text-sakura-accent mb-2 transition-opacity group-hover:opacity-70"
                  />
                  <span className="font-dmmono text-sakura-text text-center text-xs leading-none">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
