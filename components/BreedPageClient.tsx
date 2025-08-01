'use client';

import Image from 'next/image';
import Enquire from '@/components/enquire';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });

interface BreedParams {
  name: string;
  bodyimage: string;
  headimage: string;
  description: string;
  lifespan: string;
  characteristics: string;
  temperament: string;
}

export default function BreedPageClient({
  breed,
}: {
  breed: BreedParams;
}) {
  if (!breed) {
    return <div role="alert">Breed not found.</div>;
  }

  return (
    <main
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 ${redHat.className}`}
      aria-label={`Information about ${breed.name}`}
    >
      <article
        className="max-w-5xl mx-auto"
        aria-labelledby="breed-heading"
      >
        <header>
          <h1
            id="breed-heading"
            className={`${fredoka.className} text-sky-900 text-4xl font-bold text-center flex justify-center sm:text-left mb-6`}
          >
            {breed.name}
          </h1>
        </header>

        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start">
          <aside className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-center">
            <figure>
              <Image
                className="border-2 border-gray-300 rounded-lg w-full"
                src={breed.bodyimage}
                width={400}
                height={500}
                loading="lazy"
                alt={`An image of a ${breed.name}`}
                role="img"
              />
              <figcaption className="sr-only">
                Full-body image of a {breed.name}
              </figcaption>
            </figure>
            <Enquire breed={breed.name} />
          </aside>

          <section
            className="w-full xl:w-2/3 flex flex-col text-gray-700 gap-4"
            aria-label="Breed Information"
          >
            {breed.name === 'Oodles' ? (
              <>
                <p className="text-center xl:text-left font-semibold">
                  Here are a list of our desirable oodle breeds:
                </p>
                <ul className="flex flex-col text-center xl:text-left space-y-2 list-disc list-inside">
                  {[
                    'Cavoodle',
                    'Groodle',
                    'Labradoodle',
                    'Spoodle',
                  ].map((b) => (
                    <li key={b}>
                      <Link
                        className="hover:text-blue-500"
                        href={`./${b.toLowerCase()}`}
                      >
                        {b}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={`${fredoka.className} text-red-500 text-center xl:text-left mt-4 flex flex-col xl:flex-row gap-4 items-center`}
                  aria-label="Contact information"
                >
                  <p>
                    If you are interested in other breeds not listed
                    here, email or call us!
                  </p>
                  <a
                    href="tel:+61431892647"
                    aria-label="Call 0431 892 647"
                  >
                    <Button className="bg-red-500 hover:bg-red-400 flex items-center gap-2 px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        aria-hidden="true"
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
              <div className="text-lg space-y-4">
                <section aria-label="Breed description">
                  <strong>Description:</strong> {breed.description}
                </section>
                <section aria-label="Breed characteristics">
                  <strong>Characteristics:</strong>{' '}
                  {breed.characteristics}
                </section>
                <section aria-label="Breed lifestyle">
                  <strong>Lifestyle:</strong> {breed.lifespan}
                </section>
                <section aria-label="Breed temperament">
                  <strong>Temperament:</strong> {breed.temperament}
                </section>
              </div>
            )}
          </section>
        </div>

        {/* Future form integration area */}
        <footer className="flex flex-col items-center xl:items-start mt-6 xl:w-1/2">
          {/* <EmailForm breed={breed.name} /> */}
        </footer>
      </article>
    </main>
  );
}
