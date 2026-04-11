import Scene from '@/components/canvas/Scene';
import HomeHeroLinks from '@/components/layout/HomeHeroLinks';
import HomePortrait from '@/components/layout/HomePortrait';
import Divider from '@/components/ui/Divider';
import { monoLabelVariants } from '@/data/motionVariants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'motion/react';
import HomeIdentityBlock from '@/components/home/HomeIdentityBlock';
import HomeMetaBlock from '@/components/home/HomeMetaBlock';
import HomeStatement from '@/components/home/HomeStatement';

function HomePage() {
  useDocumentTitle('');

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <Scene />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:pt-18">
        <div className="relative flex items-center lg:w-5/12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex h-[50vh] flex-col items-start overflow-hidden pt-8 lg:ml-8 lg:h-[72vh] lg:w-full lg:pt-0"
          >
            <div className="relative flex h-full w-full">
              <motion.div
                variants={monoLabelVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pointer-events-none absolute top-0 -left-px z-10 hidden lg:block"
                aria-hidden="true"
              >
                <span
                  className="label-editorial text-sakura-cobble writing-vertical mt-8 block"
                  style={{ minHeight: '72vh' }}
                >
                  Portfolio — 2024
                </span>
              </motion.div>

              <HomePortrait className="h-full" showCaption />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-8 py-12 lg:w-7/12 lg:px-16">
          <motion.div
            variants={monoLabelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="label-editorial text-sakura-accent text-sm tracking-widest">
              Digital Craftsman
            </p>
          </motion.div>

          <HomeIdentityBlock />
          <HomeMetaBlock />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8"
          >
            <Divider weight="heavy" animated animationDelay={0.3} />
          </motion.div>

          <HomeStatement />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10"
          >
            <HomeHeroLinks />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
