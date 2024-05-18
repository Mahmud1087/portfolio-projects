'use client';

import { nanoid } from 'nanoid';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });
const navData = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'rooms',
    link: '/rooms',
  },
  {
    title: 'amenities',
    link: '/amenities',
  },
  {
    title: 'gallery',
    link: '/gallery',
  },
  {
    title: 'tour',
    link: '/tour',
  },
] as const;

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='flex items-center gap-12'>
      {navData.map((list) => {
        return (
          <li
            key={nanoid()}
            className={`${montserrat.className} capitalize text-white/90`}
          >
            <Link
              href={list.link}
              className={`${
                pathname === list.link ? 'before:w-full text-white' : ''
              } relative before:absolute before:-bottom-[4px] before:h-[2px] before:bg-prim before:w-0 before:transition-all before:delay-100  hover:before:w-full`}
            >
              {list.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
