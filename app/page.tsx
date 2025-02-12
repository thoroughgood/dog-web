import Image from 'next/image';
import dog from '../public/anime_puppy.webp';
import { Button } from '@/components/ui/button';
import dogGroup from '../public/imagebottomdogs.png';
import dogGroup2 from '../public/cornerbgremovedpuppies.png';
import {
  Chewy,
  Modak,
  Red_Hat_Display,
  Gluten,
} from 'next/font/google';
import localFont from 'next/font/local';

const modak = Modak({ subsets: ['latin'], weight: '400' });
const redHat = Red_Hat_Display({ subsets: ['latin'] });
const gluten = Gluten({ subsets: ['latin'], weight: '500' });
export default function Home() {
  return (
    <>
      <div className="bg-blue-300 w-full p-4 flex justify-center flex-col items-center shadow-md">
        <div
          className={`${gluten.className} text-2xl text-[#ba4c4d] text-center`}
        >
          Let us save you the hassle of finding the perfect breeder
        </div>

        <div className="w-full text-black text-center">
          At Pick A Pooch, we do all the searching for you.
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-items-center max-w-7xl min-h-screen mx-auto gap-0 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col text-left text-black gap-8 items-start">
          <div className="flex flex-row justify-evenly items space-x-16 pt-6 w-full lg:px-[120px] md:px-[60px] sm: px-0">
            <div
              className={`${gluten.className} w-1/2 text-left text-[#ba4c4d] rounded-md text-4xl md:text-6xl flex flex-col border-b-4 border-l-4 border-blue-200 justify-center items-start pl-5`}
            >
              Sydney-Based.
              <div
                className={`${redHat.className} text-lg font-thin text-black pt-4`}
              >
                Delivering to the Greater Sydney, South Coast and
                Central Coast regions
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                className="rounded p-1 m-10 max-w-[300px]"
                src={dog.src}
                layout="responsive"
                width="400"
                height="400"
                alt="Happy dog with tongue out"
              />
            </div>
          </div>

          <div
            className={`${gluten.className} text-[#ba4c4d] text-2xl flex flex-col justify-center w-full font-bold items-center ml-0 px-4 text-center`}
          >
            We procure highly desirable dog breeds from our select
            range of dog breeders
            <div
              className={`${redHat.className} text-black text-lg font-thin`}
            >
              the right puppy, at the right price, delivered right to
              your door.
            </div>
          </div>
          <div className="text-[#ba4c4d] font-bold text-xl w-full flex text-center justify-center items-center flex-col pb-64">
            Interested in what we've got to offer? Search our range of
            breeds
            <a href="./breeds" className="">
              <div className="text-2xl pt-4">
                <Button
                  className={`${redHat.className} items-center bg-red-500 text-white primary max-w-auto p-4 text-xl font-bold hover:bg-blue-500 duration-300 ease-in-out`}
                >
                  Breeds
                </Button>
              </div>
            </a>
          </div>
        </main>

        {/* The bottom image section */}
      </div>
      <div className="relative w-full">
        <div className="absolute bottom-[-37px] transform left-0">
          <Image
            className="rounded"
            src={dogGroup.src}
            width="275"
            height="300"
            alt="Group of dogs"
          />
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute bottom-[-51px] transform -right-7">
          <Image
            className="rounded"
            src={dogGroup2.src}
            width="275"
            height="300"
            alt="Group of dogs"
          />
        </div>
      </div>
    </>
  );
}
