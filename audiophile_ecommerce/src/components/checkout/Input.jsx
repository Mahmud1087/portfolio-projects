const Input = ({ type, placeholder, title }) => {
  return (
    <label className='flex flex-col gap-2 text-xl font-bold lg:text-[13px]'>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        className='w-full border-[1.5px] border-[#0000002a] rounded-md focus:border-orange-100 focus:outline-none px-7 py-5 focus:text-[#00000077] placeholder:text-[#00000077] lg:px-5 lg:py-3'
      />
    </label>
  );
};
export default Input;
