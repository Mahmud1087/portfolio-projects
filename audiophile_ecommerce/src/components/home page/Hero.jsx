import herobg from '../../assets/herobg.png';
import { SeeProductButton } from '../../components/main';

export default function Hero() {
  return (
    <div className={`flex bg-[#141414] hero_height overflow-hidden`}>
      <aside className='container flex w-full'>
        <section className='hero_height w-2/5 flex flex-col justify-center text-light-100'>
          <h3 className='text-[#ffffff62] text-xs tracking-[10px] mb-5'>
            NEW PRODUCT
          </h3>
          <h1 className='text-[2.9rem] tracking-[3px] font-bold leading-[3.3rem] mb-6'>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className='text-[12.5px] leading-[25px] text-[#ffffff98] tracking-[1px] mb-7'>
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br /> enthusiast.
          </p>
          <SeeProductButton
            to='XX99 MK II'
            classes='text-light-100 bg-orange-200 hover:bg-orange-100'
          />
        </section>

        <img src={herobg} alt='headphone image' className='hero_height w-3/5' />
      </aside>
    </div>
  );
}
