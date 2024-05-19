import Image from 'next/image';
import Button from './button';
import { Italianno, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});
const italiano = Italianno({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  return (
    <div className='absolute h-screen w-full -z-[1]'>
      <div className='absolute left-0 top-0 h-full w-full'>
        <Image
          src='/heroImg.png'
          alt='Hero Image'
          width={5000}
          height={2000}
          quality={100}
          className='w-full h-full'
        />
      </div>
      <section className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-filter backdrop-blur-[2px] bg-opacity-50 w-[60%] h-96 mt-10 mx-auto rounded-lg bg-black/50 flex flex-col items-center justify-center'>
        <h1
          className={`${italiano.className} text-white text-[12rem] leading-none`}
        >
          Safe haven
        </h1>
        <p
          className={`${montserrat.className} font-medium text-white text-xl text-center mb-9`}
        >
          Where every moment becomes a <br /> timeless escape to tranquility
        </p>
        <Button
          title='make reservation'
          link='/reservation'
          color='text-black'
          bgColor='bg-prim'
        />
      </section>
    </div>
  );
};
export default Hero;
