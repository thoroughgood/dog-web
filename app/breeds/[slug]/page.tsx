'use client';
import breedsData from '@/data/dogBreeds.json';
import BreedPageClient from '@/components/BreedPageClient';
import { notFound, usePathname } from 'next/navigation';

// --- Page Component ---
export default function Page() {
  const pathname = usePathname().split('/')[2];

  const breed = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') ===
      pathname.toLowerCase()
  );

  if (!breed) {
    notFound();
  }

  return <BreedPageClient breed={breed} />;
}
