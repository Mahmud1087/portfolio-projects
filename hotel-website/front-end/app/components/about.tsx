/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from './button';
import SectionTitle from './sectionTitle';
import { nanoid } from 'nanoid';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
});

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
    <div className='w-[90%] mx-auto bg-gray-200 py-20'>
      <div className='flex items-center'>
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

        <section className='relative w-1/2 h-[30rem] flex flex-col gap-5'>
          <article className=' grid grid-cols-2 gap-5 h-1/2 w-full'>
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

      <article className='mt-44 flex justify-between'>
        <div className='flex flex-col items-center justify-center gap-5 text-center w-full'>
          <h1
            className={`${montserrat.className}text-gray-900 text-5xl font-semibold`}
          >
            10+
          </h1>
          <h2
            className={`${montserrat.className} font-medium text-lg text-gray-500`}
          >
            Years of service
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 text-center w-full'>
          <h1
            className={`${montserrat.className}text-gray-900 text-5xl font-semibold`}
          >
            6+
          </h1>
          <h2
            className={`${montserrat.className} font-medium text-lg text-gray-500`}
          >
            Acres of land
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 text-center w-full'>
          <h1
            className={`${montserrat.className}text-gray-900 text-5xl font-semibold`}
          >
            100
          </h1>
          <h2
            className={`${montserrat.className} font-medium text-lg text-gray-500`}
          >
            Nice rooms
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 text-center w-full'>
          <h1
            className={`${montserrat.className}text-gray-900 text-5xl font-semibold`}
          >
            10k+
          </h1>
          <h2
            className={`${montserrat.className} font-medium text-lg text-gray-500`}
          >
            Happy visitors
          </h2>
        </div>
      </article>
    </div>
  );
};
export default About;
