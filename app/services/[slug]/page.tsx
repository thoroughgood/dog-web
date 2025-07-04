import packsData from '@/data/packs.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PackPageClient from '@/components/PackPageClient';

// --- Type definitions ---
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
  const pack = packsData.packs.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return {
    title: pack.name,
    description: pack.slogan,
  };
}

// --- Page component ---
export default function Page({ params }: PageParams) {
  const slug = params.slug;
  const pack = packsData.packs.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return <PackPageClient pack={pack} />;
}
