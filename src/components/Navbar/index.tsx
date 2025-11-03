import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiHome3Line, RiHome3Fill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { PiQuestionLight, PiQuestionFill } from 'react-icons/pi';

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/', line: <RiHome3Line size={22} />, fill: <RiHome3Fill size={22} />, match: '/' },
    { to: '/kotoba', line: <span className="text-sm">言葉</span>, fill: <span className="text-sm font-bold">言葉</span>, match: '/kotoba' },
    { to: '/bunpou', line: <span className="text-sm">文法</span>, fill: <span className="text-sm font-bold">文法</span>, match: '/bunpou' },
    { to: '/kanji', line: <span className="text-sm">漢字</span>, fill: <span className="text-sm font-bold">漢字</span>, match: '/kanji' },
    { to: '/tentang', line: <PiQuestionLight size={22} />, fill: <PiQuestionFill size={22} />, match: '/tentang' },
  ];

  const renderLinks = (vertical = true) =>
    navItems.map((item) => {
      const isActive = item.match === '/' ? location.pathname === item.match : location.pathname.startsWith(item.match);
      return (
        <Link
          key={item.to}
          to={item.to}
          className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all
            ${isActive ? 'bg-red-500 text-yellow-400 border-yellow-400' : 'bg-white text-gray-600 border-red-500 hover:bg-red-200'}
            ${vertical ? 'mb-2' : 'mr-4'}
          `}
          onClick={() => setOpen(false)}
        >
          {isActive ? item.fill : item.line}
        </Link>
      );
    });

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-1/2 left-10 -translate-y-1/2 z-50 bg-white border border-red-500 rounded-full p-2 flex-col items-center">{renderLinks()}</nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button onClick={() => setOpen(!open)} className="text-2xl flex justify-center items-center w-12 h-12 rounded-full border border-red-500 bg-white">
          {open ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && <div className="md:hidden fixed top-0 right-0 bottom-0   z-40 p-4 flex flex-col">{renderLinks()}</div>}
    </>
  );
}
