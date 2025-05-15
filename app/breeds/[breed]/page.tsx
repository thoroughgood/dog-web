'use client';
import breedsData from '../../../public/dogBreeds.json';
import { notFound, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import { EmailForm } from '@/components/contactForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });

export default function Page() {
  const pathname = usePathname().split('/')[2];
  const breed = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().split(' ').join('') ===
      pathname.toLowerCase()
  );

  if (!breed) {
    notFound();
  }

  return (
    <div
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 ${redHat.className}`}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className={`${fredoka.className} text-sky-900 text-4xl font-bold text-center flex justify-center sm:text-left mb-6`}
        >
          {breed.name}
        </h1>

        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
            <Image
              className="border-2 border-gray-300 rounded-lg w-full"
              src={breed.image}
              width={400}
              height={500}
              alt={breed.name}
            />
          </div>

          <div className="w-full xl:w-2/3 flex flex-col text-gray-700 gap-4">
            {breed.name === 'oodles' ? (
              <>
                <div className="text-center xl:text-left font-semibold">
                  Here are a list of our desirable oodle breeds:
                </div>
                <div className="flex flex-col text-center xl:text-left space-y-2">
                  {[
                    'Cavoodle',
                    'Groodle',
                    'Labradoodle',
                    'Poodle',
                    'Spoodle',
                  ].map((b) => (
                    <Link
                      key={b}
                      className="hover:text-blue-500 flex w-fit self-center"
                      href={`./${b.toLowerCase()}`}
                    >
                      {b}
                    </Link>
                  ))}
                </div>
                <div
                  className={`${fredoka.className} text-red-500 text-center xl:text-left mt-4 flex gap-4 flex-row justify-center items-center`}
                >
                  <div className="">
                    If you are interested in other breeds not listed
                    here, email or call us!
                  </div>

                  <a href="tel:+61431892647">
                    <Button className="bg-red-500 hover:bg-red-400 flex items-center gap-2 px-4 py-2">
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
                      0431 892 647
                    </Button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <strong>Description:</strong> {breed.description}
                </div>
                <div>
                  <strong>Characteristics:</strong>{' '}
                  {breed.characteristics}
                </div>
                <div>
                  <strong>Lifestyle:</strong> {breed.lifespan}
                </div>
                <div>
                  <strong>Temperament:</strong> {breed.temperament}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center xl:items-start mt-6 xl:w-1/2">
          <EmailForm breed={breed.name} />
        </div>
      </div>
    </div>
  );
}
