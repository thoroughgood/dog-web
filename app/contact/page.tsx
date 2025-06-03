'use client';
import { EmailForm } from '@/components/contactForm';
import { Button } from '@/components/ui/button';
import { Fredoka } from 'next/font/google';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });

export default function Home() {
  const breedParams = useSearchParams();
  const breed = breedParams.get('breed');
  console.log(breed);
  return (
    <Suspense>
      <div className="flex flex-col max-w-7xl min-h-screen pb-20 mx-auto px-4 md:px-8">
        <main className="flex flex-col text-left text-black gap-10 items-center justify-center mt-8">
          <h1
            className={`${fredoka.className} text-red-500 text-4xl md:text-4xl font-bold text-center`}
          >
            Contact Us
          </h1>

          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl items-center mt-16">
            <div className="w-full sm:w-1/2 shadow-md shadow-gray-400 rounded-md bg-white">
              <EmailForm breed={breed} />
            </div>
            <div className="flex flex-col text-lg gap-6 justify-center items-center w-full sm:w-1/2">
              <div className="bg-sky-900 p-6 rounded-md w-full shadow-md text-white text-center">
                <p className="pb-3">Text or Call Pick A Pooch at:</p>
                <a
                  href="tel:+61431892647"
                  className="flex justify-center"
                >
                  <Button className="flex flex-row bg-red-500 hover:bg-red-400 gap-2 items-center justify-center w-full">
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
                <a
                  href="mailto:puppies@pickapooch.com.au"
                  className="flex justify-center pt-3"
                >
                  <Button className="bg-red-500 hover:bg-red-400 w-full">
                    puppies@pickapooch.com.au
                  </Button>
                </a>
              </div>
              <div className="bg-sky-900 text-lg rounded-md p-6 text-white w-full shadow-md">
                <h2 className="text-2xl text-center pb-3">
                  Operating Hours
                </h2>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <span>Monday:</span> <span>9:00am - 5:00pm</span>
                  <span>Tuesday:</span> <span>9:00am - 5:00pm</span>
                  <span>Wednesday:</span> <span>9:00am - 5:00pm</span>
                  <span>Thursday:</span> <span>9:00am - 6:00pm</span>
                  <span>Friday:</span> <span>9:00am - 5:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
