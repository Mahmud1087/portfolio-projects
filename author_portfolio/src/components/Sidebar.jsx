import logo from '../assets/logoo.png';
import { FaTimes } from 'react-icons/fa';
import { menuLinks, socials } from '../data';

const Sidebar = ({ toggle, toggleOpen }) => {
  return (
    <section
      className={`absolute ${
        toggle ? 'top-0' : '-top-full'
      } bg-gray-900 left-0 w-screen h-screen z-10 text-gray-300 font-chelsea transition-all`}
    >
      <div className='container-md-nav flex items-center justify-between'>
        <img src={logo} alt='Logo' className='w-12 sm:w-16 lg:w-12' />
        <button
          className='text-2xl text-red-200 border-none focus:outline-none'
          onClick={toggleOpen}
        >
          <FaTimes />
        </button>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center text-2xl'>
        {menuLinks.map((menu) => {
          const { id, text, link } = menu;
          return (
            <a key={id} href={link} onClick={toggleOpen}>
              {text}
            </a>
          );
        })}
      </div>
      <hr className='mt-16 border-orange-300' />
      <article className='flex justify-evenly items-center w-full mt-16 text-3xl'>
        {socials.map((social) => {
          const { id, link, icon } = social;
          return (
            <a key={id} href={link} onClick={toggleOpen}>
              {icon}
            </a>
          );
        })}
      </article>
    </section>
  );
};
export default Sidebar;
