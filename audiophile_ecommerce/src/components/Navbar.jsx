import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import Logo from './Logo';
import { NavLinks } from '../components/main';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar, cartItems, showCart, hideCart } =
    useProductsContex();

  return (
    <div className='bg-[#141414] h-20 flex lg:items-center lg:justify-center'>
      <section className='flex items-center justify-between h-[inherit] border-b-2 border-b-[#ffffff2a] container'>
        <div className='flex items-center gap-6 text-light-100 lg:gap-x-44'>
          <button className='block btn lg:hidden'>
            <FaBars />
          </button>
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
