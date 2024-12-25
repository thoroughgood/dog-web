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
          to the breed through the home page
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
        <div className="flex flex-row justify-start items-start">
          <Image
            className="border-2 border-gray-300"
            src={breed.image}
            width="500"
            height="500"
            alt="default"
          ></Image>
          <div className="flex flex-row gap-1">
            <div className="font-bold text-md md:text-lg pl-4">
              Description:
            </div>{' '}
            <div className="text-md md:text-lg">
              {breed.description}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-16">
          <div className="w-1/3 flex flex-col">
            <div className={`flex flex-col text-center text-3xl`}>
              Email here
            </div>
            <EmailForm breed={breed.name}></EmailForm>
          </div>
          <div className="flex flex-col text-center">
            <div className="text-3xl"> Call/Text here </div>
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
                  className="size-6"
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
