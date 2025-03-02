import Link from 'next/link';
import breedsData from '../../public/dogBreeds.json';
import Image from 'next/image';
import bowl from '../../public/dog-dish-svgrepo-com.svg';
import bone from '../../public/bone-svgrepo-com.svg';
import ball from '../../public/tennis-ball-2-svgrepo-com.svg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const redHat = Red_Hat_Display({ subsets: ['latin'] });

const servicesPage = () => {
  return (
    <div className="p-6 max-w-7xl min-h-screen pb-20 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Services
      </h1>
      <Link href="/puppypack">
        <Card className="w-[350px] shadow-md hover:bg-gray-200 duration-100 ease-in-out">
          <CardHeader>
            <CardTitle className="text-red-500 self-center font-bold text-2xl">
              $150 Puppy Starter Kit
            </CardTitle>
            <CardDescription className="self-center">
              Get started with a kit for your puppy
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row justify-center items-center">
            <Image
              src={bowl.src}
              width="55"
              alt="dog bowl"
              height="55"
            ></Image>
            <Image
              src={bone.src}
              width="50"
              alt="bone"
              height="50"
            ></Image>
            <Image
              src={ball.src}
              width="45"
              alt="tennis ball"
              height="45"
            ></Image>
          </CardContent>
        </Card>
      </Link>
      <div className="pt-4 text-start text-xl text-zinc-700">
        Our service is to provide you with an easy and friendly way of
        purchasing your new puppy. In 2024, PickAPooch was developed
        with this vision in mind. Our goal is simple, to provide you
        with teh right puppy, at the best price, without the stress
        and time commitment that normally comes with finding your new
        friend. With PickaPooch, you can select your puppy, place your
        deposit and relax while we handle the rest, delivering your
        new furry friend directly to your door.
      </div>
    </div>
  );
};

export default servicesPage;
