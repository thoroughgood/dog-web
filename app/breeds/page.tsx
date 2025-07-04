import Link from 'next/link';
import breedsData from '@/data/dogBreeds.json';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Fredoka, Open_Sans } from 'next/font/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Metadata } from 'next';
interface Breed {
  name: string;
  description: string;
  characteristics: string;
  lifespan: string;
  temperament: string;
  bodyimage: string;
  headimage: string;
}
const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });
const open_sans = Open_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Dog Breeds',
  description:
    'Take a look at our prepared service packages, offering the best quality puppy needs at convenient and low prices.',
};

/* Need to code for 9 most popular dog breeds, rest go in a list */
const BreedsPage = () => {
  /* This removes any dog breed with "oodle", there will be one category for them */
  /* also limits to first 9 dog breeds in list.  */
  const breeds: Breed[] = [];
  //Removes all oodle variations, poodle is not part of this and Cavoodle is most popular so we take it out of the pool
  for (const breed of breedsData.dogBreeds) {
    if (
      !breed.name.includes('oodle') ||
      breed.name.includes('Cavoodle')
    ) {
      breeds.push(breed);
    }
    if (breeds.length === 10) break;
  }

  const breedsList = breedsData.dogBreeds.filter(
    (breed) => !breeds.includes(breed)
  );

  return (
    <div className="p-6 min-h-screen pb-20 mx-auto">
      <h1
        className={`${fredoka.className} text-red-500 text-4xl font-bold text-center mb-2`}
      >
        Dog Breeds
      </h1>
      <h3
        className={`${open_sans.className} $text-black text-xl text-center`}
      >
        Prices are subject to change based on{' '}
        <Dialog>
          <DialogTrigger className="text-red-500 underline">
            availability
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Extra Information about availability
              </DialogTitle>
              <DialogDescription>
                Due to the nature of dog breeding, not all breeds will
                be available all year round. We will try our best,
                however, to ensure transparent and prompt
                communication.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </h3>
      <h3
        className={`${open_sans.className} text-black text-xl text-center mb-8`}
      >
        Pay a 50% initial deposit, and the rest when you&apos;re done.
      </h3>
      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name
              .toLowerCase()
              .split(' ')
              .join('')}`}
            className="block w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-18px)] shadow-lg hover:shadow-xl transform rounded-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
          >
            <Card className="bg-white h-full">
              <CardContent className="h-[250px] flex justify-center items-center overflow-hidden">
                <Image
                  className="object-fit rounded-lg overflow-hidden sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-h-[250px]"
                  src={breed.headimage}
                  fill={true}
                  alt={breed.name}
                />
              </CardContent>
              <CardFooter
                className={`${fredoka.className} bg-blue-500 text-white text-center rounded-b-lg flex flex-row justify-center items-center h-[75px] p-0 -my-[1px] text-xl`}
              >
                {breed.name}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="w-3/4 flex m-auto">
        <div className="flex flex-wrap gap-6 justify-center pt-6">
          {breedsList.map((breed) => (
            <Link
              key={breed.name}
              href={`/breeds/${breed.name
                .toLowerCase()
                .split(' ')
                .join('')}`}
            >
              <div className="border-2 rounded-md px-12 hover:translate-y-[-4px] py-3 shadow-md duration-100 ease-in-out bg-white text-blue-500">
                {breed.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsPage;
