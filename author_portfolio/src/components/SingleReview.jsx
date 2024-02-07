import { FaQuoteRight } from 'react-icons/fa';

const SingleReview = ({ review, occupation, name }) => {
  return (
    <section className='w-full bg-[#1b1b1b] bg-center bg-cover bg-blend-overlay flex flex-col items-center px-8 py-14 gap-8 text-center text-white rounded-xl'>
      <section className='w-full flex gap-6 h-[1px] items-center'>
        <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
        <FaQuoteRight className='text-5xl text-white' />
        <div className='w-full p-[1px] bg-gray-400 rounded-full'></div>
      </section>
      <p>{review}</p>
      <div className='flex flex-col gap-1 text-center'>
        <p className='font-chelsea text-orange-400'>{name}</p>
        <p className='font-poppins text-sm text-gray-400'>- {occupation}</p>
      </div>
    </section>
  );
};
export default SingleReview;
