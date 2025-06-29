import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center shadow-lg rounded-lg">
      <Header />
      <main className="bg-white w-[80%] p-20">
        <Outlet /> {/* Páginas */}
      </main>
      <Footer />
    </div>
  );
}