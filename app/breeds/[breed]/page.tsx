'use client';
import breedsData from '../../../public/dogBreeds.json';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Modak, Red_Hat_Display } from 'next/font/google';
import { EmailForm } from '@/components/contactForm';
import { Button } from '@/components/ui/button';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const modak = Modak({ subsets: ['latin'], weight: '400' });

export default function Page() {
  const pathname = usePathname().split('/')[2];
  const breed = breedsData.dogBreeds.find(
    (b) => b.name.toLowerCase() === pathname.toLowerCase()
  );
  console.log(breed);

  if (breed === undefined) {
    return (
      <div className="max-w-6xl mx-auto mt-12">
        <div className="text-4xl font-bold text-red-600">
          {' '}
          Uh oh! You're not supposed to be here.
        </div>
        <div className="text-red-600 text-lg pt-4">
          {' '}
          Check that the breed is spelt correctly or redirect yourself
          to the breed through the home page.
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`min-h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-32 bg-blue-50 p-6 ${redHat.className}`}
      >
        <h1 className="text-4xl font-bold text-left text-gray-800 m-4">
          {breed.name}
        </h1>
        <div className="flex flex-col md:flex-row justify-start items-start gap-6 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              className="border-2 w-full md:w-[300px] border-gray-300 rounded-lg"
              src={breed.image}
              width="300"
              height="500"
              alt="default"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            <div className="text-md md:text-lg text-gray-700">
              <strong>Description:</strong> {breed.description}
            </div>
            <div className="text-md md:text-lg text-gray-700">
              <strong>Temperament:</strong> {breed.temperament}
            </div>
            <div className="text-md md:text-lg text-gray-700">
              <strong>Lifestyle:</strong> {breed.lifestyle}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 md:gap-12 mt-8">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="text-2xl font-semibold mb-4">
              Email Us
            </div>
            <EmailForm breed={breed.name} />
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="text-2xl font-semibold mb-4">
              Call or Text Us
            </div>
            <a
              href="tel:+61431892647"
              className="flex justify-center"
            >
              <Button className="flex flex-row bg-red-500 hover:bg-red-400 gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                0431892647
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
