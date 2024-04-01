import herobg from '../../assets/herobg.png';
import { SeeProductButton } from '../../components/main';

export default function Hero() {
  return (
    <div
      className={`flex bg-[#141414] hero_height overflow-hidden relative z-10`}
    >
      <div className='absolute w-full h-full -top-12 lg:hidden'>
        <img
          src={herobg}
          alt='background image of a headphone'
          className='w-full h-full object-cover'
        />
      </div>
      <aside className='relative container flex w-full'>
        <section className='hero_height w-full flex flex-col justify-center items-center text-center text-light-100 lg:items-start lg:text-start lg:w-2/5'>
          <h3 className='text-[#ffffff62] text-2xl tracking-[10px] mb-7 lg:mb-5 lg:text-xs'>
            NEW PRODUCT
          </h3>
          <h1 className='text-7xl tracking-[3px] font-bold leading-[5rem] mb-10 lg:mb-6 lg:leading-[3.3rem] lg:text-[2.9rem]'>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className='text-[1.4rem] text-[#ffffffb9] tracking-[1px] mb-16 leading-9 lg:mb-7 lg:leading-[25px] lg:text-[12.5px]'>
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br /> enthusiast.
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
