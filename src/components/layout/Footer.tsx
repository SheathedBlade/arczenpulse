import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon
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
  }
];

const Footer = () => {
  return (
    <footer className="bg-sakura-surface/60 relative z-3 w-full px-6 py-5">
      <div
        className="from-sakura-bg/80 to-sakura-surface/60 pointer-events-none absolute -top-2 right-0 left-0 h-8 bg-linear-to-b"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {footerLinks.map(({ icon: Icon, label, to }) => (
              <li key={label}>
                <AppLink
                  to={to}
                  className="group font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-1.5 text-xs transition-colors"
                >
                  <Icon
                    size={14}
                    weight="duotone"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-y-px"
                  />
                  <span>{label}</span>
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
        <span className="font-dmmono text-sakura-stone text-xs">
          &copy; {new Date().getFullYear()} Andrew Chuah
        </span>
      </div>
    </footer>
  );
};

export default Footer;
