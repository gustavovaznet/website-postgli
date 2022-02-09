//HEADER COMPONENT

//IMPORTING
//REACT
import { useState, useEffect } from 'react';
//NEXT COMPONENTS
import Image from 'next/image';
import Link from 'next/link';

//HEADER
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  //HANDLE RESIZE
  const handleResize = () => {
    if (window.innerWidth < 1024) {
    } else {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  //RETURN
  return (
    <>
      {/* MENU */}
      <div
        className={`fixed w-full z-30 h-screen pt-24 bg-black text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-full'
        }`}
      >
        <div className="container relative mx-auto">
          <nav className="block ml-auto">
            {/* HORIZONTAL MENU */}
            <ul className="z-30 flex flex-col items-start">
              <li className="z-30 inline-flex flex-shrink w-full mb-0 leading-8 text-gray-600 list-none focus:outline-none group">
                <Link href="/">
                  <a
                    className={`header_link h-full w-full py-2 text-lg`}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="h-full py-2 tracking-normal transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-blue group-hover:text-white opacity-70 group-hover:opacity-100">
                      Home
                    </span>
                  </a>
                </Link>
              </li>
              <li className="z-30 inline-flex flex-shrink w-full mb-0 leading-8 text-gray-600 list-none focus:outline-none group">
                <Link href="/who-we-are">
                  <a
                    className={`header_link h-full w-full py-2 text-lg`}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="h-full py-2 transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-blue group-hover:text-white opacity-70 group-hover:opacity-100">
                      Sobre nós
                    </span>
                  </a>
                </Link>
              </li>
              <li className="z-30 inline-flex flex-shrink w-full mb-0 leading-8 text-gray-600 list-none focus:outline-none group">
                <Link href="/what-we-do">
                  <a
                    className={`header_link h-full w-full py-2 text-lg`}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="h-full py-2 transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-blue group-hover:text-white opacity-70 group-hover:opacity-100">
                      Serviços
                    </span>
                  </a>
                </Link>
              </li>
              <li className="z-30 inline-flex flex-shrink w-full mb-0 leading-8 text-gray-600 list-none focus:outline-none group">
                <Link href="/clients">
                  <a
                    className={`header_link h-full w-full py-2 text-lg`}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="h-full py-2 transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-blue group-hover:text-white opacity-70 group-hover:opacity-100">
                      Clientes
                    </span>
                  </a>
                </Link>
              </li>
              <li className="z-30 inline-flex flex-shrink w-full mb-0 leading-8 text-gray-600 list-none focus:outline-none group">
                <Link href="/contact">
                  <a
                    className={`header_link h-full w-full py-2 text-lg`}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="h-full py-2 transition-all duration-300 ease-in-out border-b-2 border-transparent group-hover:border-blue group-hover:text-white opacity-70 group-hover:opacity-100">
                      Contato
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav
        className={
          'flex flex-wrap items-center justify-between z-50 fixed w-full bg-black h-24'
        }
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="relative z-50 flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            {/* Logo */}
            <div className="z-50 flex-shrink-0 object-scale-down w-40 mr-auto motion-safe:animate-fadeSlideDown">
              <Link href="/">
                <a>
                  <Image src="/logo.svg" width={1550} height={421} />
                </a>
              </Link>
            </div>
            {/* MOBILE MENU */}
            <button
              className="relative w-10 h-10 text-white focus:outline-none lg:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                    navbarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                    navbarOpen
                      ? 'w-0 -translate-x-1 opacity-50'
                      : 'w-5 delay-200 opacity-100'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                    navbarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
          {/* // NAV */}
          <div
            className={`motion-safe:animate-fadeSlideDown hidden flex-grow items-center transition duration-500 ease-in-out mt-4 lg:mt-0 lg:flex`}
            id="navbar"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/">
                  <a className="v-nav">Home</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/who-we-are">
                  <a className="v-nav">Sobre nós</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/what-we-do">
                  <a className="v-nav">Serviços</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/clients">
                  <a className="v-nav">Clientes</a>
                </Link>
              </li>
              <li className="mx-0 nav-item lg:mx-4">
                <Link href="/contact">
                  <a className="v-nav">Contato</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

//EXPORTING HEADER
export default Header;
