import Scene from '@/components/canvas/Scene';
import HomeHeroLinks from '@/components/layout/HomeHeroLinks';
import HomePortrait from '@/components/layout/HomePortrait';
import Divider from '@/components/ui/Divider';
import {
  homeIdentityVariants,
  homeNavLinksVariants,
  homePortraitVariants,
  homeStatementVariants,
  monoLabelVariants
} from '@/data/motionVariants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'motion/react';

function HomePage() {
  useDocumentTitle('');

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Ambient background — topo, very subtle */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <Scene />
      </div>

      {/* Main split composition */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:pt-18">
        {/* Left — Portrait column */}
        <div className="relative flex items-center lg:w-5/12">
          {/* Portrait */}
          <motion.div
            variants={homePortraitVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex h-[50vh] flex-col items-start overflow-hidden pt-8 lg:ml-8 lg:h-[72vh] lg:w-full lg:pt-0"
          >
            <div className="relative flex h-full w-full">
              {/* Vertical mono label — left edge, aligned to portrait top */}
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

        {/* Right — Identity + Links */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-12 lg:w-7/12 lg:px-16">
          {/* Mono kicker — editorial label */}
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

          {/* Name — large, bold, commanding */}
          <motion.div
            variants={homeIdentityVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3"
          >
            <h1 className="font-zenmaru text-sakura-text text-6xl leading-none tracking-tight lg:text-[5.5rem] lg:leading-none">
              Andrew
            </h1>
            <h1 className="font-zenmaru text-sakura-text mt-1 text-6xl leading-none tracking-tight lg:text-[5.5rem] lg:leading-none">
              Chuah.
            </h1>
          </motion.div>

          {/* Role metadata */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="mt-5"
          >
            <p className="meta-mono text-sakura-cobble tracking-wide uppercase">
              Developer · Artist · Maker
            </p>
            <p className="meta-mono text-sakura-stone mt-1 tracking-wide uppercase">
              Columbia, Maryland · Available for projects
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8"
          >
            <Divider weight="heavy" animated animationDelay={0.3} />
          </motion.div>

          {/* Statement */}
          <motion.div
            variants={homeStatementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="font-zenmaru text-sakura-text text-xl leading-relaxed lg:text-2xl">
              I make digital work that feels intentional — from first impression
              to last detail. Currently building tools at the NSA that help keep
              things running.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={homeNavLinksVariants}
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
