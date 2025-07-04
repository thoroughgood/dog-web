import breedsData from '@/data/dogBreeds.json';
import BreedPageClient from '@/components/BreedPageClient';
import { notFound } from 'next/dist/client/components/not-found';
import { Metadata } from 'next';

// generateStaticParams should be async to satisfy Next.js expectations
export async function generateStaticParams() {
  return breedsData.dogBreeds.map((breed) => ({
    slug: breed.name.toLowerCase().replace(/\s/g, ''),
  }));
}

type PageParams = {
  params: {
    slug: string;
  };
};

// --- Metadata generation ---
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const slug = params.slug;
  const breeds = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!breeds) notFound();

  return {
    title: breeds.name,
    description: breeds.description,
  };
}

export default async function Page({ params }: PageParams) {
  const slug = params.slug;
  const breed = breedsData.dogBreeds.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!breed) {
    notFound();
    // You might want to handle not found here to avoid passing undefined to BreedPageClient
    // e.g. throw new Error('Breed not found') or use notFound() from next/navigation
  }

  return <BreedPageClient breed={breed} />;
}
