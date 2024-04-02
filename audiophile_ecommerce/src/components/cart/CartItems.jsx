import { curr } from '../../helper';

const CartItems = ({ img, shortName, price }) => {
  return (
    <section className='flex gap-5 items-center lg:gap-3'>
      <aside className='w-24 h-24 p-4 bg-light-300 rounded-md flex justify-center items-center lg:w-16 lg:h-16'>
        <img src={img} alt='product image' className='w-4/5 lg:w-full' />
      </aside>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl font-bold lg:text-xs'>{shortName}</h1>
        <p className='text-lg font-bold text-[#00000077] lg:text-[10.5px]'>
          $ {curr(price)}
        </p>
      </div>
    </section>
  );
};
export default CartItems;
