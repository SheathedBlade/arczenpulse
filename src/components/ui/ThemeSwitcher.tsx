import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        key={isDark ? 'dark' : 'light'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
        onClick={toggleTheme}
        className="bg-sakura-accent hover:bg-sakura-bloom ease inline-block rounded-md p-1.5 transition-colors duration-150 md:mr-4"
      >
        {isDark ? (
          <SunIcon
            aria-hidden="true"
            size={32}
            className="text-sakura-day-text"
          />
        ) : (
          <MoonStarsIcon
            aria-hidden="true"
            size={32}
            className="text-sakura-night-text"
            weight="fill"
          />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeSwitcher;
