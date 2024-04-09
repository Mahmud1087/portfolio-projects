import React from 'react';
import { Logo, NavLinks, Socials, SubFooter } from '../components/main';
import ShowSubFooter from './ShowSubFooter';

export default function Footer() {
  return (
    <div className=''>
      <ShowSubFooter>
        <SubFooter />
      </ShowSubFooter>
      <aside className='bg-dark-300 text-light-100 pb-16'>
        <section className='container'>
          <div className='w-[6rem] m-auto h-[5px] bg-orange-200 rounded-full sm:m-0 lg:h-[3px]'></div>
          <article className='flex flex-col mt-20 justify-center items-center sm:justify-start sm:items-start'>
            <div className='flex flex-col justify-between gap-14 lg:w-full lg:gap-0 lg:flex-row'>
              <Logo />
              <NavLinks
                Fsize='text-[11px] sm:text-[17px] lg:text-xs'
                dir='flex-col sm:flex-row'
              />
            </div>

            <div className='flex justify-between mt-10 text-[#ffffff6e] lg:w-full'>
              <p className='text-[13px] leading-7 px-3 text-center mt-8 sm:px-0 sm:mt-0 sm:text-start sm:text-[1.35rem] sm:leading-9 lg:leading-6 lg:text-sm'>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team <br className='hidden lg:block' />
                of music lovers and sound specialists who are devoted to helping
                you get the <br className='hidden lg:block' />
                most out of personal audio. Come and visit our demo facility -
                we’re open 7 <br className='hidden lg:block' />
                days a week.
              </p>
              <div className='hidden lg:flex'>
                <Socials fontSize='text-xl' />
              </div>
            </div>

            <div className='flex flex-col items-center justify-between mt-16 gap-y-16 sm:w-full sm:mt-32 sm:gap-y-0 sm:flex-row lg:mt-20'>
              <p className='text-[#ffffff60] text-sm text-center sm:text-start sm:text-2xl lg:text-sm'>
                &copy; Copyright Enesi 2024. All Rights Reserved
              </p>
              <div className='lg:hidden'>
                <Socials fontSize='text-2xl sm:text-3xl' />
              </div>
            </div>
          </article>
        </section>
      </aside>
    </div>
  );
}
