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
const BreedsPage = () => {
  const breeds = breedsData.dogBreeds;

  return (
    <div className="bg-white p-6 max-w-7xl min-h-screen pb-20 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Dog Breeds
      </h1>
      {/* Need to import images instead of putting names by default */}
      {/* 3x3 Grid */}
      <div className="flex flex-row justify-center gap-3 w-[2/4px] flex-wrap max-w-6xl mx-auto">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name.toLowerCase()}`}
            className="block shadow-lg w-[600px] h-[300px] shadow-black rounded-lg hover:shadow-xl transform hover:-translate-y-1 max-w-[300px] transition duration-300"
          >
            <Card>
              <CardTitle>{breed.name}</CardTitle>
              <CardContent className="w-auto h-auto">
                <Image
                  className="py-10 opacity-10"
                  src={breed.image}
                  layout="fill"
                  alt="default"
                ></Image>
              </CardContent>
              <CardFooter className="bg-black">
                Buy now! asdasdasdasdasd asdasdasdasasdasdasdasdasd
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreedsPage;
