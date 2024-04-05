import airpodImg1 from '../../assets/ear-pod.png';
import airpodImg2 from '../../assets/ear-pod2.jpg';
import { SeeProductButton } from '../../components/main';

const YX1Earphones = () => {
  return (
    <div className='flex flex-col container gap-x-5 gap-y-5 sm:gap-y-0 pt-8 sm:flex-row lg:gap-x-6 sm:pt-12'>
      <section className='w-full rounded-lg h-[18rem] sm:w-1/2'>
        <img
          src={airpodImg1}
          alt='Earbud image'
          className='block w-full h-full object-cover rounded-[inherit] sm:hidden lg:block lg:object-contain'
        />
        <img
          src={airpodImg2}
          alt='Earbud image'
          className='w-full h-full object-center rounded-[inherit] hidden sm:block lg:hidden'
        />
      </section>
      <section className='w-full rounded-lg h-[18rem] bg-light-300 flex items-center pl-8 sm:w-1/2 lg:pl-24'>
        <div className='flex flex-col justify-center gap-8 sm:gap-12 lg:gap-6'>
          <h1 className='text-3xl font-bold tracking-[1px] text-center sm:text-[2rem] lg:text-start lg:text-2xl'>
            YX1 EARPHONES
          </h1>
          <SeeProductButton
            to='YX1'
            classes='border border-dark-300 bg-transparent hover:bg-dark-300 hover:text-light-100 text-dark-300 font-bold'
          />
        </div>
      </section>
    </div>
  );
};
export default YX1Earphones;
