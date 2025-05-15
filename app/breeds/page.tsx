import Link from 'next/link';
import breedsData from '../../public/dogBreeds.json';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });
/* Need to code for 9 most popular dog breeds, rest go in a list */
const BreedsPage = () => {
  /* This removes any dog breed with "oodle", there will be one category for them */
  /* also limits to first 9 dog breeds in list.  */
  const breeds = [];
  for (const breed of breedsData.dogBreeds) {
    if (!breed.name.includes('oodle')) {
      breeds.push(breed);
    }
    if (breeds.length === 9) break;
  }

  const breedsList = breedsData.dogBreeds.filter(
    (breed) => !breeds.includes(breed)
  );
  console.log(breedsList);

  return (
    <div className="p-6 min-h-screen pb-20 mx-auto">
      <h1
        className={`${fredoka.className} text-red-500 text-4xl font-bold text-center mb-8`}
      >
        Dog Breeds
      </h1>
      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name
              .toLowerCase()
              .split(' ')
              .join('')}`}
            className="block w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-18px)] shadow-lg hover:shadow-xl transform rounded-xl hover:-translate-y-1 transition duration-300"
          >
            <Card className="bg-white h-full">
              <CardContent className="h-[250px] flex justify-center items-center overflow-hidden">
                <Image
                  className="object-fit rounded-lg overflow-hidden sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-h-[250px]"
                  src={breed.image}
                  fill={true}
                  alt={breed.name}
                />
              </CardContent>
              <CardFooter
                className={`${fredoka.className} bg-sky-900 text-white rounded-b-lg flex flex-row justify-center items-center h-[75px] p-0 -my-[1px] text-xl`}
              >
                {breed.name}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="w-full border-2 rounded-md">
        List of dog breeds
      </div>
    </div>
  );
};

export default BreedsPage;
