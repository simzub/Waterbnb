import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Filters />
      <MainContent />
      <Footer />
    </main>
  );
}
