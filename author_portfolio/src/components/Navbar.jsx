// import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logoo.png';
import { menuLinks, socials } from '../data';

function Navbar({ bg }) {
  // const [index, setIndex] = useState(1);
  // const [isActive,setIsActive] = useState(true)
  // const activeMenu = (id) =>{
  // (id+1)===index ?
  // }

  return (
    <nav className={`${bg}`}>
      <div className='flex justify-between gap-6 relative container-md lg:w-[70vw] lg:m-auto lg:py-6 '>
        <img src={logo} alt='Logo' className='w-12' />
        <article className='hidden gap-16 text-sm text-[#f3f3f3e3] font-chelsea lg:flex'>
          <div className='flex gap-6 items-center'>
            {menuLinks.map((menu) => {
              const { id, text, link } = menu;
              return (
                <a
                  key={id}
                  href={link}
                  className='relative before:absolute before:w-0 before:h-full before:border-orange-400 before:border-b-2 py-[2px] before:rounded-base hover:before:w-full before:transition-all delay-700'
                >
                  {text}
                </a>
              );
            })}
          </div>
          <section className='flex items-center gap-2'>
            {socials.map((item) => {
              const { id, link, icon } = item;
              return (
                <div
                  key={id}
                  className='p-[5px] h-fit w-fit border-2 border-gray-600 rounded-full text-base text-gray-300 hover:transition-all hover:bg-gray-600 hover:text-white'
                >
                  <a href={link}>{icon}</a>
                </div>
              );
            })}
          </section>
        </article>
        <button className='text-white border-none focus:outline-none text-lg'>
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
