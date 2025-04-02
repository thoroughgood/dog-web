import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });

export default function About() {

  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-100 min-h-screen">
      <div className={`${fredoka.className} text-4xl font-bold text-red-600 mb-6 text-center uppercase`}>
        About Us
      </div>
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold text-red-500">PickAPooch</span>, your trusted source for healthy, happy,
          and adorable puppies delivered to your door. We believe in making the process of choosing your new furry friend as
          simple, convenient, and enjoyable as possible.
        </p>
        <p className="text-lg text-gray-700">
          Our journey began in 2017 when my wife and I started breeding pugs and French bulldogs with much success. Over the years,
          we've been proud to raise numerous litters that have brought joy and warmth to countless families. With a focus on health,
          temperament, and quality, we've built a reputation for providing well-socialized, loving puppies that make the perfect
          addition to your home.
        </p>
        <p className="text-lg text-gray-700">
          However, as times have changed, we have noticed that people no longer want to take the traditional route of visiting breeders
          in person. More and more prospective buyers reach out to us, asking about availability with the simple question:
          <span className="italic"> "Do you have a male or female available, and can we reserve one to pick up at 8 weeks of age?"</span>
          That's when we realized we had to adapt to meet our customers' needs.
        </p>
        <p className="text-lg text-gray-700">
          Over the years, I have met many different breeders and owners, developed great friendships, and partnered with them to create
          <span className="font-semibold text-red-500"> PickAPooch</span>—a service that takes the hassle out of choosing your next perfect puppy.
          You select your desired breed and pay your deposit, all from the comfort of your home. Once your puppy has been selected,
          we will handle the rest, bringing your puppy directly to your home and ensuring the process is as easy and stress-free as possible.
        </p>
      </div>
    </div>
  );
}
