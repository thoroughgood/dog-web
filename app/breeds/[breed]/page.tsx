'use client';
import { GetServerSideProps } from 'next';
import breedsData from '../../../public/dogBreeds.json';

export default function Page() {
  const breed = context.params
  console.log(breed);
  const res = breedsData.dogBreeds.find(
    (b) => b.name.toLowerCase() === (breed as string)?.toLowerCase
  );
  if (res === undefined) {
    return (
      <div className="max-w-6xl mx-auto mt-12">
        <div className="text-4xl font-bold text-red-600">
          {' '}
          Uh oh! You're not supposed to be here.
        </div>
        <div className="text-red-600 text-lg pt-4">
          {' '}
          Check that the breed is spelt correctly or redirect yourself
          to the breed through the home page
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {res.name}
        </h1>
        {res.description}
      </div>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { breed } = context.params as {breed: string;}
    const breed = 
}
