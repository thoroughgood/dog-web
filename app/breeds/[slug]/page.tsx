import breedsData from '@/data/dogBreeds.json';
import BreedPageClient from '@/components/BreedPageClient';
import { notFound } from 'next/dist/client/components/not-found';

// generateStaticParams should be async to satisfy Next.js expectations
export async function generateStaticParams() {
  return breedsData.dogBreeds.map((breed) => ({
    slug: breed.name.toLowerCase().replace(/\s/g, ''),
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
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
