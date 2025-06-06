'use client';
import packsData from '../../../public/packs.json';
import { notFound, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Fredoka, Red_Hat_Display } from 'next/font/google';
import Link from 'next/link';
import placeholder from '../../../public/Untitled.png';

const redHat = Red_Hat_Display({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });

export default function Page() {
  const pathname = usePathname().split('/')[2];
  const pack = packsData.packs.find(
    (b) =>
      b.name.toLowerCase().split(' ').join('') ===
      pathname.toLowerCase()
  );

  if (!pack) {
    notFound();
  }

  return (
    <div
      className={`min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 ${redHat.className}`}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className={`${fredoka.className} text-4xl gap-2 font-bold text-center flex flex-row justify-center sm:text-left text-gray-800 mb-6`}
        >
          <div className="text-sky-900"> {pack.name}</div>
          <div className="text-red-600">${pack.price}</div>
        </h1>

        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-center">
            <Image
              className="border-2 border-gray-300 rounded-lg w-full"
              src={placeholder}
              width={400}
              height={500}
              alt={pack.name}
            />
            <Link href={`../contact?breed=other`}>
              <button className="rounded-md w-full bg-sky-900 text-white p-3 mt-2 font-bold">
                ENQUIRE
              </button>
            </Link>
          </div>

          <div className="w-full xl:w-2/3 flex flex-col text-gray-700 gap-4 items-center">
            <div className="font-extrabold">{pack.slogan}</div>
            {pack.items.map((item) => (
              <div
                className="list-item font-semibold text-start"
                key={item}
              >
                1 {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center xl:items-start mt-6 xl:w-1/2">
          <div></div>
        </div>
      </div>
    </div>
  );
}
