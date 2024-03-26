import speakerImg from '../../assets/zx9-speaker.png';
import { SeeProductButton } from '../../components/main';
import AnimatedCircles from '../AnimatedCircles';

const ZX9Speaker = () => {
  return (
    <div className='container pt-40 overflow-hidden'>
      <section className='relative w-full h-[29rem] rounded-lg bg-orange-200 z-10'>
        <AnimatedCircles />
        <div className='absolute left-[8.9rem] bottom-0 w-80 h-[24rem]'>
          <img
            src={speakerImg}
            alt='ZX9 Speaker image'
            className='w-full h-full object-center'
          />
        </div>

        <article className='w-full h-full flex'>
          <div className='w-3/5 h-full'></div>
          <div className='w-2/5 h-full flex flex-col justify-center gap-5'>
            <h1 className='text-[2.3rem] text-light-100 tracking-[3px] leading-10 font-semibold'>
              ZX9 <br /> SPEAKER
            </h1>
            <p className='text-sm text-[#ffffff9d] leading-5'>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br />
              sound.
            </p>
            <SeeProductButton classes='bg-dark-300 text-light-100 mt-3 hover:bg-[#4c4c4c]' />
          </div>
        </article>
      </section>
    </div>
  );
};
export default ZX9Speaker;
