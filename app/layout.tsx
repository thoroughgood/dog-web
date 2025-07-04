import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
const open_sans = Open_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Pick A Pooch', template: '%s - Pick A Pooch' },
  description:
    'Find and adopt the perfect puppy breed for your lifestyle. Pick A Pooch connects you with trusted breeders and helps you choose the right pup with ease.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, intiial-scale=1.0"
      />
      {/* bg-gray-200 separator */}
      <body
        className={`${open_sans.className} antialiased bg-gray-100`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
