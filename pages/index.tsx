import Image from 'next/image';
import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Filters />
    </main>
  );
}
