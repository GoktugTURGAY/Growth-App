import companyLogo from '../assets/images/growth/company-logo.png';
import companyLogoWhite from '../assets/images/growth/company-logo-white.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { act, useState } from 'react';

import Cta from './Cta';

const MainNav = () => {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const underlineAnimation =
    "relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:content-[''] hover:after:origin-left hover:after:scale-x-100 ";

  const updateUI = () => {
    setActive(!active);
  };

  window.addEventListener('scroll', () => {
    if (active) updateUI();

    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && active) updateUI();
  });

  return (
    <header
      className={`${scrolling ? 'bg-[#2b5799]/90 backdrop-blur-sm' : 'bg-initial'} text-dark fixed top-0 right-0 left-0 z-50 w-full py-2 transition-all duration-400`}
    >
      <div
        onClick={() => active && updateUI()}
        className={`absolute top-0 right-0 left-0 z-66 h-screen transition-colors duration-800 ease-in-out ${active ? 'visible bg-(--overlay-clr) opacity-100' : 'invisible bg-transparent opacity-0'} `}
        aria-hidden="true"
      ></div>

      <div className="max-w-big mx-auto flex h-[55px] items-center justify-between p-8 md:px-8">
        <a className="shrink-0 cursor-pointer" href="/">
          <img
            className="pb-1"
            src={scrolling ? companyLogoWhite : companyLogo}
            alt="Company logo containing company name -Growth- with a 45deg rotated short blue line on the top right corner"
          />
        </a>

        <button
          onClick={updateUI}
          className={`z-500 block ${active ? 'rotate-360' : 'rotate-0'} cursor-pointer ${scrolling && 'text-primary-50'} text-2xl ${active ? 'text-white' : 'text-dark'} transition-all duration-400 ease-in-out md:hidden`}
          type="button"
          aria-expanded="false"
          aria-controls="navigation"
          aria-label="Hamburger button"
        >
          {active ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`bg-dark text-dark-50 md:text-dark fixed top-0 right-0 z-100 h-screen w-(--offcanvas-width) px-8 py-32 transition-transform duration-600 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent md:px-0 ${active ? 'translate-x-0' : 'translate-x-full'} shadow-lg md:translate-x-0 md:shadow-none`}
          id="navigation"
        >
          <ul className="flex flex-col items-end gap-10 text-lg font-semibold tracking-tight md:flex-row md:items-center md:px-0">
            <li>
              <a
                onClick={() => active && updateUI()}
                className={`${underlineAnimation} ${active && 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50'} ${scrolling ? 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50' : 'text-dark after:bg-dark hover:after:bg-dark'} `}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => active && updateUI()}
                className={`${underlineAnimation} ${active && 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50'} ${scrolling ? 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50' : 'text-dark after:bg-dark hover:after:bg-dark'} `}
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => active && updateUI()}
                className={`${underlineAnimation} ${active && 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50'} ${scrolling ? 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50' : 'text-dark after:bg-dark hover:after:bg-dark'} `}
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => active && updateUI()}
                className={`${underlineAnimation} ${active && 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50'} ${scrolling ? 'text-primary-50 after:bg-primary-50 hover:after:bg-primary-50' : 'text-dark after:bg-dark hover:after:bg-dark'} `}
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <Cta
                paddingInline="px-6"
                paddingBlock="py-2.5"
                text="Get Covered"
                textSize="text-base"
                active={active}
                eventHandler={updateUI}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNav;
