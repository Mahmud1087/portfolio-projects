import img1 from '../../assets/speaker-table.png';
import img2 from '../../assets/speaker-table2.png';
import img3 from '../../assets/speaker-table3.png';
import { SeeProductButton } from '../../components/main';

const ZX7Speaker = () => {
  return (
    <div className='container pt-8 sm:pt-12'>
      <section className='relative w-full h-full sm:h-[22rem] lg:h-[20rem] rounded-lg'>
        <img
          src={img1}
          alt='Speaker image background'
          className='hidden w-full h-full object-contain rounded-[inherit] lg:block'
        />
        <img
          src={img2}
          alt='Speaker image background'
          className='w-full h-full object-contain rounded-[inherit] hidden sm:block lg:hidden'
        />
        <img
          src={img3}
          alt='Speaker image background'
          className='w-full h-full object-contain rounded-[inherit] lg:hidden'
        />
        <div className='absolute left-0 top-0 h-full w-full z-10 flex flex-col gap-8 justify-center pl-6 sm:gap-12 sm:pl-12 lg:gap-6 lg:pl-24 lg:w-2/5'>
          <h1 className='text-3xl font-bold tracking-[1px] sm:text-4xl lg:text-2xl'>
            ZX7 SPEAKER
          </h1>
          <SeeProductButton
            to='ZX7'
            classes='border border-dark-300 bg-transparent hover:bg-dark-300 hover:text-light-100 text-dark-300 font-bold'
          />
        </div>
      </section>
    </div>
  );
};
export default ZX7Speaker;
