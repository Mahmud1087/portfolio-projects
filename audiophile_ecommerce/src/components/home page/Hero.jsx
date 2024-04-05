import herobg from '../../assets/herobg.png';
import { SeeProductButton } from '../../components/main';

export default function Hero() {
  return (
    <div
      className={`flex bg-[#141414] hero_height overflow-hidden relative z-10`}
    >
      <div className='absolute w-full h-full -top-6 sm:-top-12 lg:hidden'>
        <img
          src={herobg}
          alt='background image of a headphone'
          className='w-full h-full object-cover'
        />
      </div>
      <aside className='relative container flex w-full'>
        <section className='hero_height w-full flex flex-col justify-center items-center text-center text-light-100 lg:items-start lg:text-start lg:w-2/5'>
          <h3 className='text-[#ffffff62] text-sm tracking-[10px] mb-5 sm:mb-7 sm:text-2xl lg:mb-5 lg:text-xs'>
            NEW PRODUCT
          </h3>
          <h1 className='text-[2.6rem] tracking-[3px] font-bold leading-[3rem] mb-6 sm:mb-10 sm:leading-[5rem] sm:text-7xl lg:mb-6 lg:leading-[3.3rem] lg:text-[2.9rem]'>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className='text-[16px] text-[#ffffffb9] tracking-[1px] mb-10 leading-6 sm:mb-16 sm:leading-9 sm:text-[1.4rem] lg:mb-7 lg:leading-[25px] lg:text-[12.5px]'>
            Experience natural, lifelike audio and exceptional{' '}
            <br className='hidden sm:block' /> build quality made for the
            passionate music <br className='hidden sm:block' /> enthusiast.
          </p>
          <SeeProductButton
            to='XX99 MK II'
            classes='text-light-100 bg-orange-200 hover:bg-orange-100'
          />
        </section>

        <img
          src={herobg}
          alt='headphone image'
          className='hidden hero_height w-3/5 lg:block'
        />
      </aside>
    </div>
  );
}
