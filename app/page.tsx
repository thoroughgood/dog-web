import Image from 'next/image';
import dog from '../public/anime_dog.webp';
export default function Home() {
  return (
    <div className="bg-white flex flex-col flex-grow justify-items-center max-w-7xl min-h-screen pb-20 mx-auto gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-left text-black gap-8 items-start">
        <div className="bg-blue-200 w-full p-4 flex justify-center flex-col items-center shadow-md">
          <div className="text-3xl text-red-500 font-bold text-center">
            Let us save you the hassle of finding the perfect breeder
          </div>
          <div className="w-full text-black text-center">
            At Pick A Pooch, we do all the searching for you.
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="w-1/2 text-left ml-0 sm:ml-4 text-red-500 font-bold text-7xl pt-16 p-4 flex flex-grow flex-col">
            Sydney-Based.
            <div className="text-lg font-thin text-black pt-4">
              Delivering to the Greater Sydney, South Coast and
              Central Coast regions
            </div>
          </div>
          <Image
            className="rounded-xl bg-blue-300 p-4"
            src={dog.src}
            width="400"
            height="400"
            alt="Happy dog with tongue out"
          ></Image>
        </div>

        <div className="text-red-500 text-2xl sm:ml-4 ml-0 p-4">
          We procure highly desirable dog breeds from our select range
          of dog breeders
        </div>
      </main>
    </div>
  );
}
