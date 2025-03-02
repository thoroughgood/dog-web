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
import ServiceCard from '../../components/serviceCard';
import { Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const redHat = Red_Hat_Display({ subsets: ['latin'] });

const servicesPage = () => {
  return (
    <div className="p-6 max-w-7xl min-h-screen pb-20 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Services
      </h1>
      <div className="flex flex-row justify-center gap-3">
        <ServiceCard
          link="/puppy-pack"
          title="$150 Puppy starter kit"
          description="Get started with a kit for your puppy"
          images={[bowl, bone, ball]}
        />
        <ServiceCard
          link="/puppy-pack"
          title="$150 Puppy starter kit"
          description="Get started with a kit for your puppy"
          images={[bowl, bone, ball]}
        />
        <ServiceCard
          link="/puppy-pack"
          title="$150 Puppy starter kit"
          description="Get started with a kit for your puppy"
          images={[bowl, bone, ball]}
        />
      </div>
      <div className="pt-4 text-start text-lg text-zinc-700 leading-7">
        Our service is to provide you with an easy and friendly way of
        purchasing your new puppy. In 2024, PickAPooch was developed
        with this vision in mind. Our goal is simple, to provide you
        with the right puppy, at the best price, without the stress
        and time commitment that normally comes with finding your new
        friend. With PickaPooch, you can select your puppy, place your
        deposit and relax while we handle the rest, delivering your
        new furry friend directly to your door.
      </div>
    </div>
  );
};

export default servicesPage;
