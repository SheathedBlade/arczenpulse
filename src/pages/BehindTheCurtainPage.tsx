import EditorialDivider from '@/components/ui/EditorialDivider';
import AppLink from '@/components/ui/AppLink';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

function BehindTheCurtainPage() {
  useDocumentTitle('Behind the Curtain');

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl px-6 py-16"
      >
        {/* Back nav */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Home
          </AppLink>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mb-8"
        >
          <h1 className="font-jost text-sakura-text text-4xl font-bold md:text-5xl">
            Behind the Curtain
          </h1>
          <p className="font-zenmaru text-sakura-cobble mt-3 text-base">
            Notes on why this place looks and feels the way it does.
          </p>
        </motion.header>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-12"
        >
          <EditorialDivider weight="light" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mb-16"
        >
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              This page is in progress — a space for notes on the design
              decisions, stack choices, and the feeling behind the site. Check
              back soon.
            </p>
          </div>
        </motion.div>

        {/* Footer divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <EditorialDivider weight="light" />
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Back to Home
          </AppLink>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}

export default BehindTheCurtainPage;
