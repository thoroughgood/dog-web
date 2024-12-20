import Link from 'next/link';
import Image from 'next/image';
import facebook from '../public/facebook.svg';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between md:flex-row md:space-x-12">
          {/* Column 1: About */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Breeds</h3>
            <div className="text-sm text-gray-300 flex flex-col">
              <Link
                href="breeds/poodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                poodle
              </Link>
              <Link
                href="breeds/cavoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                cavoodle
              </Link>
              <Link
                href="breeds/labradoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                labradoodle
              </Link>
              <Link
                href="breeds/groodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                groodle
              </Link>
              <Link
                href="breeds/spoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                spoodle
              </Link>
              <Link
                href="breeds/dachshund"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                dachshund
              </Link>
              <Link
                href="breeds/pugs"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                pugs
              </Link>
              <Link
                href="breeds/frenchbulldog"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                french bulldog
              </Link>
              <Link
                href="breeds/bulldog"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                bulldog
              </Link>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="mb-6 md:mb-0 md:text-left text-center">
            <h3 className="text-lg font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-gray-300 hover:text-red-400 hover:underline"
                  href="../"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-red-400 hover:underline"
                  href="../about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-red-500 hover:underline"
                  href="../contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Image
                src={facebook.src}
                alt="Facebook link for business"
                width="25"
                height="25"
              />
              <a
                href="#"
                className="text-gray-300 hover:text-red-500"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>ABN 71 522 934 713</p>
          <p>
            &copy; {new Date().getFullYear()} Pick A Pooch. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
