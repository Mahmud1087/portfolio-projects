import { curr } from '../../helper';

const CartItems = ({ img, shortName, price }) => {
  return (
    <section className='flex gap-3 items-center sm:gap-5 lg:gap-3'>
      <aside className='w-16 h-16 p-2 bg-light-300 rounded-xl flex justify-center items-center sm:h-24 sm:w-24 lg:w-16 lg:h-16'>
        <img
          src={img}
          alt='product image'
          className='w-3/5 sm:w-4/5 lg:w-full'
        />
      </aside>
      <div className='flex flex-col gap-1'>
        <h1 className='text-lg font-bold sm:text-2xl lg:text-xs'>
          {shortName}
        </h1>
        <p className='text-sm font-bold text-[#00000077] sm:text-lg lg:text-[10.5px]'>
          $ {curr(price)}
        </p>
      </div>
    </section>
  );
};
export default CartItems;
