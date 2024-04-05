const Header = ({ text }) => {
  return (
    <div className='w-full bg-[#141414] grid place-items-center relative top-20 h-40 sm:h-64 sm:top-28 lg:top-0 lg:h-48'>
      <h1 className='text-light-100 text-3xl font-semibold tracking-[3px] sm:text-4xl lg:text-3xl'>
        {text}
      </h1>
    </div>
  );
};
export default Header;
