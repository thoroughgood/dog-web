import Image from 'next/image';
import Contact, { EmailForm } from '@/components/contactForm';

export default function Home() {
  return (
    <div className=" flex flex-col flex-grow justify-items-center max-w-7xl min-h-screen pb-20 mx-auto gap-32 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-left text-black gap-4 items-center justify-center mt-12">
        <div className="flex flex-grow w-full text-red-500 text-7xl font-bold items-center justify-center">
          CONTACT US
        </div>

        <div className="flex flex-col gap-4 text-black sm:gap-0 sm:flex-row flex-grow justify-between w-3/">
          <div className="w-1/2 h-full shadow-md shadow-gray-400 rounded-md">
            <EmailForm></EmailForm>
          </div>
          <div className="flex flex-col flex-grow text-xl gap-4 justify-center items-center rounded-md max-w-2/3 pb-8 px-0 sm:px-4">
            <div className="bg-blue-300 p-4 rounded-md w-full shadow-md shadow-gray-400">
              <div className="">
                Business owner, Mark. Text or call
              </div>
              <div className="flex flex-row gap-2 items-center">
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
              </div>
              <div className="">puppies@pickapooch.com.au</div>
            </div>
            <div className="bg-blue-300 text-lg rounded-md p-8 text-left flex flex-col sm:flex-row gap-2 w-full max-w-full min-w-[1/2] shadow-md shadow-gray-400">
              <div className="text-3xl">Operating Hours</div>
              <div className="flex-col flex">
                <div> Monday: 9:00am - 5:00pm </div>
                <div> Tuesday: 9:00am - 5:00pm </div>
                <div> Wednesday: 9:00am - 5:00pm</div>
                <div> Thursday: 9:00am - 6:00pm </div>
                <div> Friday: 9:00am - 5:00pm </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
