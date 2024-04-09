import { useProductsContex } from '../context/products_context';
import { curr } from '../helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ data }) => {
  const {
    totalAmount,
    increaseCount,
    decreaseCount,
    totalCartItem,
    addToCart,
  } = useProductsContex();

  const { name, desc, isNewProduct, price, img, category } = data;
  const notify = () =>
    toast.success('Added to cart', {
      position: 'top-center',
      theme: 'dark',
    });

  return (
    <div
      className={`flex flex-col w-full h-fit gap-[2rem] sm:gap-[4rem] sm:h-[40rem] sm:flex-row lg:h-[30rem] lg:gap-[7rem]`}
    >
      <aside className='w-full h-[20rem] rounded-xl bg-light-300 grid place-items-center sm:h-full sm:w-1/2'>
        <img
          src={img}
          alt={`${name} Image`}
          className='w-1/2 drop-shadow-2xl lg:w-1/2'
        />
      </aside>
      <section className='w-full h-full flex flex-col justify-center text-start items-start sm:w-1/2'>
        {isNewProduct && (
          <p className='text-orange-200 text-xs tracking-[10px] mb-5 lg:text-xs'>
            NEW PRODUCT
          </p>
        )}
        <h1 className='text-2xl font-bold tracking-[2px] mb-4 sm:leading-10 sm:mb-10 sm:text-4xl lg:leading-9 lg:mb-6 lg:text-3xl'>
          {name} <br />
          {category.toUpperCase()}
        </h1>
        <p className='text-xs text-[#00000077] font-semibold leading-5 pr-6 tracking-[1px]o sm:pr-0 sm:leading-8 sm:text-[19px] lg:pr-8 lg:leading-6 lg:text-sm'>
          {desc}
        </p>

        <p className='font-bold my-7 sm:mb-10 sm:mt-7 sm:text-2xl lg:text-base'>
          $ {curr(price)}
        </p>
        <section className='flex gap-3'>
          <div className='flex gap-4 bg-light-300 px-4 py-3 font-bold justify-between w-40 text-sm sm:w-36 sm:text-[1.5rem] sm:px-5 sm:py-4 lg:text-base lg:w-24 lg:px-3 lg:py-2'>
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
              notify();
            }}
            className='btn px-2 w-full bg-orange-200 hover:bg-orange-100 text-light-100 font-bold text-xs sm:px-6 sm:text-[1.15rem] lg:w-fit lg:text-xs'
          >
            ADD TO CART
          </button>
          <ToastContainer />
        </section>
      </section>
    </div>
  );
};
export default ProductDetails;
