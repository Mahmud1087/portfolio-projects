import logo from '../assets/logoo.png';
import { menuLinks, socials } from '../data';

function Navbar({ bg }) {
  return (
    <nav className={`${bg}`}>
      <div className='w-[70vw] m-auto py-6 flex justify-between gap-6 relative'>
        <img src={logo} alt='Logo' className='w-12' />
        <article className='flex gap-16 text-sm text-[#f3f3f3e3] font-chelsea'>
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
                  className='p-[5px] h-fit w-fit border-2 border-gray-600 rounded-full text-base text-gray-300'
                >
                  <a href={link}>{icon}</a>
                </div>
              );
            })}
          </section>
        </article>
      </div>
    </nav>
  );
}
export default Navbar;
