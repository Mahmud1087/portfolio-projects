import guyWithHeadphone1 from '../assets/user.png';
import guyWithHeadphone2 from '../assets/user2.png';

const SubFooter = () => {
  return (
    <div className='my-32 lg:my-44 '>
      <div className='container flex flex-col-reverse rounded-md w-full lg:h-[30rem] lg:flex-row'>
        <section className='flex flex-col gap-14 justify-center mt-24 text-center items-center lg:gap-8 lg:items-start lg:text-start lg:mt-0 lg:w-1/2'>
          <h1 className='text-5xl font-bold leading-[3.2rem] tracking-[2px] lg:text-4xl lg:leading-10'>
            BRINGING YOU THE <br className='hidden lg:block' />
            <span className='text-orange-200'>BEST </span>AUDIO GEAR
          </h1>
          <p className='text-[#00000077] font-semibold leading-9 text-2xl w-[85%] lg:font-semibold lg:leading-6 lg:text-sm'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </section>

        <section className='w-full h-full rounded-[inherit] flex justify-end lg:h-full lg:w-1/2'>
          <img
            src={guyWithHeadphone1}
            alt='A guy putting on headphone'
            className='hidden w-full h-full object-center lg:block lg:w-[90%]'
          />
          <img
            src={guyWithHeadphone2}
            alt='A guy putting on headphone'
            className='w-full h-full object-center lg:w-[90%] lg:hidden'
          />
        </section>
      </div>
    </div>
  );
};
export default SubFooter;
