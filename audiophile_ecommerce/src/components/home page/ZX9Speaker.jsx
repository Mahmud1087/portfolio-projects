import speakerImg from '../../assets/zx9-speaker.png';
import { SeeProductButton } from '../../components/main';
import AnimatedCircles from '../AnimatedCircles';

const ZX9Speaker = () => {
  return (
    <div className='container pt-24 overflow-hidden lg:pt-40'>
      <section className='relative w-full h-[55rem] lg:h-[29rem] rounded-lg bg-orange-200 z-10'>
        <AnimatedCircles />
        <div className='absolute top-10 left-1/2 -translate-x-1/2 w-60 lg:-translate-x-0 lg:top-auto lg:left-[8.9rem] lg:bottom-0 lg:w-80 lg:h-[24rem]'>
          <img
            src={speakerImg}
            alt='ZX9 Speaker image'
            className='w-full h-full object-center'
          />
        </div>

        <article className='w-full h-full flex'>
          <div className='hidden w-3/5 h-full lg:block'></div>
          <div className='w-full h-full flex flex-col justify-center items-center text-center gap-8 lg:gap-5 mt-28 lg:mt-0 lg:text-start lg:items-start lg:w-2/5'>
            <h1 className='text-[3.5rem] text-light-100 tracking-[3px] leading-[4rem] font-bold lg:leading-10 lg:font-semibold lg:text-[2.3rem]'>
              ZX9 <br /> SPEAKER
            </h1>
            <p className='text-2xl leading-8 text-[#ffffff9d] lg:leading-5 lg:text-sm'>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br />
              sound.
            </p>
            <SeeProductButton
              to='ZX9'
              classes='bg-dark-300 text-light-100 mt-3 hover:bg-[#4c4c4c]'
            />
          </div>
        </article>
      </section>
    </div>
  );
};
export default ZX9Speaker;
