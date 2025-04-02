import Link from 'next/link';
import Image from 'next/image';
import bowl from '../../public/dog-dish-svgrepo-com.svg';
import bone from '../../public/bone-svgrepo-com.svg';
import ball from '../../public/tennis-ball-2-svgrepo-com.svg';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import ServiceCard from '../../components/serviceCard';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });

const ServicesPage = () => {
  return (
    <div className="p-6 max-w-7xl min-h-screen mx-auto pb-20">
      <h1 className={`${fredoka.className} text-4xl font-bold text-center text-red-500 mb-8`}>
        Our Services
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
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
      
      <div className="mt-10 max-w-3xl mx-auto text-lg text-gray-700 leading-7 text-center">
        <p>
          At <span className="font-semibold text-red-500">PickAPooch</span>, we make finding your new furry friend easy and stress-free.
          Established in 2024, our mission is to connect you with the perfect puppy at the best price—without the hassle.
        </p>
        <p className="mt-4">
          Choose your puppy, place a deposit, and let us handle the rest. We’ll deliver your new companion straight to your door,
          ensuring a seamless and joyful experience for you and your pet.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
