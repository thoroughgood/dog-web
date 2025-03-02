'use client';
import breedsData from '../../../public/dogBreeds.json';
import { notFound, usePathname } from 'next/navigation';
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
  if (!breed) {
    notFound();
  }
  return (
    <div
      className={`min-h-screen mx-6 sm:mx-16 md:mx-32 lg:mx-48 bg-blue-50 p-6 ${redHat.className}`}
    >
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
        <h1 className="text-4xl font-bold text-center xl:text-left text-gray-800 m-4">
          {breed.name}
        </h1>
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-start justify-center items-center w-full max-w-full gap-4">
          <div className="w-[400px] flex justify-center md:justify-start">
            <Image
              className="border-2 w-full md:w-[400px] border-gray-300 rounded-lg"
              src={breed.image}
              width="400"
              height="500"
              alt="default"
            />
          </div>
          <div className="w-1/3 flex flex-col md:w-full md:text-lg text-md text-gray-700 gap-4 xl:gap-6">
            <div className="">
              <strong>Description:</strong> {breed.description}
            </div>
            <div className="">
              <strong>Temperament:</strong> {breed.temperament}
            </div>
            <div className="">
              <strong>Lifestyle:</strong> {breed.lifestyle}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full xl:w-1/3">
            <div className="w-full flex flex-col items-center">
              <EmailForm breed={breed.name} />
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="text-2xl font-semibold mb-4"></div>
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
      </div>

      {/* Contact Section */}
    </div>
  );
}
