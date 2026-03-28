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
  className,
  children,
  ...props
}: AnimatedLinkProps) => {
  const { startTransition } = useTransition();
  const isInternal = typeof to === 'string' && to.startsWith('/');

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const isLeftClick = e.button === 0;
    const hasModifiers = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    if (!isLeftClick || hasModifiers) return;

    if (isInternal) {
      e.preventDefault();
      startTransition(to);
    }

    if (onClick) onClick(e);
  };

  if (isInternal) {
    return (
      <Link
        to={to}
        onClick={handleClick}
        className={`${className}`}
        {...props}
        preload="intent"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
