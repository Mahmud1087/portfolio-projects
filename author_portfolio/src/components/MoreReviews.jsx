import { reviews } from '../data';
import Navbar from './Navbar';
import SingleReview from './SingleReview';

const MoreReviews = () => {
  return (
    <>
      <Navbar />
      <div className='flex gap-5'>
        {reviews.map((rev) => {
          return <SingleReview key={rev.id} {...rev} />;
        })}
      </div>
    </>
  );
};
export default MoreReviews;
