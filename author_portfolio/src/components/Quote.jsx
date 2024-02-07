import { FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <article className=' bg-[#f3f3f3] flex items-center justify-center '>
      <aside className='container flex flex-col gap-6 w-86 text-slate-700'>
        <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
        <blockquote className='px-10 text-center font-chelsea italic'>
          Iron rusts. Seasons shift. Situations change. And people grow. Some,
          consciously evolving. Other drifting through life. We're Muslims.
          We're here for a purpose. Choose conscious growth. Embrace intentional
          living
        </blockquote>
        <section className='flex gap-6 h-[1px] items-center'>
          <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
          <FaQuoteRight className='text-5xl text-slate-700' />
          <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
        </section>
        <p className='text-center text-lg font-lilita'>Umm Noorayn</p>
      </aside>
    </article>
  );
};
export default Quote;
