import { forwardRef, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className, style }, ref) => {
    return (
      <div
        ref={ref}
        className={`h-auto w-full xl:min-h-svh ${className ?? ''}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

PageContainer.displayName = 'PageContainer';
export default PageContainer;
