import airpodImg from '../../assets/ear-pod.png';

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
      <section className='w-1/2 rounded-md h-[18rem] bg-light-300'></section>
    </div>
  );
};
export default YX1Earphones;
