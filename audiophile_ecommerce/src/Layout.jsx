import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar } from './components/main';

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
