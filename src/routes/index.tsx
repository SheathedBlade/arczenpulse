import Scene from '@/components/canvas/Scene';
import FeaturedProjects from '@/components/layout/FeaturedProjects';
import Hero from '@/components/layout/Hero';
import TechStack from '@/components/layout/TechStack';
import Timeline from '@/components/layout/Timeline';
import AppLink from '@/components/ui/AppLink';
import Divider from '@/components/ui/Divider';
import PageContainer from '@/components/ui/PageContainer';
import { DownloadIcon } from '@phosphor-icons/react';
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
    <>
      <MotionPageContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="ease mt-12 flex max-w-none flex-col transition-colors duration-300 lg:flex-row lg:justify-center xl:-mt-12"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Divider />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TechStack />
      </motion.div>
      <motion.div
        variants={childrenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeaturedProjects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 py-16 text-center"
      >
        <h2
          className="font-jost mb-4 text-2xl underline"
          style={{ textDecorationThickness: '3px' }}
        >
          Let&apos;s Work Together
        </h2>
        <p className="text-sakura-text/70 font-zenmaru mx-auto mb-6 max-w-md">
          I&apos;m always interested in hearing about new opportunities and
          creative collaborations. Whether you have a project in mind or just
          want to connect, I&apos;d love to hear from you!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppLink
            to="mailto:inquiry@arczenpulse.com"
            className="bg-sakura-accent text-sakura-bg font-dmmono hover:bg-sakura-bloom inline-flex items-center gap-2 rounded-md px-8 py-3 transition-colors"
          >
            Get in Touch!
          </AppLink>
          <a
            href="/Andrew_Chuah_Resume.pdf"
            download
            className="border-sakura-stone/50 text-sakura-text font-dmmono hover:bg-sakura-card inline-flex items-center gap-2 rounded-md border px-8 py-3 transition-colors"
          >
            <DownloadIcon size={20} weight="bold" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </>
  );
}
