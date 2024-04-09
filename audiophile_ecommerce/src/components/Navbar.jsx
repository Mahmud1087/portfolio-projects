import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import Logo from './Logo';
import { NavLinks } from '../components/main';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar, closeSidebar, cartItems, toggleCart } =
    useProductsContex();

  return (
    <div className=' fixed top-0 left-0 z-50 w-full bg-[#141414] h-16 sm:h-28 lg:flex lg:items-center lg:justify-center lg:h-20 lg:relative'>
      <section className='flex items-center justify-between h-[inherit] border-b border-b-[#ffffff2a] container sm:border-b-2'>
        <div className='flex items-center gap-[6rem] text-light-100 sm:gap-6 lg:gap-x-44'>
          <button
            onClick={toggleSideBar}
            className='block btn sm:text-3xl lg:hidden'
          >
            {isSideBarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link to='/' onClick={closeSidebar}>
            <Logo />
          </Link>
          <div className=' hidden lg:flex'>
            <NavLinks Fsize='text-[12px]' />
          </div>
        </div>
        <button className='outline-none relative' onClick={toggleCart}>
          <img src={cart} alt='cart image' className='w-4 sm:w-9 lg:w-5' />
          <h1 className='absolute -top-4 -right-1 font-semibold text-sm text-orange-200 sm:text-3xl sm:-top-8 lg:text-sm lg:-top-4'>
            {cartItems}
          </h1>
        </button>
      </section>
    </div>
  );
}
