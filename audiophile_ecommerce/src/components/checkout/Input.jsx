const Input = ({ type, placeholder, title }) => {
  return (
    <label className='flex flex-col gap-2 text-[13px] font-bold'>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        className='w-full border-[1.5px] border-[#0000002a] rounded-md focus:border-orange-100 focus:outline-none px-5 py-3 focus:text-[#00000077] placeholder:text-[#00000077]'
      />
    </label>
  );
};
export default Input;
