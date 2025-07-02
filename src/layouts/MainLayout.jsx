import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center">
      <Header className="shadow-lg" />
      <main className="bg-white w-[90%] lg:w-[80%] p-5 lg:p-10 shadow-lg">
        <Outlet /> {/* Páginas */}
      </main>
      <Footer className="shadow-lg" />
    </div>
  );
}