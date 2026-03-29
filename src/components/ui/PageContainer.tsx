import { forwardRef, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className, style }, ref) => {
    return (
      <main
        ref={ref}
        className={`relative mx-auto w-full max-w-7xl overflow-x-hidden overflow-y-visible px-4 sm:px-6 lg:px-8 ${className ?? ''}`}
        style={style}
      >
        {children}
      </main>
    );
  }
);

PageContainer.displayName = 'PageContainer';
export default PageContainer;
