'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-theme="light" className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <b>RESTO</b>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          {isOpen && (
            <div className="fixed inset-0 bg-base-100 z-50">
              <div className="navbar-end absolute top-0 right-0 p-4">
                <button className="btn btn-ghost" onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="menu menu-compact flex flex-col items-center justify-center h-full text-xl">
                <li>
                  <Link href="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product" onClick={toggleMenu}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/innovation" onClick={toggleMenu}>
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/news" onClick={toggleMenu}>
                    News
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/innovation">Innovation</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;