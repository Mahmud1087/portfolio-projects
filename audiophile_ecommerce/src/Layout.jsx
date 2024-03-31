import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar, ThankYouModal } from './components/main';
import { useProductsContex } from './context/products_context';
import Cart from './components/cart/Cart';

export default function Layout() {
  const { isCartOpen, isModalOpen } = useProductsContex();
  return (
    <div
      className={`${
        (isCartOpen || isModalOpen) && 'fixed left-0 top-0 right-0'
      }`}
    >
      <ScrollRestoration />
      {isCartOpen && <Cart />}
      {isModalOpen && <ThankYouModal />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
