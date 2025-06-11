import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { StaticImageData } from 'next/image';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], weight: '500' });
interface serviceCardProps {
  link: string;
  title: string;
  description: string;
  images?: StaticImageData[];
}

export default function ServiceCard({
  link,
  title,
  description,
  images,
}: serviceCardProps) {
  return (
    <Link href={link}>
      <Card className="w-[350px] shadow-md duration-100 ease-in-out h-[200px] hover:bg-gray-100">
        <CardHeader>
          <CardTitle
            className={`text-blue-500 ${fredoka.className} self-center font-bold text-2xl`}
          >
            {title}
          </CardTitle>

          <CardDescription className="self-center">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-row justify-center items-center align-middle">
          {images?.map((image) => {
            return (
              <Image
                src={image}
                className=""
                width={50}
                key={image.src}
                alt="this is a row of relevant items to the pack"
              ></Image>
            );
          })}
        </CardContent>
      </Card>
    </Link>
  );
}
