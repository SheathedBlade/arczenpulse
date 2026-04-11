import { techSkills } from '@/data/skills';
import { motion } from 'motion/react';
import TechCategorySection from './tech/TechCategorySection';

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

const TechStack = () => {
  return (
    <section className="relative z-10 mx-4 lg:mx-0 lg:px-5">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-editorial text-sakura-cobble mb-2 text-center lg:text-left"
      >
        Current Stack
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-jost text-sakura-text mb-8 text-center text-2xl font-medium tracking-wide md:text-3xl lg:text-left"
      >
        What I Work With
      </motion.h2>

      <div className="flex flex-col gap-8">
        {grouped.map(({ category, skills }) => (
          <TechCategorySection
            key={category}
            category={category}
            label={categoryLabel[category]}
            skills={skills}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
