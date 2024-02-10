import { Link } from 'react-router-dom';
import { reviews } from '../data';
import Navbar from './Navbar';
import SingleReview from './SingleReview';
import { FaArrowLeft } from 'react-icons/fa';

const MoreReviews = () => {
  return (
    <>
      <Navbar bg='bg-gray-900' />
      <div className='flex items-center gap-5 mt-6 text-2xl px-5'>
        <Link to='/'>
          <FaArrowLeft />
        </Link>
        <p>Home</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-5 container-md-others lg:w-[70vw] lg:m-auto lg:py-[5rem]'>
        {reviews.map((rev) => {
          return <SingleReview key={rev.id} {...rev} />;
        })}
      </div>
    </>
  );
};
export default MoreReviews;
