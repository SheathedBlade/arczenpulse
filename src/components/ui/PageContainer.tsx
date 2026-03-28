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
        className={`relative mx-auto min-h-screen w-full max-w-7xl overflow-x-hidden px-4 sm:px-6 lg:px-8 xl:min-h-svh ${className ?? ''}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

PageContainer.displayName = 'PageContainer';
export default PageContainer;
