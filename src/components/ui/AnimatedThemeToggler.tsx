import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { FiMoon, FiSun } from 'react-icons/fi'; // ← pakai react-icons

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number;
  className?: string;
}

export const AnimatedThemeToggler = ({ className, duration = 400, ...props }: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Set tema awal dari localStorage
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Fungsi toggle tema + animasi
  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return;

    const newTheme = !isDark;

    flushSync(() => {
      setIsDark(newTheme);
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    });

    // Efek animasi lingkaran
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

    const animation = document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing: 'ease-in-out',
      }
    );

    animation.onfinish = () => {
      document.documentElement.style.clipPath = '';
    };
  }, [isDark, duration]);

  return (
    <button ref={buttonRef} onClick={toggleTheme} className={`p-2 rounded-full transition-all hover:rotate-12 active:scale-95 ${className || ''}`} {...props}>
      {isDark ? <FiSun size={22} /> : <FiMoon size={22} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
