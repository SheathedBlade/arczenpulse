import PageContainer from '@/components/ui/PageContainer';
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon
} from '@phosphor-icons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, Variants } from 'motion/react';
import { SyntheticEvent } from 'react';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact · ARC Studio' }]
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

const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('Thanks for reaching out!');
  e.currentTarget.reset();
};

function RouteComponent() {
  return (
    <PageContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16"
      >
        <motion.div variants={childrenVariants} className="text-center">
          <h1
            className="font-zenmaru mb-8 text-5xl font-bold underline"
            style={{ textDecorationThickness: '3px' }}
          >
            Let&apos;s Connect
          </h1>
          <p className="font-zenmaru text-sakura-text/70 mx-auto max-w-2xl text-2xl">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello,
            I&apos;d love to hear from you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div variants={childrenVariants} className="space-y-8">
            <h2 className="font-jost text-2xl font-bold">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-sakura-card relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <EnvelopeIcon
                    size={24}
                    weight="duotone"
                    className="text-sakura-accent"
                  />
                </div>
                <div>
                  <p className="font-dmmono text-sakura-cobble text-sm">
                    Email
                  </p>
                  <a
                    href="mailto:inquiry@arczenpulse.com"
                    className="font-zenmaru text-sakura-text hover:text-sakura-accent transition-colors"
                  >
                    inquiry@arczenpulse.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sakura-card relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <GithubLogoIcon
                    size={24}
                    weight="duotone"
                    className="text-sakura-accent"
                  />
                </div>
                <div>
                  <p className="font-dmmono text-sakura-cobble text-sm">
                    GitHub
                  </p>
                  <Link
                    to="https://github.com/SheathedBlade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-zenmaru text-sakura-text hover:text-sakura-accent transition-colors"
                  >
                    @SheathedBlade
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sakura-card relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <LinkedinLogoIcon
                    size={24}
                    weight="duotone"
                    className="text-sakura-accent"
                  />
                </div>
                <div>
                  <p className="font-dmmono text-sakura-cobble text-sm">
                    LinkedIn
                  </p>
                  <Link
                    to="https://www.linkedin.com/in/andrewchuah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-zenmaru text-sakura-text hover:text-sakura-accent transition-colors"
                  >
                    @Andrew Chuah
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={childrenVariants}>
            <h2 className="font-jost mb-6 text-2xl font-bold">
              Send a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-sakura-card relative z-10 space-y-5 rounded-lg p-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-dmmono text-sakura-cobble mb-2 block text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-sakura-bg text-sakura-text focus:ring-sakura-accent w-full rounded-md px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-dmmono text-sakura-cobble mb-2 block text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-sakura-bg text-sakura-text focus:ring-sakura-accent w-full rounded-md px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-dmmono text-sakura-cobble mb-2 block text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-sakura-bg text-sakura-text focus:ring-sakura-accent w-full rounded-md px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>
              <button
                type="submit"
                className="bg-sakura-accent text-sakura-bg font-dmmono hover:bg-sakura-bloom w-full rounded-md px-6 py-3 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}
