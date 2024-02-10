// import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logoo.png';
import MenuLinks from './MenuLinks';

function Navbar({ bg, toggle, toggleOpen }) {
  // const [index, setIndex] = useState(1);
  // const [isActive,setIsActive] = useState(true)
  // const activeMenu = (id) =>{
  // (id+1)===index ?
  // }

  return (
    <nav className={`${bg}`}>
      <div className='flex justify-between gap-6 relative container-md-nav lg:w-[70vw] lg:m-auto lg:py-6 '>
        <img src={logo} alt='Logo' className='w-12 sm:w-16 lg:w-12' />
        <article className='hidden gap-16 text-sm text-[#f3f3f3e3] font-chelsea lg:flex'>
          <MenuLinks />
        </article>
        <button
          className='text-white border-none focus:outline-none text-lg sm:text-3xl lg:hidden'
          onClick={toggleOpen}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
