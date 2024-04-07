import { FaCheck } from 'react-icons/fa';
import CartItems from './cart/CartItems';
import { useProductsContex } from '../context/products_context';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { curr } from '../helper';

const ThankYouModal = () => {
  const { cartList, hideModal, cartTotal, vatFee, shippingFee, isModalOpen } =
    useProductsContex();

  const dropIn = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [0.2, 0.4, 0.6, 1],
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        stiffness: 50,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key='backdrop'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed h-screen w-screen top-0 left-0 bg-transparent'
        >
          <section className='fixed overflow-scroll w-full hero_height left-0 bg-[#00000060] sm:top-20'>
            <motion.article
              key='modal'
              variants={dropIn}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='relative z-50 h-full w-full flex justify-center container top-28 sm:top-32 lg:top-0 lg:overflow-hidden lg:grid lg:place-items-center'
            >
              <div className='absolute bg-light-100 rounded-md py-8 px-6 flex flex-col justify-between w-full h-fit sm:py-9 sm:px-12 sm:h-[42rem] sm:w-[42rem] lg:py-7 lg:px-9 lg:h-[29rem] lg:w-[27rem]'>
                {cartList.length === 0 ? (
                  <h1 className='w-full h-full grid place-items-center text-xl font-bold sm:text-2xl'>
                    Oops! you have no order
                  </h1>
                ) : (
                  <div className='flex flex-col'>
                    <aside className='w-fit rounded-full bg-orange-200 p-4 mb-7 sm:mb-10 lg:mb-6'>
                      <FaCheck className='text-light-100 text-2xl sm:text-4xl lg:text-lg' />
                    </aside>
                    <h1 className='font-bold tracking-[1px] text-3xl leading-9 mb-4 sm:leading-[3.3rem] sm:text-5xl sm:mb-6 lg:mb-4 lg:leading-8 lg:text-[1.7rem]'>
                      THANK YOU <br />
                      FOR YOUR ORDER
                    </h1>
                    <p className='text-[#00000077] font-semibold mb-9 sm:text-xl lg:text-[13px] lg:mb-4'>
                      You will receive an email confirmation shortly.
                    </p>
                    <section className='flex w-full flex-col sm:h-48 sm:flex-row sm:py-0 lg:h-fit'>
                      <div className='w-full rounded-t-lg bg-light-300 h-full flex flex-col justify-center py-6 sm:rounded-l-md sm:rounded-tr-none sm:py-0 sm:w-3/5 lg:justify-start lg:h-fit lg:py-3'>
                        <div className='flex justify-between pr-10 pl-5 pb-3 sm:pr-7 sm:pl-3'>
                          <CartItems {...cartList[0]} />
                          <p className='text-[#00000077] font-bold py-1 sm:text-lg sm:py-6 lg:text-xs lg:py-3'>
                            x{cartList[0].amount}
                          </p>
                        </div>
                        <hr className='text-[#00000025] mb-3 w-[80%] mx-auto sm:py-0' />
                        <p className='text-center text-[#00000077] font-bold sm:text-xl lg:text-xs'>
                          and {cartList.length - 1} other item(s)
                        </p>
                      </div>
                      <div className='w-full rounded-b-lg bg-dark-300 h-[7rem] flex flex-col justify-center px-8 sm:h-full sm:py-0 sm:rounded-r-md sm:rounded-bl-none sm:w-2/5 lg:px-4'>
                        <p className='text-[#ffffff86] text-lg sm:text-xl lg:text-xs'>
                          GRAND TOTAL
                        </p>
                        <p className='text-light-100 text-lg font-bold mt-3 sm:text-xl lg:text-xs'>
                          $ {curr(cartTotal + vatFee + shippingFee)}
                        </p>
                      </div>
                    </section>
                  </div>
                )}
                <Link
                  to='/'
                  onClick={hideModal}
                  className='btn bg-orange-200 py-4 text-center text-light-100 text-lg font-bold tracking-[1px] hover:bg-orange-100 mt-7 sm:text-xl sm:py-5 sm:mt-0 lg:py-3 lg:text-[13px]'
                >
                  BACK TO HOME
                </Link>
              </div>
            </motion.article>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ThankYouModal;
