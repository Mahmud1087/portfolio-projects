import { reviews } from '../data';
import Navbar from './Navbar';
import SingleReview from './SingleReview';

const MoreReviews = () => {
  return (
    <>
      <Navbar bg='bg-gray-900' />
      <div className='grid grid-cols-3 gap-5 container'>
        {reviews.map((rev) => {
          return <SingleReview key={rev.id} {...rev} />;
        })}
      </div>
    </>
  );
};
export default MoreReviews;
