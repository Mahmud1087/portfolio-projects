const Header = ({ text }) => {
  return (
    <div className='w-full bg-[#141414] grid place-items-center relative top-28 h-64 lg:top-0 lg:h-48'>
      <h1 className='text-light-100 text-4xl font-semibold tracking-[3px] lg:text-3xl'>
        {text}
      </h1>
    </div>
  );
};
export default Header;
