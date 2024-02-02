import { FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <article className=' bg-[#f3f3f3] py-16 flex items-center justify-center '>
      <aside className='flex flex-col gap-6 w-86 text-slate-700'>
        <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
        <blockquote className='px-10 text-center font-chelsea italic'>
          Living a life with passion and pursuing dreams is a life well lived
        </blockquote>
        <section className='flex gap-6 h-[1px] items-center'>
          <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
          <FaQuoteRight className='text-4xl text-slate-700' />
          <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
        </section>
        <p className='text-center text-sm font-lilita'>Umm Noorayn</p>
      </aside>
    </article>
  );
};
export default Quote;
