import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white flex flex-col flex-grow justify-items-center max-w-7xl min-h-screen pb-20 mx-auto gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-left text-black gap-8 items-start mt-8">
        <div className="flex w-full text-red-500 text-4xl font-bold items-center justify-center">
          CONTACT US
        </div>
        <div className="flex flex-row flex-grow m-8 justify-between gap-8 max-w-lg w-2/3">
          <div className="flex flex-col text-2xl justify-center items-center">
            <div className="">Mark, Business owner</div>
            <div className="text-2xl flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              0431892647
            </div>
            <div className="text-2xl">puppies@pickapooch.com.au</div>
          </div>
        </div>
      </main>
    </div>
  );
}
