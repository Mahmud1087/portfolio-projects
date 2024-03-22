import img from '../../assets/speaker-table.png';

const ZX7Speaker = () => {
  return (
    <div className='container pt-12'>
      <section className='w-full h-[20rem] rounded-md'>
        <img
          src={img}
          alt='Speaker image background'
          className='w-full h-full object-contain rounded-[inherit]'
        />
      </section>
    </div>
  );
};
export default ZX7Speaker;
