import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import Logo from './Logo';
import { NavLinks } from '../components/main';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar, cartItems, showCart, hideCart } =
    useProductsContex();

  return (
    <div className='bg-[#141414] h-20 flex items-center justify-center'>
      <section className='flex items-center justify-between h-[inherit] container border-b-2 border-b-[#ffffff2a]'>
        <div className='flex items-center gap-x-44 text-light-100'>
          <Logo />
          <NavLinks />
        </div>
        <button className='outline-none relative' onClick={showCart}>
          <img src={cart} alt='cart image' className='w-5' />
          <h1 className='absolute -top-4 -right-1 text-sm text-orange-200'>
            {cartItems}
          </h1>
        </button>
      </section>
    </div>
  );
}
