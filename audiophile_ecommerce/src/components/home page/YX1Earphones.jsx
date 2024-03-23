import airpodImg from '../../assets/ear-pod.png';
import { SeeProductButton } from '../../components/main';

const YX1Earphones = () => {
  return (
    <div className='flex container gap-x-6 pt-12'>
      <section className='w-1/2 rounded-md h-[18rem]'>
        <img
          src={airpodImg}
          alt='Earbud image'
          className='w-full h-full object-contain rounded-[inherit]'
        />
      </section>
      <section className='w-1/2 rounded-md h-[18rem] bg-light-300 pl-24 flex items-center'>
        <div className='flex flex-col gap-6 justify-center'>
          <h1 className='text-2xl font-bold tracking-[1px]'>YX1 EARPHONES</h1>
          <SeeProductButton classes='border border-dark-300 bg-transparent hover:bg-dark-300 hover:text-light-100 text-dark-300 font-bold' />
        </div>
      </section>
    </div>
  );
};
export default YX1Earphones;
