import AppLink from '@/components/ui/AppLink';
import Card from '@/components/ui/Card';
import PageContainer from '@/components/ui/PageContainer';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { projects } from '@/data/projects';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';

export const Route = createFileRoute('/works/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Works · ARC Studio' }]
  })
});

function RouteComponent() {
  return (
    <PageContainer>
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childrenVariants}
          className="font-jost mb-12 text-center text-4xl"
        >
          All Works
        </motion.h1>
        <motion.div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <motion.div
              key={p.id}
              variants={childrenVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
            >
              <AppLink to={`/works/${p.id}`}>
                <Card
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              </AppLink>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
