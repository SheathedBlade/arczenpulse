import { Link, LinkProps } from '@tanstack/react-router';
import { forwardRef, MouseEvent } from 'react';
import { useTransition } from './TransitionProvider';

interface AppLinkProps extends Omit<LinkProps, 'onClick'> {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  showNewTabIndicator?: boolean;
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    { to, onClick, className, children, showNewTabIndicator, ...props },
    ref
  ) => {
    const { startTransition } = useTransition();
    const isInternal =
      typeof to === 'string' && (to.startsWith('/') || to.startsWith('#'));

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

    const content = (
      <>
        {children}
        {!isInternal && showNewTabIndicator !== false && (
          <span className="sr-only"> (opens in a new tab)</span>
        )}
      </>
    );

    if (isInternal) {
      return (
        <Link
          to={to}
          ref={ref}
          onClick={handleClick}
          className={`${className}`}
          {...props}
          preload="intent"
        >
          {content}
        </Link>
      );
    }
    return (
      <Link
        to={to}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className}`}
        {...props}
      >
        {content}
      </Link>
    );
  }
);

AppLink.displayName = 'AppLink';

export default AppLink;
