import { techSkills } from '@/data/skills';
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
    <section className="relative z-10 px-4 lg:px-0">
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
