import { FaCheck } from 'react-icons/fa';
import CartItems from './cart/CartItems';
import { useProductsContex } from '../context/products_context';
import { Link } from 'react-router-dom';
import { curr } from '../helper';

const ThankYouModal = () => {
  const { cartList, hideModal, cartTotal, vatFee, shippingFee } =
    useProductsContex();

  return (
    <div className='fixed h-screen w-screen top-0 left-0 bg-transparent'>
      <section className='fixed w-full hero_height top-20 left-0 bg-[#00000060]'>
        <article className='relative z-50 h-full w-full flex justify-center top-32 lg:grid lg:place-items-center'>
          <div className='absolute bg-light-100 rounded-md py-9 px-12 flex flex-col justify-between h-[42rem] w-[42rem] lg:py-7 lg:px-9 lg:h-[27rem] lg:w-[27rem]'>
            {cartList.length === 0 ? (
              <h1 className='w-full h-full grid place-items-center text-2xl font-bold '>
                Oops! you have no order
              </h1>
            ) : (
              <div className='flex flex-col'>
                <aside className='w-fit rounded-full bg-orange-200 p-4 mb-10 lg:mb-6'>
                  <FaCheck className='text-light-100 text-4xl lg:text-lg' />
                </aside>
                <h1 className='font-bold tracking-[1px] text-5xl leading-[3.3rem] mb-6 lg:mb-4 lg:leading-8 lg:text-[1.7rem]'>
                  THANK YOU <br />
                  FOR YOUR ORDER
                </h1>
                <p className='text-xl text-[#00000077] font-semibold mb-9 lg:text-[13px] lg:mb-4'>
                  You will receive an email confirmation shortly.
                </p>
                <section className='flex w-full h-48 lg:h-[6.7rem]'>
                  <div className='w-3/5 rounded-l-md bg-light-300 h-full flex flex-col justify-center lg:justify-start'>
                    <div className='flex justify-between pr-7 pl-3'>
                      <CartItems {...cartList[0]} />
                      <p className='text-lg text-[#00000077] font-bold py-6 lg:text-xs lg:py-3'>
                        x{cartList[0].amount}
                      </p>
                    </div>
                    <hr className='text-[#00000025] mb-3 w-[80%] mx-auto' />
                    <p className='text-xl text-center text-[#00000077] font-bold lg:text-xs'>
                      and {cartList.length - 1} other item(s)
                    </p>
                  </div>
                  <div className='w-2/5 rounded-r-md bg-dark-300 h-full flex flex-col justify-center px-8 lg:px-4'>
                    <p className='text-[#ffffff86] text-xl lg:text-xs'>
                      GRAND TOTAL
                    </p>
                    <p className='text-light-100 text-xl font-bold mt-3 lg:text-xs'>
                      $ {curr(cartTotal + vatFee + shippingFee)}
                    </p>
                  </div>
                </section>
              </div>
            )}
            <Link
              to='/'
              onClick={hideModal}
              className='btn bg-orange-200 py-5 text-center text-light-100 text-xl font-bold tracking-[1px] hover:bg-orange-100 lg:py-3 lg:text-[13px]'
            >
              BACK TO HOME
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};
export default ThankYouModal;
