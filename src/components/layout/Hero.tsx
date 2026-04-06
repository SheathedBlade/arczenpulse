import pfp from '@/assets/images/placeholder_me.webp';
import AppLink from '@/components/ui/AppLink';
import Divider from '@/components/ui/Divider';
import {
  ArrowRightIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon
} from '@phosphor-icons/react';

const Hero = () => {
  return (
    <div className="z-2 flex flex-col items-center">
      <div className="mb-2">
        <img
          src={pfp}
          alt="Andrew Chuah profile pic"
          loading="lazy"
          className="border-sakura-surface h-32 w-32 rounded-xl border-4 object-cover shadow-lg"
        />
      </div>
      <div className="mb-2 text-center">
        <h1 className="text-sakura-text font-zenmaru text-6xl leading-snug font-bold">
          Andrew Chuah.
        </h1>
        <p className="text-sakura-cobble font-dmmono text-2xl tracking-widest uppercase">
          Digital Craftsman
        </p>
        <p className="text-sakura-text/70 font-dmmono text-base tracking-wider uppercase">
          [ Developer · Artist · Maker ]
        </p>
      </div>
      <Divider />
      <div className="md:px-12">
        <p className="font-zenmaru mx-auto mb-3 max-w-prose text-lg">
          I&apos;m a frontend software engineer with experience in full-stack
          development, building robust applications for various companies.
          I&apos;m currently working as a SWE for the NSA, where I&apos;ve built
          applications trusted by thousands of intelligence analysts in
          real-time.
        </p>
        <p className="font-zenmaru mx-auto mb-3 max-w-prose text-lg">
          I always strive to improve my craft, and create projects that can
          stand out and be truly unique.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start gap-3">
        <AppLink
          to="/about"
          className="group border-sakura-stone/40 bg-sakura-surface/50 hover:bg-sakura-card font-dmmono inline-flex items-center gap-2 rounded-xl border px-6 py-2 text-sm transition-colors"
        >
          About Me
          <ArrowRightIcon
            size={18}
            weight="bold"
            aria-hidden="true"
            className="about-link-arrow transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </AppLink>
        <div className="flex flex-wrap items-center justify-start gap-4">
          <AppLink
            to="https://github.com/SheathedBlade"
            className="text-sakura-cobble hover:text-sakura-text font-dmmono inline-flex items-center gap-2 text-sm transition-colors"
          >
            <GithubLogoIcon size={18} weight="duotone" aria-hidden="true" />
            GitHub
          </AppLink>
          <AppLink
            to="https://www.linkedin.com/in/andrewchuah/"
            className="text-sakura-cobble hover:text-sakura-text font-dmmono inline-flex items-center gap-2 text-sm transition-colors"
          >
            <LinkedinLogoIcon size={18} weight="duotone" aria-hidden="true" />
            LinkedIn
          </AppLink>
          <AppLink
            to="mailto:work@terystal.com"
            className="text-sakura-cobble hover:text-sakura-text font-dmmono inline-flex items-center gap-2 text-sm transition-colors"
          >
            <EnvelopeIcon size={18} weight="fill" aria-hidden="true" />
            Email
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
