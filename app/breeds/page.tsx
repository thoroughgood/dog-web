import Link from 'next/link';
import breedsData from '../../public/dogBreeds.json';
import Image from 'next/image';
import poodle from '../../public/poodle.webp';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
const redHat = Red_Hat_Display({ subsets: ['latin'] });
const BreedsPage = () => {
  const breeds = breedsData.dogBreeds;

  return (
    <div className="bg-white p-6 max-w-7xl min-h-screen pb-20 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Dog Breeds
      </h1>
      {/* Need to import images instead of putting names by default */}
      {/* 3x3 Grid */}
      <div className="flex flex-row justify-center gap-5 w-[2/4px] flex-wrap max-w-6xl mx-auto">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name.toLowerCase()}`}
            className="block shadow-lg h-[300px] shadow-black hover:shadow-xl transform rounded-xl hover:-translate-y-1 max-w-[350px] transition duration-300"
          >
            <Card className="border-gray-400">
              <CardTitle
                className={`${redHat.className} text-xl flex justify-center text-blue-400 font-bold`}
              >
                {breed.name}
              </CardTitle>
              <CardContent className="h-[210px]">
                <Image
                  className="p-2"
                  src={breed.image}
                  width="600"
                  height="500"
                  alt="default"
                ></Image>
              </CardContent>
              <CardFooter className="bg-blue-500 text-white rounded-b-lg flex justify-center pt-2">
                <Button className="bg-red-500 text-white">
                  {' '}
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreedsPage;
