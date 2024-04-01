import airpodImg1 from '../../assets/ear-pod.png';
import airpodImg2 from '../../assets/ear-pod2.jpg';
import { SeeProductButton } from '../../components/main';

const YX1Earphones = () => {
  return (
    <div className='flex container lg:gap-x-6 pt-12'>
      <section className='w-1/2 rounded-lg h-[18rem]'>
        <img
          src={airpodImg1}
          alt='Earbud image'
          className='hidden w-full h-full object-contain rounded-[inherit] lg:block'
        />
        <img
          src={airpodImg2}
          alt='Earbud image'
          className='w-full h-full object-contain rounded-[inherit] lg:hidden'
        />
      </section>
      <section className='w-1/2 rounded-lg h-[18rem] bg-light-300 flex items-center pl-8 lg:pl-24'>
        <div className='flex flex-col justify-center gap-12 lg:gap-6'>
          <h1 className='text-[2rem] font-bold tracking-[1px] text-center lg:text-start lg:text-2xl'>
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
