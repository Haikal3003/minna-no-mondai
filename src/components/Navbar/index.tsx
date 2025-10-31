import { Link, useLocation } from 'react-router-dom';
import { RiHome3Line, RiHome3Fill } from 'react-icons/ri';
import { PiQuestionLight, PiQuestionFill } from 'react-icons/pi';

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: '/', line: <RiHome3Line size={22} />, fill: <RiHome3Fill size={22} />, match: '/' },
    { to: '/kotoba', line: <span className="text-sm">言葉</span>, fill: <span className="text-sm font-bold">言葉</span>, match: '/kotoba' },
    { to: '/bunpou', line: <span className="text-sm">文法</span>, fill: <span className="text-sm font-bold">文法</span>, match: '/bunpou' },
    { to: '/kanji', line: <span className="text-sm">漢字</span>, fill: <span className="text-sm font-bold">漢字</span>, match: '/kanji' },
    { to: '/tentang', line: <PiQuestionLight size={22} />, fill: <PiQuestionFill size={22} />, match: '/tentang' },
  ];

  return (
    <nav className="fixed top-1/2 left-10 -translate-y-1/2 z-50 bg-white border border-red-500 rounded-full p-2">
      <div className="flex flex-col items-center justify-center gap-2">
        {navItems.map((item) => {
          const isActive = item.match === '/' ? location.pathname === item.match : location.pathname.startsWith(item.match);

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all
                ${isActive ? 'bg-red-500 text-yellow-400 border-yellow-400' : 'bg-white text-gray-600 border-red-500 hover:bg-red-200'}
              `}
            >
              {isActive ? item.fill : item.line}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
