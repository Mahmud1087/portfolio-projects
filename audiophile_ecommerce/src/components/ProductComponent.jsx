const ProductComponent = ({
  name,
  desc,
  isNewProduct,
  img,
  product,
  children,
  flexDir,
}) => {
  return (
    <div
      className={`flex w-full h-fit gap-10 sm:gap-[7rem] lg:h-[30rem] ${flexDir}`}
    >
      <aside className='w-full h-[25rem] rounded-xl bg-light-300 grid place-items-center lg:w-1/2 lg:h-full'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-[68%] drop-shadow-2xl sm:w-1/3 lg:w-1/2'
        />
      </aside>
      <section className='w-full h-full flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:w-1/2'>
        {isNewProduct && (
          <p className='text-orange-200 text-[16px] mb-7 tracking-[10px] sm:mb-10 sm:text-xl lg:mb-5 lg:text-xs'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-[2rem] font-bold tracking-[2px] leading-[2.65rem] sm:leading-[3.3rem] sm:text-5xl lg:leading-9 mb-10 lg:mb-6 lg:text-3xl'>
          {name} <br />
          {product}
        </h1>
        <p className='text-xl text-[#00000077] font-semibold leading-8 tracking-[1px] sm:text-2xl lg:pr-8 lg:leading-6 lg:text-sm'>
          {desc}
        </p>
        {children}
      </section>
    </div>
  );
};
export default ProductComponent;
