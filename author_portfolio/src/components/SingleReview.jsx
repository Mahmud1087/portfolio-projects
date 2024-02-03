const SingleReview = ({ review, occupation, name }) => {
  return (
    <section className='w-full bg-heroBg bg-center bg-cover bg-blend-overlay flex flex-col justify-center items-center px-5 py-10 gap-8 text-center'>
      <p>{review}</p>
      <div className='flex flex-col gap-2 text-center'>
        <p>{name}</p>
        <p>{occupation}</p>
      </div>
    </section>
  );
};
export default SingleReview;
