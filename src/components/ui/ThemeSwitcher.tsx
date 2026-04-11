import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
      onClick={toggleTheme}
      className="bg-sakura-accent hover:bg-sakura-bloom ease mr-4 inline-flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-150"
    >
      {isDark ? (
        <SunIcon
          aria-hidden="true"
          size={18}
          className="text-sakura-day-text"
        />
      ) : (
        <MoonStarsIcon
          aria-hidden="true"
          size={18}
          className="text-sakura-night-text"
          weight="fill"
        />
      )}
      <span className="font-dmmono text-sakura-bg inline w-12 text-center text-xs tracking-widest uppercase">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
