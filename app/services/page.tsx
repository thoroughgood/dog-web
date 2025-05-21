import bowl from '../../public/dog-dish-svgrepo-com.svg';
import bone from '../../public/bone-svgrepo-com.svg';
import ball from '../../public/tennis-ball-2-svgrepo-com.svg';
import { Fredoka } from 'next/font/google';
import ServiceCard from '../../components/serviceCard';

const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });

const ServicesPage = () => {
  return (
    <div className="p-6 max-w-7xl min-h-screen mx-auto pb-20">
      <h1
        className={`${fredoka.className} text-4xl font-bold text-center text-red-500 mb-8`}
      >
        Our Services
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:justify-center items-center">
        <ServiceCard
          link="/services/starterpack"
          title="$159.99 Puppy Pack"
          description="Get started with a kit for your puppy"
          images={[bowl, bone, ball]}
        />
        <ServiceCard
          link="/services/foodpack"
          title="$49.99 Puppy Food Pack"
          description="Food for all your nutritious needs"
          images={[bowl, bone, ball]}
        />
      </div>

      <div className="mt-10 max-w-3xl mx-auto text-lg text-gray-700 leading-7 text-center">
        <p>
          At{' '}
          <span className="font-semibold text-red-500">
            Pick A Pooch
          </span>
          , we make finding your new furry friend easy and
          stress-free. Established in 2024, our mission is to connect
          you with the perfect puppy at the best price—without the
          hassle.
        </p>
        <p className="mt-4">
          Choose your puppy, place a deposit, and let us handle the
          rest. We’ll deliver your new companion straight to your
          door, ensuring a seamless and joyful experience for you and
          your pet.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
