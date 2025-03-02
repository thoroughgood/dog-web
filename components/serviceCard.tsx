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
      <Card className="w-[350px] shadow-md hover:bg-gray-200 duration-100 ease-in-out">
        <CardHeader>
          <CardTitle className="text-red-500 self-center font-bold text-2xl">
            {title}
          </CardTitle>

          <CardDescription className="self-center">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-row justify-center items-center">
          {images?.map((image) => {
            return (
              <Image
                src={image}
                width={55}
                height={55}
                key={image.src}
                alt="this is a test image"
              ></Image>
            );
          })}
        </CardContent>
      </Card>
    </Link>
  );
}
