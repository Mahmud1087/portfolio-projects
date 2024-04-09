import { Link } from 'react-router-dom';
import { useProductsContex } from '../../context/products_context';
import { curr } from '../../helper';
import CartItems from './CartItems';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const {
    // hideCart,
    toggleCart,
    cartTotal,
    cartList,
    clearCartItems,
    decreaseCount,
    increaseCount,
    totalAmount,
    vatAndShippingFee,
    isCartOpen,
  } = useProductsContex();

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        stiffness: 50,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <AnimatePresence mode='wait' initial={true}>
      {isCartOpen && (
        <motion.div
          key='cartBackdrop'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed h-screen w-screen top-0 left-0 bg-transparent z-50'
        >
          <section className='fixed w-full hero_height top-16 sm:top-20 left-0 bg-[#00000060]'>
            <motion.article
              key='cartModal'
              variants={dropIn}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='relative z-40 top-4 container sm:top-12 lg:top-6'
            >
              <div
                className={`absolute right-0 ${
                  cartList.length === 0
                    ? 'h-fit'
                    : 'max-h-[26rem] sm:max-h-[42rem] lg:max-h-[30rem]'
                } w-full bg-light-100 rounded-lg py-7 px-6 flex flex-col sm:px-9 sm:w-[33rem] lg:w-[24rem]`}
              >
                <header className='flex justify-between items-center font-bold mb-9 lg:mb-6'>
                  <h1 className='text-sm tracking-[1px] sm:text-2xl lg:text-sm'>
                    CART <span>({cartList.length})</span>
                  </h1>
                  <button
                    onClick={clearCartItems}
                    className='text-[#00000077] btn text-[13px] underline sm:text-xl lg:text-[13px]'
                  >
                    Remove all
                  </button>
                </header>

                <aside
                  className={`custom-scroll h-full overflow-y-scroll overflow-x-hidden mb-7 flex flex-col gap-5`}
                >
                  {cartList.length === 0 && (
                    <h1 className='text-dark-300 font-bold text-lg text-center sm:text-3xl lg:text-base'>
                      No Item Added
                    </h1>
                  )}
                  {cartList.map((prod) => {
                    return (
                      <div
                        key={prod.id}
                        className='flex justify-between items-center'
                      >
                        <CartItems {...prod} />
                        <div className='flex gap-4 items-center bg-light-300 font-bold justify-between text-xs px-3 py-[5px] sm:gap-7 sm:text-2xl sm:px-5 sm:py-2 lg:gap-5 lg:px-3 lg:py-1 lg:text-base'>
                          <button
                            className='text-[#00000062] btn'
                            onClick={() => {
                              decreaseCount(prod);
                              totalAmount();
                            }}
                          >
                            -
                          </button>
                          <h1 className='text-[11px] sm:text-xl lg:text-xs'>
                            {prod.amount}
                          </h1>
                          <button
                            className='text-[#00000062] btn'
                            onClick={() => {
                              increaseCount(prod);
                              totalAmount();
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </aside>

                <section
                  className={`${cartList.length === 0 ? 'hidden' : 'block'}`}
                >
                  <div className='flex justify-between items-center mb-6 sm:mb-10 lg:mb-5'>
                    <h1 className='text-[13px] text-[#00000077] font-bold sm:text-2xl lg:text-[13px]'>
                      TOTAL
                    </h1>
                    <h1 className='font-bold text-[13px] sm:text-2xl lg:text-sm'>
                      $ {curr(cartTotal)}
                    </h1>
                  </div>
                  <Link
                    to='/checkout'
                    onClick={() => {
                      vatAndShippingFee();
                      toggleCart();
                    }}
                    className='btn block text-center w-full p-3 bg-orange-200 hover:bg-orange-100 text-light-100 font-bold tracking-[1px] text-xs transition-all delay-75 sm:text-2xl sm:p-5 lg:p-3 lg:text-xs'
                  >
                    CHECKOUT
                  </Link>
                </section>
              </div>
            </motion.article>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Cart;
