import Link from 'next/link';
import Image from 'next/image';
import facebook from '../public/facebook.svg';
import instagram from '../public/instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:items-start md:justify-evenly md:flex-row md:space-x-12">
          {/* Column 1: About */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Breeds</h3>
            <div className="text-sm text-gray-300 flex flex-col">
              <Link
                href="breeds/poodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Poodle
              </Link>
              <Link
                href="breeds/cavoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Cavoodle
              </Link>
              <Link
                href="breeds/labradoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Labradoodle
              </Link>
              <Link
                href="breeds/groodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Groodle
              </Link>
              <Link
                href="breeds/spoodle"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Spoodle
              </Link>
              <Link
                href="breeds/dachshund"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Dachshund
              </Link>
              <Link
                href="breeds/pugs"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Pugs
              </Link>
              <Link
                href="breeds/frenchbulldog"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                French Bulldog
              </Link>
              <Link
                href="breeds/bulldog"
                className="text-gray-300 hover:underline hover:text-red-400"
              >
                Bulldog
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
              <Link href="https://www.facebook.com/">
                <Image
                  className="hover:opacity-70"
                  src={facebook.src}
                  alt="Facebook link for business"
                  width="25"
                  height="25"
                />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image
                  className="hover:opacity-70"
                  src={instagram.src}
                  alt="Facebook link for business"
                  width="25"
                  height="25"
                />
              </Link>
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
