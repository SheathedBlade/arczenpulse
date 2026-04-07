import banner from '@/assets/images/placeholder_me.webp';
import AppLink from '@/components/ui/AppLink';
import PageContainer from '@/components/ui/PageContainer';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { motion } from 'motion/react';

function AboutPage() {
  return (
    <PageContainer>
      <h1 className="sr-only">About Andrew Chuah</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        {/* Banner */}
        <motion.div variants={childrenVariants} className="-mx-6 mb-14 sm:mx-0">
          <div className="bg-sakura-card relative h-auto w-full overflow-hidden rounded-lg sm:rounded-lg">
            <img
              src={banner}
              loading="eager"
              fetchPriority="high"
              width="1200"
              height="400"
              alt="Andrew Chuah - banner image"
              onLoad={e => {
                e.currentTarget.classList.remove('opacity-0');
              }}
              className="h-full w-full object-cover object-top opacity-0 transition-opacity duration-500"
            />
          </div>
        </motion.div>

        {/* Single-column editorial layout */}
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {/* Large creative statement */}
          <motion.div variants={childrenVariants}>
            <p className="font-dmmono text-sakura-text text-center text-3xl leading-snug tracking-tighter md:text-4xl">
              I like work that feels intentional from the first impression to
              the last detail.
            </p>
          </motion.div>

          {/* About copy */}
          <motion.div
            variants={childrenVariants}
            className="font-zenmaru text-sakura-text/80 space-y-5 text-lg leading-relaxed"
          >
            <p>
              I&apos;m Andrew Chuah, a software engineer based out of Columbia,
              Maryland. I specialize in making functional, yet unique designs
              come to life on the web, where the choices being made are rooted
              in intention. I started out as someone who took an extreme
              interest in graphic design, and that interest transformed many
              times over; from graphic design, to game development, and finally
              to web development, where I&apos;m able to create products that
              are not only utilitarian, but also unique and full of character.
            </p>
            <p>
              Outside of work, I keep my hands busy with electronics, digital
              art, and 3D modeling. I love traveling to experience how other
              cultures build and express their worlds; some of my favorite trips
              have been through Malaysia, Thailand, and Japan. I also do a lot
              of creative writing, which you can explore at my worldbuilding
              site.{' '}
              <AppLink
                className="text-sakura-accent hover:text-sakura-text font-bold underline underline-offset-2 transition-colors"
                to="https://luciradis.terystal.dev"
                target="_blank"
              >
                Luciradis
              </AppLink>
              . If you want to reach out or want to chat, feel free to send me a
              message!
            </p>
          </motion.div>

          {/* Currently */}
          <motion.div variants={childrenVariants}>
            <p className="font-dmmono text-sakura-cobble mb-2 text-xs tracking-widest uppercase">
              Currently
            </p>
            <p className="font-zenmaru text-sakura-text text-base">
              Building Endfield Architect, a production planner and simulator
              for Arknights: Endfield.
            </p>
          </motion.div>

          {/* Quiet ending */}
          <motion.div variants={childrenVariants} className="pt-4">
            <p className="font-zenmaru text-sakura-cobble text-base">
              Thanks for reading.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

export default AboutPage;
