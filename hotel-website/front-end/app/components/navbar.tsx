import Image from 'next/image';
import Button from './button';
import NavItems from './navItems';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 bg-black w-full backdrop-filter backdrop-blur-sm bg-opacity-80'>
      <section className='w-[90%] mx-auto flex justify-between items-center h-20'>
        <Image src='/logo.png' alt='Logo' width={50} height={50} priority />
        <NavItems />
        <Button
          title='reservation'
          link='/reservation'
          color='text-gray-800'
          bgColor='bg-sec'
        />
      </section>
    </nav>
  );
};
export default Navbar;
