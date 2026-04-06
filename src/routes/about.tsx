import banner from '@/assets/images/placeholder_me.webp';
import AppLink from '@/components/ui/AppLink';
import Divider from '@/components/ui/Divider';
import PageContainer from '@/components/ui/PageContainer';
import { experiences } from '@/data/experience';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { aboutSkills } from '@/data/skills';
import { GithubLogoIcon, PencilIcon } from '@phosphor-icons/react';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: 'About · ARC Studio' }]
  }),
  component: RouteComponent,
  preload: true
});

function RouteComponent() {
  return (
    <PageContainer>
      <h1 className="sr-only">About Andrew Chuah</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <motion.div variants={childrenVariants} className="-mx-6 mb-12 sm:mx-0">
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
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Left Col */}
          <motion.div variants={childrenVariants} className="lg:col-span-2">
            <h2 className="font-jost mb-6 text-3xl font-bold">About Me</h2>
            <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
              <p>
                I&apos;m Andrew Chuah, a software engineer based out of
                Columbia, Maryland, United States. I specialize in making
                functional, yet unique designs come to life on the web. I
                started out as someone who took an extreme interest in graphic
                design, and that interest transformed many times over; from
                graphic design, to game development, and finally to web
                development. I&apos;m not one to shy away from challenges, and I
                always continue to expand my skillset.
              </p>
              <p>
                Outside of work, I satisfy my creative itch by keeping my hands
                busy with electronics, digital art, or 3D modeling. I also love
                traveling and experiencing all that a culture has to offer; some
                of my favorite trips have been through Malaysia, Thailand, and
                Japan. Gaming and watching anime are also some of my favorite
                pastimes.
              </p>
              <p>
                I also do a lot of creative writing, which you can see for
                yourself at my personal worldbuilding website:{' '}
                <AppLink
                  className="text-sakura-accent hover:text-sakura-text font-bold underline underline-offset-2 transition-colors"
                  to="https://luciradis.terystal.dev"
                  target="_blank"
                >
                  Luciradis
                </AppLink>
              </p>
              <p>If you want to chat, feel free to send me an email!</p>
            </div>
            <Divider />

            <motion.div className="mt-4 md:mb-16" variants={childrenVariants}>
              <h2 className="font-jost mb-8 text-3xl font-bold">Experience</h2>
              <div className="space-y-6">
                {experiences.map(job => (
                  <motion.div
                    key={`${job.title}-${job.subtitle}`}
                    variants={childrenVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-sakura-card rounded-lg p-6"
                  >
                    <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-jost text-sakura-text text-xl font-bold">
                          {job.title}
                        </h3>
                        <p className="font-dmmono text-sakura-cobble">
                          {job.subtitle}
                        </p>
                      </div>
                      <span className="font-dmmono text-sakura-accent text-sm">
                        {job.date}
                      </span>
                    </div>
                    <p className="font-zenmaru text-sakura-text/70 whitespace-break-spaces">
                      {job.extendedDesc || job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:hidden">
            <Divider />
          </div>

          {/* Right Col */}
          <motion.div
            variants={childrenVariants}
            className="sticky top-24 space-y-8"
          >
            <div>
              <h3 className="font-jost mb-4 text-2xl font-bold">
                Skills & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutSkills.map(({ name, Icon, desc }) => (
                  <motion.div
                    key={name}
                    className="border-sakura-accent/50 bg-sakura-surface/70 flex min-h-35 w-full flex-col items-center gap-2 rounded-md border p-4 transition-colors"
                  >
                    <Icon
                      aria-hidden="true"
                      size={48}
                      weight="duotone"
                      className="text-sakura-accent"
                    />
                    <span className="font-dmmono text-sakura-text text-sm">
                      {name}
                    </span>
                    <span className="font-zenmaru text-sakura-cobble mt-1 text-center text-xs">
                      {desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <Divider />
            <div>
              <h3 className="font-jost mb-4 text-2xl font-bold">
                Current Focus
              </h3>
              <div className="space-y-4">
                <div className="bg-sakura-card rounded-lg p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <PencilIcon
                      aria-hidden="true"
                      size={20}
                      weight="duotone"
                      className="text-sakura-accent"
                    />
                    <h4 className="font-jost text-lg font-bold">
                      Developing Endfield Architect
                    </h4>
                  </div>
                  <p className="font-zenmaru text-sakura-text/80">
                    Currently building a production planner and simulator for
                    the game <strong>Arknights: Endfield</strong>. This will
                    include DFS tree search as it needs to calculate all the
                    recipes and ingredients in the tree. It will also implement
                    A* pathfinding to generate the most optimal placements for
                    facilities and belts/pipes.
                  </p>
                  <p className="text-sakura-text font-zenmaru mt-4 mb-2">
                    Follow development here:
                  </p>
                  <AppLink
                    to="https://github.com/SheathedBlade/endfield-architect"
                    className="text-sakura-text hover:bg-sakura-bloom/70 flex max-w-max gap-2 rounded-md p-1 transition-colors"
                  >
                    <GithubLogoIcon
                      aria-hidden="true"
                      weight="duotone"
                      size={24}
                    />
                    Endfield Architect GitHub
                  </AppLink>
                </div>

                <div className="bg-sakura-card rounded-lg p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <PencilIcon
                      size={20}
                      weight="duotone"
                      className="text-sakura-accent"
                    />
                    <h4 className="font-jost text-lg font-bold">
                      Developing Vantage
                    </h4>
                  </div>
                  <p className="font-zenmaru text-sakura-text/80">
                    Currently revamping a college project of mine into a
                    fully-fledged API-as-a-service. Vantage is an esports
                    management system where users can create and manage games,
                    teams, players, matches, you name it. The goal is to
                    internally expose API endpoints for specific use such as
                    integration within another website (say for college
                    esports), and to provide one place to manage college-level
                    teams, which can change all the time within each semester.
                  </p>
                  <p className="text-sakura-text font-zenmaru mt-4 mb-2">
                    Follow development here:
                  </p>
                  <AppLink
                    to=""
                    className="text-sakura-text hover:bg-sakura-bloom/70 flex max-w-max gap-2 rounded-md p-1 transition-colors"
                  >
                    <GithubLogoIcon
                      aria-hidden="true"
                      weight="duotone"
                      size={24}
                    />
                    WIP
                  </AppLink>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}
