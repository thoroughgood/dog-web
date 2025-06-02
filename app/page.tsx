import Image from 'next/image';
import dog from '../public/anime_puppy.png';
import dogGroup from '../public/leftcornerdogs.png';
import dogGroup2 from '../public/imagerightdogs.png';
import about from '../public/profile.png';
import pawprint from '../public/pawprint.png';
import dog2 from '../public/dog.png';
import { Fredoka, Open_Sans } from 'next/font/google';
import BrowseCard from '@/components/browseCard';
import Link from 'next/link';

const fredoka = Fredoka({ subsets: ['latin'], weight: '600' });
const open_sans = Open_Sans({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced with gradient and better spacing */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-full py-16 flex justify-center flex-col items-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className={`${fredoka.className} text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight`}
          >
            Let us save you the hassle of finding the perfect breeder
          </div>
          <div
            className={`${open_sans.className} text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed`}
          >
            At{' '}
            <span className={`${fredoka.className}`}>
              Pick A Pooch
            </span>
            , we do all the searching for you.
          </div>
          <Link href="/breeds">
            <div className="mt-8 inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Search Today
            </div>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <main className="flex flex-col text-left text-black">
        {/* Sydney-based section - Enhanced with better layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div
                  className={`${fredoka.className} text-transparent bg-clip-text bg-gradient-to-br from-sky-900 to-blue-800 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
                >
                  SYDNEY-BASED.
                </div>
                <div
                  className={`${open_sans.className} text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg`}
                >
                  Delivering to the Greater Sydney regions
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-blue-800 justify-center lg:justify-start">
                  <span className="bg-blue-100 px-4 py-2 rounded-full font-medium">
                    Greater Sydney
                  </span>
                  <span className="bg-blue-100 px-4 py-2 rounded-full font-medium">
                    South Coast
                  </span>
                  <span className="bg-blue-100 px-4 py-2 rounded-full font-medium">
                    Central Coast
                  </span>
                  <span className="bg-blue-100 px-4 py-2 rounded-full font-medium">
                    Shoalhaven
                  </span>
                  <span className="bg-blue-100 px-4 py-2 rounded-full font-medium">
                    Illawarra
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-red-200 rounded-3xl blur-xl opacity-30"></div>
                  <Image
                    className="relative rounded-3xl shadow-2xl max-w-md w-full"
                    src={dog.src}
                    layout="responsive"
                    width="400"
                    height="400"
                    alt="Happy dog with tongue out"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className={`${fredoka.className} text-blue-800 text-4xl md:text-5xl font-bold mb-8 leading-tight`}
            >
              We procure highly desirable dog breeds from our select
              range of dog breeders.
            </div>
            <div
              className={`${open_sans.className} text-slate-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed`}
            >
              The right puppy, at the right price, delivered right to
              your door.
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:bg-neutral-100 transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${fredoka.className} text-xl font-bold text-sky-900 mb-3`}
                >
                  Vetted Breeders
                </h3>
                <p
                  className={`${open_sans.className} text-slate-600`}
                >
                  All our breeders are carefully selected and verified
                  for quality and ethics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:bg-neutral-100 transition-shadow">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3
                  className={`${fredoka.className} text-xl font-bold text-sky-900 mb-3`}
                >
                  Fast Matching
                </h3>
                <p
                  className={`${open_sans.className} text-slate-600`}
                >
                  We quickly connect you with the perfect puppy that
                  matches your preferences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:bg-neutral-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0H17M9 19v.01M20 19v.01"
                    />
                  </svg>
                </div>
                <h3
                  className={`${fredoka.className} text-xl font-bold text-sky-900 mb-3`}
                >
                  Door Delivery
                </h3>
                <p
                  className={`${open_sans.className} text-slate-600`}
                >
                  Safe and comfortable delivery directly to your home
                  across Sydney regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`${fredoka.className} text-white text-3xl md:text-4xl font-bold mb-6`}
            >
              Interested in what we&apos;ve got to offer? Search our
              range!
            </div>
            <div className="flex flex-col items-center md:flex-row gap-8 mt-12">
              <BrowseCard
                link="./services"
                title="SERVICES"
                description="Check out our services for your puppies"
                images={[pawprint]}
              />
              <BrowseCard
                link="./about"
                title="ABOUT"
                description="Learn more about who we are and what we do"
                images={[about]}
              />
              <BrowseCard
                link="./breeds"
                title="BREEDS"
                description="View our selection of dog breeds"
                images={[dog2]}
              />
            </div>
          </div>
        </section>

        {/* Testimonial or Stats Section - NEW */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`${fredoka.className} text-center text-blue-800 text-4xl md:text-5xl font-bold mb-16`}
            >
              Trusted by Sydney Dog Lovers
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className={`${fredoka.className} text-4xl font-bold text-red-500 mb-2`}
                >
                  100+
                </div>
                <div
                  className={`${open_sans.className} text-slate-600 text-lg`}
                >
                  Happy Families
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`${fredoka.className} text-4xl font-bold text-blue-500 mb-2`}
                >
                  50+
                </div>
                <div
                  className={`${open_sans.className} text-slate-600 text-lg`}
                >
                  Trusted Breeders
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`${fredoka.className} text-4xl font-bold text-red-500 mb-2`}
                >
                  27
                </div>
                <div
                  className={`${open_sans.className} text-slate-600 text-lg`}
                >
                  Dog Breeds
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`${fredoka.className} text-4xl font-bold text-blue-500 mb-2`}
                >
                  5
                </div>
                <div
                  className={`${open_sans.className} text-slate-600 text-lg`}
                >
                  Service Regions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`${fredoka.className} text-4xl md:text-5xl font-bold mb-6`}
            >
              Ready to Find Your Perfect Companion?
            </div>
            <div
              className={`${open_sans.className} text-xl mb-8 opacity-90`}
            >
              Let us do the hard work while you prepare for your new
              family member.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/breeds">
                <button className="bg-red-500 hover:bg-white hover:text-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom decorative images - Enhanced positioning */}
      <div className="relative">
        <div className="absolute bottom-[-37px] left-[-68px] z-10">
          <Image
            className="rounded-tr-3xl"
            src={dogGroup.src}
            width="250"
            height="100"
            alt="Group of dogs"
          />
        </div>
        <div className="absolute bottom-[-37px] right-[-67px] z-10">
          <Image
            className="rounded-tl-3xl"
            src={dogGroup2.src}
            width="250"
            height="150"
            alt="Group of dogs"
          />
        </div>
        {/* Spacer to prevent content overlap */}
        <div className=" h-44"></div>
      </div>
    </>
  );
}
