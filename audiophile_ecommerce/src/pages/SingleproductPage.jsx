import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductComponent from '../components/ProductComponent';
import { products } from '../data';
import { curr } from '../helper';
import { useProductsContex } from '../context/products_context';

export default function SingleproductPage() {
  const { count, increaseCount, decreaseCount } = useProductsContex();
  const { productId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // console.log(params);
  return (
    <div className='container pt-[6rem]'>
      <button
        onClick={goBack}
        className='text-[15px] text-[#00000062] mb-16 font-bold tracking-[1px]'
      >
        Go Back
      </button>
      <div className='mb-[11rem]'>
        <ProductComponent {...products[0]}>
          {/* <p>$ {products[0].price}</p> */}
          <p className='font-bold mb-10 mt-7'>{curr(products[0].price)}</p>
          <section className='flex gap-3'>
            <div className='flex gap-4 bg-light-300 px-3 py-2 font-bold'>
              <button
                className='text-[#00000062]'
                onClick={() => decreaseCount('dec')}
              >
                -
              </button>
              <h1>{count}</h1>
              <button
                className='text-[#00000062]'
                onClick={() => increaseCount('inc')}
              >
                +
              </button>
            </div>
            <button className='px-6 w-fit bg-orange-200 hover:bg-orange-100 text-light-100 font-bold text-xs'>
              ADD TO CART
            </button>
          </section>
        </ProductComponent>
      </div>
      <section className='flex justify-between'>
        <div className='flex flex-col gap-10 w-[55%]'>
          <h1 className='text-3xl font-bold'>FEATURES</h1>
          <article className='flex flex-col gap-8 text-[14.5px] text-[#00000077]'>
            <p>{products[0].features.point1}</p>
            <p>{products[0].features.point2}</p>
          </article>
        </div>
        <div className='flex flex-col gap-10 w-[45%] pl-[8rem]'>
          <h1 className='text-3xl font-bold text-start'>IN THE BOX</h1>
          <aside className='flex flex-col gap-2'>
            {products[0].box.map((prod, i) => {
              return (
                <div key={i} className='flex gap-6 text-[14.5px]'>
                  <h1 className='text-orange-200 font-bold'>{prod.size}</h1>
                  <p className='text-[#00000077]'>{prod.item}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </div>
  );
}
