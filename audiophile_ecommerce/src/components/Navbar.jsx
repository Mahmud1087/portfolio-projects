import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import Logo from './Logo';
import { NavLinks } from '../components/main';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar, cartItems, toggleCart } =
    useProductsContex();

  return (
    <div className=' fixed top-0 left-0 z-50 w-full bg-[#141414] h-28 lg:flex lg:items-center lg:justify-center lg:h-20 lg:relative'>
      <section className='flex items-center justify-between h-[inherit] border-b-2 border-b-[#ffffff2a] container'>
        <div className='flex items-center gap-6 text-light-100 lg:gap-x-44'>
          <button className='block btn text-3xl lg:hidden'>
            <FaBars />
          </button>
          <Logo />
          <div className=' hidden lg:flex'>
            <NavLinks Fsize='text-[12px]' />
          </div>
        </div>
        <button className='outline-none relative' onClick={toggleCart}>
          <img src={cart} alt='cart image' className='w-9 lg:w-5' />
          <h1 className='absolute -top-8 -right-1 font-semibold text-3xl text-orange-200 lg:text-sm lg:-top-4'>
            {cartItems}
          </h1>
        </button>
      </section>
    </div>
  );
}
