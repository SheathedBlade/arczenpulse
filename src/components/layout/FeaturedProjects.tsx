import Card from '@/components/ui/Card';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { projects } from '@/data/projects';
import { motion } from 'motion/react';
import AppLink from '../ui/AppLink';

const FeaturedProjects = () => {
  return (
    <div className="px-12 sm:mx-25">
      <h2
        className="font-jost mt-16 mb-6 text-center text-3xl underline xl:my-6"
        style={{ textDecorationThickness: '3px' }}
      >
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
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              variants={childrenVariants}
            >
              <AppLink
                to={`/works/${p.id}`}
                className="block transition-transform duration-150 hover:scale-105 focus:scale-105"
              >
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
