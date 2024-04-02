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
    <div className={`flex w-full h-fit gap-[7rem] lg:h-[30rem] ${flexDir}`}>
      <aside className='w-full h-[25rem] rounded-md bg-light-300 grid place-items-center lg:w-1/2 lg:h-full'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-1/3 drop-shadow-2xl lg:w-1/2'
        />
      </aside>
      <section className='w-full h-full flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:w-1/2'>
        {isNewProduct && (
          <p className='text-orange-200 text-xl tracking-[10px] mb-10 lg:mb-5 lg:text-xs'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-5xl font-bold tracking-[2px] leading-[3.3rem] lg:leading-9 mb-10 lg:mb-6 lg:text-3xl'>
          {name} <br />
          {product}
        </h1>
        <p className='text-2xl text-[#00000077] font-semibold leading-8 tracking-[1px] lg:pr-8 lg:leading-6 lg:text-sm'>
          {desc}
        </p>
        {children}
      </section>
    </div>
  );
};
export default ProductComponent;
