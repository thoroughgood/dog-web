import Link from 'next/link';
import breedsData from '../../public/dogBreeds.json';

const BreedsPage = () => {
  const breeds = breedsData.dogBreeds;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Dog Breeds
      </h1>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={`/breeds/${breed.name.toLowerCase()}`}
            className="block bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-red-300">
                {breed.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreedsPage;
