const HeroContent = () => {
  return (
    <div className='mt-24 w-full flex flex-col items-center justify-center'>
      <h1 className='font-chelsea font-bold text-6xl text-orange-300'>
        Umm Noorayn
      </h1>
      <p className='text-lg text-center text-gray-200 font-poppins mt-8 leading-7'>
        HELLO AND WELCOME TO MY WEBSITE. <br /> HERE YOU WILL FIND INFORMATION
        ABOUT ME, MY BOOK, AND LINKS TO ALL MY SOCIAL MEDIA
      </p>
      <section className='relative w-full flex justify-center items-center gap-5 mt-[5rem]'>
        <a
          href='#aboutme'
          className=' font-lilita text-[#f3f3f3] text-sm bg-transparent py-3 px-10 transition-all border-2 border-[#f3f3f3]'
        >
          ABOUT ME
        </a>
        <a
          href='#latestbook'
          className=' font-lilita text-[#1b1b1b] text-sm bg-[#f3f3f3] py-3 px-10 transition-all'
        >
          LATEST BOOK
        </a>
      </section>
    </div>
  );
};
export default HeroContent;
