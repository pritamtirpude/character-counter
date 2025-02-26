import useTheme from '@/hooks/useTheme';
import iconMoon from '/assets/icon-moon.svg';
import iconSun from '/assets/icon-sun.svg';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      className="flex size-11 flex-col items-center justify-center rounded-lg bg-counter-neutral-400 dark:bg-counter-neutral-700"
      onClick={handleTheme}
    >
      {theme === 'light' ? (
        <img src={iconMoon} alt="moon icon" />
      ) : (
        <img src={iconSun} alt="sun icon" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
