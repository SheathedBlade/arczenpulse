import { useNavigate } from '@tanstack/react-router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (to: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);
const ANIMATION_DURATION = 500; // in ms

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();

  const navigateWithTransition = useCallback(
    (to: string) => {
      if (!isTransitioning) return;
      setIsTransitioning(false);

      setTimeout(() => {
        navigate({ to });
        setIsTransitioning(true);
      }, ANIMATION_DURATION);
    },
    [isTransitioning, navigate]
  );

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, navigateWithTransition }}
    >
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
