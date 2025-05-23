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

interface BrowseCardProps {
  link: string;
  title: string;
  description: string;
  images?: StaticImageData[];
}
export default function BrowseCard({
  link,
  title,
  description,
  images,
}: BrowseCardProps) {
  return (
    <Link href={link}>
      <Card className="w-[250px] shadow-lg shadow-zinc-400 border-zinc-300 duration-100 ease-in-out h-[200px] hover:bg-gray-100">
        <CardHeader>
          <CardTitle
            className={`text-red-500 tracking-wide self-center font-bold text-2xl`}
          >
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
