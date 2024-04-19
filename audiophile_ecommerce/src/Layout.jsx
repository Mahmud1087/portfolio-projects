import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar, Sidebar, ThankYouModal } from './components/main';
import { useProductsContex } from './context/products_context';
import Cart from './components/cart/Cart';

export default function Layout() {
  const { isCartOpen, isModalOpen, isSideBarOpen } = useProductsContex();
  return (
    <div
      className={`${
        (isCartOpen || isModalOpen || isSideBarOpen) &&
        'fixed left-0 top-0 right-0'
      }`}
    >
      <ScrollRestoration />
      <Cart />
      <ThankYouModal />
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
