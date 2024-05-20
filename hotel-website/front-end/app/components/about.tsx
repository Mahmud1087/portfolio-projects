/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from './button';
import SectionTitle from './sectionTitle';
import { nanoid } from 'nanoid';

const imageData = [
  {
    src: '/aboutImg2.png',
    alt: 'About Image 1',
  },
  {
    src: '/aboutImg3.png',
    alt: 'About Image 2',
  },
  //   {
  //     src: '/aboutImg1.png',
  //     alt: 'About Image 2',
  //   },
];

const About = () => {
  return (
    <div className='bg-gray-200 py-20'>
      <div className='w-[90%] mx-auto flex items-center'>
        <section className='w-1/2'>
          <SectionTitle color='text-gray-900'>about us</SectionTitle>
          <p className='w-[80%] mb-10'>
            At Safe Haven Hotel, we believe that every traveler deserves a place
            of refuge, a sanctuary where they can escape the hustle and bustle
            of everyday life and find solace in serenity. Nestled in the heart
            of picturesque landscapes, our hotel is more than just a
            destination—it's an experience.
          </p>
          <div className='block'>
            <Button bgColor='bg-[#56a2ad]' color='text-gray-900' link='/about'>
              see more
            </Button>
          </div>
        </section>

        <section className='relative w-1/2 h-[30rem] flex flex-col gap-3'>
          <article className=' grid grid-cols-2 gap-3 h-1/2 w-full'>
            {imageData.map((item) => {
              return (
                <div key={nanoid()} className='w-full h-full group'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    quality={100}
                    className='w-full h-full object-cover rounded-xl'
                  />
                </div>
              );
            })}
          </article>
          <div className=' w-full h-1/2 flex justify-center'>
            <Image
              src='/aboutImg1.png'
              alt='about image'
              width={1000}
              height={1000}
              quality={100}
              className='w-1/2 h-full object-cover rounded-xl'
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;
