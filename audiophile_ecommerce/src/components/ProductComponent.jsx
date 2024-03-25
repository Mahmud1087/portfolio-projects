import { SeeProductButton } from '../components/main';

const ProductComponent = ({
  name,
  desc,
  isNewProduct,
  img,
  product,
  children,
}) => {
  return (
    <div className='flex w-full h-[30rem] gap-[7rem] even:flex-row-reverse'>
      <aside className='w-1/2 h-full rounded-md bg-light-300 grid place-items-center'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-1/2 drop-shadow-2xl'
        />
      </aside>
      <section className='w-1/2 h-full flex flex-col justify-center'>
        {isNewProduct && (
          <p className='text-orange-100 font-semibold text-xs tracking-[10px] mb-5'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-3xl font-bold tracking-[2px] leading-9 mb-6'>
          {name} <br />
          {product}
        </h1>
        <p className='text-[13px] text-[#00000069] leading-6 mb-10 font-bold pr-8 tracking-[1px]'>
          {desc}
        </p>
        {children}
      </section>
    </div>
  );
};
export default ProductComponent;
