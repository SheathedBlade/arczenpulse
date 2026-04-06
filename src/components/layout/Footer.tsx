import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ScrollIcon
} from '@phosphor-icons/react';
import AppLink from '../ui/AppLink';

const footerLinks = [
  {
    icon: EnvelopeIcon,
    label: 'work@terystal.com',
    to: 'mailto:work@terystal.com'
  },
  {
    icon: GithubLogoIcon,
    label: 'GitHub',
    to: 'https://github.com/SheathedBlade'
  },
  {
    icon: LinkedinLogoIcon,
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/andrewchuah/'
  },
  {
    icon: ScrollIcon,
    label: 'Behind the Curtain',
    to: '/behind-the-curtain'
  }
];

const Footer = () => {
  return (
    <footer className="bg-sakura-surface relative z-3 w-full px-6 pt-8 pb-6 backdrop-blur-xs">
      <div
        className="from-sakura-bg to-sakura-surface pointer-events-none absolute top-0 right-0 left-0 h-8 bg-gradient-to-b"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-start gap-5 pt-6">
        {/* Epilogue phrase */}
        <p className="font-zenmaru text-sakura-cobble text-center text-lg leading-relaxed italic">
          Every path has an origin, every place a story.
        </p>

        {/* Soft separator */}
        <div
          className="via-sakura-stone/30 h-px w-24 bg-linear-to-r from-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Link cluster */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            {footerLinks.map(({ icon: Icon, label, to }) => (
              <li key={label}>
                <AppLink
                  to={to}
                  className="group footer-link font-zenmaru text-sakura-text hover:text-sakura-accent hover:border-sakura-accent/30 focus-visible:border-sakura-accent/30 inline-flex items-center gap-1.5 rounded-md border-2 border-transparent px-3 py-2 transition-colors duration-200"
                >
                  <Icon
                    size={18}
                    weight="duotone"
                    aria-hidden="true"
                    className="self-center transition-transform duration-200 group-hover:translate-y-px"
                  />
                  <span className="text-sm">{label}</span>
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="font-dmmono text-sakura-cobble text-sm">
          &copy; {new Date().getFullYear()} Andrew Chuah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
