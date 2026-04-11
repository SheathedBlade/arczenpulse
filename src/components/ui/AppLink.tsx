import { Link, LinkProps } from 'react-router-dom';
import { forwardRef, MouseEvent } from 'react';

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
    const isAssetFile =
      typeof to === 'string' && /\.[a-z0-9]+($|\?|#)/i.test(to);
    const isInternal =
      !isAssetFile &&
      typeof to === 'string' &&
      (to.startsWith('/') || to.startsWith('#'));

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      const isLeftClick = e.button === 0;
      const hasModifiers = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
      if (!isLeftClick || hasModifiers) return;

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
          className={`focus-visible:outline-none ${className ?? ''}`}
          {...props}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={to as string}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={`focus-visible:outline-none ${className ?? ''}`}
        {...props}
      >
        {content}
      </a>
    );
  }
);

AppLink.displayName = 'AppLink';

export default AppLink;
