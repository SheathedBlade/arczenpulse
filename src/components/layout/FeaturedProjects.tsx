import AppLink from '@/components/ui/AppLink';
import Card from '@/components/ui/Card';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { projects } from '@/data/projects';
import { motion } from 'motion/react';

const FeaturedProjects = () => {
  return (
    <div className="px-12 sm:mx-25">
      <h2 className="font-jost mt-16 mb-6 text-center text-3xl underline decoration-3 xl:my-6">
        Featured Projects
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-3"
      >
        {projects
          .filter(p => p.pinned)
          .map(p => (
            <motion.div key={p.id} variants={childrenVariants}>
              <AppLink to={`/works/${p.id}`} className="block">
                <Card
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              </AppLink>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
