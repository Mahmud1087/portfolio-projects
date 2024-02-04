import { Link } from 'react-router-dom';
import { reviews } from '../data';
import SingleReview from './SingleReview';

const arrLen = new Array(3);
const newArr = Array.from(arrLen, (v, i) => reviews[i]);

const Reviews = () => {
  return (
    <section
      id='#reviews'
      className='container flex flex-col justify-center items-center gap-8'
    >
      <h1 className='heading'>Praise for Dare To Thrive</h1>
      <div className='flex gap-5'>
        {newArr.map((rev) => {
          return <SingleReview key={rev.id} {...rev} />;
        })}
      </div>
      <Link className=' border-4 border-slate-700 px-10 py-1 font-lilita'>
        More Reviews
      </Link>
    </section>
  );
};
export default Reviews;
