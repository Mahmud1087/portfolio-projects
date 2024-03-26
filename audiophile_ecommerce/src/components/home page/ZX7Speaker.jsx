import img from '../../assets/speaker-table.png';
import { SeeProductButton } from '../../components/main';

const ZX7Speaker = () => {
  return (
    <div className='container pt-12'>
      <section className='relative w-full h-[20rem] rounded-lg'>
        <img
          src={img}
          alt='Speaker image background'
          className='w-full h-full object-contain rounded-[inherit]'
        />
        <div className='absolute left-0 top-0 h-full w-2/5 z-10 flex flex-col gap-6 justify-center pl-24'>
          <h1 className='text-2xl font-bold tracking-[1px]'>ZX7 SPEAKER</h1>
          <SeeProductButton classes='border border-dark-300 bg-transparent hover:bg-dark-300 hover:text-light-100 text-dark-300 font-bold' />
        </div>
      </section>
    </div>
  );
};
export default ZX7Speaker;
