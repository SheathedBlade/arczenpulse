import placeholder from '@/assets/images/placeholder_me.png';
import Divider from '@/components/ui/Divider';
import PageContainer from '@/components/ui/PageContainer';
import { PencilIcon } from '@phosphor-icons/react';
import { createFileRoute } from '@tanstack/react-router';
import { Variants, motion } from 'motion/react';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About · ARC Studio' }] }),
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

const experience = [
  {
    date: 'March 2024 - Present',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'National Security Agency',
    location: 'Fort Meade, MD',
    description:
      'Developed and maintained a specialized, mission-critical, enterprise compliance product to ensure 24/7 uptime for our customers. Transitioned said product to AWS Cloud services by migrating existing systems to currently available AWS services.'
  },
  {
    date: 'January 2022 - July 2022',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Fortress Investment Group LLC',
    location: 'New York City, NY',
    description:
      'Developed a web application that integrates with Tenable API to track internal IT assets and vulnerabilities using ASP.NET, Python, and SQL.'
  },
  {
    date: 'June 2021 - August 2021',
    type: 'work',
    title: 'Frontend Software Engineer',
    subtitle: 'TrueFort',
    location: 'Weehawken, NJ',
    description:
      "Developed a customer portal and redesigned the UI/UX for the company's zero trust product."
  },
  {
    date: 'January 2020 - December 2020',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Jefferies, LLC',
    location: 'Jersey City, NJ',
    description:
      'Developed a security feature using Python to scan Google Chrome extensions on every workstation and restrict the use of malicious or suspicious extensions. Integrated this feature into the ServiceNow ticketing workflow for SOC review and approval.'
  }
];

function RouteComponent() {
  return (
    <PageContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <motion.div variants={childrenVariants} className="-mx-6 mb-12 sm:mx-0">
          <img
            src={placeholder}
            alt="About banner"
            className="h-100 w-full object-cover object-top sm:rounded-lg"
          />
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <motion.div
            variants={childrenVariants}
            className="mb-6 lg:col-span-2"
          >
            <h2 className="font-jost mb-6 text-3xl font-bold">Origins:</h2>
            <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
              <p>
                My journey into web development started with a curiosity about
                how things worked. I remember dissecting my first website at 15,
                fascinated by the interplay of structure, style, and
                interactivity. That fascination never faded—it evolved.
              </p>
              <p>
                Over the years, I've worn many hats: freelancer, startup
                co-founder, agency developer, and now a solo creator building
                digital experiences that feel human. I believe the best
                technology disappears, leaving only the joy of use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring generative art,
                producing music, or hiking with my camera. These creative
                pursuits inform my engineering—I approach problems with both
                logic and intuition.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className="sticky top-200 lg:col-span-1"
          >
            <h3 className="font-jost mb-4 text-2xl font-bold">
              Skills & Interests
            </h3>
          </motion.div>
        </div>
        <Divider />
        <motion.div className="mt-4 mb-16" variants={childrenVariants}>
          <h2 className="font-jost mb-8 text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            {experience.map(job => (
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
                <p className="font-zenmaru text-sakura-text/70">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={childrenVariants}>
          <div className="bg-sakura-card/50 rounded-lg p-6">
            <div className="mb-2 flex items-center gap-2">
              <PencilIcon
                size={20}
                weight="duotone"
                className="text-sakura-accent"
              />
              <h3 className="font-jost text-xl font-bold">Now</h3>
            </div>
            <p className="font-zenmaru text-sakura-text/80">
              Currently building a WebGL experiment with React Three Fiber,
              exploring spatial audio, and contributing to open‑source design
              tools.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
