import banner from '@/assets/images/placeholder_me.webp';
import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { motion } from 'motion/react';
import {
  EditorialPullQuote,
  MarginNote,
  CurrentStatusBlock,
  ElsewhereLinks,
  AboutHeroBanner
} from '@/components/about';

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
          <EditorialPullQuote quote="I like work that feels intentional from the first impression to the last detail." />

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
              className="font-zenmaru text-sakura-text/80 space-y-5 text-base leading-relaxed md:text-lg"
            >
              <p>
                I&apos;m Andrew Chuah, a software engineer based out of
                Columbia, Maryland. I specialize in making functional, yet
                unique designs come to life on the web, where the choices being
                made are rooted in intention. I started out as someone who took
                an extreme interest in graphic design, and that interest
                transformed many times over; from graphic design, to game
                development, and finally to web development, where I&apos;m able
                to create products that are not only utilitarian, but also
                unique and full of character.
              </p>
              <p>
                Outside of work, I keep my hands busy with electronics, digital
                art, and 3D modeling. I love traveling to experience how other
                cultures build and express their worlds; some of my favorite
                trips have been through Malaysia, Thailand, and Japan. I also do
                a lot of creative writing, which you can explore at my
                worldbuilding site.{' '}
                <span className="text-sakura-accent font-medium">
                  Luciradis
                </span>
                . If you want to reach out or want to chat, feel free to send me
                a message!
              </p>
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

          <CurrentStatusBlock description="Building Endfield Architect, a production planner and simulator for Arknights: Endfield." />

          <motion.div variants={childrenVariants} className="pt-4">
            <p className="font-zenmaru text-sakura-cobble text-sm">
              Thanks for reading.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

export default AboutPage;
