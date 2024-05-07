import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '@/components/common/nav';
import LOGO from '@/assets/img/header/eigene_logoset-BrsaoOC6.png';
type Theme = null | 'dark' | 'light';
const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>(null);
  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };
  useEffect(() => {
    setTheme(document.body.className as Theme);
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 bg-white dark:bg-[#111111]"
      >
        {/* <div className=''>
          <img src={LOGO} alt="logo" />
        </div> */}

        <div className="text-black  h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <Link to="/"></Link>
          <div className="flex flex-nowrap gap-8 items-center">
            <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
