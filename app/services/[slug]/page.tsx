import packsData from '@/data/packs.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PackPageClient from '@/components/PackPageClient';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const slug = params.slug;
  const pack = packsData.packs.find(
    (b) =>
      b.name.toLowerCase().split(' ').join('') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return {
    title: pack.name,
    description: 'Puppy service packs',
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const pack = packsData.packs.find(
    (b) =>
      b.name.toLowerCase().replace(/\s/g, '') === slug.toLowerCase()
  );

  if (!pack) notFound();

  return <PackPageClient pack={pack} />;
}
