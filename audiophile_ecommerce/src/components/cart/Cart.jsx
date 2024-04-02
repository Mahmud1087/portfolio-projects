import { Link } from 'react-router-dom';
import { useProductsContex } from '../../context/products_context';
import { curr } from '../../helper';
import CartItems from './CartItems';

const Cart = () => {
  const {
    hideCart,
    cartTotal,
    cartList,
    clearCartItems,
    decreaseCount,
    increaseCount,
    totalAmount,
    vatAndShippingFee,
  } = useProductsContex();
  return (
    <div
      onClick={hideCart}
      className='fixed h-screen w-screen top-0 left-0 bg-transparent z-50'
    >
      <section className='fixed w-full hero_height top-20 left-0 bg-[#00000060]'>
        <article className='relative z-40 top-12 container lg:top-6'>
          <div
            className={`absolute right-0 ${
              cartList.length === 0 ? 'h-auto' : 'h-[42rem]'
            } w-[33rem] bg-light-100 rounded-md py-7 px-9 flex flex-col lg:h-[30rem] lg:w-[24rem]`}
          >
            <header className='flex justify-between items-center font-bold mb-9 lg:mb-6'>
              <h1 className='text-2xl tracking-[1px] lg:text-sm'>
                CART <span>({cartList.length})</span>
              </h1>
              <button
                onClick={clearCartItems}
                className='text-[#00000077] btn text-xl lg:text-[13px]'
              >
                Remove all
              </button>
            </header>

            <aside
              className={`custom-scroll h-full overflow-y-scroll overflow-x-hidden mb-7 flex flex-col gap-5`}
            >
              {cartList.length === 0 && (
                <h1 className='text-dark-300 font-bold text-3xl my-12 lg:text-base'>
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
                    <div className='flex gap-7 items-center bg-light-300 font-bold justify-between text-2xl px-5 py-2 lg:gap-5 lg:px-3 lg:py-1 lg:text-base'>
                      <button
                        className='text-[#00000062] btn'
                        onClick={() => {
                          decreaseCount(prod);
                          totalAmount();
                        }}
                      >
                        -
                      </button>
                      <h1 className='text-xl lg:text-xs'>{prod.amount}</h1>
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
              <div className='flex justify-between items-center mb-10 lg:mb-5'>
                <h1 className='text-2xl text-[#00000077] font-bold lg:text-[13px]'>
                  TOTAL
                </h1>
                <h1 className='font-bold text-2xl lg:text-sm'>
                  $ {curr(cartTotal)}
                </h1>
              </div>
              <Link
                to='/checkout'
                onClick={vatAndShippingFee}
                className='btn block text-center w-full p-5 bg-orange-200 hover:bg-orange-100 text-light-100 font-bold tracking-[1px] text-2xl transition-all delay-75 lg:p-3 lg:text-xs'
              >
                CHECKOUT
              </Link>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Cart;
