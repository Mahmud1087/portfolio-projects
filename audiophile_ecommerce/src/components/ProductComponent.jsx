import { SeeProductButton } from '../components/main';

const ProductComponent = ({
  name,
  desc,
  isNewProduct,
  img,
  product,
  shortName,
  flexDir,
}) => {
  return (
    <div
      className={`flex w-full h-fit gap-10 sm:gap-[7rem] lg:h-[30rem] ${flexDir}`}
    >
      <aside className='w-full h-[20rem] rounded-xl bg-light-300 grid place-items-center lg:w-1/2 lg:h-full'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-1/2 drop-shadow-2xl sm:w-1/3 lg:w-1/2'
        />
      </aside>
      <section className='w-full h-full flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:w-1/2'>
        {isNewProduct && (
          <p className='text-orange-200 text-xs mb-7 tracking-[10px] sm:mb-10 sm:text-xl lg:mb-5 lg:text-xs'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-2xl font-bold tracking-[2px] mb-7 sm:leading-[3.3rem] sm:text-5xl sm:mb-10 lg:leading-9 lg:mb-6 lg:text-3xl'>
          {name} <br />
          {product}
        </h1>
        <p className='text-xs text-[#00000077] font-semibold leading-5 px-3 tracking-[1px] sm:px-0 sm:text-2xl sm:leading-8 lg:pr-8 lg:leading-6 lg:text-sm'>
          {desc}
        </p>

        <SeeProductButton
          to={shortName}
          classes='text-light-100 font-bold bg-orange-200 hover:bg-orange-100 mt-6 sm:mt-10'
        />
      </section>
    </div>
  );
};
export default ProductComponent;
