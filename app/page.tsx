import Image from 'next/image';
import dog from '../public/anime_puppy.webp';
import { Button } from '@/components/ui/button';
import dogGroup from '../public/imagebottomdogs.png';
import dogGroup2 from '../public/cornerbgremovedpuppies.png';
import background from '../public/background.png'; // Import your background pattern
import {
  Chewy,
  Modak,
  Red_Hat_Display,
  Gluten,
  Fredoka,
} from 'next/font/google';
import localFont from 'next/font/local';
const modak = Modak({ subsets: ['latin'], weight: '400' });
const redHat = Red_Hat_Display({ subsets: ['latin'] });
const gluten = Gluten({ subsets: ['latin'], weight: '500' });
const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });
export default function Home() {
  return (
    <>
      <div className="bg-blue-300 w-full p-4 flex justify-center flex-col items-center shadow-md">
        <div
          className={`${fredoka.className} text-2xl text-[#ba4c4d] text-center`}
        >
          Let us save you the hassle of finding the perfect breeder
        </div>
        <div className="w-full text-black text-center">
          At Pick A Pooch, we do all the searching for you.
        </div>
      </div>

      {/* Main content with repeating background */}
      <main className="flex flex-col text-left text-black gap-8 items-start">
        <div className="flex flex-row justify-center items space-x-16 pt-6 w-full lg:px-[120px] md:px-[60px] sm: px-0">
          {/* there should be another div somewhere here to contain sydney-based and the delivering to the greater sydney regions
          that way we can size the flex box, and then have the items centered inside the flex box - TODO: fix the shitty margin soln*/}
          <div
            className={`${fredoka.className} text-left w-1/3 text-[#ba4c4d] rounded-sm text-4xl md:text-5xl flex flex-col border-b-4 border-l-4 border-blue-200 justify-center pl-5 ml-20`}
          >
            <div className="max-w-[300px] justify-center">
            SYDNEY-BASED.

            </div>
            <div
              className={`${redHat.className} text-lg font-thin text-black pt-4 max-w-[300px]`}
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
          className={`${fredoka.className} text-[#ba4c4d] text-2xl flex flex-col justify-center w-full font-bold items-center ml-0 px-4 text-center`}
        >
          We procure highly desirable dog breeds from our select range
          of dog breeders
          <div
            className={`${redHat.className} text-black text-lg font-thin`}
          >
            the right puppy, at the right price, delivered right to
            your door.
          </div>
        </div>
        <div className="text-[#ba4c4d] font-bold text-xl w-full flex text-center justify-center items-center flex-col pb-64">
          Interested in what we've got to offer? Search our range of
          breeds!
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
      {/* The bottom image sections */}
      <div className="relative w-full lg:-mt-32 md:-mt-24">
        <div className="absolute bottom-[-34px] transform left-0">
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
        <div className="absolute bottom-[-50px] transform right-0">
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
