import Link from 'next/link';
import breedsData from '../../public/dogBreeds.json';
import Image from 'next/image';
import placeholder from '../../public/Untitled.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const fredoka = Fredoka({subsets: ['latin'], weight: '600'})

const BreedsPage = () => {
  const breeds = breedsData.dogBreeds.filter((breeds) => {
    if(!breeds.name.includes("oodle")) return breeds
  });

  breeds.unshift({name: "oodles", description: "blank", temperament: "blank", lifestyle: "blank", image: placeholder.src})

  return (
    <div className="p-6 min-h-screen pb-20 mx-auto">
      <h1 className={`${fredoka.className} text-red-500 text-4xl font-bold text-center mb-8`}>
        Dog Breeds
      </h1>
      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name.toLowerCase()}`}
            className="block w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shadow-lg hover:shadow-xl transform rounded-xl hover:-translate-y-1 transition duration-300"
          >
            <Card className="bg-white h-full">
              <CardContent className="h-[250px] flex justify-center items-center overflow-hidden">
                <Image
                  className="object-cover rounded-lg overflow-hidden sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-h-[250px]"
                  src={placeholder}
                  fill={true}
                  alt={breed.name}
                />
              </CardContent>
              <CardFooter className={`${fredoka.className} bg-sky-900 text-white rounded-b-lg flex flex-row justify-center items-center h-[75px] p-0 -my-[1px] text-xl`}>
                {breed.name}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreedsPage;