import { MetadataRoute } from 'next';
import breedsData from '@/data/dogBreeds.json';
import packsData from '@/data/packs.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = 'https://pickapooch.com.au';
  const breedsEntries: MetadataRoute.Sitemap =
    breedsData.dogBreeds.map(({ name }) => ({
      url: `${url}/breeds/${name.toLowerCase().split(' ').join('')}`,
    }));

  const packEntries: MetadataRoute.Sitemap = packsData.packs.map(
    ({ name }) => ({
      url: `${url}/services/${name
        .toLowerCase()
        .split(' ')
        .join('')}`,
    })
  );
  return [
    {
      url: `${url}/about`,
    },
    {
      url: `${url}/contact`,
    },
    {
      url: `${url}/breeds`,
    },
    {
      url: `${url}/services`,
    },
    {
      url: `${url}/`,
    },
    ...breedsEntries,
    ...packEntries,
  ];
}
