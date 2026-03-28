import Brand from '@/components/ui/Brand';
import {
  ArrowUpIcon,
  EnvelopeIcon,
  GameControllerIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ScrollIcon
} from '@phosphor-icons/react';
import AppLink from '../ui/AppLink';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-sakura-surface ease relative z-3 mt-10 w-full px-12 py-10 backdrop-blur-xs transition-colors duration-300">
      <div className="mx-auto flex max-w-180 flex-col items-center justify-center">
        <div className="text-sakura-text flex w-full justify-between text-center">
          <AppLink to="/" className="-mt-8">
            <Brand animation="staggerForward" />
            <p className="font-dmmono text-sakura-cobble -mt-10 text-sm tracking-tight">
              &copy; {new Date().getFullYear()} Andrew Chuah.
            </p>
            <p className="font-dmmono text-sakura-cobble -mt-1 text-sm tracking-tight">
              All Rights Reserved.
            </p>
          </AppLink>
          <div className="mr-16 text-left font-bold">
            <div className="font-dmmono mb-4 text-lg">Contact</div>
            <ul className="list-none">
              <li className="mb-1 leading-6">
                <AppLink
                  to="mailto:inquiry@arczenpulse.com"
                  className="hover:bg-sakura-bloom/70 font-zenmaru flex max-w-max rounded-md p-1 no-underline transition-colors"
                >
                  <span className="text-sakura-text inline-flex items-center justify-center gap-1">
                    <EnvelopeIcon size={20} weight="fill" />
                    inquiry@arczenpulse.com
                  </span>
                </AppLink>
              </li>
              <li className="mb-1 leading-6">
                <AppLink
                  to="https://github.com/SheathedBlade"
                  className="hover:bg-sakura-bloom/70 font-zenmaru flex max-w-max rounded-md p-1 no-underline transition-colors"
                >
                  <span className="text-sakura-text inline-flex items-center justify-center gap-1">
                    <GithubLogoIcon size={20} weight="duotone" />
                    GitHub
                  </span>
                </AppLink>
              </li>
              <li className="mb-1 leading-6">
                <AppLink
                  to="https://www.linkedin.com/in/andrewchuah/"
                  className="hover:bg-sakura-bloom/70 font-zenmaru flex max-w-max rounded-md p-1 no-underline transition-colors"
                >
                  <span className="text-sakura-text inline-flex items-center justify-center gap-1">
                    <LinkedinLogoIcon size={20} weight="duotone" />
                    LinkedIn
                  </span>
                </AppLink>
              </li>
            </ul>
          </div>
          <div className="text-left font-bold">
            <div className="font-dmmono mb-4 text-lg">More</div>
            <ul>
              <li>
                <AppLink
                  to="https://github.com/SheathedBlade"
                  className="hover:bg-sakura-bloom/70 font-zenmaru flex max-w-max rounded-md p-1 no-underline transition-colors"
                >
                  <span className="text-sakura-text inline-flex items-center justify-center gap-1">
                    <ScrollIcon size={20} weight="duotone" />
                    Behind the Curtain
                  </span>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://sheathblade.itch.io/"
                  className="hover:bg-sakura-bloom/70 font-zenmaru flex max-w-max rounded-md p-1 no-underline transition-colors"
                >
                  <span className="text-sakura-text inline-flex items-center justify-center gap-1">
                    <GameControllerIcon size={20} weight="duotone" />
                    My Itch.io
                  </span>
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="text-sakura-cobble hover:text-sakura-text ease mt-8 flex cursor-pointer flex-row items-center justify-center text-center transition-colors duration-150"
        >
          <ArrowUpIcon size={18} weight="bold" />
          <p className="font-dmmono text-md ml-2 tracking-tight">Back to Top</p>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
