import Image from 'next/image';
import Button from './button';
import { Italianno, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});
const italianno = Italianno({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
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
      <section className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-filter backdrop-blur-[2px] bg-opacity-50 w-[70%] h-96 mt-10 mx-auto rounded-lg bg-black/50 flex flex-col items-center justify-center'>
        <h1
          className={`${italianno.className} text-white text-[12rem] leading-none`}
        >
          Safe haven hotel
        </h1>
        <p
          className={`${montserrat.className} font-medium text-white text-xl text-center mb-9`}
        >
          Where every moment becomes a timeless escape to <br /> tranquility
        </p>
        <Button link='/reservation' color='text-black' bgColor='bg-prim'>
          make reservation
        </Button>
      </section>
    </div>
  );
};
export default Hero;
