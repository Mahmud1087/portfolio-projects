import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar } from './components/main';
import { useProductsContex } from './context/products_context';
import Cart from './components/cart/Cart';

export default function Layout() {
  const { isCartOpen } = useProductsContex();
  return (
    <div className={`${isCartOpen && 'fixed left-0 top-0 right-0'}`}>
      <ScrollRestoration />
      {isCartOpen && <Cart />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
