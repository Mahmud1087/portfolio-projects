import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './components/main';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
