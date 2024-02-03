import { reviews } from '../data';
import SingleReview from './SingleReview';

const MoreReviews = () => {
  return (
    <div className='flex gap-5'>
      {reviews.map((rev) => {
        return <SingleReview key={rev.id} {...rev} />;
      })}
    </div>
  );
};
export default MoreReviews;
