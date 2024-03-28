import { Link } from 'react-router-dom';
import { useProductsContex } from '../../context/products_context';
import { products } from '../../data';
import { curr } from '../../helper';

const CartItems = () => {
  const { hideCart } = useProductsContex();
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
                CART <span>(3)</span>
              </h1>
              <button className='text-[#00000077] text-[13px] btn'>
                Remove all
              </button>
            </header>

            <aside className='custom-stroll h-full overflow-y-scroll overflow-x-hidden mb-7 flex flex-col gap-5'>
              {products.map((prod) => {
                const { id, shortName, price, amount, img } = prod;
                return (
                  <div key={id} className='flex justify-between items-center'>
                    <section className='flex gap-3 items-center'>
                      <aside className='w-16 h-16 p-4 bg-light-300 rounded-md flex justify-center items-center'>
                        <img src={img} alt='product image' className='w-full' />
                      </aside>
                      <div className='flex flex-col gap-1'>
                        <h1 className='text-xs font-bold'>{shortName}</h1>
                        <p className='text-[10.5px] font-bold text-[#00000077]'>
                          {curr(price)}
                        </p>
                      </div>
                    </section>
                    <div className='flex gap-5 items-center bg-light-300 px-3 py-1 font-bold justify-between'>
                      <button
                        className='text-[#00000062] btn'
                        //   onClick={decreaseCount}
                      >
                        -
                      </button>
                      <h1 className='text-xs'>{amount}</h1>
                      <button
                        className='text-[#00000062] btn'
                        //   onClick={increaseCount}
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
                <h1 className='font-bold text-sm'>$ 5,396</h1>
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
export default CartItems;
