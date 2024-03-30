import { useNavigate, useParams } from 'react-router-dom';
import { curr } from '../helper';
import { useProductsContex } from '../context/products_context';
import {
  ProductComponent,
  SeeProductButton,
  ShopProducts,
} from '../components/main';

export default function SingleproductPage() {
  const { totalAmount, increaseCount, decreaseCount, addToCart, products } =
    useProductsContex();
  const { productId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const data = products.find((prod) => prod.shortName === productId);
  // console.log(data);

  return (
    <div className='container pt-[6rem]'>
      <button
        onClick={goBack}
        className='text-[15px] text-[#00000062] mb-16 font-bold tracking-[1px]'
      >
        Go Back
      </button>

      <div className='mb-[11rem]'>
        <ProductComponent {...data} product={data.category.toUpperCase()}>
          <p className='font-bold mb-10 mt-7'>$ {curr(data.price)}</p>
          <section className='flex gap-3'>
            <div className='flex gap-4 bg-light-300 px-3 py-2 font-bold justify-between w-24'>
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
              }}
              className='btn px-6 w-fit bg-orange-200 hover:bg-orange-100 text-light-100 font-bold text-xs'
            >
              ADD TO CART
            </button>
          </section>
        </ProductComponent>
      </div>

      <section className='flex justify-between'>
        <div className='flex flex-col gap-10 w-[55%]'>
          <h1 className='text-3xl font-bold'>FEATURES</h1>
          <article className='flex flex-col gap-8 text-[14.5px] text-[#00000077] font-semibold'>
            <p>{data.features.point1}</p>
            <p>{data.features.point2}</p>
          </article>
        </div>
        <div className='flex flex-col gap-10 w-[45%] pl-[8rem]'>
          <h1 className='text-3xl font-bold text-start'>IN THE BOX</h1>
          <aside className='flex flex-col gap-2'>
            {data.box.map((prod, i) => {
              return (
                <div key={i} className='flex gap-6 text-[14.5px]'>
                  <h1 className='text-orange-200 font-bold'>{prod.size}</h1>
                  <p className='text-[#00000077] font-semibold'>{prod.item}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>

      <article className='w-full h-[37rem] flex gap-8 mt-[8.5rem]'>
        <div className='w-[45%] h-full flex flex-col justify-between'>
          <img src={data.images.image1} alt='images' className='' />
          <img src={data.images.image2} alt='images' className='' />
        </div>
        <div className='w-[55%] h-full rounded-md'>
          <img
            src={data.images.image3}
            alt='images'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </article>

      <section className='mt-[11rem] mb-[4.5rem]'>
        <h1 className='mb-12 text-center font-bold text-3xl tracking-[1px]'>
          YOU MAY ALSO LIKE
        </h1>
        <div className='grid grid-cols-3 gap-9'>
          {data.mayAlsoLike.map((prod, i) => {
            return (
              <div
                key={i}
                className='flex flex-col justify-center items-center gap-8'
              >
                <aside className='flex justify-center items-center h-[18rem] rounded-md bg-light-300 w-full'>
                  <img src={prod.img} alt='' className='w-[8rem]' />
                </aside>
                <h1 className='font-bold text-xl mt-3 tracking-[1px]'>
                  {prod.name}
                </h1>
                <SeeProductButton
                  to={prod.shortName}
                  classes='bg-orange-200 text-light-100 font-bold hover:bg-orange-100'
                />
              </div>
            );
          })}
        </div>
      </section>

      <ShopProducts />
    </div>
  );
}
