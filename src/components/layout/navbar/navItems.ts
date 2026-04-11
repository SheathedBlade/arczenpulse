import { GithubLogoIcon } from '@phosphor-icons/react';

export interface NavItem {
  name: string;
  link: string;
  icon?: typeof GithubLogoIcon;
}

export const navItems: NavItem[] = [
  { name: 'Work', link: '/works' },
  { name: 'Experience', link: '/experience' },
  { name: 'About', link: '/about' },
  { name: 'Craft', link: '/behind-the-curtain' },
  {
    name: 'Source',
    link: 'https://github.com/SheathedBlade/arc-studio',
    icon: GithubLogoIcon
  }
];
