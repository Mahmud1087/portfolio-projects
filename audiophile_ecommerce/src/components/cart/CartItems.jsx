import { curr } from '../../helper';

const CartItems = ({ img, shortName, price }) => {
  return (
    <section className='flex gap-3 items-center'>
      <aside className='w-16 h-16 p-4 bg-light-300 rounded-md flex justify-center items-center'>
        <img src={img} alt='product image' className='w-full' />
      </aside>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xs font-bold'>{shortName}</h1>
        <p className='text-[10.5px] font-bold text-[#00000077]'>
          $ {curr(price)}
        </p>
      </div>
    </section>
  );
};
export default CartItems;
