import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white flex flex-col flex-grow justify-items-center max-w-7xl min-h-screen pb-20 mx-auto gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-left text-black gap-8 items-start">
        <div className="bg-blue-200 w-full p-4 flex justify-center flex-col items-center shadow-md">
          <div className="text-3xl text-black text-center">
            Let us save you the hassle of finding the perfect breeder
          </div>
          <div className="w-full text-black text-center">
            At Pick A Pooch, we do all the searching for you.
          </div>
        </div>
        <div className="w-1/2 text-left ml-0 sm:ml-4 text-red-500 font-bold text-5xl pt-12 p-4 flex flex-grow flex-col">
          Located in Sydney
          <div className="text-xl">
            Delivering to the Greater Sydney, South Coast and Central
            Coast regions
          </div>
        </div>
        <div className="">We procure highly desirable dog breeds</div>
      </main>
    </div>
  );
}
