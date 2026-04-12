import banner from '@/assets/images/placeholder_me.webp';
import {
  AboutHeroBanner,
  CurrentStatusBlock,
  EditorialPullQuote,
  ElsewhereLinks,
  MarginNote
} from '@/components/about';
import AppLink from '@/components/ui/AppLink';
import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import {
  aboutIntroParagraphs,
  aboutOutroParagraphs,
  currentStatusText
} from '@/content/about';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'motion/react';

function AboutPage() {
  useDocumentTitle('About');
  return (
    <PageContainer>
      <h1 className="sr-only">About Andrew Chuah</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <AboutHeroBanner src={banner} alt="Andrew Chuah - banner image" />

        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          <EditorialPullQuote quote="I like to create things that are worth remembering and leave a lasting impression." />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <EditorialDivider weight="light" />
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_200px] md:gap-8">
            <motion.div
              variants={childrenVariants}
              className="font-zenmaru text-sakura-text/90 space-y-5 text-base leading-relaxed md:text-lg"
            >
              {aboutIntroParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>{aboutOutroParagraphs[0]}</p>
            </motion.div>

            <motion.aside
              variants={childrenVariants}
              className="hidden md:block"
            >
              <div className="sticky top-24 space-y-6">
                <MarginNote label="Location">Columbia, Maryland</MarginNote>
                <MarginNote label="Identity">
                  Developer · Artist · Maker
                </MarginNote>
                <ElsewhereLinks />
              </div>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <EditorialDivider weight="light" />
          </motion.div>

          <CurrentStatusBlock description={currentStatusText} />

          <motion.div variants={childrenVariants} className="pt-4">
            <p className="font-zenmaru text-sakura-cobble text-sm">
              Thanks for reading.
            </p>
            <p className="font-dmmono text-sakura-stone mt-3 text-xs tracking-wide">
              <AppLink
                to="/behind-the-curtain"
                className="hover:text-sakura-accent transition-colors"
              >
                How this site was made →
              </AppLink>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

export default AboutPage;
