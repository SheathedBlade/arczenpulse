import { useLocation, useNavigate } from '@tanstack/react-router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

interface TransitionContextType {
  // isTransitioning: boolean;
  startTransition: (to: string) => void;
  pendingPath: string | null;
  commitTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);
const ANIMATION_DURATION = 500; // in ms

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const startTransition = useCallback(
    (to: string) => {
      if (to === location.pathname) return;
      setPendingPath(to);
    },
    [location.pathname]
  );

  const commitTransition = useCallback(() => {
    if (!pendingPath) return;
    navigate({ to: pendingPath });
    setPendingPath(null);
  }, [pendingPath, navigate]);

  // setTimeout(() => {
  //   navigate({ to });
  //   setIsTransitioning(false);
  //   setTransitioningFrom(null);
  // }, ANIMATION_DURATION);
  // },
  // [isTransitioning, navigate, location.pathname]

  const value = {
    startTransition,
    pendingPath,
    commitTransition
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context)
    throw new Error('useTransition must be used within TransitionProvider');
  return context;
};
