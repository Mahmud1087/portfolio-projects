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
  } = useProductsContex();
  return (
    <div
      onClick={hideCart}
      className='fixed h-screen w-screen top-0 left-0 bg-transparent'
    >
      <section className='fixed w-full hero_height top-20 left-0 bg-[#00000060]'>
        <article className='relative z-40 top-6 container'>
          <div className='absolute right-0 h-[30rem] w-[24rem] bg-light-100 rounded-md py-7 px-9 flex flex-col'>
            <header className='flex justify-between items-center font-bold mb-6'>
              <h1 className='text-sm tracking-[1px]'>
                CART <span>({cartList.length})</span>
              </h1>
              <button
                onClick={clearCartItems}
                className='text-[#00000077] text-[13px] btn'
              >
                Remove all
              </button>
            </header>

            <aside className='custom-scroll h-full overflow-y-scroll overflow-x-hidden mb-7 flex flex-col gap-5'>
              {cartList.length === 0 && (
                <h1 className='text-dark-300 font-bold'>No Item Added</h1>
              )}
              {cartList.map((prod) => {
                return (
                  <div
                    key={prod.id}
                    className='flex justify-between items-center'
                  >
                    <CartItems {...prod} />
                    <div className='flex gap-5 items-center bg-light-300 px-3 py-1 font-bold justify-between'>
                      <button
                        className='text-[#00000062] btn'
                        onClick={() => {
                          decreaseCount(prod);
                          totalAmount();
                        }}
                      >
                        -
                      </button>
                      <h1 className='text-xs'>{prod.amount}</h1>
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

            <section className=''>
              <div className='flex justify-between items-center mb-5'>
                <h1 className='text-[13px] text-[#00000077] font-bold'>
                  TOTAL
                </h1>
                <h1 className='font-bold text-sm'>$ {curr(cartTotal)}</h1>
              </div>
              <Link
                to='/checkout'
                className='btn block text-center w-full p-3 bg-orange-200 hover:bg-orange-100 text-light-100 font-bold tracking-[1px] text-xs transition-all delay-75'
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
