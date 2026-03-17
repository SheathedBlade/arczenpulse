import { EnvelopeIcon, GithubLogoIcon } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="bg-sakura-surface ease px-12 py-10 transition-colors duration-300">
      <div className="text-sakura-text mx-auto flex max-w-5/12 justify-between text-center">
        <div className="mr-16 text-left font-bold">
          <div className="font-dmmono mb-4 text-lg">Navigation</div>
        </div>
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
              <a
                target="_blank"
                href="https://github.com/SheathedBlade"
                rel="noreferrer"
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
              </a>
            </li>
          </ul>
        </div>
        <div className="text-left font-bold">
          <div className="font-dmmono mb-4 text-lg">Navigation</div>
        </div>
      </div>
      <div className="text-sakura-cobble mt-8 text-center">
        <div className="font-dmmono text-md">
          &copy; {new Date().getFullYear()} Andrew Chuah. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
