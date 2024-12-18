import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between md:flex-row md:space-x-12">
          {/* Column 1: About */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Breeds</h3>
            <div className="text-sm text-gray-300 flex flex-col">
              <Link href="breeds/poodle">poodle</Link>
              <Link href="breeds/cavoodle">cavoodle</Link>
              <Link href="breeds/labradoodle">labradoodle</Link>
              <Link href="breeds/groodle">groodle</Link>
              <Link href="breeds/spoodle">spoodle</Link>
              <Link href="breeds/dachshund">dachshund</Link>
              <Link href="breeds/pugs">pugs</Link>
              <Link href="breeds/frenchbulldog">french bulldog</Link>
              <Link href="breeds/bulldog">bulldog</Link>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="mb-6 md:mb-0 md:text-left text-center">
            <h3 className="text-lg font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-300 hover:text-red-400 hover:underline"
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-red-500 hover:underline"
                  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-red-500"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
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
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
