import Image from 'next/image';
import Enquire from '@/components/enquire';
import { Fredoka, Red_Hat_Display } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });

interface PackParams {
  name: string;
  slogan: string;
  price: string;
  image: string;
  items: string[];
}

export default function PackPageClient({
  pack,
}: {
  pack: PackParams;
}) {
  return (
    <main
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 ${redHat.className}`}
      aria-label={`Puppy Pack: ${pack.name}`}
    >
      <article
        className="max-w-5xl mx-auto"
        aria-labelledby="pack-heading"
      >
        <header>
          <h1
            id="pack-heading"
            className={`${fredoka.className} text-4xl gap-2 font-bold text-center flex flex-row justify-center sm:text-left text-gray-800 mb-6`}
          >
            <span className="text-sky-900">{pack.name}</span>
            <span
              className="text-red-600"
              aria-label={`Price $${pack.price}`}
            >
              ${pack.price}
            </span>
          </h1>
        </header>

        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start">
          <aside className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-center">
            <figure>
              <Image
                className="border-2 border-gray-300 rounded-lg w-full"
                src={pack.image}
                width={400}
                height={500}
                loading="lazy"
                alt={`Pack image for ${pack.name}`}
                role="img"
              />
              <figcaption className="sr-only">
                {pack.name} image
              </figcaption>
            </figure>
            <Enquire breed="other" />
          </aside>

          <section
            className="w-full xl:w-2/3 flex flex-col text-gray-700 gap-4 items-start"
            aria-label="Pack details"
          >
            <p className="font-extrabold">{pack.slogan}</p>

            <ul
              className="list-disc list-inside font-semibold"
              aria-label="Pack contents"
            >
              {pack.items.map((item) => (
                <li key={item}>1 {item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
