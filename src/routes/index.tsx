import Scene from '@/components/canvas/Scene';
import PageTransition from '@/components/effects/PageTransition';
import FeaturedProjects from '@/components/layout/FeaturedProjects';
import Hero from '@/components/layout/Hero';
import Timeline from '@/components/layout/Timeline';
import PageContainer from '@/components/ui/PageContainer';
import { createFileRoute } from '@tanstack/react-router';
import { motion, Variants } from 'motion/react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: 'ARC Studio · Homepage' }]
  }),
  component: RouteComponent
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15
    }
  }
};

const childrenVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const MotionPageContainer = motion.create(PageContainer);

function RouteComponent() {
  return (
    <PageTransition>
      <MotionPageContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="ease mt-12 flex flex-col transition-colors duration-300 lg:flex-row lg:justify-center xl:-mt-12"
      >
        <motion.div
          variants={childrenVariants}
          className="relative hidden min-h-100 xl:inline xl:min-h-svh xl:w-7/12"
        >
          <Scene />
        </motion.div>
        <motion.div
          variants={childrenVariants}
          className="flex w-auto flex-col items-center justify-center px-12 xl:w-5/12 xl:px-16"
        >
          <Hero />
        </motion.div>
      </MotionPageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Timeline />
      </motion.div>
      <motion.div
        variants={childrenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeaturedProjects />
      </motion.div>
    </PageTransition>
  );
}
