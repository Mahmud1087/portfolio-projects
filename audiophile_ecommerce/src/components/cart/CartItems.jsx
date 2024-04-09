import { curr } from '../../helper';

const CartItems = ({ img, shortName, price }) => {
  return (
    <section className='flex gap-3 items-center sm:gap-5 lg:gap-3'>
      <aside className='w-12 h-12 p-2 bg-light-300 rounded-lg flex justify-center items-center sm:h-24 sm:w-24 lg:w-16 lg:h-16'>
        <img src={img} alt='product image' className='w-[85%] sm:w-4/5' />
      </aside>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xs font-bold sm:text-2xl lg:text-xs'>
          {shortName}
        </h1>
        <p className='text-[11px] font-bold text-[#00000077] sm:text-lg lg:text-[10.5px]'>
          $ {curr(price)}
        </p>
      </div>
    </section>
  );
};
export default CartItems;
