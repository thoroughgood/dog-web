import Link from 'next/link';

interface enquireProps {
  breed: string;
}

export default function Enquire({ breed }: enquireProps) {
  return (
    <>
      <Link href={`/contact?breed=${breed}`}>
        <button className="rounded-md w-full bg-blue-500 text-white p-3 mt-2 font-bold">
          ENQUIRE
        </button>
      </Link>
    </>
  );
}
