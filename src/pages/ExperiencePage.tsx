import ExperienceTechSection from '@/components/layout/ExperienceTechSection';
import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'motion/react';

function ExperiencePage() {
  useDocumentTitle('Experience');
  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mb-16"
        >
          <p className="label-editorial text-sakura-accent mb-3">Path</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="font-jost text-sakura-text text-4xl font-bold md:text-5xl lg:text-6xl"
              >
                The roles, the journey,
                <br />
                <span className="text-sakura-accent">and the lessons.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="font-zenmaru text-sakura-cobble max-w-sm text-base md:text-right md:text-lg"
            >
              Where I&apos;ve been, what I learned, and what I&apos;m still
              figuring out.
            </motion.p>
          </div>
        </motion.header>

        <EditorialDivider weight="light" />

        <ExperienceTechSection />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="font-zenmaru text-sakura-cobble text-sm md:text-base">
            The path continues.
          </p>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}

export default ExperiencePage;
