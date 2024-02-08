// import latest_book from '../assets/bookCover.jpg';
import latest_book from '../assets/frontCover.jpg';

const LatestBook = () => {
  return (
    <div id='latestbook' className='bg-[#f3f3f3] pb-[4rem]'>
      <section className='container-md-others flex-col lg:flex-row lg:container flex gap-24 '>
        <div className='w-full lg:w-2/3 flex flex-col justify-center gap-5 font-poppins text-sm text-slate-500 leading-6'>
          <aside className='w-full leading-10'>
            <h1 className='heading sm:text-5xl lg:text-[1.8rem]'>
              My Latest Book — "Dare To Thrive"
            </h1>
            <p className='sm:text-xl sm:mt-3 lg:mt-0 lg:text-base'>
              On Sale since Jan 28, 2024
            </p>
          </aside>
          <p className='sm:text-xl lg:text-base'>
            Why Read a Book on Personal Development?
            <br />
            This book will be a game-changing discovery for you on your personal
            growth journey - emotionally, financially, physically, spiritually,
            mentally, and more. This book will not be a waste of your
            invavluable time.
          </p>
          <p className='sm:text-xl lg:text-base'>
            It includes bold, smart, and practical tips that will help you take
            control of your mental, emotional, financial, spiritural, and
            physical life <br /> <br />
            If you're ready to make that smart and bold move towards improvingn
            your life right now, then this book is for you - and every Muslim
            woman; married or singe, old or young.
          </p>
        </div>

        <article className='w-full lg:w-1/3 shadow-2xl shadow-gray-500'>
          <img src={latest_book} alt='my latest book cover' />
        </article>
      </section>
      <a
        href='https://www.amab.com.ng/product/dare-to-thrive/?v=3c2f23bb6b73'
        className=' font-lilita text-white text-sm sm:text-2xl lg:text-sm bg-[#141414] w-fit py-2 sm:py-4 lg:py-2 px-10 sm:px-16 lg:px-10 ml-[15vw] block hover:bg-[#1b1b1b] transition-all'
      >
        ORDER NOW
      </a>
    </div>
  );
};
export default LatestBook;
