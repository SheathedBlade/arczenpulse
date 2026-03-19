import {
  ArrowUpIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  ScrollIcon
} from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import Brand from '../ui/Brand';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-sakura-surface ease relative z-3 w-full px-12 py-10 backdrop-blur-xs transition-colors duration-300">
      <div className="mx-auto flex max-w-180 flex-col items-center justify-center">
        <div className="text-sakura-text flex w-full justify-between text-center">
          <Link to="/" className="-mt-8">
            <Brand animation="staggerForward" />
            <p className="font-dmmono text-sakura-cobble -mt-10 text-sm tracking-tight">
              &copy; {new Date().getFullYear()} Andrew Chuah.
            </p>
            <p className="font-dmmono text-sakura-cobble -mt-1 text-sm tracking-tight">
              All Rights Reserved.
            </p>
          </Link>
          <div className="mr-16 text-left font-bold">
            <div className="font-dmmono mb-4 text-lg">Contact</div>
            <ul className="list-none">
              <li className="mb-1 leading-6">
                <a
                  href="mailto:inquiry@arczenpulse.com"
                  className="text-sakura-text hover:bg-sakura-bloom/70 font-zenmaru rounded-md p-1 no-underline transition-colors duration-200"
                >
                  <button className="inline-flex items-center justify-center">
                    <EnvelopeIcon
                      size={18}
                      weight="fill"
                      className="relative mr-1.5 inline-block"
                    />
                    inquiry@arczenpulse.com
                  </button>
                </a>
              </li>
              <li className="mb-1 leading-6">
                <Link
                  to="https://github.com/SheathedBlade"
                  className="text-sakura-text hover:bg-sakura-bloom/70 font-zenmaru rounded-md p-1 no-underline transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center">
                    <GithubLogoIcon
                      size={18}
                      weight="duotone"
                      className="relative mr-1.5 inline-block"
                    />
                    GitHub
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left font-bold">
            <div className="font-dmmono mb-4 text-lg">More</div>
            <ul>
              <li>
                <Link
                  to="https://github.com/SheathedBlade"
                  className="text-sakura-text hover:bg-sakura-bloom/70 font-zenmaru rounded-md p-1 no-underline transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center">
                    <ScrollIcon
                      size={18}
                      weight="duotone"
                      className="relative mr-1.5 inline-block"
                    />
                    Behind the Curtain
                  </span>
                </Link>
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
