const Input = ({ type, placeholder, title }) => {
  return (
    <label className='flex flex-col gap-2 text-[1.05rem] font-bold sm:text-xl lg:text-[13px]'>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        className='w-full border-[1.5px] border-[#0000002a] rounded-md focus:border-orange-100 focus:outline-none px-6 py-4 focus:text-[#00000077] placeholder:text-[#00000077] sm:px-7 sm:py-5 lg:px-5 lg:py-3'
      />
    </label>
  );
};
export default Input;
