import Link from 'next/link';
import Image from 'next/image';
import facebook from '../public/facebook.svg';
import instagram from '../public/instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-blue-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:items-start md:justify-evenly md:flex-row md:space-x-12">
          {/* Column 1: About */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Breeds</h3>
            <div className="text-md flex flex-col text-gray-300 ">
              <Link
                href="/breeds/poodle"
                className="hover:underline hover:text-red-400"
              >
                Poodle
              </Link>
              <Link
                href="/breeds/cavoodle"
                className="hover:underline hover:text-red-400"
              >
                Cavoodle
              </Link>
              <Link
                href="/breeds/labradoodle"
                className="hover:underline hover:text-red-400"
              >
                Labradoodle
              </Link>
              <Link
                href="/breeds/groodle"
                className="hover:underline hover:text-red-400"
              >
                Groodle
              </Link>
              <Link
                href="/breeds/spoodle"
                className="hover:underline hover:text-red-400"
              >
                Spoodle
              </Link>
              <Link
                href="/breeds/dachshund"
                className="hover:underline hover:text-red-400"
              >
                Dachshund
              </Link>
              <Link
                href="/breeds/pug"
                className="hover:underline hover:text-red-400"
              >
                Pugs
              </Link>
              <Link
                href="/breeds/frenchbulldog"
                className="hover:underline hover:text-red-400"
              >
                French Bulldog
              </Link>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="mb-6 md:mb-0 md:text-left text-center">
            <h3 className="text-lg font-semibold mb-2">
              Quick Links
            </h3>
            <div className="text-md flex flex-col text-gray-300">
              <Link
                href="../"
                className="hover:underline hover:text-red-400"
              >
                Home
              </Link>
              <Link
                href="../about"
                className="hover:underline hover:text-red-400"
              >
                About Us
              </Link>
              <Link
                href="../contact"
                className="hover:underline hover:text-red-400"
              >
                Contact Us
              </Link>
            </div>
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
              <Link href="https://www.instagram.com/pickapoochau">
                <Image
                  className="hover:opacity-70"
                  src={instagram.src}
                  alt="Instagram link for business"
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
