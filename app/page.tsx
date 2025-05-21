import Image from 'next/image';
import dog from '../public/anime_puppy.png';
import { Button } from '@/components/ui/button';
import dogGroup from '../public/imagebottomdogs.png';
import dogGroup2 from '../public/cornerbgremovedpuppies.png';
import about from '../public/profile.png';
import pawprint from '../public/pawprint.png';
import dog2 from '../public/dog.png';
import background from '../public/background.png'; // Import your background pattern
import {
  Chewy,
  Modak,
  Red_Hat_Display,
  Gluten,
  Fredoka,
  Open_Sans,
} from 'next/font/google';
import localFont from 'next/font/local';
import BrowseCard from '@/components/browseCard';
const modak = Modak({ subsets: ['latin'], weight: '400' });
const redHat = Red_Hat_Display({ subsets: ['latin'] });
const gluten = Gluten({ subsets: ['latin'], weight: '500' });
const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });
const open_sans = Open_Sans({ subsets: ['latin'], weight: '400' });
export default function Home() {
  return (
    <>
      <div className="bg-slate-400 w-full p-4 flex justify-center flex-col items-center shadow-md">
        <div
          className={`text-2xl text-slate-800 font-extrabold text-center`}
        >
          Let us save you the hassle of finding the perfect breeder
        </div>
        <div className="w-full text-black text-center">
          At Pick A Pooch, we do all the searching for you.
        </div>
      </div>

      {/* Main content with repeating background */}
      <main className="flex flex-col text-left text-black gap-8 items-start">
        <div className="flex flex-row pt-4 lg:gap-32 md:gap-16 sm:gap-4 max-w-screen-xl self-center md:px-[60px] sm: px-0">
          {/* there should be another div somewhere here to contain sydney-based and the delivering to the greater sydney regions
          that way we can size the flex box, and then have the items centered inside the flex box - TODO: fix the shitty margin soln*/}
          <div
            className={`${fredoka.className} w-1/2 text-sky-900 rounded-sm text-4xl md:text-5xl flex flex-col justify-center pl-5 `}
          >
            <div className="max-w-[400px] w-[600px] justify-center">
              SYDNEY-BASED.
            </div>
            <div
              className={`${open_sans.className} text-lg font-medium text-slate-700 pt-4 max-w-[400px]`}
            >
              Delivering to the Greater Sydney, South Coast and
              Central Coast regions
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              className="rounded p-1 max-w-[250px]"
              src={dog.src}
              layout="responsive"
              width="400"
              height="400"
              alt="Happy dog with tongue out"
            />
          </div>
        </div>
        <div className="bg-neutral-200/70 self-center w-screen pt-4 flex flex-col gap-4">
          <div
            className={`${fredoka.className} text-sky-900 text-2xl flex flex-col justify-center w-full font-bold items-center ml-0 px-4 text-center`}
          >
            We procure highly desirable dog breeds from our select
            range of dog breeders.
            <div
              className={`${open_sans.className} text-slate-700 text-lg font-normal mt-2`}
            >
              The right puppy, at the right price, delivered right to
              your door.
            </div>
          </div>
          <div className="text-[rgb(186,76,77)] font-bold text-xl w-full flex text-center justify-center items-center flex-col mt-2">
            Interested in what we've got to offer? Search our range!
            {/* <a href="./breeds" className="">
              <div className="text-2xl pt-4">
                <Button
                  className={`${redHat.className} items-center bg-red-500 text-white primary max-w-auto p-4 text-xl font-black hover:bg-blue-500 duration-300 ease-in-out`}
                >
                  Browse breeds
                </Button>
              </div>
            </a> */}
            <div className="mt-4 flex md:flex-row flex-col gap-14 mb-[230px] 2xl:mb-8">
              <BrowseCard
                link="./services"
                title="SERVICES"
                description="Check out our services for your puppies"
                images={[pawprint]}
              ></BrowseCard>{' '}
              <BrowseCard
                link="./about"
                title="ABOUT"
                description="Learn more about who we are and what we do"
                images={[about]}
              ></BrowseCard>{' '}
              <BrowseCard
                link="./breeds"
                title="BREEDS"
                description="View our selection of dog breeds"
                images={[dog2]}
              ></BrowseCard>
            </div>
          </div>
        </div>
      </main>
      {/* The bottom image sections */}
      <div className="relative w-full ">
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
