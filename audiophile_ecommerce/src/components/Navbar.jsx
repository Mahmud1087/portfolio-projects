import { useProductsContex } from '../context/products_context';
import cart from '../assets/cart.png';
import { links } from '../data';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar } = useProductsContex();

  return (
    <div className='bg-dark-300 h-20 flex items-center justify-center'>
      <section className='flex items-center justify-between h-[inherit] container border border-b-[#979797]'>
        <div className='flex items-center gap-x-44 text-light-100'>
          <Logo />
          <ul className='flex items-center gap-10'>
            {links.map((list) => {
              const { id, text, url } = list;
              return (
                <NavLink
                  key={id}
                  to={url}
                  className={`${({ isActive }) => {
                    return isActive ? 'active' : '';
                  }} text-[12px] hover:text-orange-200 transition-all delay-100 tracking-[2px]`}
                >
                  <li>{text.toUpperCase()}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <button className='outline-none'>
          <img src={cart} alt='cart image' className='w-5' />
        </button>
      </section>
    </div>
  );
}
