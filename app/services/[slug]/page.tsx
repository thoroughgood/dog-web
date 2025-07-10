import packsData from '@/data/packs.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PackPageClient from '@/components/PackPageClient';

// --- Type definitions ---
type PageParams = {
  // For Next.js 15+, 'params' is a Promise that resolves to an object
  params: Promise<{
    slug: string; // The 'slug' property inside the resolved object is a string
  }>;
};

// --- Metadata generation ---
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  // Await the 'params' promise to get the actual slug object
  const { slug } = await params;

  const pack = packsData.packs.find(
    (p) =>
      p.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return {
    title: pack.name,
    description: pack.slogan,
  };
}

// --- Page component ---
// This component needs to be 'async' because we are 'await'ing 'params'
export default async function Page({ params }: PageParams) {
  // Await the 'params' promise here to get the actual slug object
  const { slug } = await params;

  const pack = packsData.packs.find(
    (p) =>
      p.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return <PackPageClient pack={pack} />;
}
