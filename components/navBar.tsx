'use client';
import { useState } from 'react';
import Link from 'next/link';
import image from '../public/pickapooch_1.webp';
import Image from 'next/image';
const Navbar = () => {
  const [isVisible, setIsOpen] = useState(false);
  console.log(isVisible);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                alt="Dog sticking head out of van logo image"
                width="100"
                height="100"
                src={image.src}
              ></Image>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isVisible)}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isVisible
                      ? 'M6 18L18 6M6 6l12 12' // Cross (X) when menu is open
                      : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon when menu is closed
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex">
            <div className="flex space-x-12 text-md font-bold">
              <Link href="/breeds">
                <div className="hover:text-gray-300">BREEDS</div>
              </Link>
              <Link href="/about">
                <div className="hover:text-gray-300">ABOUT</div>
              </Link>
              <Link href="/services">
                <div className="hover:text-gray-300">SERVICES</div>
              </Link>
              <Link href="/contact">
                <div className="hover:text-gray-300">CONTACT</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-500 ease-in-out ${
          isVisible ? 'max-h-96' : 'max-h-0' // Increased max-height for smoother transition
        } overflow-hidden`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 transform transition-all duration-500 ease-in-out flex flex-col items-center ${
            isVisible ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <Link href="/breeds">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Breeds
            </div>
          </Link>
          <Link href="/about">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </div>
          </Link>
          <Link href="/services">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
