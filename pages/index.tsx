import Image from 'next/image';
import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Filters />
      <MainContent />
    </main>
  );
}
