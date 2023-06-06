import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import NewCard from '@/components/NewCard';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Filters />
      <MainContent />
    </main>
  );
}
