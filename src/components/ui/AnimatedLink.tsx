import { Link, LinkProps } from '@tanstack/react-router';
import { MouseEvent } from 'react';
import { useTransition } from './TransitionProvider';

interface AnimatedLinkProps extends Omit<LinkProps, 'onClick'> {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const AnimatedLink = ({
  to,
  onClick,
  children,
  className = '',
  ...props
}: AnimatedLinkProps) => {
  const { navigateWithTransition } = useTransition();
  const isInternal = typeof to === 'string' && to.startsWith('/');

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    )
      return;

    if (isInternal) {
      e.preventDefault();
      if (to !== location.pathname) navigateWithTransition(to);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props} className={`${className}`}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
