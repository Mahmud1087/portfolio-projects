import { Link, useParams } from 'react-router-dom';
import herobg from '../../assets/herobg.png';

export default function Hero() {
  const { id } = useParams();
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
          <p className='text-[12.5px] leading-[25px] text-[#ffffffb7] tracking-wider mb-7'>
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br /> enthusiast.
          </p>
          <Link className='text-xs text-light-100 tracking-[2px] w-fit px-7 py-3 bg-orange-200 hover:bg-orange-100 transition-all delay-100'>
            SEE PRODUCT
          </Link>
        </section>

        <img src={herobg} alt='headphone image' className='hero_height w-3/5' />
      </aside>
    </div>
  );
}
