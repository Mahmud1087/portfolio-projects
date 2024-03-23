import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import Logo from './Logo';
import { NavLinks } from '../components/main';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar } = useProductsContex();

  return (
    <div className='bg-[#141414] h-20 flex items-center justify-center'>
      <section className='flex items-center justify-between h-[inherit] container border-b-2 border-b-[#ffffff2a]'>
        <div className='flex items-center gap-x-44 text-light-100'>
          <Logo />
          <NavLinks />
        </div>
        <button className='outline-none'>
          <img src={cart} alt='cart image' className='w-5' />
        </button>
      </section>
    </div>
  );
}
