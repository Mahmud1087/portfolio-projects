import guyWithHeadphone from '../assets/user.png';

const SubFooter = () => {
  return (
    <div className='my-44  '>
      <div className='container flex rounded-md w-full h-[30rem]'>
        <section className='flex flex-col gap-8 justify-center w-1/2'>
          <h1 className='text-4xl font-bold leading-10 tracking-[2px]'>
            BRINGING YOU THE <br />
            <span className='text-orange-200'>BEST </span>AUDIO GEAR
          </h1>
          <p className='text-[#00000062] leading-6 text-sm font-bold'>
            Located at the heart of New York City, Audiophile is the premier
            <br /> store for high end headphones, earphones, speakers, and audio
            <br /> accessories. We have a large showroom and luxury <br />
            demonstration rooms available for you to browse and <br />{' '}
            experience a wide range of our products. Stop by our store to <br />{' '}
            meet some of the fantastic people who make Audiophile the <br />
            best place to buy your portable audio equipment.
          </p>
        </section>

        <section className='w-1/2 h-full rounded-[inherit] flex justify-end'>
          <img
            src={guyWithHeadphone}
            alt='A guy putting on headphone'
            className='w-[90%] h-full object-center'
          />
        </section>
      </div>
    </div>
  );
};
export default SubFooter;
