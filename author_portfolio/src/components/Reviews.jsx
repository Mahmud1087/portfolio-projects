import { Link } from 'react-router-dom';
import { reviews } from '../data';
import SingleReview from './SingleReview';

const arrLen = new Array(3);
const newArr = Array.from(arrLen, (v, i) => reviews[i]);

const Reviews = () => {
  return (
    <section
      id='reviews'
      className='container-md-others text-center lg:text-start lg:container flex flex-col justify-center items-center gap-8'
    >
      <h1 className='heading sm:text-5xl lg:text-[1.8rem]'>
        Praise for Dare To Thrive
      </h1>
      <div className='grid lg:flex gap-5 lg:flex-row'>
        {newArr.map((rev) => {
          return <SingleReview key={rev.id} {...rev} />;
        })}
      </div>
      <Link
        to='/more_reviews'
        className=' border-4 border-slate-700 px-10 py-1 font-lilita sm:text-2xl lg:text-base'
      >
        MORE REVIEWS
      </Link>
    </section>
  );
};
export default Reviews;
