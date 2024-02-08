const HeroContent = () => {
  return (
    <div className='mt-24 w-full flex flex-col items-center justify-center text-center'>
      <h1 className='font-chelsea font-bold text-6xl text-orange-300 sm:text-9xl lg:text-6xl'>
        Umm Noorayn
      </h1>
      <p className=' mx-5 sm:text-3xl lg:mx-0 lg:text-lg text-center text-gray-200 font-poppins mt-8 leading-7'>
        Hello and welcome to my website. <br /> Here you will find information
        about me, my book, and links to all my social media
      </p>
      <section className='relative w-full flex justify-center items-center gap-5 mt-10 sm:mt-24 lg:mt-[5rem]'>
        <a
          href='#aboutme'
          className=' font-lilita text-[#f3f3f3] text-sm sm:text-2xl lg:text-sm bg-transparent py-3 px-5 sm:px-10 transition-all border-2 border-[#f3f3f3] hover:bg-[#f3f3f3] hover:text-[#141414]'
        >
          ABOUT ME
        </a>
        <a
          href='#latestbook'
          className=' font-lilita text-[#1b1b1b] text-sm sm:text-2xl lg:text-sm border-2 bg-[#f3f3f3] py-3 px-5 sm:px-10 transition-all hover:border-2 hover:border-[#f3f3f3] hover:bg-transparent hover:text-[#f3f3f3]'
        >
          LATEST BOOK
        </a>
      </section>
    </div>
  );
};
export default HeroContent;
