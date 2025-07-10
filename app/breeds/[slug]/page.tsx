import breedsData from '@/data/dogBreeds.json';
import BreedPageClient from '@/components/BreedPageClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// --- Type definitions ---
type PageParams = {
  // The 'params' object itself is now a Promise that resolves to the actual params
  params: Promise<{
    slug: string; // The 'slug' property inside the resolved object is a string
  }>;
};

// --- Generate Static Params ---
export async function generateStaticParams() {
  return breedsData.dogBreeds.map((breed) => ({
    slug: breed.name.toLowerCase().replace(/\s/g, ''),
  }));
}

// --- Metadata generation ---
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  // Await the 'params' promise to get the actual slug object
  const { slug } = await params;

  const breed = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!breed) notFound();

  return {
    title: breed.name,
    description: breed.description,
  };
}

// --- Page Component ---
export default async function Page({ params }: PageParams) {
  // Await the 'params' promise here as well to get the actual slug object
  const { slug } = await params;
  const breed = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!breed) {
    notFound();
  }

  return <BreedPageClient breed={breed} />;
}
