import React from 'react';
import { Logo, NavLinks, SubFooter } from '../components/main';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import ShowSubFooter from './ShowSubFooter';

export default function Footer() {
  return (
    <div className=''>
      <ShowSubFooter>
        <SubFooter />
      </ShowSubFooter>
      <aside className='bg-dark-300 text-light-100 pb-16'>
        <section className='container'>
          <div className='w-[6rem] h-[3px] bg-orange-200 rounded-full'></div>
          <article className='flex flex-col mt-20'>
            <div className='flex justify-between'>
              <Logo />
              <NavLinks />
            </div>

            <div className='flex justify-between mt-10 text-[#ffffff6e]'>
              <p className='text-sm leading-6'>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team <br />
                of music lovers and sound specialists who are devoted to helping
                you get the <br />
                most out of personal audio. Come and visit our demo facility -
                we’re open 7 <br />
                days a week.
              </p>
              <aside className='flex text-xl text-light-100 gap-3 items-end'>
                <a
                  href='https://www.facebook.com/audiophile'
                  target='_blank'
                  className='hover:text-orange-200 transition-all delay-100'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://www.twitter.com/audiophile'
                  target='_blank'
                  className='hover:text-orange-200 transition-all delay-100'
                >
                  <FaTwitter />
                </a>
                <a
                  href='https://www.instagram.com/audiophile'
                  target='_blank'
                  className='hover:text-orange-200 transition-all delay-100'
                >
                  <FaInstagram />
                </a>
              </aside>
            </div>

            <p className='mt-20 text-[#ffffff60] text-sm'>
              &copy; Copyright Enesi 2024. All Rights Reserved
            </p>
          </article>
        </section>
      </aside>
    </div>
  );
}
