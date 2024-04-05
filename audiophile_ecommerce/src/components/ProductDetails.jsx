import { useProductsContex } from '../context/products_context';
import { curr } from '../helper';

const ProductDetails = ({ data }) => {
  const {
    totalAmount,
    increaseCount,
    decreaseCount,
    totalCartItem,
    addToCart,
  } = useProductsContex();

  const { name, desc, isNewProduct, price, img, category } = data;

  return (
    <div
      className={`flex flex-col w-full h-fit gap-[2.5rem] sm:gap-[4rem] sm:h-[40rem] sm:flex-row lg:h-[30rem] lg:gap-[7rem]`}
    >
      <aside className='w-full h-[25rem] rounded-xl bg-light-300 grid place-items-center sm:h-full sm:w-1/2'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-3/4 drop-shadow-2xl lg:w-1/2'
        />
      </aside>
      <section className='w-full h-full flex flex-col justify-center text-start items-start sm:w-1/2'>
        {isNewProduct && (
          <p className='text-orange-200 text-base tracking-[10px] mb-5 lg:text-xs'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-4xl font-bold tracking-[2px] leading-10 mb-10 lg:leading-9 lg:mb-6 lg:text-3xl'>
          {name} <br />
          {category.toUpperCase()}
        </h1>
        <p className='text-[19px] text-[#00000077] font-semibold leading-8 tracking-[1px] lg:pr-8 lg:leading-6 lg:text-sm'>
          {desc}
        </p>

        <p className='font-bold mb-12 mt-9 text-[1.4rem] sm:mb-10 sm:mt-7 sm:text-2xl lg:text-base'>
          $ {curr(price)}
        </p>
        <section className='flex gap-3'>
          <div className='flex gap-4 bg-light-300 px-5 py-4 font-bold justify-between w-36 text-xl sm:text-[1.5rem] lg:text-base lg:w-24 lg:px-3 lg:py-2'>
            <button
              className='text-[#00000062] btn'
              onClick={() => decreaseCount(data)}
            >
              -
            </button>
            <h1>{data.amount}</h1>
            <button
              className='text-[#00000062] btn'
              onClick={() => increaseCount(data)}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addToCart(data);
              totalAmount();
              totalCartItem();
            }}
            className='btn px-6 w-full bg-orange-200 hover:bg-orange-100 text-light-100 font-bold text-[1rem] sm:text-[1.15rem] lg:w-fit lg:text-xs'
          >
            ADD TO CART
          </button>
        </section>
      </section>
    </div>
  );
};
export default ProductDetails;
