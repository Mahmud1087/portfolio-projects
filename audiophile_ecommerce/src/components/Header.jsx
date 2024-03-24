const Header = ({ text }) => {
  return (
    <div className='w-full h-48 bg-[#141414] grid place-items-center'>
      <h1 className='text-light-100 text-3xl font-semibold tracking-[1px]'>
        {text}
      </h1>
    </div>
  );
};
export default Header;
